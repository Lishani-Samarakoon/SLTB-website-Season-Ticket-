import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MyTickets.css";

export default function MyTickets() {
  const [tickets] = useState([
    {
      id: 1,
      ticketNumber: "SLTB-2024-001",
      status: "Active",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      route: "Colombo - Kandy",
    },
    {
      id: 2,
      ticketNumber: "SLTB-2023-089",
      status: "Expired",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      route: "Colombo - Matara",
    },
  ]);

  return (
    <div className="ticketsPage">
      <div className="ticketsCard">
        <h1 className="ticketsTitle">My Season Tickets</h1>
        <p className="ticketsSub">View and manage your season tickets</p>

        <div className="ticketsList">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <Link
                key={ticket.id}
                to={`/ticket/${ticket.id}`}
                className="ticketItem"
              >
                <div className="ticketHeader">
                  <h3>{ticket.ticketNumber}</h3>
                  <span className={`status ${ticket.status.toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </div>
                <p className="ticketRoute">{ticket.route}</p>
                <p className="ticketDates">
                  {ticket.startDate} to {ticket.endDate}
                </p>
              </Link>
            ))
          ) : (
            <p className="noTickets">No tickets found</p>
          )}
        </div>
      </div>
    </div>
  );
}
