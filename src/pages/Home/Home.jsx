import React, { useState } from "react";
import "./Home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import BarChart from "../../components/barChart/BarChart";
import AreaChartCom from "../../components/areaChar/AreaChartCom";
import Car from "../../components/car/Car";

const Home = () => {
  const [featuredData, setFeaturedData] = useState([
    {
      title: "energy",
      percentage: 45,
      backgroundColor: "#A66FF0",
      textColor: "white",
    },
    {
      title: "range",
      percentage: 52,
      backgroundColor: "rgba(255, 126, 134, 0.1)",
      textColor: "#FF7E86",
    },
    {
      title: "break fluid",
      percentage: 9,
      backgroundColor: "rgba(161, 98, 247, 0.1)",
      textColor: "#A162F7",
    },
    {
      title: "tire wear",
      percentage: 25,
      backgroundColor: "rgba(246, 204, 13, 0.1)",
      textColor: "#F6CC0D",
    },
  ]);
  const [carData, setCarData] = useState([
    {
      percentage: 64,
      name: "mini cooper",
      price: 32,
      num: 132,
      imgSrc: "/images/car1.svg",
      backgroundColor: "#E1DFA4",
    },
    {
      percentage: 74,
      name: "porsche 911 carrera",
      price: 28,
      num: 130,
      imgSrc: "/images/car2.svg",
      backgroundColor: "#E3ECF1",
    },
    {
      percentage: 74,
      name: "porsche 911 carrera",
      price: 28,
      num: 130,
      imgSrc: "/images/car3.svg",
      backgroundColor: "#F4E3E5",
    },
  ]);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="featuredBox">
          {featuredData.map((chart) => (
            <Featured
              key={chart.title}
              title={chart.title}
              percentage={chart.percentage}
              backgroundColor={chart.backgroundColor}
              textColor={chart.textColor}
            />
          ))}
        </div>
        <div className="chartBox">
          <BarChart />
          <AreaChartCom />
        </div>
        <div className="cars">
          {carData.map((car) => (
            <Car
              percentage={car.percentage}
              price={car.price}
              num={car.num}
              name={car.name}
              imgSrc={car.imgSrc}
              backgroundColor={car.backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
