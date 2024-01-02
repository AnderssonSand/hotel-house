import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Share } from 'react-bootstrap-icons';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Instagram, Facebook } from 'react-bootstrap-icons';

//Creating a function that passes props
export const ShareLink = (props) => {
  // Creating a useState that contains the value show and function setShow
  const [show, setShow] = useState();

//Here we create two arrow functions that passes setshow with a value of true and false depending on where the user clicks
const handleClose = () => setShow(false);
const handleOpen = () => setShow(true);

  return (
    <>
      <div className='link' >
        <Share  style={{margin: '5px', marginTop: '2px'}} />
        {/* onclick run the function handleOpen that is set to true */}
        <p className='secondNav' onClick={handleOpen}>
          Share
        </p>
      </div>
      {/* onHide passes the function handleClose that is set to false and the value is set to show */}
      <Modal show={show} onHide={handleClose} >
        <Modal.Body className='modal-body'>
          <MDBContainer >
            <MDBRow>
              <h1 className='centerHeadline'>the House </h1>
            </MDBRow>
            <MDBRow>
              <h2 id='shareH3'>share</h2>
            </MDBRow>
            <MDBRow>
              <p className='specialParagraph'>
              Want to share this hotel to someone you know?
              </p>
            </MDBRow>
            <MDBRow center>
              <MDBCol className='icons' size='4'>
                <Facebook id='fbIcon' />
                <Instagram />
              </MDBCol>
            </MDBRow>
            <Form>
              <Form.Group className='mb-3' controlId='formBasicName'>
                <Form.Label className='formLabel'>SEND TO </Form.Label>
                <Form.Control className='formInput' type='name' />
                <Form.Label className='formLabel' controlId='formBasicEmail'>E-mail</Form.Label>
                <Form.Control className='formInput' type='email' />
                <Form.Label className='formLabel' controlId='formBasicQuestion'>Question</Form.Label>
                <Form.Control className='formInput' as='textarea' rows={4} />
              </Form.Group>


              <Modal.Footer>
                {/* In the modal footer we create the onClick event that contains the function handleClose that contains a value of false
                that means that when the user clicks the button the function fires and in this case it closes the modal */}
              <Button
                id='shareButton'
                className='buttons'
                onClick={handleClose}
              >
                Send
              </Button>
      </Modal.Footer>
            
            </Form>
          </MDBContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};
