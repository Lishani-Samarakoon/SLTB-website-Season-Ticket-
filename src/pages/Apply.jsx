import React from "react";
import { Link } from "react-router-dom";
import "./Apply.css";

export default function Apply() {
  return (
    <div className="applyPage">
      <div className="applyCard">
        <h1 className="applyTitle">Apply for Season Ticket</h1>
        <p className="applySub">Choose your application type</p>

        <div className="applyOptions">
          <Link to="/fill-application" className="applyOption">
            <h3>Fill Application</h3>
            <p>Complete your application form with personal and route details</p>
          </Link>

          <Link to="/upload-photo" className="applyOption">
            <h3>Upload Photo</h3>
            <p>Upload your photo for the season ticket</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
