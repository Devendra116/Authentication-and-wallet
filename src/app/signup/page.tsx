"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
     
      if (result?.error) {
        setError("Invalid Credentials !");
      }
    }
  };

  return (
    <div className="flex items-center justify-center text-black min-h-screen bg-blue-800">
      <div className="w-96 bg-blue-100 p-8 rounded shadow">
        <h2 className="text-2xl text-center font-semibold mb-6">Sign Up</h2>
        {error && (
          <div className="mb-4 text-center text-red-500">
            <p>{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm  font-medium text-black">
              Name
            </label>
            <input
              type="text"
              id="text"
              className="w-full border-gray-300 rounded-md px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
          </div>
          <div className="mb-6">
            
            <label htmlFor="email" className="block mb-2 text-sm  font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 rounded-md px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
