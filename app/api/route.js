import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await req.json();
    const ticket = await body.formData;
    await Ticket.create(ticket);
    return NextResponse.json({ message: "Ticket created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
