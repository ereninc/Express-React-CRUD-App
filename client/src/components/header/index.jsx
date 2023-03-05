import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        User Management System
      </Link>
      <div className="header-right">
        <NavLink to="/">Users</NavLink>
        <NavLink to="/add">Add User</NavLink>
      </div>
    </div>
  );
}
