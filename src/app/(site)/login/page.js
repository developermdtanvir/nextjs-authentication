"use client"
import { Button } from "@material-tailwind/react";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import image from '../../../images/github.png';

function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const credentials = { email, password }; // Create the credentials object
        console.log(credentials); // Log the credentials
        await signIn("credentials", {
            ...credentials,
            redirect: false, // Set to true if you want to redirect after successful login
        });
    }

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Log in</button>
                </form>
            </div>

            <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
                onClick={() => signIn("github")}
            >
                <Image src={image} alt="github" className="h-6 w-6 space-x-4" />
                Continue with Github
            </Button>
            <h1>This is a Login page</h1>
        </div>
    )
}

export default Login;