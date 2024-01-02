import { useState } from 'react';
import './index.css';
import NavBarComponent from './components/NavBarComponent';
import { HotelView } from './components/HotelViewComponent';
import { HotelDetails } from './components/HotelDetailsComponent';
import { Inquiry } from './components/InquiryComponent';
import { Book } from './components/BookComponent';
import { BookingConfirmation } from './components/BookingConfirmation';
import { About } from './components/AboutComponent';
import { Routes, Route } from 'react-router-dom';
import { FooterComponent } from './components/FooterComponent';
import ScrollUp from './components/ScrollUp';


//Here in our app function we pass the different routes that are used in the following project
//We are using react-router-dom v6 
function App() {
  //Creating a useState with the initial value null
  const [booking, setBooking] = useState(null);

  return (
    <div className='App'>
      <ScrollUp />
      <NavBarComponent></NavBarComponent>
      {/* Here we are wrapping our route in the routes component */}
        <Routes>
        <Route
        //
          exact
          //Here we are specifying the path of the route in this case the path is targeting HotelDetails by its id to show the
          //detailspages by its different id
          path='/HotelDetailsComponent/:id'
          //The element props stores the route 
          element={<HotelDetails />}
        ></Route>
        <Route exact path='/' element={<HotelView />}>
          <Route path=':searchPhrase' element={<HotelView />} />
        </Route>
        <Route exact path='/InquiryComponent' element={<Inquiry />}></Route>
        <Route
          exact
          path='/BookComponent'
          // in the book component we pass in the function setBooking
          element={<Book setBooking={setBooking} />}
        ></Route>
        <Route
          exact
          path='/BookingConfirmation'
          //in booking confirmation we pass in the booking information sent in from the function
          element={<BookingConfirmation booking={booking} />}
        ></Route>
        <Route exact path='/AboutComponent' element={<About />}></Route>
      </Routes>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
