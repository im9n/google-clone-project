import React from "react";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search"

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/about">Store</Link>
        </div>
        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt=""
        />
        <div className="home__input--container">
          <Search />  
        </div>
      </div>
    </div>
  );
};

export default Home;
