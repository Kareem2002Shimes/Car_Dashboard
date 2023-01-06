import React, { useState } from "react";
import "./Booking.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import BookedCar from "../../components/bookedCar/BookedCar";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
const Booking = () => {
  const [carData, setCarData] = useState([
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car1.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car2.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car3.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car4.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car5.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car1.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car2.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car3.svg",
      price: 400,
    },
    {
      name: "porshe 718 cayman S",
      brand: "Coupe",
      imgSrc: "/images/cars/car4.svg",
      price: 400,
    },
  ]);
  return (
    <div className="home">
      <Sidebar />
      <div className="bookingContainer">
        <Navbar />
        <div className="mainHeading">
          <h2>Booking</h2>
          <div className="content flex">
            <div className="left flex">
              <ArrowDropDownOutlinedIcon className="icon1" />
              <select>
                <option>New</option>
                <option>Uses</option>
              </select>
              <ArrowDropDownOutlinedIcon className="icon2" />
              <select>
                <option>Toyota</option>
                <option>Honda</option>
              </select>
            </div>
            <div className="right flex">
              <div className="rightIcon flex">
                <GridViewOutlinedIcon />
              </div>
              <div className="rightIcon flex">
                <img src="/images/editIcon.svg" alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="cars ">
          {carData.map((car) => (
            <BookedCar
              name={car.name}
              brand={car.brand}
              imgSrc={car.imgSrc}
              price={car.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
