import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  const hiddenRoute = [
    "/author",
    "/videos",
    "/terms",
    "/privacy",
    "/home-2",
    "/home-3",
    "/splash",
  ];

  // Example: Redirect unauthenticated users from /admin to /login
  if (hiddenRoute.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
