import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Instagram, Facebook,} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//Creating a function component for the footer
export const FooterComponent = () => {
  return (
    <MDBFooter className='footer'>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow >
          <MDBCol>
          <Link
              className="mb-2"
              style={{
                fontSize: "2em",
                padding: "0.8em",
                color: "white",
                textAlign: "left",
              }}
              as={Link}
              to="/"
            >
              The House
            </Link>
          </MDBCol>
          {/* Creating links that routes to the different pages */}
          <MDBCol  sm='2'>
            <Link
        
              className='footer-link'
              href='#link'
              as={Link}
              to='InquiryComponent'
            >
              CONTACT
            </Link>
          </MDBCol>

          <MDBCol sm='2'>
            <Link
              className='footer-link'
              href='#link'
              as={Link}
              to='AboutComponent'
            >
              ABOUT US
            </Link>
          </MDBCol>
          <MDBCol sm='2' style={{ paddingTop: '2em' }}>
            <section> 
              <p className='footerIcons'>
                <Instagram /> instagram
              </p>
              <p className='footerIcons'>
                <Facebook /> facebook
              </p>
            </section>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};
