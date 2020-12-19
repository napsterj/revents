import React from "react";
import EventsDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import NavBar from "../../features/navbar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import EventDetailed from "../../features/events/EventDetailed/EventDetailed";
import EventForm from "../../features/events/eventForm/EventForm";
import Home from "../../features/Home/Home";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modal/ModalManager";
import { ToastContainer } from "react-toastify";


export default function App() {
   const {key} = useLocation();
   return (
    <>      
      <ModalManager />
      <ToastContainer position='top-center'  hideProgressBar/>
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetailed} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>                       
            </Container>
          </>
        )}
      />
    </>
  );
}
