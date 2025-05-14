import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAuth = !!token;
  const { pathname } = req.nextUrl;

  // Redirect authenticated user away from auth pages
  if (pathname.startsWith("/auth") && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect unauthenticated user from dashboard to home + login modal
  if (pathname.startsWith("/dashboard") && !isAuth) {
    const url = new URL("/", req.url);
    url.searchParams.set("showLogin", "true"); // <-- flag to trigger login modal
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Run middleware on these paths
export const config = {
  matcher: ["/dashboard/:path*", "/auth"],
};
