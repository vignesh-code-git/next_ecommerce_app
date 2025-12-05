import { NextResponse } from "next/server";             // Import Next.js response helper

export function proxy(request) {                        // Proxy = Middleware function runs before route loads
  const token = request.cookies.get("token")?.value;    // Read "token" cookie (?.value gives actual string)

  const protectedPaths = ["/cart"];                     // Routes that require login

  const isProtected = protectedPaths.some((path) =>     // Check if current URL starts with any protected path
    request.nextUrl.pathname.startsWith(path)           
  );                                                    

  if (isProtected && !token) {                          // If route is protected AND token missing
    return NextResponse.redirect(                       // Redirect user to /login page
      new URL("/login", request.url)
    );
  }

  return NextResponse.next();                           // Allow request to continue normally
}

export const config = {
  matcher: ["/cart/:path*"],                            // Apply middleware only on /cart routes
};
