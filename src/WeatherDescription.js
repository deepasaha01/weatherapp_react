import React from "react";
import "./WeatherDescription.css";

export default function WeatherDescription(props) {
  if (props.apiResponse && props.apiResponse.status === 200) {
    return (
      <div className="WeatherDescription">
        <ul>
          <li>
            <h1>{props.apiResponse.data.name}</h1>
          </li>
          <li className="capitalize">
            {props.apiResponse.data.weather[0].description}
          </li>
        </ul>
      </div>
    );
  } else {
    return <div className="WeatherDescription"></div>;
  }
}
