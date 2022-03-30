import logo from './logo.svg';
import './App.css';
import {Navbar} from './Component/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Component/Home/Home';
import { Flight } from './Component/Flight/Flight';
import {Airport} from './Component/Airport/Airport';
import { Attraction } from './Component/Attraction/Attraction';

import {Car} from './Component/Car/Car';
import {FlightHotel} from './Component/FlightHotel/FlightHotel'

function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/airport'} element={<Airport/>}/>
       
        <Route path={'/car'} element={<Car/>}/>
        <Route path={'/attraction'} element={<Attraction/>}/>
       
        <Route path={'/flight'} element={<Flight/>}/>
        <Route path={'/flighthotel'} element={<FlightHotel/>}/>
        
       


      </Routes>

      
      
    </div>
  );
}

export default App;
