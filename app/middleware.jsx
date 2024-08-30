// middleware.js
export function middleware(req) {
    const clientIp = req.headers.get("cf-connecting-ip") || req.ip;
    req.nextUrl.searchParams.set("clientIp", clientIp);
    return NextResponse.next();
  }
  
  export const config = {
    matcher: '/:path*', // Apply this middleware to all routes
  };
  