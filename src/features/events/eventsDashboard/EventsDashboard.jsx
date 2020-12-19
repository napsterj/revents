import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useSelector } from "react-redux";
import EventListItemPlaceholder from "./eventListPlaceholders";
import EventFilters from "./eventFilters";

export default function EventsDashboard() {
  const {events} = useSelector(state => state.event);  
    
  const {loading} = useSelector(state =>state.async);
    

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && 
          <>
           <EventListItemPlaceholder />
           <EventListItemPlaceholder />
          </>
        }
        <EventList
          events={events}                   
        />
      </Grid.Column>
      <Grid.Column width={6}>
          <h1>Event Filters</h1>
          <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
