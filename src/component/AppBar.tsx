import React from "react";
import Link from "next/link";
import SigninButton from "./SignInButton";

const AppBar = () => {
    return (
        <nav className="bg-gray-800 sticky top-0">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16">
       
      <div className="flex items-center space-x-4 md:space-x-6">
        <a href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
        <a href="/secret" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Secret</a>
        <a href="/ethereum" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Send-Ethers</a>
        <a href="/near" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Guest-Message</a>
        <SigninButton />
      </div>
      
    </div>
  </div>
</nav>

    )
};

export default AppBar;
