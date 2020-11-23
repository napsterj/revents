import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);  

  function handleSignOut() {
      setAuthenticated(false);
      history.push('/');
  }
  
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header as={NavLink} to="/" exact>
          <img src='./assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name='Events'></Menu.Item>
        <Menu.Item as={NavLink} to="/sandbox" name='Sandbox'></Menu.Item>
        {authenticated && (
        <Menu.Item as={NavLink} to='/createEvent' name='CreateEvent'>
          <Button             
            inverted
            positive            
            content='Create Event'
          /> 
        </Menu.Item>
        )}
        
        {authenticated ? (<SignedInMenu signOut={handleSignOut}/>)  
                       : (<SignedOutMenu setAuthenticated={setAuthenticated} />)
        }
        
      </Container>
    </Menu>
  );
}
