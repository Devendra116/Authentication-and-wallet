import React from "react";
import Link from "next/link";
import SigninButton from "./SignInButton";

const AppBar = () => {
    return (
        <header className="flex  items-center justify-between p-4 bg-gradient-to-b from-white to-gray-200 shadow">
            <div className="flex  gap-4 justify-end w-full">
                <div>
                    <Link className="transition-colors hover:text-blue-500" href={"/"}>
                        Home
                    </Link>
                </div>
                <div>
                    <Link className=" transition-colors hover:text-blue-500" href={"/secret"}>
                        Secret
                    </Link>
                </div>
                 
            </div>

            <div>
                <SigninButton />
            </div>
        </header>
    );
};

export default AppBar;
