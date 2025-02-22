import connectDB from "@/lib/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, password } = await req.json(); 

    if (!name || !email || !password) {
      return Response.json({ message: "All fields are required", success: false },{ status: 400 });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return Response.json({ message: "User already exists", success: false }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return Response.json(
      {
        message: "User registered successfully",
        success: true,
        user: newUser,
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error.message);
    return Response.json({ message: "Internal Server Error", success: false }, { status: 500 });
  }
}
