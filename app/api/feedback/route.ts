import { Feedback } from "@/lib/services/feedback"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = await request.json()
    const { name, email, feedbackType, message } = body
    const result = await Feedback.add({ name, email, feedbackType, message })
    return NextResponse.json(result, { status: result.status })
}

export async function GET() {
    const data = await Feedback.getAll()
    return NextResponse.json(data, { status: data.status })
}