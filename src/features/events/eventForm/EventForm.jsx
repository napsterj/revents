import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Header, Button, Segment } from "semantic-ui-react";
import {createEvent, updateEvent} from '../eventActions'

export default function EventForm({  
  match, history
}) {  
  const selectedEvent = useSelector(state => state.event.events.find(evt => evt.id === match.params.id));
  const dispatch = useDispatch();
  
  const initialValue = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValue);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))        
      : dispatch(createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Bob",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        }));
        history.push('/events');
  }

  return (
    <>
      <Segment clearing>
        <Header content={selectedEvent ? "Edit Event" : "Create new event"} />
        <Form onSubmit={() => handleFormSubmit}>
          <Form.Field>
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={(e) => handleInputChange(e)}
              placeholder="Event title"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="category"
              value={values.category}
              onChange={(e) => handleInputChange(e)}
              placeholder="Category"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="description"
              value={values.description}
              onChange={(e) => handleInputChange(e)}
              placeholder="Description"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={(e) => handleInputChange(e)}
              placeholder="City"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              name="venue"
              value={values.venue}
              onChange={(e) => handleInputChange(e)}
              placeholder="Venue"
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={(e) => handleInputChange(e)}
              placeholder="Date"
            />
          </Form.Field>

          <Button
            type="submit"
            onClick={() => handleFormSubmit()}
            floated="right"
            positive
            content={selectedEvent ? 'Update' : 'Submit'}
          />
          <Button
            type="submit"
            as={Link} to={'/events'}           
            floated="right"
            content="Cancel"
          />
        </Form>
      </Segment>
    </>
  );
}
