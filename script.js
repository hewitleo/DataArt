    document.addEventListener('DOMContentLoaded',() =>{
        const timeline = document.getElementById('timeline');
        const modal = document.getElementById('modal');
        const modalContent = modal.querySelector('.modal-content');
        const modalBody = document.getElementById('modal-body');
        const closeBtn = modal.querySelector('.close');

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        });

    // load events

        fetch('data/events.json')
            .then(response => response.json())
            .then(event => {
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

                    timeline.appendChild(marker);
                });
            })
        // function
        function showModal(event) {
            modalBody.innerHTML = `
            
            <h2>${event.title} (${event.year})</h2>
            <img src = "${event.imageURL}" alt="${event.title}"/>
            <p>${event.description}</p>
            <p><strong>Category:</strong> ${event.category}</p>
        `;

        modal.style.display = 'grid';

        //close modal when clicking outside

        window.addEventListener('click', e=> {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        }
    });