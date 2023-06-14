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
      <div className="flex items-center ml-auto space-x-4">
        <p className="text-sky-600">{session?.user?.name}</p>
        <button onClick={() => signOut()} className="px-4 py-1 bg-blue-500 text-white rounded">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button onClick={() => router.push("http://localhost:3000/login")} className="text-green-600 px-4 py-1 justify-center bg-blue-500 text-white rounded w-20 ml-auto">
      Sign In
    </button>
  );
};

export default SigninButton;
