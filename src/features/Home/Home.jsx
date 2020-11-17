import React from 'react';
import {Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

export default function Home({history}) {
  return (
      <Segment inverted textAlign='center' vertical className='masthead'>
          <Container>
            <Header as='h1' inverted> 
                <Image size='massive' src='/assets/logo.png' style={{marginBottom: 12}} />
                Re-vents
            </Header>
            <Button onClick={() => history.push('/events')} size='massive' inverted>
                Get Started
                <Icon name='right arrow' />
            </Button>
          </Container>
      </Segment>
  );
}