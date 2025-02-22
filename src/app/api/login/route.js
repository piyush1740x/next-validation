import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json().catch(() => null);
    if (!body) {
      return Response.json(
        { message: "Invalid request body", success: false },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || !password) {
      return Response.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return Response.json(
        { message: "User does not exist", success: false },
        { status: 400 }
      );
    }

    const isMatchPassword = await bcrypt.compare(password, existingUser.password);
    if (!isMatchPassword) {
      return Response.json(
        { message: "Incorrect email or password", success: false },
        { status: 400 }
      );
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return Response.json(
      {
        message: "User logged in successfully",
        success: true,
        user: {
          _id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
        },
        token,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login Error:", error.message);
    return Response.json(
      { message: "Internal Server Error", success: false },
      { status: 500 }
    );
  }
}
