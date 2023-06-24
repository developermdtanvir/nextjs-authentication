"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
    const { data: session, status } = useSession()

    const router = useRouter()

    if (status === "loading") {
        return <div>Loading...........</div>
    }

    console.log(session);

    if (!session) {
        router.replace('/login');
        return null; // You can return null or a loading indicator while the redirect happens
    }


    // if (!session) {
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     }
    // }

    // console.log(data.user, 'data');
    return <div className="h-screen flex justify-center items-center">My Post: {params.id}</div>
}