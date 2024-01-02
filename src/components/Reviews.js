import React, { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';

export const Reviews = (props) => {
    // creating the ustaState hook and passing the variables show and setShow
  const [show, setShow] = useState();
  // creating handleOpen variables that are Using the setShow function to manipulate the state of the module
  const handleOpen = () => setShow(true);

  /* Button toggle */
  const [isActive, setIsActive] = useState(false);
  const handleClose = () => {
    setIsActive((current) => !current);
    setShow(false);
  };


  return (
    <>
    {/* Crating the modal with static code inside the Modal.Body */}
      <Heart style={{margin: '3px'}}/>
      <div className='link'>
      {/* Passing in our function handleOpen that react when the button is clicked */}
        <p className='secondNav' onClick={handleOpen}>
          Reviews
        </p>
      </div>
        {/* Passing in our function handlClose that reacts onHide and the value show  */}
      <Modal show={show} onHide={handleClose}>
     
          <h1 className='centerHeadline'>the House</h1>
  
        <Modal.Body className='modal-body' style={{margin: '1em'}}>
          <h4>1002 Reviews </h4>
          <h4>9.9 Excellent</h4>
          <hr />
          <h5> 9.9/10 Cleanliness</h5>
          <h5> 9.9/10 Amenities</h5>
          <h5> 9.9/10 Staff and Services</h5>
          <h5> 9.9/10 Eco-friendliness</h5>
          <h5> 9.9/10 Property conditions & facilities</h5>
          <hr />
          <h4> 6/10 Very Good</h4>
          <p>
            'Great location and well presented rooms. The breakfast was amazing.'
          </p>

          <h4> 8/10 Exceptional</h4>
          <p>'Fantastic environment. Love the activities.'</p>
          <h4> 9/10 Very Good</h4>
          <p>
          
            'Great location and well presented rooms. The breakfast was amazing.'
          </p>
        </Modal.Body>

        <Modal.Footer>
   
        </Modal.Footer>
      </Modal>
    </>
  );
};
