import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default function middleware(req: NextRequest) {
    
    const token = req.cookies.get("token")?.value;

    const path = req.nextUrl.pathname;

    if (path.startsWith("/dashboard") || path.startsWith("/admin") || path.startsWith("/reviewer")) {
        if (!token) {
            return NextResponse.redirect(
                new URL("/login", req.url)
            );
        }

        try {
        
        const decoded: any = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        // ADMIN PROTECTION
        if ( path.startsWith("/admin") && decoded.role !== "ADMIN") {
            return NextResponse.redirect(
                new URL("/login", req.url)
            );
        }

        if ( path.startsWith("/reviewer") && decoded.role !== "REVIEWER") {
            return NextResponse.redirect(
                new URL("/login", req.url)
            );
        }

        } catch (error) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin/:path*",
        "/reviewer/:path*",
    ],
};
