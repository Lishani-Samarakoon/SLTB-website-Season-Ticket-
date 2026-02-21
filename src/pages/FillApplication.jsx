
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FillApplication.css";
import { submitApplication } from "../utils/api";

export default function FillApplication() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    nic: "",
    dob: "",
    mobile: "",
    email: "",
    startLocation: "",
    endLocation: "",
    routeNumber: "",
    seasonPeriod: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  async function handleNext(e) {
    e.preventDefault();

  
    const requiredFields = [
      "fullName",
      "nic",
      "dob",
      "mobile",
      "email",
      "startLocation",
      "endLocation",
      "routeNumber",
      "seasonPeriod",
    ];

    const empty = requiredFields.find((key) => !form[key].trim());
    if (empty) {
      setError("Please fill all fields before going to payment.");
      return;
    }

    setLoading(true);
    try {
      await submitApplication(form);
      navigate("/payment");
    } catch (err) {
      setError("Failed to submit application. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fillPage">
      <div className="fillCard">
        <h1 className="fillTitle">Fill Application</h1>
        <p className="fillSub">Enter your personal details and route information.</p>

        {error && <div className="formError">{error}</div>}

        <form onSubmit={handleNext}>
          <h3 className="sectionTitle">Personal Details</h3>

          <div className="grid2">
            <div className="field">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>NIC Number</label>
              <input
                name="nic"
                type="text"
                placeholder="Ex: 200012345678"
                value={form.nic}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Date of Birth</label>
              <input
                name="dob"
                type="date"
                value={form.dob}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Mobile Number</label>
              <input
                name="mobile"
                type="text"
                placeholder="07XXXXXXXX"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <h3 className="sectionTitle">Route Details</h3>

          <div className="grid2">
            <div className="field">
              <label>Start Location</label>
              <input
                name="startLocation"
                type="text"
                placeholder="Ex: Colombo"
                value={form.startLocation}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>End Location</label>
              <input
                name="endLocation"
                type="text"
                placeholder="Ex: Kandy"
                value={form.endLocation}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Route Number</label>
              <select
                name="routeNumber"
                value={form.routeNumber}
                onChange={handleChange}
              >
                <option value="">Select Route</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="100">100</option>
              </select>
            </div>

            <div className="field">
              <label>Season Period</label>
              <select
                name="seasonPeriod"
                value={form.seasonPeriod}
                onChange={handleChange}
              >
                <option value="">Select Period</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
            </div>
          </div>

          <button type="submit" className="nextBtn" disabled={loading}>
            {loading ? "Submitting..." : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
