
import React from "react";
import "./Payment.css";

export default function Payment() {
  return (
    <div className="payPage">
      <div className="payCard">
        <h1 className="payTitle">Make Payment</h1>
        <p className="paySub">Enter your card information to pay for your season ticket.</p>

        <div className="amountBox">
          <div className="amountLabel">Total Amount</div>
          <div className="amountValue">Rs. 1,210.00</div>
        </div>

        <label className="payLabel">Name on Card</label>
        <input className="payInput" type="text" placeholder="Enter name as on card" />

        <label className="payLabel">Card Number</label>
        <input className="payInput" type="text" placeholder="1234 5678 9012 3456" />

        <div className="grid2">
          <div>
            <label className="payLabel">Expiry Date</label>
            <input className="payInput" type="text" placeholder="MM/YY" />
          </div>

          <div>
            <label className="payLabel">CVV</label>
            <input className="payInput" type="text" placeholder="123" />
          </div>
        </div>

        <label className="payLabel">Email Address</label>
        <input className="payInput" type="email" placeholder="example@gmail.com" />

        <button className="payBtn">Pay Rs. 1,210.00</button>
      </div>
    </div>
  );
}
