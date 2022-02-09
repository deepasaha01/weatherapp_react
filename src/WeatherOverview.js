import React from "react";

export default function WeatherOverview(props) {
  if (props.apiResponse && props.apiResponse.status === 200) {
    return (
      <div className="WeatherOverview">
        <ul>
          <li>Temperature: {Math.round(props.apiResponse.data.main.temp)}°C</li>
          <li>Description: {props.apiResponse.data.weather[0].description}</li>
          <li>Humidity: {props.apiResponse.data.main.humidity}%</li>
          <li>Wind: {Math.round(props.apiResponse.data.wind.speed)}m/s</li>
          <li>
            <img
              src={`http://openweathermap.org/img/w/${props.apiResponse.data.weather[0].icon}.png`}
              alt={props.apiResponse.data.weather[0].description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="WeatherOverview"></div>;
  }
}
