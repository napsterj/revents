import React from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { useDispatch, useSelector } from "react-redux";
import EventListItemPlaceholder from "./eventListPlaceholders";
import EventFilters from "./eventFilters";
import {ListenEventsFromFirestore} from "../../../app/firestore/fireStoreService";
import { loadEventsFromFirestore } from "../eventActions";
import { useFireStoreCollection } from "../../../app/hooks/useFireStoreCollection";

export default function EventsDashboard() {
  const dispatch = useDispatch();
  const  {events}  = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  console.log(events);
  
  useFireStoreCollection({
    query: () => ListenEventsFromFirestore(),
    data: events  => dispatch(loadEventsFromFirestore(events)),
    deps: [dispatch]
  })

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder/>
            
          </>          
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>Event Filters</h1>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
