import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone } = body

    const line = `${name} - ${email} - ${phone}\n`

    const filePath = path.join(process.cwd(), "clientes.txt")

    fs.appendFileSync(filePath, line)

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    )
  }
}