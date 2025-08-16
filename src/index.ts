import { fetchEvent } from "./fetcher.js";
import { renderEvents } from "./renderer.js";

document.addEventListener('DOMContentLoaded',async () =>{
    const events = await fetchEvent();
    renderEvents(events);
});