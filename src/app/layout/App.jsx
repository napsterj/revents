import React, {useState} from 'react';
import EventsDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import NavBar from '../../features/navbar/NavBar';
import { Container } from 'semantic-ui-react';

export default function App() {  
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen}/>
      <Container className='main'>
         <EventsDashboard formOpen={formOpen} setFormOpen={setFormOpen}/> 
      </Container>      
    </>    
  );
}
