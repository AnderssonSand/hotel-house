import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';


// Creating a function component pay
function Pay() {
  //The function returns input fields and is imported in the BookComponent
  return (
    <>
      <MDBContainer>
          <form action='/action_page.php'>
            {' '}
            <MDBRow center>
            <MDBCol size='5' style={{ paddingLeft: '3em' }}>
              <input type='radio' id='cash' name='fav_language' value='cash' />
              <label for='cash'> Pay upon arrival </label>
              <div>
                {' '}
                <input
                  type='radio'
                  id='debit/creditcard'
                  name='fav_language'
                  value='debit/creditcard'
                />
                <label for='debit/creditcard'> Debit/creditcard </label>
              </div>
            </MDBCol>
            </MDBRow>
            <MDBRow center>
              <MDBCol size='5' style={{ width: '70%', paddingLeft: '6em' }}>
                <label>
                  {' '}
                  MM/YY *
                  <input
                    min='0'
                    className='form-control'
                    placeholder='MM/YY'
                  />
                </label>
                <label>
                  CARD NUMBER *
                  <input
                    min='0'
                    className='form-control'
                    placeholder='5555-XXXX-XXXX-XXXX'
                  />
                </label>

                <label>
                  CVV *
                  <input
                    min='0'
                    className='form-control'
                    placeholder='CVV'
                  />
                </label>
              </MDBCol>
            </MDBRow>
          </form>
    
      </MDBContainer>
    </>
  );
}
export default Pay;
