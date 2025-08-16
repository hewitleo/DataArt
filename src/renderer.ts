import { showModal, eventData } from "./modal.js";
const timeline = document.getElementById('timeline')!;

export function renderEvents (event: eventData[]) {
        //add marker for each events
        event.forEach (event=>{
            const eventItem = document.createElement('div');
            eventItem.className = 'timeline-item';

            const marker = document.createElement('div');
            marker.className = 'event-marker';
            marker.title = `${event.title} (${event.year})`

            const titleLabel = document.createElement('div');
            titleLabel.className = 'event-title';
            titleLabel.textContent = event.title;


            //click marker show the modal with event info
            marker.addEventListener('click', () => {
                showModal(event);

            });
            eventItem.appendChild(marker);
            eventItem.appendChild(titleLabel);

            timeline.appendChild(eventItem);
            // timeline.appendChild(marker);
        });
    }