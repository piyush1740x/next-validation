import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl; 

  console.log("🔍 Middleware Running...");
  console.log("🌐 Pathname:", pathname);
  console.log("🔑 Token:", token?.value);

  if (token?.value && pathname === "/login") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token?.value && pathname === "/home") {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/home", "/login"], 
};
