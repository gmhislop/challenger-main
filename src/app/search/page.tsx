import { Calendar } from "lucide-react";
import * as i from "@/types";
import { EventList } from "../components/modules";
import { getEvents } from "@/lib/mock-data";

export default async function SearchPage() {
  const allEvents = await getEvents() as i.Event[];

  return (
    <div className="p-8 py-16 flex-col align-center">
      <h1 className="text-xl md:col-span-3 flex items-center gap-2">
        <Calendar /> Search events
      </h1>

      <EventList {...{ allEvents }} />
    </div>
  );
}
