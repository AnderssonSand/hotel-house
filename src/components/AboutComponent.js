import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


// Creating the About component and exporting it
export const About = () => {
  return (
    <div>
{/* Using bootstrap for inline styling to manipulate the content */}
      <div className='d-flex justify-content-center'>
        <img src='/assets/karusell/romancec.jpg' alt='romantic hotel lounge'  style={{maxHeight: '500px'}}/>
      </div>
      <MDBContainer
        className='aboutCol'
        style={{ padding: '2em', maxWidth: '70%' }}
      >
        <h1>about Us</h1>

        <p id='aboutP'>
          {' '}
          Founded in 1970 by Circe Gaia. Always striving after something new and
          revolutionary. That’s how the House came alive. Wanting to present an
          refreshing idea to the people. Wanting to make the hotel experience a
          whole trip. the House’s main purpose is to send people to our resorts
          to enjoy something they’ve never experienced before. With our seven
          different hotels in seven different countries – we are positive you’ll
          find something exquisite suiting for your taste. the House want to
          elevate your experience. With different rooms, destinations and
          activities. It’ll be tailored just for you.{' '}
        </p>

        <div className='pb-3' style={{ paddingTop: '5em' }}>
          <h2>can we help you with something?</h2>
          <p id='aboutParagraph'>
            Send us a line and tell us. We will do everything in our power to
            help you. Welcome to the House.{' '}
          </p>
        </div>
       {/* Creating a Button that is enclosed by a link to send the user to inquiry */}
        <Link to={'/InquiryComponent'}>
          <Button className='buttons' size='lg'>
            INQUIRY
          </Button>
        </Link>
      </MDBContainer>
    </div>
  );
};
