import React from "react";
import "./Sidebar.scss";
import GridViewIcon from "@mui/icons-material/GridView";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="/images/logo.svg" />
          <h1>Motiv.</h1>
        </div>
      </div>
      <div className="center">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li>
            <img src="/images/assetsIcon.svg" />
            <span>Assets</span>
          </li>
          <Link to="/booking" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarFilledOutlinedIcon className="icon" />
              <span>Booking</span>
            </li>
          </Link>
          <li>
            <ShoppingBagOutlinedIcon className="icon" />
            <span>Sell Cars</span>
          </li>
          <li>
            <ShoppingCartOutlinedIcon className="icon" />
            <span>Buy Cars</span>
          </li>
          <li>
            <img src="/images/servicesIcon.svg" />
            <span>Services</span>
          </li>
          <li>
            <EventNoteOutlinedIcon className="icon" />
            <span>Calender</span>
          </li>
          <li>
            <ChatOutlinedIcon className="icon" />
            <span>Messages</span>
          </li>

          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
