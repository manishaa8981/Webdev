import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeNavbar from "./homenavbar.tsx";
// import {toast} from "react-toastify";
// import {useNavigate} from "react-router-dom";
// import {useEffect} from "react";
// import { useSelector } from "react-redux";


const defaultTheme = createTheme();
const SignUp=() => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
//     const {
//         register,
//         handleSubmit,
//         getValues,
//         formState: { errors },
//         reset,
//     } = useForm();
//
//     const { isLoggedIn, isRegistering, errorSignup } = useSelector(
//         (store: RootState) => store.auth
//     );
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         if (errorSignup) {
//             reset({
//                 signupName: "",
//                 signupSurname: "",
//                 signupPassword: "",
//                 signupConfirm: "",
//             });
//         }
//         if (isLoggedIn) {
//             navigate(-1);
//         }
//     }, [errorSignup, isRegistering, isLoggedIn]);
//     const onSubmit = async (data: INewUser) => {
//         // dispatch(createUser(data));
//         try {
//             const response = await axios.post('http://localhost:8081/user/save', data);
//             navigate('/login');
//             console.log(response.data); // Handle response as needed
//         } catch (error) {
//             toast.error('User Registration Failed! Please try again.');
//             console.error('Error creating user:', error);
//         }
//     };

    return (
        <>
            <HomeNavbar />
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="fullname"
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </>
    );
}
export default SignUp