import React from 'react';
import { Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//Creating a function component that takes props 
export const FoodFactCardComponent = (props) => {
  // Creating a variable and targeting propsData
  const hotelData = props.propsData;
  console.log(hotelData);
  return (
    <div>
    <div>
      <div className='d-flex justify-content-center'>
        <Row>
          <Image
          // Creating a image element that holds 
            style={{ height: '500px', width: '900px' }}
            variant='top'
            src={hotelData.foodFact}
          />
        </Row>
      </div>
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

export default FoodFactCardComponent;
