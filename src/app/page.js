'use client'
import { Button, ThemeProvider } from "@material-tailwind/react";
import { signIn, useSession } from 'next-auth/react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from '../images/github.png';


export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession()
  const [show, setShow] = useState(false)

  if (status === 'authenticated') {
    setShow(true);
  }

  return (
    <ThemeProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 space-y-4">

        <Button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </Button>


        {
          show && <>
            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
              onClick={() => signIn("github")}
            >
              <Image src={image} className="h-6 w-6 space-x-4" />
              Continue with Github
            </Button>


            <Button
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3"
              onClick={() => signIn("google")}
            >
              <Image src={image} className="h-6 w-6 space-x-4" />
              Continue with Google
            </Button></>
        }

      </main>
    </ThemeProvider>
  )
}
