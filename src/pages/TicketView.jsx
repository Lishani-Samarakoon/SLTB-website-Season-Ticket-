import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TicketView.css";

export default function TicketView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const ticket = {
    id,
    ticketNumber: "SLTB-2024-001",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    route: "Colombo - Kandy",
    holder: "John Doe",
    email: "john@example.com",
  };

  return (
    <div className="ticketViewPage">
      <div className="ticketViewCard">
        <button onClick={() => navigate("/my-tickets")} className="backBtn">
          ← Back
        </button>

        <h1 className="ticketViewTitle">Season Ticket Details</h1>

        <div className="ticketDetails">
          <div className="detailItem">
            <label>Ticket Number</label>
            <p>{ticket.ticketNumber}</p>
          </div>

          <div className="detailItem">
            <label>Status</label>
            <p className={`status ${ticket.status.toLowerCase()}`}>
              {ticket.status}
            </p>
          </div>

          <div className="detailItem">
            <label>Ticket Holder</label>
            <p>{ticket.holder}</p>
          </div>

          <div className="detailItem">
            <label>Email</label>
            <p>{ticket.email}</p>
          </div>

          <div className="detailItem">
            <label>Route</label>
            <p>{ticket.route}</p>
          </div>

          <div className="detailItem">
            <label>Valid Period</label>
            <p>
              {ticket.startDate} to {ticket.endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
