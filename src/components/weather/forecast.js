const Forecast = () => {
    return (
        <div className="week-container">
            <ul className="week-list">
                <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name"
                    id="day1">MOnday</span><span
                        className="day-temp">{0}°C</span></li>
                <li><i className="day-icon" data-feather="cloud"></i><span className="day-name" id="day2"></span><span
                    className="day-temp">{0}°C</span></li>
                <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name" id="day3"></span><span
                    className="day-temp">{0}°C</span></li>
                <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name" id="day4"></span><span
                    className="day-temp">{0}°C</span></li>
                <div className="clear"></div>
            </ul>
        </div>
    )
}

export default Forecast;