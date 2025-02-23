import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({ success: true, message: "Logout successful" });

    // ✅ Cookie delete karne ke liye expire set karo
    response.cookies.set("token", "", { expires: new Date(0), path: "/" });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, message: "Logout failed" }, { status: 500 });
  }
}
