"use client"
import * as React from 'react'
import {
  usePrepareSendTransaction,
  useSendTransaction,
  useWaitForTransaction,
} from 'wagmi'
import { utils } from 'ethers'

export function SendEtherTransaction() {
  const [to, setTo] = React.useState('')

  const [amount, setAmount] = React.useState('')

  const { config } = usePrepareSendTransaction({
      to: to,
      value: amount ? utils.parseEther(amount).toBigInt() : undefined,
  })
  const { data, sendTransaction } = useSendTransaction(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        sendTransaction?.();
      }} className="flex flex-col items-center mt-4">
        <input
          aria-label="Recipient"
          onChange={(e) => setTo(e.target.value)}
          placeholder="0xA0Cf…251e"
          value={to}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <input
          aria-label="Amount (ether)"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.05"
          value={amount}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        />
        <button
          disabled={isLoading || !sendTransaction || !to || !amount}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
        {isSuccess && (
          <div className="mt-4">
            Successfully sent {amount} ether to {to}
            <div>
              <a
                href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}
                className="text-blue-500 underline"
              >
                Etherscan
              </a>
            </div>
          </div>
        )}
      </form>
      
  )
}
