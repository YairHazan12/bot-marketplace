import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "waitlist.json");

function readData() {
  try {
    const raw = readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { seed: 47, entries: [] };
  }
}

export async function GET() {
  try {
    const data = readData();
    const count = data.seed + data.entries.length;
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Waitlist count error:", error);
    return NextResponse.json({ count: 47 }, { status: 200 });
  }
}
