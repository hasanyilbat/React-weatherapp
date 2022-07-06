import axios from "axios";
import React from "react";
import { useState } from "react";
import Card from "./Card.jsx";

const WheatherInfo = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3cea5195bf695995ba3d7611263cf82d`;
  const getData = async () => {
    const response = await axios.get(url);
    const { main, name, sys, weather, id } = response.data;
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
    setWeatherData({ main, name, sys, weather, iconUrl, id });
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cityName);
    getData();
  };

  console.log(weatherData);
  return (
    <div>
      <form className="mt-5 text-center w-50 m-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="city">CITY</label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="Enter city"
            onChange={handleChange}
            value={cityName}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>

      {console.log(weatherData)}
      {weatherData && <Card data={weatherData} />}
    </div>
  );
};

export default WheatherInfo;
