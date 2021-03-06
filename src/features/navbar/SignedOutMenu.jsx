import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Menu } from "semantic-ui-react";
import { openModal } from '../../app/common/modal/modalReducer';

export default function SignedOutMenu({setAuthenticated}) {
   const dispatch = useDispatch();
   return (  
        <Menu.Item position='right'>
            <Button 
             onClick={() => dispatch(openModal({modalType: 'SignInForm'}))}
             basic
             inverted
             content='Login' />
            <Button
             basic
             inverted 
             content='Register' 
             style={{ marginLeft: "0.5em" }} />
        </Menu.Item>  
   );
}