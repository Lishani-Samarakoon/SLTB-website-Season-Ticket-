import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="logoBox">SLTB</div>
        <div className="brandText">
          <div className="brandTitle">Sri Lanka Transport Board</div>
          <div className="brandSub">Season Ticket Online Application</div>
        </div>
      </div>
      <nav className="nav">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/apply" className="navLink">Apply Now</Link>
        <Link to="/my-tickets" className="navLink">My Tickets</Link>
        <Link to="/login" className="navButton">Login</Link>
      </nav>
    </header>
  );
}
