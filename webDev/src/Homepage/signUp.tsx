import React from 'react';
import HomeNavbar from "./homenavbar.tsx";

const SignUp = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const firstName = formData.get('firstName');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log({ firstName, email, password });
        // Add your sign up logic here
    };

    return (
        <>
            <HomeNavbar />
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1>Sign up</h1>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Full Name"
                        required
                        autoFocus
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                    /><input
                        type="password"
                        name="password"
                        placeholder="Confirm Password"
                        required
                    />
                    <button type="submit">Sign Up</button>
                    <div>
                        <a href="/login">Already have an account? Sign in</a>
                    </div>
                </div>
            </form>
        </>
    );
}

export default SignUp;
