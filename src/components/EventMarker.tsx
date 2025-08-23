import React from "react";
import { type EventData } from "../types";

interface EventMakerProps {
    event: EventData;
    onMarkerClick: (event: EventData) => void;
    isActive: boolean
}

export const EventMarker: React.FC<EventMakerProps> = ({onMarkerClick, event, isActive}) => {
    return (
        <button
            onClick={() => onMarkerClick(event)}
            className="timeline-marker"
            aria-current = {isActive ? 'true' : 'false'}

        >
        
        <div className="marker-dot"></div>
        <span className="marker-title">{event.title}</span>
            <h3>{event.year}</h3>
        </button>
    );
};