import React from 'react';
import { Row } from 'react-bootstrap';

//Creating a function component that takes props
export const AsideComponent = (props) => {
// Creating a variable that targets the object inside the array restaurantdetails
  const hotelData = props.propsData.restaurantaside;
  return (
    <div>
      <Row>
        {/* with map we are able to loop through the data inside restaurantdetails and 
        and printing it out inside the divs */}
        {hotelData.map((hotel) => (
          <div className='cardAside' style={{ width: '75%', padding: '2rem' }}>
            <div className='d-flex justify-content-between'>
              <div className='col-auto'>
                {/* targeting the images inside the data */}
                <img alt='collage' className='asideImage' src={hotel.image} />
              </div>
              <div className='col'>
                <h3 style={{ paddingTop: '2em' }} className='card-title'>
                  {hotel.title}
                </h3>
                {/* Targeting subtitle, desc and patagraphs inside the data */}
                <p className='cardSubtitle'>{hotel.subtitle}</p>
                <p className='cardSubtitle'>{hotel.desc}</p>
                <p className='cardSubtitle'>{hotel.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
        ;
      </Row>
    </div>
  );
};
