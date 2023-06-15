"use client"
import { useState, useEffect } from "react";
import { useAccount, useBalance, useConnect } from 'wagmi'
import { useDisconnect } from 'wagmi'
import { SendEtherTransaction } from "@/component/sendEther";

const SurveyPage: React.FC = () => {
    const [account, setAccount] = useState('');
    const { disconnect } = useDisconnect({
        onError(error) {
            console.log('Error', error)
        },
    });
    const { connector: activeConnector, isConnected, isConnecting, isDisconnected } = useAccount();

    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect({
            onError(error) {
                console.log('Error', error)
            },
            onSuccess(data) {
                setAccount(data.account);
                localStorage.setItem('account', data.account); // Store the account in localStorage
                console.log('Connect', data)
            }
        });

    useEffect(() => {
        // Clear the stored account when disconnected
        if (isDisconnected) {
            localStorage.removeItem('account');
        }
    }, [isDisconnected]);

    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined' && !account) {
        const currentAccount = localStorage.getItem('account')
        setAccount(currentAccount || '')}
      }, [])

    return (
        <> 
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-white">

                    <div className="flex items-center  justify-center h-screen">
                        {!isConnected ? (
                            <div className="flex flex-col  mt-1 space-y-4">
                                {connectors.map((connector) => (
                                    <button className="px-4 py-2 justify-center bg-blue-500 text-white rounded w-40" key={connector.id} onClick={() => connect({ connector })}>
                                        {connector.name}
                                        {isLoading &&
                                            pendingConnector?.id === connector.id &&
                                            ' (connecting)'}
                                    </button>
                                ))}
                            </div>
                        ) : (<div className="flex flex-col items-center justify-center">
                            {(isConnected && activeConnector) ? (<div>Connected to {activeConnector?.name}</div>) : (null)}
                            {/* {isbalanceLoading?(<div>Fetching balance…</div>):(null)} */}
                            {/* Balance: {data?.formatted} {data?.symbol} */}
                            {account ? (<div>Account Address: {account}</div>) : (null)}
                            <button className="px-4 py-2 mb-2  flex justify-center bg-blue-500 text-white rounded w-40" onClick={() => disconnect()}>
                                Disconnect
                            </button>
                            <SendEtherTransaction></SendEtherTransaction>
                        </div>

                        )}
                    </div>
            </div>
        </>
    );
};

export default SurveyPage;
