import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <Link to="/profile">
        <p>Profile</p>
      </Link>
      <hr />
      <Link to="/post">
        <p>Posts</p>
      </Link>
      <hr />
      <Link to="/gallery">
        <p>Gallery</p>
      </Link>
      <hr />
      <Link to="/todo">
        <p>Todo</p>
      </Link>
    </div>
  );
}

export default SideBar;
