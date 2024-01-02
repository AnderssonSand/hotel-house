import React from 'react';
//Installing dependecies from ui
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

//Creating the function component AddRooms
function AddRoom() {
  
// Creating a use state hook and passing the variables inputFields and setInputFields, the useState is containg
// an array withe object fullName that holds an empty string
  const [inputFields, setInputFields] = useState([
    {
      sum: '',
    },
  ]);

  //Collecting the input
  const addInputField = () => {
    setInputFields([
      ...inputFields,
      {
        sum: '',
      },
    ]);
  };
  //Changes the content of an array add input removes all elements starting from index 1
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  };

//Generates a list 
  const handleChange = (index, evnt) => {
    const { number, value } = evnt.target;
    const list = [...inputFields];
    list[index][number] = value;
    setInputFields(list);
  };
  return (
    <MDBContainer id='addRoomContainer'>
      <div className='col-sm-4'>
        {/* uses map to loop through the items and printing them in each row */}
        {inputFields.map((data, index) => {
          const { adults, kids } = data;

          return (
            <div className='row my-4' key={index}>
              <MDBCol md='12'>
                <label id='labelRoom'>Room {index + 1} </label>{' '}
                <div className='col'>
                  <div className='form-group'>
                    <input
                      type='number'
                      //min='0' prevents the user from choosing a negative number
                      min='0'
                     //Creating an onchange event that changes when the user clicks a button
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={adults}
                      number='sum'
                      className='form-control'
                      placeholder='Adults...'
                    />
                    <input
                      type='number'
                      min='0'
                      onChange={(evnt) => handleChange(index, evnt)}
                      value={kids}
                      number='sum'
                      className='form-control'
                      placeholder='Kids...'
                    />
                  </div>
                </div>
              </MDBCol>
              <div>
                <MDBRow center>
                  <MDBCol md='5'>
                    {inputFields.length !== 1 ? (
                      <Button
                        className='book-buttons'
                        onClick={removeInputFields}
                      >
                        Remove
                      </Button>
                    ) : (
                      ''
                    )}
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          );
        })}
  <div className='d-flex justify-content-center'>
        <MDBRow center>
        
          <MDBCol style={{marginTop: '1em'}}>
          <Button className='book-buttons' onClick={addInputField}>
            Add room
          </Button>
          </MDBCol>
         
        </MDBRow>
        </div>
      </div>
    </MDBContainer>
  );
}
export default AddRoom;
