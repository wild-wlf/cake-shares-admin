import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicPages = ["/sign-in"];

const privatePages = [
  "/buyer",
  "/dashboard",
  "/portfolio",
  "/chat",
  "/wallet",
  "/profile",
  "/private-chat",
  "/permissions",
  "/roles",
  "/users",
];

export function middleware(request) {
  const cookieHeader = cookies(request.headers);
  const token = cookieHeader.get("_devcka");
  const allowedPages = cookieHeader.get("_allowedpagecka");
  const path = new URL(request.url).pathname;

  const isPublicPage = publicPages.includes(path);
  const isPrivatePage = privatePages.includes(path);

  // Handle ignored extensions (e.g., images)
  const ignoredExtensions = [".svg", ".ico", ".png", ".jpg", ".jpeg", ".gif"];
  const isIgnored = ignoredExtensions.some((ext) => path.endsWith(ext));
  if (isIgnored) {
    return NextResponse.next();
  }

  if (isPublicPage) {
    return NextResponse.next();
  }

  const url = new URL(request.url);
  const currentOrigin = url.origin;
  if (isPrivatePage) {
    if (token && allowedPages) {
      if (allowedPages.value.includes(path)) {
        return NextResponse.next();
      }
    }
    return NextResponse.redirect(`${currentOrigin}/sign-in`);
  }

  return NextResponse.next();
}
