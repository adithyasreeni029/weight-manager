import { useNavigate } from "react-router-dom";

function Navbar (){
    const navigate= useNavigate();

    const logout = ()=> {
        localStorage.removeItem("loggedInUser");
        navigate("/");
    };

    return (
        < nav className="navbar navbar-dark bg-dark px-3">
            <span className="navbar-brand">Weight Manager</span>
            <div>
                <button className="btn btn-light mx-1" onClick={()=>navigate("/dashboard")}>Dashboard</button>
                <button className="btn btn-light mx-1" onClick={()=>navigate("/addweight")}>Addweight</button>
                <button className="btn btn-light mx-1" onClick={()=>navigate("/weightlist")}>WeightList</button>
                <button className="btn btn-light mx-1" onClick={()=>navigate("/summary")}>Calculate</button>
                <button className="btn btn-danger mx-1" onClick={logout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar