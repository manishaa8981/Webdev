import React, { useState } from 'react';
import HomeNavbar from "./homenavbar.tsx";
import Forget from "./forget.tsx";
import "./login-signup.css"

const Login = () => {
    const [forget, setForget] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log({ email, password });
        // Add your login logic here
    };

    const toggleForget = () => {
        setForget(!forget);
    };

    return (
        <div>
            <HomeNavbar />
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>Sign in</h1>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        autoFocus
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <label>
                        <input type="checkbox" value="remember" />
                        Remember me
                    </label>
                    <button type="submit">Sign In</button>
                    <div>
                        <a href="#" onClick={toggleForget}>Forgot password?</a>
                    </div>
                    <div>
                        <a href="/signup">Don't have an account? Sign Up</a>
                    </div>
                </div>
            </form>
            {forget && <Forget />}
        </div>
    );
}

export default Login;
