import React from 'react';
import Link from 'next/link';
import { database } from "@/lib/mock-db";
import { Bell } from "lucide-react";
import Image from "next/image";
import { Logo } from '@/app/components/common';

export default async function Home({ params }: Readonly<{ params: { id: string } }>) {
  const event = await database.getEvent(Number(params.id))

  if (!event) return null

  return (
    <main className="max-w-3xl mx-auto p-4 my-4 grid gap-5">
      <div className="grid gap-3">
        <Link href="/">
          <Logo />
        </Link>
        <div className="relative aspect-video">
          <Image
            className="rounded"
            src={event.imageUrl}
            alt={event.name}
            priority
            fill
          />
        </div>
        <h1 className="text-2xl">{event.name}</h1>
        <h3>
          {event.location} - {new Date(event.date).toLocaleDateString()}
        </h3>
        <p className="rounded bg-secondary text-secondary-foreground p-4">
          {event.description}
        </p>

        <p>
          <Bell className="inline-block" /> {event.alerts} people are searching
          for a ticket
        </p>
      </div>

      <article className="mt-4 grid justify-center">
        <Link href="/">
          <Logo />
        </Link>
      </article>
    </main>
  )
}
