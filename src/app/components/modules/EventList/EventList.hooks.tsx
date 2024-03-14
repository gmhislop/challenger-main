import * as i from '@/types';
import { useEffect, useState } from 'react';

export const useEventList = (allEvents: i.Event[]) => {
    const [events, setEvents] = useState<i.Event[]>(allEvents);

    useEffect(() => {
        setEvents(allEvents);
    }, [allEvents]);

    const handleSearchChange = (searchTerm: string) => {
        if (searchTerm.trim() === '') {
            setEvents(allEvents);
            return;
        }


        const filteredEvents = allEvents.filter(
            (event) =>
                event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setEvents(filteredEvents);
    };

    return {
        events,
        handleSearchChange,
    };
};
