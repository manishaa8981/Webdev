import HomeNavbar from "./homenavbar.tsx";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Form } from "react-bootstrap";
import "./login-signup.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [forget, setForget] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const useSignApiCall = useMutation({
        mutationKey: ["add customer"],
        mutationFn: async (payload) => {
            try {
                const response = await axios.post("http://localhost:8081/authenticate", payload);
                const token = response.data.token;
                localStorage.setItem('token', token);
                navigate('/'); // Navigate to homepage after successful login
                reset(); // Clear form fields
            } catch (error) {
                console.error('Login error:', error);
                // Handle login error here (e.g., display error message)
            }
        }
    });

    const onSubmit = (data) => {
        useSignApiCall.mutate(data);
    };

    const toggleForget = () => {
        setForget(!forget);
    };

    return (
        <>
            <HomeNavbar />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div style={{marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>Sign In</h1>

                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", { required: true })}
                    />
                    {errors?.password?.message}
                    {errors.email && <span>Email is required</span>}
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors?.password?.message}
                    {errors.password && <span>Password is required</span>}
                    <div className={"remember-forgot"}>
                        <label><input type={"checkbox"} /> Remember me</label>
                    </div>
                    <button className={"sign-in-button"} type="submit">Sign In</button>
                    <div className={"for-sig"}>
                        <div>
                            <a href="/forget" onClick={toggleForget}>Forgot password?</a>
                        </div>
                        <div>
                            <a href="/signup">Don't have an account? Sign Up</a>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default Login;
