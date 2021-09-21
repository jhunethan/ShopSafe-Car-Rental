import React from "react";
import "./Confirmation.css";

export default function Confirmation(props) {
  const { setSelectedCar, setConfirmationDetails } = props
  const { fullname, email, startdate, enddate, contact, totalPrice, days } =
    props.confirmationDetails;
  const { make, model, price, colour, seats, doors } =
    props.confirmationDetails;
  return (
    <div className="Confirmation__container">
      <h1>Order Confirmation</h1>
      <p>Thank you for ordering. Here is a reminder of your purchase.</p>
      <ul className="list-group">
        <li className="list-group-item">{fullname}</li>
        <li className="list-group-item">{email}</li>
        <li className="list-group-item">{contact}</li>
        <li className="list-group-item">
          {startdate} to {enddate}
        </li>
        <li className="list-group-item">
          {make} {model}
        </li>
        <li className="list-group-item">Colour: {colour}</li>
        <li className="list-group-item">{seats} seats</li>
        <li className="list-group-item">{doors} doors</li>

        <li className="list-group-item">£{price} per day</li>
        <li className="list-group-item">Duration: {days} days</li>
      </ul>
      <h2>Total Price: £{totalPrice}</h2>

      <button className="btn btn-primary" onClick={()=>{
        setSelectedCar() ;setConfirmationDetails();
      }}>Return to Homepage</button>
    </div>
  );
}
