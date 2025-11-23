import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Middleware i18n HARUS pertama
const intlMiddleware = createMiddleware(routing);

// Auth middleware HARUS memanggil intl DI DALAM dengan urutan yang benar
const authMiddleware = withAuth((req) => intlMiddleware(req), {
  callbacks: {
    authorized: ({ token }) => token != null,
  },
  pages: {
    signIn: "/",
  },
});

const isDashboardPath = (pathname: string) => {
  const dashboardRegex = new RegExp(`^(/(${routing.locales.join("|")}))?/dashboard(/.*)?$`, "i");
  return dashboardRegex.test(pathname);
};

export default function middleware(req: NextRequest) {
  if (isDashboardPath(req.nextUrl.pathname)) {
    return (authMiddleware as any)(req);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
