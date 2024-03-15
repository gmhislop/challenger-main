import * as i from '@/types';
export async function getAllEvents() {
    try {
        const response = await fetch('http://localhost:3000/api/events');
        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        return data.allEvents as i.Event[];
    } catch (error) {
        throw new Error('Failed to fetch events');
    }
}
