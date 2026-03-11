import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        // ✅ users declared FIRST
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            alert("Invalid credentials");
            return;
        }

        localStorage.setItem("loggedInUser", username);
        navigate("/dashboard");
    };

    return (
        <div className="container mt-5">
            <h1 style={{textAlign:"center"}}>Weight Manager</h1>
            <h2>Login</h2>

            <form onSubmit={login}>
                <input
                    className="form-control mb-2"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="btn btn-primary">Login</button>
            </form>

            <p className="mt-3">
                Don’t have an account? <Link to="/signup">Signup</Link>
            </p>
        </div>
    );
}

export default Login;
