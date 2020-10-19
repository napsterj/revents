import React from 'react';
import { Item, List } from 'semantic-ui-react';

export default function EventListAttendees ({attendee}) {
    return (
        <List.Item>
            <Item.Image size='mini' circular src={attendee.photoURL} label={attendee.name}/>
        </List.Item>
    )
};