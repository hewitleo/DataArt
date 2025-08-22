import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Timeline } from './components/Timeline'
import {type EventData } from './types'
import { EventModal } from './components/EventModal'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // const [isEyeComfortMode, setIsEyeComfortMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // const toggleEyeComfortMode = () => {
  //   setIsEyeComfortMode(prevMode => !prevMode);
  // };

  const handleMarkerClick = (event: EventData) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
};

  const handleModalClose = () => {
    setSelectedEvent(null);
    setIsModalOpen(false)
};


  useEffect(() => {
    fetch('/events.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: EventData[]) => {
        setEvents(data);
      })
      .catch(error => {
        console.error('There was the problem with fetch', error);
      });
    }, []);

  return (
    <>
    <div className={`${isDarkMode ? 'dark-mode': ''}`}>
      <Header toggleDarkMode={toggleDarkMode}/>
      <main>
        <Timeline events={events} onMarkerClick={handleMarkerClick}/>
        {isModalOpen && <EventModal selectedEvent={selectedEvent} onClose={handleModalClose}/>}
      </main>
    </div>

    </>

  );
}

export default App;
