import React from "react";
import "./BarChart.scss";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const Chart = () => {
  const data = [
    {
      name: "1 PM",
      num: 100,
    },
    {
      name: "2 PM",
      num: 104,
    },
    {
      name: "3 PM",
      num: 157,
    },
    {
      name: "4 PM",
      num: 102,
    },
    {
      name: "5 PM",
      num: 90,
    },
    {
      name: "6 PM",
      num: 80,
    },
    {
      name: "7 PM",
      num: 70,
    },
  ];

  return (
    <div className="barChart">
      <div className="top">
        <h2 className="title">
          <span>Miles</span> Statistics
        </h2>

        <div className="content">
          <ul>
            <li className="active">
              <span>Day</span>
            </li>
            <li>
              <span>Week</span>
            </li>
            <li>
              <span>Month</span>
            </li>
          </ul>
          <span>256 Miles</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="60%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" style={{ fill: "#808191" }} />
          <Tooltip />
          <Bar dataKey="num" fill="#2884FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
