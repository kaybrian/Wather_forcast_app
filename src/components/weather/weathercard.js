import React from "react";
import { OPEN_WEATHER_URL } from '../../api'
import { open_weather_api } from '../../api_keys'
import Forecast from './forecast'

const WeatherCard = ({ loc }) => {
    const [currentWeather, setCurrentWeather] = React.useState(null)

    const timeToday = new Date().toLocaleDateString();



    React.useEffect(() => {
        const lon = loc.longitude
        const lat = loc.latitude
        const currentWetherResponse = fetch(`${OPEN_WEATHER_URL}/weather?lat=${lat}&lon=${lon}&appid=${open_weather_api}&units=metric`)

        Promise.all([currentWetherResponse])
            .then(async (response) => {
                const weatherResponse = await response[0].json();


                setCurrentWeather({ ...weatherResponse })
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="weather-side">
                <div className="weather-gradient"></div>
                <div className="date-container">
                    <h2 className="date-dayname">
                        {loc.country_name}
                    </h2><span className="date-day">Date: {timeToday}
                    </span>
                    <span className="location">
                        {loc.city}, {loc.country}
                    </span>
                </div>
                <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                    <h1 className="weather-temp">{currentWeather && Math.round(currentWeather.main.temp)}°C</h1>
                    <h3 className="weather-desc">{currentWeather && currentWeather.weather[0].description}</h3>
                    {currentWeather && <img src={`icons/${currentWeather.weather[0].icon}.png`} alt='weather' className='weather_icon' />}

                </div>
            </div>
            <div className="info-side">
                <div className="today-info-container">
                    <div className="today-info">
                        <div className="precipitation"> <span className="title">Cloudiness</span><span
                            className="value">{currentWeather && currentWeather.clouds.all} %</span>
                            <div className="clear"></div>
                        </div>
                        <div className="humidity"> <span className="title">HUMIDITY</span><span
                            className="value">{currentWeather && currentWeather.main.humidity} %</span>
                            <div className="clear"></div>
                        </div>
                        <div className="wind"> <span className="title">WIND</span><span className="value">
                            {currentWeather && currentWeather.wind.speed} km/h
                        </span>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
                <div className="location-container">
                    <button className="location-button"> <i data-feather="map-pin"></i><span>Predictions for the Next
                        Hours</span></button>
                </div>

                <Forecast />
                

            </div>
        </div>
    )
}

export default WeatherCard;