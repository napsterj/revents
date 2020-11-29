import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedInMenu from "./SignedInMenu";
import SignedOutMenu from "./SignedOutMenu";

export default function NavBar() {  
  const {authenticated} = useSelector(state => state.auth);
    
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
        
        {authenticated ? (<SignedInMenu />)  
                       : (<SignedOutMenu />)
        }
        
      </Container>
    </Menu>
  );
}
