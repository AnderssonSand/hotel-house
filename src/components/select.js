import { useState } from 'react';
import ReactDOM from 'react-dom/client';


function Select() {
// creating the ustaState hook and passing the variables myHotel to set a new state to myHotel
  const [myHotel, setMyHotel] = useState('');

  // creating an arrow function that passes events to target the value that is when the user is
  // chossing an option in the select bar
  const handleChange = (event) => {
    setMyHotel(event.target.value);
  };

  return (
  <div>
      {/* Passing in our function handleChange and the value myHotel  */}
      <select style={{height: '20%'}} className='pickupSelect' value={myHotel} onChange={handleChange}>
        <option value='BeachHouse'>
          BeachHouse
        </option>
        <option className='pickupValue' value='BohemianHouse'>
          BohemianHouse
        </option>
        <option className='pickupValue' value='CityHouse'>
          CityHouse
        </option>
        <option className='pickupValue' value='IceHouse'>
          IceHouse
        </option>
        <option className='pickupValue' value='NatureHouse'>
          NatureHouse
        </option>
        <option className='pickupValue' value='RomanceHouse'>
          RomanceHouse
        </option>
        <option className='pickupValue' value='SeasideHouse'>
          SeasideHouse
        </option>
      </select>
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Select />);

export default Select;
