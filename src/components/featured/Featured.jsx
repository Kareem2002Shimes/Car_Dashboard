import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import BoltIcon from "@mui/icons-material/Bolt";
import "./Featured.scss";
const Featured = ({ title, percentage, backgroundColor, textColor }) => {
  return (
    <div
      className="featured flex-center"
      style={{ backgroundColor: title === "energy" ? "#a162f7" : "white" }}
    >
      <div className="top flex-center">
        <div
          className="iconContainer flex-center"
          style={{
            backgroundColor,
          }}
        >
          {title === "energy" ? (
            <BoltIcon className="icon" />
          ) : title === "range" ? (
            <img src="/images/rangeIcon.svg" className="icon" />
          ) : title === "break fluid" ? (
            <img src="/images/breakFluidIcon.svg" className="icon" />
          ) : (
            title === "tire wear" && (
              <img src="/images/tireWearIcon.svg" className="icon" />
            )
          )}
        </div>
        <div
          className="title"
          style={{ color: title === "energy" ? "white" : "black" }}
        >
          {title}
        </div>
      </div>
      <div className="bottom">
        <CircularProgressbar
          value={percentage}
          text={percentage === 52 ? `${157}k%` : `${percentage}%`}
          strokeWidth={9}
          circleRatio={0.7}
          styles={{
            trail: {
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
              stroke: title === "energy" ? "#B37EFC" : "#F4F5F9",
            },
            path: {
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
              stroke: textColor,
            },
            text: {
              fill: title === "energy" ? "white" : "black",
            },
          }}
        />
      </div>
    </div>
  );
};

export default Featured;
