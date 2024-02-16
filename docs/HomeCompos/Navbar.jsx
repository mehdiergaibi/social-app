import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { TiMessage } from "react-icons/ti";
import { RiNotification3Line } from "react-icons/ri";
import "./homestyle/navbar.css";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="nav">
      <div className="left-nav">
          <img className="logo" src="/assets/mehdis.png" />{" "}
        
      </div>
      <div className="right-nav">
          <RiAccountCircleLine className="icon accnt-icon"/>
          <TiMessage  className="icon" />

          <RiNotification3Line className="icon" />
        <div className="account">
          <img className="account-image" src="/assets/campus.png" />
        </div>
      </div>
      <div className="search">
          <input
            className="search-bar"
            placeholder="Search for friens,videos or posts"
          />
          <CiSearch className="search-icon" />
        </div>
    </div>
  );
}

export default Navbar;
