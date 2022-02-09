import React from "react";
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";
import WeatherOverview from "./WeatherOverview";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App mt-4 ms-5">
      <h1 className="mb-4">Weather App</h1>
      <SearchForm />
      <WeatherOverview />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
