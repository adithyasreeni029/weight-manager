import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();
     
    const signup =(e) =>{
        e.preventDefault();
        const users =JSON.parse(localStorage.getItem("users"))|| [];
        if (users.find(u => u.username === username)){
            alert("user already exists");
            return;
        }
            users.push({username,password});
            localStorage.setItem("users",JSON.stringify(users));
            alert("Signip successful");
            navigate("/");
        };

        return(
            <div className="container mt-5">
                <h2>Sighup</h2>
                <form onSubmit={signup}>
                    <input className="form-control mb-2" placeholder="Emailid" value={username} onChange={e=> setUsername(e.target.value)}/>
                    <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={e =>setPassword(e.target.value)}/>
                    <button className="btn btn-success">Signup</button>
                </form>

            </div>
        );

}

export default Signup;