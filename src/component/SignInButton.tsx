"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  const router = useRouter()
  console.log(session?.user);

  if (session && session.user) {
    return (
      <div className="flex  gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => router.push("http://localhost:3000/login")} className="text-green-600 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
