import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            //Call the register function from the AuthContext
            await login(email, password);
            navigate('/polls')

        } catch (error) {
            setError('Some errors')
        }
    };


    return (
        <div>
            <form className='form' onSubmit={handleLogin}>
                {
                    error ?
                        <p>{error}</p> :
                        null
                }
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;