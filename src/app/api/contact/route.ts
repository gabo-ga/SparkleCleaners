import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
      const body = await req.json();
  
      const { name, email, telephone, messageContent } = body;
  
      let customer = await prisma.customer.findUnique({
        where: { email },
      });
  
      // If not, create the customer
      if (!customer) {
        customer = await prisma.customer.create({
          data: {
            name,
            email,
            telephone,
          },
        });
      }
  
      const message = await prisma.message.create({
        data: {
          content: messageContent,
          customerId: customer.id,
        },
      });
  
      return NextResponse.json({ customer, message }, { status: 201 });
  
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: 'Error saving customer or message' },
        { status: 500 }
      );
    }
  }