import React, { useState } from "react";
import "./BookedCar.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
const BookedCar = ({ name, price, imgSrc, brand }) => {
  const [addHeart, setAddHeart] = useState("");
  return (
    <div className="bookedContainer">
      <div className="top">
        <div className="header">
          <h3>{name}</h3>
          {addHeart ? (
            <FavoriteIcon
              className={`heart-icon ${addHeart ? "activeHeart" : ""}`}
              onClick={() => setAddHeart((prev) => !prev)}
            />
          ) : (
            <FavoriteBorderOutlinedIcon
              className={`heart-icon ${addHeart ? "activeHeart" : ""}`}
              onClick={() => setAddHeart((prev) => !prev)}
            />
          )}
        </div>
        <span>{brand}</span>
      </div>
      <div className="center">
        <img src={imgSrc} alt="car-img" />
      </div>
      <div className="bottom flex">
        <ul className="flex">
          <li className="flex">
            <img src="/images/user.svg" alt="user-img" />
            <span>4</span>
          </li>
          <li className="flex">
            <img src="/images/iconForbookedCar.svg" alt="user-img" />
            <span>Manual</span>
          </li>
        </ul>
        <p>
          ${price}
          <span>/d</span>
        </p>
      </div>
    </div>
  );
};

export default BookedCar;
