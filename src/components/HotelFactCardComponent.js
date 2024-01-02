import React from 'react';
import { Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Creating a function component that passes props
export const HotelFactCardComponent = (props) => {

  // Creating the  variable hotelData that holds propsData passed in from HotelDetails that holds
  // every hotel by its id
  const hotelData = props.propsData;
  console.log(hotelData);
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <Row>
          <Image
            style={{ height: '500px', width: '900px' }}
            variant='top'
            //Returning the image 
            src={hotelData.hotelFact}
          />
        </Row>
      </div>
      <div>
        {/* Creating a button within a link to direct the user to the componet inquiryComponent */}
      <Link to={'/InquiryComponent'}>
        <Button className='buttons' size='lg'>
          INQUIRY
        </Button>
      </Link>
      </div>
    </div>
  );
  return <div>{hotelData}</div>;
};

export default HotelFactCardComponent;
