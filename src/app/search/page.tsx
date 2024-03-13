"use client";
import { Calendar, Loader } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getEvents } from "@/lib/mock-data";

export default function SearchPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getEvents();
                setEvents(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="p-8 flex-col align-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                <h1 className="text-xl md:col-span-3 flex items-center gap-2">
                    <Calendar /> Search events
                </h1>

                {loading && (
                    <div className="grid place-items-center md:col-span-3 p-10">
                        <Loader className="animate-spin" />
                    </div>
                )}

                {events.map((event) => (
                    <a
                        className="relative aspect-video rounded-lg overflow-hidden"
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
        </div>
    );
}
