import './App.css';
import React, { useEffect } from 'react';
import WeatherCard from './components/weather/weathercard'

function App() {
  const [personLocation, setPersonLocation] = React.useState(null)
  
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((response) => response.json())
      .then((data) => {
        setPersonLocation(data)
      })
      .catch((err) => {
        console.log(err)
      });

  },[])

  return (
    <WeatherCard
      loc={personLocation}
    />
  );
}

export default App;
