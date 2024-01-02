import React, { Component } from 'react';
import pickupTimes from './pickupTimes';
import { Form } from 'react-bootstrap';
import {MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

//Create the transfer component
class Transfer extends Component {
  //Here we create the constructor that is called when the object is created
  constructor() {
    //Super is created to be able to use .this
    super();
    //Set the initial state
    this.state = {
      name: 'React',
    };
    //Here we are binding the Eventhandlers 
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
    //Creating a function that passes the event 
  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  // Here we are handeling the event that will be fired when the form is submitted 
  formSubmit(event) {
    //Prevents the page from refreshing
    event.preventDefault();
 
  }
  render() {
    return (
      <>
        <MDBContainer >
          <MDBRow center>
            <MDBCol size='6'>
              <h5 style={{ textAlign: 'center' }}>
                Please tell us if you need transfer.
              </h5>
              <p className='label-p' style={{ fontSize: '1em' }}>
                If you would like us to pick you up from the airport please
                enter your name and time for pickup.
              </p>
            </MDBCol>
          </MDBRow>
          
          <MDBRow>
            {/* Here we pass the function formSubmit  */}
            <form onSubmit={this.formSubmit}>
              <div className='d-flex justify-content-center'>
              <div className='radio'>
                        {' '}
                        <label>
                            <input
                                type='radio'
                                value='No'
                                //If the following input is checked and equal to 'no' then show the value of no
                                checked={this.state.selectedOption === 'No'}
                                onChange={this.onValueChange}
                            />
                            No thanks
                        </label>
                    </div>
                    <div className='radio'>
                        {' '}
                        <label>
                            <input
                                //If the following input is checked and equal to 'yes' then show the value of yes
                                type='radio'
                                value='Yes'
                                checked={this.state.selectedOption === 'Yes'}
                                onChange={this.onValueChange}
                            />
                          
                            Yes please!
                        </label>
                    </div>
                    </div>
              <div>
              
                <MDBRow className='gx-10' center>
                    
                  <MDBCol className='transferHeading' size='6'>
                    <label> Airport Name: </label>
                    <input
                      className='inputSize'
                      name='airport'
                      component='input'
                      type='text'
                      placeholder='Airport...'
                    />
                  </MDBCol>
            
                  <MDBCol className='transferHeading' size='6' style={{marginLeft: '2.5em'}}>
                    <label>Your name: </label>
                    <input
                      className='inputSize'
                      name='airport'
                      component='input'
                      type='text'
                      placeholder='Name...'
                    />
                  </MDBCol>
                </MDBRow>
              </div>

            
              <MDBRow center>
                <MDBCol size='5' style={{ marginBottom: '1em' }}>
                  <label> Pickup Time: </label>
                  <select
                    className='selectTime'
                    name='pickupTime'
                    component='select'
                  >
                    <option />
                    {/* Here we use map to create a loop that loops through pickupTimes and prints out all of the values inside of it
                    as different options */}
                    {pickupTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </MDBCol>
              </MDBRow>

              <MDBRow center className='transferHeading' >
                <MDBCol size='9' style={{paddingLeft: '2.5em'}} >
                  <label>How many passengers? </label>
                  <input
                    className='inputSize'
                    id='inputField'
                    name='passengers'
                    component='input'
                    type='number' min='0'
                    placeholder='Passengers..'
                  />
                
                  
                </MDBCol>
              </MDBRow>


              <MDBRow center style={{margin: '5em'}}>
              <MDBCol size='9' >
                <p id='otherComments'>
                  Please provide additional information about your transport{' '} (ex. childrens seat or extra space for luggage).
                </p>

                <Form.Control
                  placeholder='.....'
                  as='textarea'
                  rows={4}
                ></Form.Control>
            </MDBCol>
              </MDBRow>
            </form>{' '}
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}
export default Transfer;
