import React from "react";
import EventsDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import NavBar from "../../features/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventDetailed from "../../features/events/EventDetailed/EventDetailed";
import EventForm from "../../features/events/eventForm/EventForm";
import Home from "../../features/Home/Home";

export default function App() {
 
   return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashboard} />
              <Route path="/events/:id" component={EventDetailed} />
              <Route path="{[/createEvent, /manage/:id]}" component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  );
}
