import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { MDBContainer } from 'mdb-react-ui-kit';

//Creating the single card function component that holds static information that is imoported on the homepage
export const SingleCard = () => {
  return (
    <div>
      <Row center>
        <Card className='shadow-none p-3 mb-5 bg-white'>
          <MDBContainer>
            <Card.Title className='CardTitle' style={{ margin: '1em' }}>
              <h1>the house feels like Home </h1>
            </Card.Title>
            <Card.Subtitle className='CardDesc'>
              <div className='d-flex justify-content-center'>
                <p style={{ lineHeight: '140%' }} className='pre'>
                  the House is now located in seven different countries,
                  England, Norway, Sweden, Morocco, the U.S., Italy and Spain.
                  The purpose of our hotels is to make it feel like home, like
                  your own house. Our hotels facititate everything you need to
                  have a comfortable and relaxing holiday.{' '}
                </p>
              </div>
            </Card.Subtitle>
          </MDBContainer>
        </Card>
      </Row>
    </div>
  );
};

export default SingleCard;
