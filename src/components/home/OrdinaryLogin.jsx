"use client";

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, Container, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

import { signIn } from 'next-auth/react';

const OrdinaryLogin = () => {

    const [values, setValues] = useState({ showPassword: false });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        validateEmail(e);
    };
    const onChangePass = (e) => {
        setPass(e.target.value);
        validatePass(e);
    };

    let emailValidationError = 'Invalid Email';
    const [emailValidState, setEmailValidState] = useState(true);
    let passValidationError = 'Invalid Password';
    const [passValidState, setPassValidState] = useState(true);


    const validateEmail = (e) => {
        const regex = /\S+@\S+\.\S+/;
        if (regex.test(e.target.value)) {
            setEmailValidState(true);
        } else {
            setEmailValidState(false);
        }
    };

    const validatePass = (e) => {
        const regex = /(?=.{5,})/;
        if (regex.test(e.target.value)) {
            setPassValidState(true);
        } else {
            setPassValidState(false);
        }
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("All fields are required");
            return;
        }
        const user = {
            email: email,
            password: password
        }

        // try {
        //     const res = await signIn("credentials", {
        //         email,
        //         password,
        //         redirect: false,
        //     });

        //     if (res.error) {
        //         setError("Invalid Credentials");
        //         return;
        //     }

        //     router.replace("dashboard");
        // } catch (error) {
        //     console.log(error);
        // }

        try {
            const response = await axios.post("/api/users/signin", user);

            // localStorage.setItem("token", response.data.token.toString())

            router.replace("/dashboard");
        } catch (error) {
            console.log("Error during Sign in: ", error);
        }
    };


    return (
        <Container sx={{ my: 3 }} component="form" onSubmit={onSubmit}>
            <p className='fw-semibold fs-4 mb-3'>Sign in manually</p>

            <FormControl sx={{ mt: 0 }} fullWidth>
                <InputLabel htmlFor="Email-Field">Email</InputLabel>
                <OutlinedInput
                    id="Email-Field"
                    label="Email"
                    value={email}
                    onChange={onChangeEmail}
                />

                {!emailValidState && <Alert severity="error" sx={{ mt: 1 }}>
                    {emailValidationError}
                </Alert>}
            </FormControl>

            <FormControl sx={{ mt: 3 }} fullWidth>
                <InputLabel htmlFor="Password-Field">Password</InputLabel>
                <OutlinedInput
                    id="Password-Field"
                    onChange={onChangePass}
                    type={values.showPassword ? "text" : "password"}
                    value={password}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {values.showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
                {!passValidState && <Alert severity="error" sx={{ mt: 1 }}>
                    {passValidationError}
                </Alert>}
            </FormControl>

            <FormControl
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {error && <p className='mt-3 text-danger'>{error}</p>}

                <Button variant="contained" className='btn-login' sx={{ my: 2 }} type="submit">
                    Sign In
                </Button>
                <p className='fs-5'>OR <Link href={'/register'} className='link-primary' >Register</Link></p>

            </FormControl>
        </Container>
    )
}

export default OrdinaryLogin