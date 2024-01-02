import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

// Creating a function component that passes props
export const RestaurantCardsComponent = (props) => {
  console.log('childdata', props);
     // Creating the  variable hotelData that holds propsData passed in from HotelDetails targeting the
    //  object inside of the array restaurantdetails
  const hotelData = props.propsData.restaurantdetails;
  return (
    <div
      className='d-flex justify-content-between'
      style={{ paddingLeft: '7em' }}
    >
      <Row>
         {/* use map to crate a loopthat maps through every restaurantdetails obejct in the 
         array and printing out a card for every object */}
        {hotelData.map((hotel) => (
          <Col md='2' sm='6' xl='3' className='p-2' style={{ width: '30%' }}>
            <Card
              className='shadow-none p-3 mb-5 bg-white'
            >
              <Card.Img
                className='images'
                style={{ height: '400px' }}
                variant='top'
                //Returning the image 
                src={hotel.image}
              />
              <Card.Body>
                <Card.Title className='CardTitle'>
                  <h3>{hotel.title}</h3>
                 {/* Returning the title */}
                </Card.Title>
                <Card.Subtitle className='CardDesc'>
                  <p>{hotel.desc}</p>
                  {/* returning the desc */}
                  </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
        ;
      </Row>
    </div>
  );
};

export default RestaurantCardsComponent;
