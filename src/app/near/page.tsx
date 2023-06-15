"use client";
import React, { useEffect, useState } from "react";
// import { WalletSelectorContextProvider } from "@/component/wallet-selector-context";
import Content from "@/component/guest-book";
import { WalletSelectorContextProvider } from "@/component/wallet-selector-context";

const Page: React.FC = async () => {
    
 

     
    return (
        <><WalletSelectorContextProvider>
        <Content></Content>
        </WalletSelectorContextProvider>
        </>
    );
};

export default Page;
