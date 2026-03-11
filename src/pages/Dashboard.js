import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");

  return (
    <div>
      <Navbar />
      <div className="container text-center mt-4">
        <h2>Welcome {user}</h2>
        <button className="btn btn-success m-2" onClick={() => navigate("/addweight")}>Add Weight</button>
        <button className="btn btn-primary m-2" onClick={() => navigate("/weightlist")}>List Weight</button>
        <button className="btn btn-info m-2" onClick={() => navigate("/summary")}>Summary</button>
      </div>
    </div>
  );
}

export default Dashboard;
