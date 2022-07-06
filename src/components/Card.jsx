import React from "react";

const Card = ({ data }) => {
  const { main, name, sys, weather } = data;
  return (
    <div className="card-group w-50 m-auto mt-5 text-center ">
      <div className="card bg-success text-light">
        <img
          className="card-img-top m-auto "
          src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt="Card image cap"
          style={{ width: "50px" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {name} {sys.country}
          </h5>
          <p className="card-text">
            {(main.temp + -272.15).toFixed(2) + " °C"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
