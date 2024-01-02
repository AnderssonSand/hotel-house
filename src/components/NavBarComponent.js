import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

//Creacting a function component
function NavBar() {
  //use state to save the search phrase by the user
  // to set a new value to searchChange via onChange
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <Navbar
      className='navBar'
      style={{ paddingLeft: '8em', paddingRight: '8em' }}
      bg='white'
      expand='lg'
    >
      {/* Creating the navbar and for every item in the navigation bar we add a link that routes to the HotelDetailsComponent
      and the specific id, but to convert it to Link component we have 'as' the keyword here */}
      <Nav className='NavDropdown'>
        {/* Dropdown 1 */}
        <NavDropdown
          style={{ paddingRight: '5em' }}
          renderMenuOnMount={true}
          title='HOTELS'
          className='navTitles'
          id='basic-nav-dropdown'
        >
          <NavDropdown.Item
            className='nav-links square bg-white rounded-0'
            as={Link}
            to='HotelDetailsComponent/1'
          >
            SEASIDE HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links'
            as={Link}
            to='HotelDetailsComponent/2'
          >
            CITY HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links'
            as={Link}
            to='HotelDetailsComponent/3'
          >
            ROMANCE HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links'
            as={Link}
            to='HotelDetailsComponent/4'
          >
            ICE HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links'
            as={Link}
            to='HotelDetailsComponent/5'
          >
            NATURE HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links'
            as={Link}
            to='HotelDetailsComponent/6'
          >
            BEACH HOUSE
          </NavDropdown.Item>
          <NavDropdown.Item
            className='nav-links square bg-white rounded-0'
            as={Link}
            to='HotelDetailsComponent/7'
          >
            BOHEMIAN HOUSE
          </NavDropdown.Item>
        </NavDropdown>
        <Nav>
          <Nav.Link
            href='#link'
            as={Link}
            to='BookComponent'
            className='nav-links'
          >
            BOOK
          </Nav.Link>
        </Nav>
      </Nav>
      <Container>
        <Navbar.Brand
          as={Link} to='/'
          id='logo'
          className='mx-auto'>
          <img id='logo' src='/assets/images/logo.jpg'/>
        </Navbar.Brand>
        <NavDropdown  className='search-box' title='SEARCH' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#' >
            <div className='flex-container'>
            <div>
            <FormControl
              //Here we store the serchbar and button we are setting the value to searchPhrase
              type='search'
              placeholder='Search'
              className='flex-child'
              aria-label='Search'
              value={searchPhrase}
              //Creating an onchange event that sets a new value
              onChange={(e) => setSearchPhrase(e.target.value)}
            />
            </div>
            {/*We have placed button insde a Link component to enable 'Route' here.*/}
            <div className='flex-child'>
            <Link to={'/' + searchPhrase}>
              <Button className='search-button'>Search</Button>
            </Link>
            </div>
            </div>
          </NavDropdown.Item>
        </NavDropdown>
      </Container>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav style={{ paddingLeft: '5em' }}>
          <Nav.Link
            href='#link'
            as={Link}
            to='/InquiryComponent'
            className='nav-links'
          >
            INQUIRY
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
