import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";

export default function EventsDashboard() {
  const {events} = useSelector(state => state.event);  
    
  
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}                   
        />
      </Grid.Column>
      <Grid.Column width={6}>
          <h1>Event Filters</h1>
      </Grid.Column>
    </Grid>
  );
}
