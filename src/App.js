import { useState } from "react";
import CarListings from "./CarListings/CarListings";
import PurchaseForm from "./PurchaseForm/PurchaseForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Confirmation from "./Confirmation/Confirmation";

function App() {
  const [selectedCar, setSelectedCar] = useState();
  const [confirmationDetails, setConfirmationDetails] = useState();

  return (
    <div className="App">
      <h1>Shop Safe Car Rental Service</h1>
      {selectedCar ? (
        confirmationDetails ? (
          <Confirmation
            confirmationDetails={confirmationDetails}
            setConfirmationDetails={setConfirmationDetails}
            setSelectedCar={setSelectedCar}
          />
        ) : (
          <PurchaseForm
            selectedCar={selectedCar}
            setConfirmationDetails={setConfirmationDetails}
            setSelectedCar={setSelectedCar}
          />
        )
      ) : (
        <CarListings setSelectedCar={setSelectedCar} />
      )}
    </div>
  );
}

export default App;
