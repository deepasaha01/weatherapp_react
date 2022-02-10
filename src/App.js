import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import SearchForm from "./SearchForm";
import WeatherDescription from "./WeatherDescription";
import WeatherOverview from "./WeatherOverview";

export default function App() {
  return (
    <div className="App">
      <SearchForm />
      <WeatherDescription />
      <WeatherOverview />
    </div>
  );
}
