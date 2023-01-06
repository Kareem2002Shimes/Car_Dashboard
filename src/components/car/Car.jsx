import React from "react";
import "./Car.scss";

const Car = ({ name, price, num, percentage, imgSrc, backgroundColor }) => {
  return (
    <div className="carContainer" style={{ backgroundColor }}>
      <div className="top flex ">
        <img src="/images/icon1ForCar.svg" alt="icon" className="icon" />
        <span className="text">{percentage}% Recommend</span>
      </div>
      <div className="center">
        <img src={imgSrc} alt="car-img" />
      </div>
      <div className="details">
        <h2 className="carName">{name}</h2>
        <div className="bottom flex">
          <ul className="flex">
            <li>
              <img src="/images/icon2ForCar.svg" alt="icon" className="icon" />
            </li>
            <li>
              <span>{num}K</span>
            </li>
            <li>
              <img src="/images/icon3ForCar.svg" alt="icon" className="icon" />
            </li>
            <li>
              <img src="/images/icon4ForCar.svg" alt="icon" className="icon" />
            </li>
          </ul>
          <span>${price}/h</span>
        </div>
      </div>
    </div>
  );
};

export default Car;
