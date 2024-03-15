import { getAllEvents } from "@/queries/events/list";
import { Calendar } from "lucide-react";
import { EventList } from "../components/modules";

export default async function SearchPage() {
  const allEvents = await getAllEvents();
  return (
    <div className="p-8 py-16 flex-col align-center">
      <h1 className="text-xl md:col-span-3 flex items-center gap-2">
        <Calendar /> Search events
      </h1>

      <EventList {...{ allEvents }} />
    </div>
  );
}
