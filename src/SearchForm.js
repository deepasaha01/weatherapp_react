import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchForm.css";
import WeatherDescription from "./WeatherDescription";
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
      <form action="" className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8 px-0">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-4 pe-0">
            <div className="btn-group" role="group">
              <button type="submit" className="btn btn-primary">
                Search
              </button>
              <button type="button" className="btn btn-success">
                Current
              </button>
            </div>
          </div>
        </div>
      </form>
      <p className="mt-3">{text}</p>
      <WeatherDescription apiResponse={response} />
      <WeatherOverview apiResponse={response} />
    </div>
  );
}
