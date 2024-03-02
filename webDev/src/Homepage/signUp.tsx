import HomeNavbar from "./homenavbar.tsx";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Form } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const useSignApiCall = useMutation({
        mutationKey: ["add customer"],
        mutationFn: (payload) => {
            console.log(payload);
            return axios.post("http://localhost:8081/user/save", payload); // Include payload in the request
        },

        onSuccess: () => {
            reset();
            navigate('/')
        },
    });

    const onSubmit = (data, event) => {
        event.preventDefault(); // Prevent default form submission
        useSignApiCall.mutate(data); // Trigger the mutation
        console.log(data);
    };

    return (
        <>
            <HomeNavbar />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div style={{marginTop: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1>Sign up</h1>
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        autoFocus
                        {...register("username", {required: true})}
                    />
                    {errors.username && <span>Username is required</span>}
                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email", {required: true})}
                    />
                    {errors.email && <span>Email is required</span>}
                    <input
                        type="text"
                        placeholder="Contact Number"
                        {...register("contactNumber", {required: true})}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {required: true})}
                    />
                    {errors.password && <span>Password is required</span>}
                    <button type="submit">Sign Up</button>
                    {/* Remove onSubmit={} from here */}
                    <div>
                        <a href="/login">Already have an account? Sign in</a>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default SignUp;
