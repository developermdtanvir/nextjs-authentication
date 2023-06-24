"use client"
import { signUp } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function SignUp() {

    const router = useRouter();

    const [error, setError] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        try {

            const res = await fetch("./../api/auth/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })

            res.status === 201 && router.push('./../login?success = Account has been created')

        } catch (err) {
            setError(true);
        }

        const result = await signUp('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result.error) {
            // Handle signup error
            console.log('Signup error:', result.error);
        } else {
            // Signup successful, redirect to login page
            router.push('/login');
        }
    };
    return (
        <div className=" h-screen flex justify-center items-center">
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        className='text-black'
                        name='name'
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className='text-black'
                        name='email'
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className='text-black'
                        name="password"
                    />
                    <button type="submit">Sign Up</button>
                </form>

                {error && <h1 className='text-red-600'>user not signup</h1>}
            </div>
        </div>
    )
}

export default SignUp;