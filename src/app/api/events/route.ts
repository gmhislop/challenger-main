import { database } from "@/lib/mock-db";

export async function GET() {
    const allEvents = await database.getEvents();
    return new Response(JSON.stringify({ allEvents }), {
        headers: {
            "Content-Type": "application/json"
        }
    });
}
