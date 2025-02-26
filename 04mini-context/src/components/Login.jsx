import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({email, password})

        console.log('Email: ', email)
        console.log('Password: ', password)
    }

    return (
        <div className="container my-2 d-flex justify-content-center align-items-center">
        <div className="card shadow" style={{ width: '400px' }}>
            <div className="card-body">
                <h4 className="card-title text-center mb-4">Login</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    <div className="d-flex justify-content-between">
                    <div>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe" className="form-check-label ms-1">
                        Remember me
                        </label>
                    </div>
                    <a href="#" className="text-decoration-none">
                        Forgot password?
                    </a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">
                    Login
                    </button>
                </form>
            </div>
        </div>
        </div>
  );
};

export default Login;