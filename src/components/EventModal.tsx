import React from "react";
import {type EventData } from "../types";

interface EventModalProps {
    selectedEvent: EventData | null;
    onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({selectedEvent, onClose}) => {
    if (!selectedEvent){
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <img src={selectedEvent.imageURL} alt={selectedEvent.title} className="modal-image" />
                <h2>{selectedEvent.title}</h2>
                <h3>{selectedEvent.year}</h3>
                <p>{selectedEvent.description}</p>
                <p className="modal-category">Category: {selectedEvent.category}</p>

            </div>
        </div>
    );
};