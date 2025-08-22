import React from "react";
import { EventMarker } from "./EventMarker";
import { type EventData } from "../types";

interface TimelineProps {
    events: EventData[];
    onMarkerClick: (event: EventData) => void;
}

// export const Timeline: React.FC<TimelineProps> = ({events}) => {
export const Timeline: React.FC<TimelineProps> = ({events,onMarkerClick}) => {
    return (

        <section id='timeline'>
            {events.map((event) => (
                <EventMarker
                    key={event.title}
                    year={event.year}
                    title={event.title}
                    onClick={() => onMarkerClick(event)}
                />
            ))}
        </section>
    );
};