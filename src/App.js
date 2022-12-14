import './App.css';
import React, { useEffect } from 'react';
import WeatherCard from './components/weather/weathercard'


function App() {
  const [personLocation, setPersonLocation] = React.useState(null)

  useEffect(() => {

    const CurrentLocation = fetch('https://ipapi.co/json/');

    Promise.all([CurrentLocation])
    .then(async(response) => {
      const locationResonse = await response[0].json();
      setPersonLocation({...locationResonse})
    })
    .catch((err) => console.log(err))

  },[])


  return (
    <div className='main-body'>
      {personLocation  && <WeatherCard loc={personLocation} />}
    </div>
  );
}

export default App;
