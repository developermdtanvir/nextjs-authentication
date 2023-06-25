"use client"
import { signOut } from 'next-auth/react';
function Button() {
    return (
        <button onClick={() => signOut()}>signOut</button>
    )
}

export default Button;