import cuid from "cuid";
import { Formik, Form } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  Header, Button, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import * as yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/catergorySnippet";
import MyDateInput from "../../../app/common/form/MyDateInput";

export default function EventForm({ match, history }) {
  
  const selectedEvent = useSelector((state) =>
    state.event.events.find((evt) => evt.id === match.params.id)
  );
  const dispatch = useDispatch();

  const initialValue = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const customValidationSchema = yup.object({
      title: yup.string().required('You must provide a title.'),      
      category: yup.string().required('You must provide a category.'),      
      description: yup.string().required(),      
      city: yup.string().required(),      
      venue: yup.string().required(),      
      date: yup.string().required()      
  });  
    
  return (    
      <Segment clearing>        
        <Formik
          initialValues={initialValue}
          validationSchema={customValidationSchema}
          onSubmit={(values) => {
            selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  id: cuid(),
                  hostedBy: "Bob",
                  attendees: [],
                  hostPhotoURL: "/assets/user.png",
                })
              )
          history.push("/events")
          }}
          >
          {({isSubmitting, isValid, dirty}) => (
            <Form className="ui form">
            <Header sub color='teal' content='Event Details' />
            <MyTextInput name='title' placeholder='Event Title'/>
            <MySelectInput name='category' placeholder='Event Category' options={categoryData} />
            <MyTextArea name='description' placeholder='Description' rows={3}/>
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput name='city' placeholder='City'/>
            <MyTextInput name='venue' placeholder='Venue'/>
            <MyDateInput name='date' placeholder='Date'
              timeFormat='HH:mm'
              dateFormat='MMMM d, yyyy h:mm a'
              timeCaption='Event Time'         
              showTimeSelect     
              placeholderText='Event Date'
            />            

            <Button
              loading={isSubmitting}
              disabled={isSubmitting || !isValid || !dirty}
              type="submit"
              floated="right"
              positive
              content={selectedEvent ? "Update" : "Submit"}
            />
            <Button
              disabled={isSubmitting} 
              type="submit"
              as={Link}
              to={"/events"}
              floated="right"
              content="Cancel"
            />
          </Form>
          )}
          
          
        </Formik>
      </Segment>    
  );
}
