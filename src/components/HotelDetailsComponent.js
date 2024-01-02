import React from 'react';
import {useParams} from 'react-router-dom';
import {getHotel} from '../hotelData';
import {HotelsCardComponent} from './HotelsCardComponent';
import { HotelsHeaderComponent } from './HotelsHeaderComponent';
import { RestaurantHeaderComponent } from './RestaurantHeaderComponent';
import { AsideComponent } from './AsideComponent';
import { RestaurantCardsComponent } from './RestaurantCardsComponent'
import HotelFactCardComponent from './HotelFactCardComponent';
import FoodFactCardComponent from './FoodFactCardComponent';


// Creating a funciton component for hotelDetails
export const HotelDetails = () => {
  // fetching the hotel by id from the array
  const { id } = useParams();

// creating a state variable that contains the hotel information by its id and passes 
//it to other components via the prop propsData
 const state = {
    myData: getHotel(id)
    };
//Passing in props to the other components
  return (
    <div>
      <HotelsHeaderComponent propsData={state.myData} />
      <HotelsCardComponent propsData={state.myData} />
      <HotelFactCardComponent propsData={state.myData}  />
      <RestaurantHeaderComponent propsData={state.myData} />
      <AsideComponent propsData={state.myData} />
      <RestaurantCardsComponent propsData={state.myData} />
      <FoodFactCardComponent propsData={state.myData} />
    </div>
 
  );
};
