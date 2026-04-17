import { Feature } from "@/lib/services/feature"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const body = await request.json()
    const result = await Feature.add(body)
    return NextResponse.json(result, { status: result.status })
}

export async function GET() {
    const data = await Feature.getAll()
    return NextResponse.json(data, { status: data.status })
} 