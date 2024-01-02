import React from 'react';
import { Card, Button, Row, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { Star, StarFill } from 'react-bootstrap-icons';
import { Reviews } from './Reviews';
import { ShareLink } from './ShareLink'

// Creating a function componen that passes props
export const HotelsHeaderComponent = (props) => {
   // Creating the  variable hotelData that holds propsData passed in from HotelDetails that holds
  // every hotel by its id
  const hotelData = props.propsData;
console.log(hotelData);
 return (
  <div className='p-3'>
  <Row >
  
      <div>
        <Card
          className='shadow-none p-3 mb-5 bg-white'
          style={{ width: '100%' }}
        >
          
          <Card.Img 
            className='images'
            style={{ height: '500px' }}
            variant='top'
            //Returning the image from the array 
            src={hotelData.image}
          />
          
          <Card.Body>
            <div className='d-flex justify-content-end'>
              <section className='d-flex justify-content-center' style={{paddingRight: '1em'}}>
                <Reviews />
              </section>
              <section className='d-flex justify-content-center'>
                
                <ShareLink />
              </section>
            </div>

            <div className='d-flex justify-content-center'>
              <Card.Title className='CardTitle'>
                {/* Returning the title from the array  */}
                <h1>{hotelData.title}</h1>
              </Card.Title>
              <Rating
            
            style={{ paddingTop: '1.25em'}}
                emptySymbol={<Star />}
                fullSymbol={<StarFill style={{ color: '#000000'}}/>}
                //Returning the rating from the array
                initialRating={hotelData.rating}
                readonly
              />
            </div>

            <Card.Text className='cardText'>
              {/* Returning the country and city from the data */}
              <h3>{hotelData.country}, {hotelData.city}</h3>
            </Card.Text>
            <div className='d-flex justify-content-center'>
                  <Card.Subtitle className='CardDesc'>
                  <div className='d-flex justify-content-center'>
                       {/* Returning the desc from the data */}
                    <p className='pre'>{hotelData.desc}</p>
                    </div>
                  </Card.Subtitle>
              <Card.Text className='cardText' style={{ fontSize: '2em', paddingRight: '2em' }}>
                 {/* Returning the price from the data */}
              <p className='priceP'>{hotelData.price}</p>
              </Card.Text>
            </div>
                   {/* Creating a button within a link to direct the user to the componet BookComponent*/}
            <Link to={'/BookComponent'}>
              <Button className='buttons' size='lg'>
                Book
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
  </Row>
</div>
  );
};

export default HotelsHeaderComponent;