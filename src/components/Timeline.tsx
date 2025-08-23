import React from "react";
import { EventMarker } from "./EventMarker";
import { type EventData } from "../types";

interface TimelineProps {
    events: EventData[];
    onMarkerClick: (event: EventData) => void;
    selectedEvent: EventData | null;
}

// export const Timeline: React.FC<TimelineProps> = ({events}) => {
export const Timeline: React.FC<TimelineProps> = ({events,onMarkerClick,selectedEvent}) => {
    return (

        <section id='timeline'>
            {events.map((event) => (
                <EventMarker
                    key={event.id}
                    event={event}
                    onMarkerClick={onMarkerClick}
                    isActive = {selectedEvent?.id === event.id}
                />
            ))}
        </section>
    );  
};