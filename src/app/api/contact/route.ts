import { sendMail } from "@/lib/mail";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
      const body = await req.json();
      const { name, email, telephone, messageContent } = body;

      await sendMail(
        process.env.EMAIL_TO as string,
        "New contact form submission",
        `
        Name: ${name}\n
        Email: ${email}\n
        Telephone: ${telephone}\n
        Message: ${messageContent}
        `.trim()
      );

      return NextResponse.json({ success: true }, { status: 201 });

    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Error sending message' },
        { status: 500 }
      );
    }
  }
