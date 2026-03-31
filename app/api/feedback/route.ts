import { Feedback } from "@/lib/services/feedback"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = await request.json()
    const { name, email, feedbackType, message } = body
    const result = await Feedback.add({ name, email, feedbackType, message })
    return NextResponse.json(result, { status: result.status })
}