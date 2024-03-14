"use client";
import * as i from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { useEventList } from './EventList.hooks';
import { SearchBar } from '../../common/SearchBar';

export const EventList = ({ allEvents }: Readonly<{ allEvents: i.Event[] }>) => {
    const { events, handleSearchChange } = useEventList(allEvents);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const stagger = 1.5;

    return (
        <>
            <div className="flex justify-center items-center w-full py-6">
                <SearchBar onSearchChange={handleSearchChange} />
            </div>
            {events.length === 0 ? (
                <div className="flex justify-center items-center w-full h-96">
                    <h2>No results found, try another search term.</h2>
                </div>
            ) : (
                <motion.div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            variants={variants}
                            initial="hidden"
                            animate={'visible'}
                            transition={{
                                delay: (index / events.length) * stagger,
                                ease: 'easeInOut',
                                duration: 0.5,
                            }}
                            viewport={{ amount: 0 }}
                        >
                            <a
                                className="relative aspect-video overflow-hidden"
                                href={`/event/${event.id}`}
                                key={event.id}
                            >
                                <div className="absolute inset-x-0 bottom-0 p-2">
                                    <h1 className="text-sm text-primary-foreground">{event.name}</h1>
                                    <p className="text-xs text-secondary-foreground">
                                        {event.location} -{' '}
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            day: '2-digit',
                                            month: '2-digit',
                                            year: 'numeric',
                                        })}
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
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </>
    );
};
