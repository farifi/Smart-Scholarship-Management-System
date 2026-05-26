import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try{
        const body = await req.json();

        const { email, password } = body;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 400 }
            );
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );
        }

        const secret = process.env.JWT_SECRET;

        if (!secret) {
        return NextResponse.json(
            { success: false, message: "JWT secret not configured" },
            { status: 500 }
        );
        }

        const token = jwt.sign(
        {
            id: user.id,
            role: user.role,
        }, secret, { expiresIn: "7d" } );

        const response = NextResponse.json({ success: true, role: user.role });

        response.cookies.set("token", token, { httpOnly: true, secure: false, sameSite: "lax", path: "/" });

        return response;
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Server Error", error: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}