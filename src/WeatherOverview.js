import React from "react";
import "./WeatherOverview.css";

export default function WeatherOverview(props) {
  if (props.apiResponse && props.apiResponse.status === 200) {
    return (
      <div className="row align-items-center">
        <div className="col-8">
          <div className="clear fix weather-temperature">
            <img
              src={`http://openweathermap.org/img/w/${props.apiResponse.data.weather[0].icon}.png`}
              alt={props.apiResponse.data.weather[0].description}
              className="float-left"
            />
            <div className="float-left temperature">
              <strong>{Math.round(props.apiResponse.data.main.temp)}</strong>
              <span className="units">
                <a href="/" className="active">
                  °C |
                </a>
                <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity:{props.apiResponse.data.main.humidity}%</li>
            <li>Wind:{Math.round(props.apiResponse.data.wind.speed)}m/s</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return <div className="WeatherOverview"></div>;
  }
}
