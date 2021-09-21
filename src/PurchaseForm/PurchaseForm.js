import React, { useState } from "react";
import "./PurchaseForm.css";

export default function PurchaseForm(props) {
  const [input, setInput] = useState({});
  const [totalPrice, setTotalPrice] = useState();
  const { setConfirmationDetails, selectedCar, setSelectedCar } = props;
  const { make, model, price, colour, seats, doors } = props.selectedCar;

  function calculatePrice() {
    const date1 = document.getElementById("InputStartDate").value;
    const date2 = document.getElementById("InputEndDate").value;
    if (!date1 || !date2) return;
    const start = new Date(date1);
    const end = new Date(date2);
    const time_difference = end.getTime() - start.getTime();
    const days_difference = time_difference / (1000 * 60 * 60 * 24);
    setInput((curr) => {
      const temp = { ...curr };
      temp["days"] = days_difference;
      temp["totalPrice"] = days_difference * price;
      return temp;
    });
    setTotalPrice(days_difference * price);
    return days_difference * price;
  }

  function validation() {
    let validation = true;
    document.getElementById("form__errors").innerHTML = "";
    if (!input["fullname"]) {
      validation = false;
      createError("Full Name required");
    }
    if (!input["email"]) {
      validation = false;
      createError("Email required");
    }
    if (input["contact"]) {
      if (isNaN(input["contact"])) {
        validation = false;
        createError("Contact number must be a number");
      }
      if ( input["contact"].length !== 11) {
        validation = false;
        createError("Contact number must be 11 digits long");
      }
    }else{
      validation = false;
      createError('Please enter a contact number')
    }

    const price = calculatePrice();

    if (!price || price <= 0) {
      validation = false;
      createError("Please enter a valid start and end date");
    }

    return validation;
  }

  function createError(message) {
    const newError = document.createElement("div");
    newError.classList.add("alert");
    newError.classList.add("alert-danger");
    newError.innerHTML = message;
    document.getElementById("form__errors").appendChild(newError);
  }

  function submit(event) {
    event.preventDefault();
    if (validation()) setConfirmationDetails({ ...input, ...selectedCar });
  }

  function formChangeHandler(input, field) {
    setInput((curr) => {
      const temp = { ...curr };
      temp[field] = input;
      return temp;
    });
  }

  return (
    <section className="PurchaseForm__container">
      <h1 className="PurchaseForm__header">Purchase Form</h1>
      <div className="PurchaseForm__error_container" id="form__errors"></div>
      <ul className="list-group ">
        <li className="list-group-item">
          {make} {model}
        </li>
        <li className="list-group-item">Colour: {colour}</li>
        <li className="list-group-item">{seats} seats</li>
        <li className="list-group-item">{doors} doors</li>

        <li className="list-group-item">£{price} per day</li>
      </ul>
      <form className="PurchaseForm__section" onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="InputFullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="InputFullName"
            placeholder="Enter your full name"
            onChange={(event) =>
              formChangeHandler(event.target.value, "fullname")
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputEmail">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            placeholder="Enter your email address"
            onChange={(event) => formChangeHandler(event.target.value, "email")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="InputContactNumber">Contact Number</label>
          <input
            type="text"
            className="form-control"
            id="InputContactNumber"
            placeholder="Enter your contact number"
            onChange={(event) =>
              formChangeHandler(event.target.value, "contact")
            }
          />
        </div>
        <div className="PurchaseForm__section">
          <h3>Hiring Period</h3>
          <div className="form-group">
            <label htmlFor="InputStartDate">Start Date</label>
            <input
              type="date"
              className="form-control"
              id="InputStartDate"
              onChange={(event) => {
                if (calculatePrice())
                  formChangeHandler(event.target.value, "startdate");
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputEndDate">End Date</label>
            <input
              type="date"
              className="form-control"
              id="InputEndDate"
              onChange={(event) => {
                if (calculatePrice())
                  formChangeHandler(event.target.value, "enddate");
              }}
            />
          </div>
          <h2>Total Price: £{totalPrice}</h2>
        </div>
        <button className="btn btn-primary">Confirm</button>
        <button
          className="btn btn-outline-danger align-right"
          onClick={(event) => {
            event.preventDefault();
            setSelectedCar();
          }}
        >
          Cancel
        </button>
      </form>
    </section>
  );
}
