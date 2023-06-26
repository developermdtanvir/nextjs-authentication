"use client"
import { useSession } from 'next-auth/react';
export const User = () => {
    const { data, status } = useSession();
    return (
        <div>
            <h1>Client side rendaring</h1>
            <h1>{JSON.stringify(data)}</h1>
        </div>
    )
}