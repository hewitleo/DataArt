import React, { useEffect, useRef } from "react";
import {type EventData } from "../types";

interface EventModalProps {
    selectedEvent: EventData | null;
    onClose: () => void;
}

export const EventModal: React.FC<EventModalProps> = ({selectedEvent, onClose}) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        const dialogElement = dialogRef.current;
        if (dialogElement) {
            if (selectedEvent) {
                dialogElement.showModal();
            } else {
                dialogElement.close();  
            }

        }
    }, [selectedEvent]);

    const handleDialogClick = (event: React.MouseEvent<HTMLDialogElement>) => {
        if (event.target === dialogRef.current) {
            onClose();
        }
    };

    if (!selectedEvent){
        return null;
    }

    return (
        <dialog ref={dialogRef} className="modal-content" onClick={handleDialogClick}>
            <button className="close-button" onClick={onClose}>&times;</button>

            <img src={selectedEvent.imageURL} alt={selectedEvent.title} className="modal-image" />
            <h2>{selectedEvent.title}</h2>
            <h3>{selectedEvent.year}</h3>
            <p>{selectedEvent.description}</p>
            <p className="modal-category">Category: {selectedEvent.category}</p>

        </dialog>
    );
};