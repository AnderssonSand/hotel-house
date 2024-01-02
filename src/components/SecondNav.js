import React from 'react';
import { Reviews } from './Reviews';
import { ShareLink } from './ShareLink';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

// Creating a function component
export const SecondNavigation = () => {
  return (
    <MDBContainer>
      <MDBRow end>
        <div className='d-flex flex-row-reverse' > 
        <div className='d-inline-flex p-2' >
          {/* importing the sharelink component */}
            <ShareLink />
          </div>
          <div className='d-inline-flex p-2'>
             {/* importing the Reviews component */}
            <Reviews />
          </div>
         
        </div>
      </MDBRow>
    </MDBContainer>
  );
};

export default SecondNavigation;
