'use client'
import { Button, ThemeProvider } from "@material-tailwind/react";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import github from '../images/github.png';
import google from '../images/google.png';


export default async function Home() {
  const router = useRouter();

  return (
    <ThemeProvider className="container mx-auto">
      <main className="flex h-screen flex-col items-center justify-between p-24 space-y-4">

        <Button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </Button>


        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
          onClick={() => signIn("github")}
        >
          <Image src={github} className="h-6 w-6 space-x-4" />
          Continue with Github
        </Button>

        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
          onClick={() => signIn("google")}
        >
          <Image src={google} className="h-6 w-6 space-x-4" />
          Continue with Google
        </Button>

        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3"
          onClick={() => signIn("facebook")}
        >
          <Image src={google} className="h-6 w-6 space-x-4" />
          Continue with Facebook
        </Button>



        <div>

        </div>
      </main>
    </ThemeProvider>
  )
}
