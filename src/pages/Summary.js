import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Summary() {
  const [weights, setWeights] = useState([]);
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("weights")) || [];
    setWeights(stored);
  }, []);

  const calculateLoss = () => {
    if (!date1 || !date2) {
      setResult("Please select both dates");
      return;
    }

    // Find entries for the given dates
    const entry1 = weights.find(w => w.date === date1);
    const entry2 = weights.find(w => w.date === date2);

    if (!entry1 || !entry2) {
      setResult("No data found for one or both dates");
      return;
    }

    const loss = (entry1.weight - entry2.weight).toFixed(2);
    setResult(`Weight change between ${date1} and ${date2}: ${loss} kg`);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Weight Loss Between Two Dates</h2>

        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={date1}
            onChange={e => setDate1(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            type="date"
            className="form-control"
            value={date2}
            onChange={e => setDate2(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={calculateLoss}>
          Calculate
        </button>

        {result && (
          <div className="alert alert-info mt-3">
            {result}
          </div>
        )}
      </div>
    </>
  );
}

export default Summary;
