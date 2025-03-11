import React, { useState } from "react";
import './Ticket.css'

function TicketGenerator() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
  const [ticket, setTicket] = useState(null);

  const generateTicket = () => {
    if (!name || !email) {
      alert("Please enter your name, email and github profile.");
      return;
    }
    setTicket({
      name,
      email,
      conference: "Tech Summit 2025",
      ticketId: Math.random().toString(36).substr(2, 9),
    });
  };

  return (
    <div className="container">
      <h2>Conference Ticket Generator</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      type="text"
      placeholder="Your Github Profile"
      value={github}
      onChange={(e) => setGithub(e.target.value)}
      />
      <button onClick={generateTicket}>Generate Ticket</button>

      {ticket && (
        <div className="ticket">
          <h3>🎟 Your Ticket 🎟</h3>
          <p><strong>Name:</strong> {ticket.name}</p>
          <p><strong>Email:</strong> {ticket.email}</p>
          <p><strong>Github:</strong> {ticket.github}</p>
          <p><strong>Conference:</strong> {ticket.conference}</p>
          <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>
        </div>
      )}
    </div>
  );
}

export default TicketGenerator;
