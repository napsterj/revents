import React, { useState } from "react";
import EventsDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import NavBar from "../../features/navbar/NavBar";
import { Container } from "semantic-ui-react";

export default function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  function handleSetFormOpen(isOpen) {
      setSelectedEvent(null)
      setFormOpen(isOpen);
  }

  return (
    <>
      <NavBar setFormOpen={handleSetFormOpen} />
      <Container className="main">
        <EventsDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}/>
      </Container>
    </>
  );
}
