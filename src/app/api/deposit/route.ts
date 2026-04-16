// src/app/api/deposit/route.ts
import { findCurrentUser } from "@/data/user";
import { INTERNAL_SERVER_ERROR } from "@/error";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";


export const POST = async (req: NextRequest) => {
  try {
    const { amount, note } = await req.json();
    console.log("Manual deposit request received:", { amount, note });

    if (!amount) {
      return NextResponse.json({
        success: false,
        message: "Amount is required"
      }, { status: 400 });
    }

    const user: any = await findCurrentUser();
    if (!user) {
      console.log("Authentication failed - no user found");
      return NextResponse.json({
        success: false,
        message: "Authentication failed"
      }, { status: 401 });
    }

    if (!user.wallet?.id) {
      console.log("User wallet not found");
      return NextResponse.json({
        success: false,
        message: "User wallet not found. Please contact support."
      }, { status: 400 });
    }

    console.log("User found:", { id: user.id, walletId: user.wallet.id });

    // Generate unique identifiers
    const invoice_no = `MANUAL-DEPOSIT-${Date.now()}`;
    const trackingNumber = `TRX-${Date.now()}`;
    const expireDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days later

    // Save deposit record
    await db.deposit.create({
      data: {
        amount: new Prisma.Decimal(amount),
        status: "PENDING",
        bonusFor: "manual",
        senderNumber: note || "manual",
        walletNumber: user.wallet.id,
        trackingNumber,
        expire: expireDate,

        // Relations
        user: { connect: { id: user.id } },
        wallet: { connect: { id: user.wallet.id } },
      },
    });

    console.log("Manual deposit record saved successfully");

    return NextResponse.json({
      success: true,
      payload: {
        invoice_no,
        trackingNumber,
        message: "Deposit request submitted successfully. Please wait for admin approval."
      }
    }, { status: 200 });

  } catch (error: any) {
    console.error("Manual deposit error:", error);
    return NextResponse.json({ success: false, message: INTERNAL_SERVER_ERROR }, { status: 500 });
  }
};
