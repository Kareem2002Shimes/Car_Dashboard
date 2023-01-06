import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search or type" />
          <img src="/images/searchIcon.svg" className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src="/images/avatar.svg" className="avatar" alt="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
