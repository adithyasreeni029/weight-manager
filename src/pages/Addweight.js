import { useState } from "react";
import Navbar from "../components/Navbar";

function AddWeight() {
  const [weight, setWeight] = useState("");
  const user = localStorage.getItem("loggedInUser");

  const addWeight = () => {
    const weights = JSON.parse(localStorage.getItem("weights")) || [];
    const today = new Date().toISOString().split("T")[0];

    if (weights.find(w => w.user === user && w.date === today)) {
      alert("You already added weight today");
      return;
    }

    weights.push({ user, weight, date: today });
    localStorage.setItem("weights", JSON.stringify(weights));
    alert("Weight added");
    setWeight("");
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h3>Add Weight</h3>
        <input className="form-control mb-2"
          value={weight} onChange={e => setWeight(e.target.value)}
          placeholder="Enter weight" />
        <button className="btn btn-success" onClick={addWeight}>Add</button>
      </div>
    </div>
  );
}

export default AddWeight;
