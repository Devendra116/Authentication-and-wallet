import type { FormEventHandler } from "react";
import React from "react";
import Big from "big.js";
import { AccountView } from "near-api-js/lib/providers/provider";

type Account = AccountView & {
    account_id: string;
  };
  

interface FormProps {
  account: Account;
  onSubmit: FormEventHandler;
}

const Form: React.FC<FormProps> = ({ account, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className="max-w-xs mx-auto">
          <fieldset id="fieldset" className="space-y-4">
            <p>Sign the guest book, {account.account_id}!</p>
            <p className="highlight">
              <label htmlFor="message" className="block">
                Message:
              </label>
              <input
                autoComplete="off"
                autoFocus
                id="message"
                required
                className="border border-gray-300 px-2 py-1 rounded"
              />
            </p>
            <p>
              <label htmlFor="donation" className="block">
                Donation (optional):
              </label>
              <input
                autoComplete="off"
                defaultValue={"0"}
                id="donation"
                max={Big(account.amount)
                  .div(10 ** 24)
                  .toString()}
                min="0"
                step="0.01"
                type="number"
                className="border border-gray-300 px-2 py-1 rounded"
              />
              <span title="NEAR Tokens" className="ml-1">Ⓝ</span>
            </p>
            <p className="flex items-center space-x-2">
              <input id="multiple" type="checkbox" className="form-checkbox" />
              <label htmlFor="multiple">Multiple Transactions</label>
            </p>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Sign
            </button>
          </fieldset>
        </form>
      );
      
};

export default Form;
