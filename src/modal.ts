export interface eventData{
    year: number;
    imageURL: string;
    description: string;
    title: string;
    category: string
}

const modal = document.getElementById('modal')!;
const modalBody = document.getElementById('modal-body')!;
const closeBtn = modal.querySelector('.close')!;

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
});

export function showModal(event: eventData) {
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