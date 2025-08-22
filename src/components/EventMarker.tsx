import React from "react";

interface EventMakerProps {
    year : number;
    title : string;
    onClick: () => void;
}

export const EventMarker: React.FC<EventMakerProps> = ({year, title, onClick}) => {
    return (
        <div className="event-maker" onClick={onClick}>
            <h3>{year}</h3>
            <p>{title}</p>
        </div>
    )
}