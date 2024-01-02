import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { MDBContainer} from 'mdb-react-ui-kit';

// Creating a function component that passes props
export const RestaurantHeaderComponent = (props) => {
     // Creating the  variable hotelData that holds propsData passed in from 
    //  HotelDetails targeting the id 

  const hotelData = props.propsData;
  return (
    <div>
      <Row center>
          <Card className='shadow-none p-3 mb-5 bg-white'>
            <div className='d-flex justify-content-center'>
            <Card.Img 
              id='restaurantHeader'
              className='images'
              variant='top'
              //retunring the headerImage
              src={hotelData.headerimage}
            />
            </div>
            <MDBContainer>
            <Card.Body class='bg-white'>
              <Card.Title className='CardTitle' style={{margin: '1em'}}>
                {/* returning the restaurant */}
                <h1>{hotelData.restaurant}</h1>
              </Card.Title>
              <Card.Subtitle className='CardDesc'>
                <div className='d-flex justify-content-center'>
                  {/* returning the fooddesc */}
                <p className='pre'> {hotelData.fooddesc}</p>
                </div>
              </Card.Subtitle>
            </Card.Body>
            </MDBContainer>
          </Card>

      </Row>
    </div>
  );
 
};

export default RestaurantHeaderComponent;
