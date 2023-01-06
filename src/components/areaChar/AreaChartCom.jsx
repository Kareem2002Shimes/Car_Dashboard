import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./AreaChartCom.scss";
const data = [
  {
    name: "7 am",
    uv: 4000,
  },
  {
    name: "9 am",
    uv: 3000,
  },
  {
    name: "11 am",
    uv: 2000,
  },
  {
    name: "1 pm",
    uv: 2780,
  },
  {
    name: "3 pm",
    uv: 1890,
  },
  {
    name: "5 pm",
    uv: 2390,
  },
  {
    name: "7 pm",
    uv: 3490,
  },
  {
    name: "9 pm",
    uv: 3490,
  },
];

const AreaChartCom = () => {
  return (
    <div className="areaChart">
      <div className="top">
        <h2 className="title">
          <span>Car</span> Statistics
        </h2>
        <div className="content">
          <span>20 February</span>
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
        </div>
      </div>
      <ResponsiveContainer width="100%" height="60%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff764c" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#ff7e07" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />

          <Tooltip />
          <Area
            id="colorUv"
            type="monotone"
            dataKey="uv"
            stroke="#FF764C"
            fill="url(#colorUv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartCom;
