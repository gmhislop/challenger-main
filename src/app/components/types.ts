export type PopularEventsProps = {
    id: number;
    name: string;
    location: string;
    date: string;
    imageUrl: string;
}

export type Event = {
    id: number;
    name: string;
    alerts: number;
    date: string;
    location: string;
    description: string;
    imageUrl: string;
};