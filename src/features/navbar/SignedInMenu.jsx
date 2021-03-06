import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Image } from "semantic-ui-react";
import { signOut } from '../auth/authActions';

export default function SignedInMenu({history}) {
   const [currentUser] = useSelector(state => state.auth);
   const dispatch = useDispatch();
  
   return (  
        <Menu.Item position='right'>
            <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png'}/>
            <Dropdown pointing='top left' icon='dropdown' text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>                          
                    <Dropdown.Item text='My Profile' icon='user'/>
                    <Dropdown.Item onClick={() => {
                        dispatch(signOut())
                        history.push('/');
                    }} text='Sign Out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>  
   );
}