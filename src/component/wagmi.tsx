"use client"
import { FC, ReactNode } from 'react';
import { WagmiConfig, configureChains, createConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { publicProvider } from 'wagmi/providers/public'

const walletConnectProjectId = ''

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [polygonMumbai],
    [publicProvider()],
);


export const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({ chains }),
        // new CoinbaseWalletConnector({
        //     chains,
        //     options: {
        //         appName: 'wagmi',
        //     },
        // }),
        // new WalletConnectConnector({
        //     chains,
        //     options: {
        //         projectId: walletConnectProjectId,
        //     },
        // }),
        
    ],
    publicClient,
    webSocketPublicClient,
})

interface WagmiProviderProps {
    children: ReactNode;
}
export const WagmiProvider: FC<WagmiProviderProps> = ({children}) => {
    return (
        <WagmiConfig config={config}>
          {children}
        </WagmiConfig>
      )
    }