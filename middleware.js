import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { SUPPORTED_LOCALES } from "./constants/constants";

const locales = SUPPORTED_LOCALES;
function getLocale(request) {
  let headers = { "accept-language": request.headers.get("accept-language") };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
    // 如果访问根路径
    if (request.nextUrl.pathname === '/') {
      // 重定向到指定路径
      return NextResponse.redirect(new URL('/home', request.url))
    }
  }
   
  export const config = {
    matcher: '/',  // 只匹配根路径
  }

// export function middleware(request) {
//   // Check if there is any supported locale in the pathname
//   const { pathname } = request.nextUrl;
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = getLocale(request);
//   request.nextUrl.pathname = `/${locale}${pathname}`;
//   // e.g. incoming request is /products
//   // The new URL is now /en-US/products
//   return NextResponse.redirect(request.nextUrl);
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next|videos|images).*)"
//   ]
// };
