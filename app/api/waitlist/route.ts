import { Waitlist } from "@/lib/services/waitlist"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const { email } = await request.json()
    const { message, status } = await Waitlist.add(email)
    return NextResponse.json({ message, status }, { status })
}