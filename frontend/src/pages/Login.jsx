import { useState } from "react";
import { loginUser } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(AuthContext);

const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data = await loginUser({
                email,
                password
            });

            localStorage.setItem(
    "user",
    JSON.stringify(data)
);

setUser(data);

navigate("/dashboard");
            alert("Login Successful");

        } catch (error) {

            alert(error.response.data.message);

        }
    };

    return (

        <div className="container mt-5">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button className="btn btn-primary">
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;