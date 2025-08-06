import Ticket from "../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("POST /api/tickets");

  try {
    const body = await request.json();
    console.log("Request body:", body);

    const ticket = await Ticket.create(body);

    return NextResponse.json(
      { message: "Ticket created", ticket },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
