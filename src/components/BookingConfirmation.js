import { Button } from 'react-bootstrap';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

//Create a funcion component that grabs booking from app.js
export const BookingConfirmation = ({ booking }) => {
  return (
    <div className='confirmation'>
      <MDBContainer >
        <MDBRow >
        <div className='confirmation-content'>
          <MDBRow >
            <h1>
              {/* here we pass the name and lastname sent in by booking  */}
              Thank you {booking.name} {booking.lastName}!
            </h1>
          </MDBRow>
        </div>
        <MDBRow className='gy-4'>
          <div className='confirmation-content'>
            {/* here we pass the value sent in by booking  */}
            <h2 className='confirmation-text'>You have choosen {booking.value}.</h2>
          </div>
          <div className='confirmation-content'>
            <p className='bookingP'>
              A booking confirmation have now been sent to your email. We look
              forward to be seeing you soon.
            </p>
          </div>
        </MDBRow>
        <MDBRow >
      <MDBContainer>
            <div className='modal-button-container'>
                <div>
              <Button className='buttons'>Share</Button>
              <Button className='print-button'>Print</Button>
              </div>
            </div>
          </MDBContainer>
        </MDBRow>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default BookingConfirmation;
