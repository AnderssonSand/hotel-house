import React from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import { Star, StarFill } from 'react-bootstrap-icons';
import { Link, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { getHotelData } from '../hotelData';
import SecondNavigation from './SecondNav';
import { PictureSlide } from './PictureSlide';
import { SingleCard } from './HotelSingleCardComponent';

// The following function component shows each hotel card
export const HotelView = () => {
  //Creating a hook that reads params from the URL that was matched byt rhe route
  let { searchPhrase } = useParams();
  //Checking in case the search phrase is null
  searchPhrase = searchPhrase || '';
  //fetching the data from the array in hotelData.js
  const hotelArray = getHotelData();

  return (
    //Creating a slideshow
    <div>
      <PictureSlide />
      <SingleCard />
      <Row className='g-0'>
        {/* Here we are filtering the list if the user has entered a searchphrase in the searchbar and matching searhprase with the array*/}
        {hotelArray
          .filter(
            (x) =>
              x.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1
          )
          //Then we are looping throught the array with the hotels and displaying them in cards
          .map((hotel, index) => (
            <div>
              <Card
                className='shadow-none p-3 mb-5 bg-white'
                key={index}
                style={{ width: '100%' }}
              >
                <Card.Img
                  className='images'
                  style={{ height: '500px', width: '100%' }}
                  variant='top'
                  //returning the image from the array
                  src={hotel.image}
                />
                <Card.Body>
                  <div className='d-flex justify-content-end'>
                    <SecondNavigation />
                  </div>

                  <div className='d-flex justify-content-center'>
                    <Card.Title className='CardTitle'>
                      {/* returning the title from the array */}
                      <h1>{hotel.title}</h1>
                    </Card.Title>
                    <Rating
                      style={{ paddingTop: '1.25em' }}
                      emptySymbol={<Star />}
                      fullSymbol={<StarFill style={{ color: '#000000' }} />}
                      /* returning the rating from the array */
                      initialRating={hotel.rating}
                      readonly
                    />
                  </div>

                  <Card.Text className='cardText' style={{ fontSize: '1em' }}>
                    {/* returning the country and city from the array */}
                    <h3>
                      {hotel.country}, {hotel.city}
                    </h3>
                  </Card.Text>
                  <div className='d-flex justify-content-center'>
                    <Card.Subtitle className='CardDesc'>
                      <div className='d-flex justify-content-center'>
                        {/* returning the desc from the array */}
                        <p className='pre'>{hotel.desc}</p>
                      </div>
                    </Card.Subtitle>
                    <Card.Text
                      className='cardText'
                      style={{ fontSize: '2em', paddingRight: '3em' }}
                    >
                      <div>
                        {/* returning the price from the array */}
                        <p className='priceP'>{hotel.price}</p>
                      </div>
                    </Card.Text>
                  </div>
                  {/* Creating a Button within a link that redirects the user to the detailed page of each hotel, we are sending in the id
                so that the component knows wich book to render */}
                  <Link to={'/HotelDetailsComponent/' + hotel.id}>
                    <Button className='buttons' size='lg'>
                      Read more
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Row>
    </div>
  );
};
