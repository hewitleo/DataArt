import { eventData } from "./modal.js";

export async function fetchEvent(): Promise<eventData[]> {
    const response = await fetch('data/events.json');
    const events:eventData[] = await response.json();
    return events;
}
