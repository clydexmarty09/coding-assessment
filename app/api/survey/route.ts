import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  // Requets is an HTTP response object
  try {
    const body = await request.json();
    const answers = body.selectedAnswers;

    await db.query(
      `INSERT INTO results (ANSWERS)
        VALUES ($1)`,
      [answers],
    );

    console.log(answers);

    return NextResponse.json({
      message: "Survey received",
      answers,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Cannot update survey results" },
      { status: 500 },
    );
  }
}
