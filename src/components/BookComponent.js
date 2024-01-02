import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import Transfer from './Transfer';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Pay from './Pay';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import AddRoom from './AddRoom';
import { Button } from 'react-bootstrap';

//Create a funcion component that grabs the setBooking function from app.js
export const Book = ({ setBooking }) => {
  //we use the navigate hook and invoke it in the handlesubmit function
  const navigate = useNavigate();

  //Using the hook useState so a new state can be set to name, lastName, value and error
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [value, setValue] = useState('');
  //Creating useState for getting the error message
  const [error, setError] = useState(false);
  
//Creating a function that 
  const handleSubmit = async (e) => {
    //prevent default prevents browser reload everytime the onsubmit is clicked
    e.preventDefault();
    //Check if lastname and name is equal to 0 (empty) then setError to true
    if (name.length === 0 || lastName.length === 0) {
      setError(true);
    }
    //Here we check if the following values are empty
    if (!name || !lastName || !value) return;
    //If the values are there we set the name, lastname and value
    setBooking({ name: name, lastName: lastName, value: value });
    //Then navigate to the confirmation 
    navigate('/BookingConfirmation');
  };

  return (
    <MDBContainer>
      <div className='DateRangePicker'>
        {/* creating a prop onSubmit that contains the function handleSubmit that fires when the form is submitted */}
        <Form onSubmit={handleSubmit}>
          {/* //Date code start */}
          <Form.Group>
            <h4>choose Date</h4>
            <div className='d-flex justify-content-center'>
              <DateRangePicker id='datePicker' />
            </div>
          </Form.Group>
          <hr />
          {/* //Date code end*/}
          {/* //Choose hotel code start */}
          <Form.Group>
            <h4>choose Hotel</h4>
            <div className='d-flex justify-content-center'>
           
              <Form.Select
                className='pickupSelect'
                name='hotel'
                value={value}
                //Creating an onChange event that targets the value in the input field
                onChange={(e) => setValue(e.target.value)}
              >
                <option value=''>choose a hotel *</option>
                <option value='Seaside House'>seaside House</option>
                <option value='cityhouse'>city House</option>
                <option value='Romance House'>romance House</option>
                <option value='Ice House'>ice House</option>
                <option value='Nature House'>nature House</option>
                <option value='Beach House'>beach House</option>{' '}
                <option value='Bohemian House'>bohemian House</option>
              </Form.Select>
              </div>
            <MDBRow>
              {/* if error is true then show else empty */}
              {error ? <pre style={{textAlign: 'center'}}>all fields * with are mandatory</pre> : ''}
            </MDBRow> 
          </Form.Group>
          <hr />
          {/* //Choose hotel code end */}
          {/* //rooms code start */}
          <Form.Group>
            <h4>choose Roomsize</h4>
            <p className='label-p'>Please tell us how many guests in every room. *</p>
            <AddRoom />
            {error ? <pre style={{textAlign: 'center'}}>all fields * with are mandatory</pre> : ''}
          </Form.Group>
          <hr />
          {/* //rooms code end */}
          {/* //Transfer code start */}
          <Form.Group>
            <h4>transfer</h4>
            <Transfer />
            {error ? <pre style={{textAlign: 'center'}}>all fields * with are mandatory</pre> : ''}
          </Form.Group>
          <hr />
          {/* //Transfer code end */}
          {/* //rooms code start */}
          <Form.Group>
            <h4>payment Method</h4>
            <Pay />
            {error ? <pre style={{textAlign: 'center'}}>all fields * with are mandatory</pre> : ''}
          </Form.Group>
          <hr />
          {/* //rooms code end */}
          {/* //Checkout code start */}

          <Form.Group>
            <Form.Group>
              <h4>checkout</h4>

              <MDBRow center>
                <Form.Label htmlFor='name' className='formLabel'>
                  First Name*
                </Form.Label>
                <Form.Group>
                  <div className='d-flex justify-content-center'>
                    <input
                      type='text'
                      placeholder='First Name...'
                      className='form-input'
                      id='name'
                      value={name}
                      //Creating an onChange event that targets the value in the input field
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </MDBRow>
              <MDBRow center>
                <Form.Label htmlFor='email' className='formLabel'>
                  Surname*
                </Form.Label>
                <Form.Group>
                  <div className='d-flex justify-content-center'>
                    <input
                      type='text'
                      placeholder='Surname...'
                      className='form-input'
                      id='lastName'
                      value={lastName}
                      //Creating an onChange event that targets the value in the input field
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </MDBRow>
              {error ? <pre style={{textAlign: 'center'}}>all fields * with are mandatory</pre> : ''}
            </Form.Group>
          </Form.Group>

          {/* //Checkout code end */}
          <div className='d-flex justify-content-center' style={{ paddingTop: '2em'}} >
          
            <Button type='submit' className='sendButton'>
              Send
            </Button>
       
          </div>
        </Form>
      </div>
    </MDBContainer>
  );
};
