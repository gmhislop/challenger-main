import * as i from "@/types"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default async function PopularEvents() {

  const response = await fetch("http://localhost:3000/api/events/popular?amount=6");

  const data = await response.json();

  const events = data.events as i.PopularEventsProps[]

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
      <h1 className="text-xl md:col-span-3 flex items-center gap-2">
        <Calendar /> Popular events
      </h1>
      {events.map((event) => (
        <a
          className="relative aspect-video rounded-lg overflow-hidden hover:border border-primary hover:scale-105 transform transition-all duration-300"
          href={`/event/${event.id}`}
          key={event.id}
        >
          <div className="absolute inset-x-0 bottom-0 p-2">
            <h1 className="text-sm text-primary-foreground">{event.name}</h1>
            <p className="text-xs text-secondary-foreground">
              {event.location} - {new Date(event.date).toLocaleDateString()}
            </p>
          </div>

          <Image
            className="object-cover h-full w-full"
            src={event.imageUrl}
            width={320}
            height={200}
            alt={event.name}
          />
        </a>
      ))}
    </div>
  )
}