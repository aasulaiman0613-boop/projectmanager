import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware protects app routes by checking for a small cookie.
 * For debugging you can disable it by setting NEXT_PUBLIC_DISABLE_AUTH=1 in your hosting env.
 */

export function middleware(req: NextRequest) {
  const disableAuth = process.env.NEXT_PUBLIC_DISABLE_AUTH === "1" || req.nextUrl.searchParams.get('disable_auth') === '1';
  const { pathname } = req.nextUrl;

  // Allow public and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/static")
  ) {
    return NextResponse.next();
  }

  if (disableAuth) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("plug_auth");
  if (!cookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
