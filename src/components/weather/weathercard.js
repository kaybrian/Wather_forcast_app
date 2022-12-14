import React from "react";



const WeatherCard = ({loc}) => {


    return (
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="date-container">

                    <h2 class="date-dayname">
                        Uganda
                    </h2><span class="date-day">Time: 12:00 PM</span><i class="location-icon"
                        data-feather="map-pin"></i><span class="location">Kgali,
                            Rw</span>
                </div>
                <div class="weather-container"><i class="weather-icon" data-feather="sun"></i>
                    <h1 class="weather-temp">23°C</h1>
                    <h3 class="weather-desc">Sunny</h3>
                </div>
            </div>
            <div class="info-side">
                <div class="today-info-container">
                    <div class="today-info">
                        <div class="precipitation"> <span class="title">Cloudiness</span><span
                            class="value">20 %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="humidity"> <span class="title">HUMIDITY</span><span
                            class="value">8 %</span>
                            <div class="clear"></div>
                        </div>
                        <div class="wind"> <span class="title">WIND</span><span class="value">3
                            km/h</span>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="location-container">
                    <button class="location-button"> <i data-feather="map-pin"></i><span>Predictions for the Next
                        Hours</span></button>
                </div>

                {/* <div class="week-container">
          <ul class="week-list">
            <li class="active"><i class="day-icon" data-feather="sun"></i><span class="day-name"
              id="day1">{{ get_location.current_time }}</span><span
                class="day-temp">{{ weather.day1.temp | floatformat:0}}°C</span></li>
            <li><i class="day-icon" data-feather="cloud"></i><span class="day-name" id="day2"></span><span
              class="day-temp">{{ weather.day2.temp | floatformat:0}}°C</span></li>
            <li><i class="day-icon" data-feather="cloud-snow"></i><span class="day-name" id="day3"></span><span
              class="day-temp">{{ weather.day3.temp | floatformat:0}}°C</span></li>
            <li><i class="day-icon" data-feather="cloud-rain"></i><span class="day-name" id="day4"></span><span
              class="day-temp">{{ weather.day4.temp | floatformat:0}}°C</span></li>
            <div class="clear"></div>
          </ul>
        </div> */}

            </div>
        </div>
    )
}

export default WeatherCard;