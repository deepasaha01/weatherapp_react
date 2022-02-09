import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherOverview from "./WeatherOverview";

export default function SearchForm() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");

  let [response, setResponse] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (city) {
      function handleResponse(response) {
        setResponse(response);
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6bf549ec646257615a2c5390e834788&units=metric`;
      axios.get(url).then(handleResponse);
    } else {
      setText("Please type in a city 🌆");
    }
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a city"
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
      <p className="mt-3">{text}</p>

      <WeatherOverview apiResponse={response} />
    </div>
  );
}
