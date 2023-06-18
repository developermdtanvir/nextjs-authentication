"use client"
import { Button } from "@material-tailwind/react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function ProfileIcon() {
    const { data: session, status } = useSession();
    console.log(session);
    if (status === 'authenticated') {
        return (
            <div className="flex gap-4">
                <Image className="rounded-full" src={session?.user?.image} width={40} height={50} />
                <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
        )
    }


    return <>
        <Button onClick={() => signIn("github")}> Github Sign In</Button>
        <Button onClick={() => signIn("google")}> Google Sign In</Button>
    </>
}