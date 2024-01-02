import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';

//Creating a inquiry  function component
export const Inquiry = () => {
  // creating the ustaState hook and passing the variables show and setShow
  const [show, setShow] = useState();

  // creating two variables that are Using the setShow function to manipulate the state of the module
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  return (
    <div>
      <div className='d-flex justify-content-center'>
          <Card className='shadow-none'>
            <img
              className='images concierge-gif'
              style={{ width: '600px' }}
              variant='top'
              src='/assets/images/concierge.gif'
              alt='hotel worker welcoming'
            />
       
            <h1 className='contact'>Nice to meet you!</h1>
            <p id='inquiryP'>
            My name is Jaques. If you have any questions. Please drop us a line.
            </p>
           
            <div className='d-flex justify-content-center'>
              <Button
                className='send-email-button'
                variant='primary'
                //Passing in our function handleOpen that react when the button is clicked
                onClick={handleOpen}
              >
                SEND E-MAIL
              </Button> 
            </div>
          </Card>
        
      </div>
      {/* Passing in our function handlClose  and the value show  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className='modal-body'>
        <h1 className='centerHeadline' >the House</h1>
            <Form>
            <Form.Group className='mb-3' controlId='formBasicName'>
              <Form.Label className='formLabel'>
                E-MAIL
              </Form.Label>
              <Form.Control
              className='formInput'
                type='email'
                placeholder='name@example.com'
                autoFocus
              />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlTextarea1'
              >
                <Form.Label className='formLabel'>
                  QUESTION  
                </Form.Label>
                <Form.Control 
                className='formInput'
                as='textarea' 
                columns={6} rows={6} />
              </Form.Group>
          </Form>
           <div className='d-flex justify-content-center'>
            <Button
              className='inquiry-button'
              //Passing in our function handleClose that will be set off when the button is clicdke
              onClick={handleClose}
            >
              Send
            </Button>
            </div>
          <div className='d-flex justify-content-center' >
            <p id='contactP'>OR CONTACT US AT +44 (0)20 77 44 5555</p>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
};
