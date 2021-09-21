import React from "react";
import "./CarListings.css";
import FordFiesta from "../images/Ford-Fiesta.jpeg";
import AudiQ3 from "../images/Audi-Q3.jpeg";
import VWGolf from "../images/VW-Polo.jpeg";

export default function CarListings(props) {
  const { setSelectedCar } = props;

  return (
    <div className="CarListing__container">
      <CarListingSingle
        image={FordFiesta}
        make={"Ford"}
        model="Fiesta"
        doors={3}
        seats={5}
        colour="Silver"
        price={60}
        setSelectedCar={setSelectedCar}
      />
      <CarListingSingle
        image={VWGolf}
        make="VW"
        model="Golf"
        doors={5}
        seats={5}
        colour="Red"
        price={80}
        setSelectedCar={setSelectedCar}
      />
      <CarListingSingle
        image={AudiQ3}
        make={"Audi"}
        model="Q3"
        doors={5}
        seats={5}
        colour="White"
        price={80}
        setSelectedCar={setSelectedCar}
      />
    </div>
  );
}

function CarListingSingle(props) {
  const { image, model, make, doors, seats, colour, price, setSelectedCar } =
    props;
  return (
    <div className="CarListingSingle__container">
      <img src={image} alt={model} className="CarListingSingle__image" />
      <p>Model: {model}</p>
      <p>Make: {make}</p>
      <p>{doors} Doors</p>
      <p>{seats} Seats</p>
      <p>Colour: {colour}</p>
      <h2>£{price} per day</h2>
      <button
        className="btn btn-primary"
        onClick={() =>
          setSelectedCar({ ...image, model, make, doors, seats, colour, price })
        }
      >
        Select
      </button>
    </div>
  );
}
