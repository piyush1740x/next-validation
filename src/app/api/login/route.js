import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { message: "Invalid request body", success: false },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { message: "User does not exist", success: false },
        { status: 400 }
      );
    }

    const isMatchPassword = await bcrypt.compare(password, existingUser.password);
    if (!isMatchPassword) {
      return NextResponse.json(
        { message: "Incorrect email or password", success: false },
        { status: 400 }
      );
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json(
      {
        message: "User logged in successfully",
        success: true,
        user: {
          _id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
      },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`
    );
    return response;
  } catch (error) {
    console.error("Login Error:", error.message);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
