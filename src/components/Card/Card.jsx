import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Card = () => {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3cea5195bf695995ba3d7611263cf82d`
      )
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  });

  const inputValue = (e) => {
    e.preventDefault();
    console.log(e.value);
    console.log(e.target.value);

    setCityName(e.target.value);
  };

  return (
    <div>
      <div>
        <form action="" onSubmit={inputValue}>
          <input type="text" />
          <button type="submit">Buton</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
