import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {

  const [data,setData] = useState({});
  const [location,setLocation] = useState('');

  const searchLocation = (event) => {
        if (event.key === 'Enter') {
          axios.get(url).then((response) => {
            setData(response.data);
            // console.log(response.data);
          })
          setLocation('');
        }
  } 

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ceef75abd8f45ded02bcf283e8f5c7fc`;

  return (
    <div className="App">
    <div className='search'>
      <input type='text' placeholder='Enter City' value={location} onChange={event => setLocation(event.target.value)} onKeyDown={searchLocation}/>
    </div>
      <div className='container'>
        <div className='top'>
          <div className='locTemp'>
          <div className='loc'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
           {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null} 
          </div>
          </div>
          <div className='desc'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.main !== undefined && <div className='bottom'>
          <div className='feels'>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
           <p>Humidity</p>
          </div>
          <div className='windSpeed'>
          {data.wind ? <p className='bold'>{Math.trunc(data.wind.speed.toFixed()*3.6)} km/h</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
