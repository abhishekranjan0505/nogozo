import React from "react";
import { Link } from "react-router-dom";
import userIcon from "../../assets/Header/user.png";
import classes from "./Header.module.css";

const header = () => {
  return (
    <div className={classes.Root}>
      <div className={classes.Header}>
        <div className={classes.HeaderUser}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <h1>NOGOZO</h1>
          </Link>
          <img src={userIcon} alt="" />
        </div>
        <input placeholder="Search Items" type="text" />
      </div>
    </div>
  );
};

export default header;
