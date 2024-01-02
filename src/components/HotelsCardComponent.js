import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from 'react';
import { Card } from 'react-bootstrap';


// Creating a function component that passes props
export const HotelsCardComponent = (props) => {
  console.log('childdata', props);
    // Creating the  variable hotelData that holds propsData passed in from HotelDetails that holds
  // every hotel by its id
  const hotelData = props.propsData.hoteldetails;
    return (
      <MDBContainer >
        <MDBRow center>
          {/* use map to crate a loopthat maps through every 
          obejct in the array and printing out a card for every object */}
      {hotelData.map((hotel) => (
        <MDBCol  md='2' sm='6' xl='3'  style={{width: '40%'}}>
        <Card className='hotel-detail-cards shadow-none p-3 mb-5 bg-white'>
          <Card.Img className='images' 
          //fetching the image from the array of objects 
            style={{height: '400px'}} src={hotel.image}
          />
          <Card.Body>
            <Card.Title className='CardTitle'>
            {/* fetching the title from the array of objects  */}
              <h3>{hotel.title}</h3>
              </Card.Title>
            <Card.Subtitle className='CardDesc card-desc-small'>
                 {/* fetching the desc from the array of objects  */}
              <p>{hotel.desc}</p>
            </Card.Subtitle>
  
          </Card.Body>
        </Card>
        </MDBCol>
      
      
    ))};
    </MDBRow>

    </MDBContainer>
 
  );
  
};

export default HotelsCardComponent;


