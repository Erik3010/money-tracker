import { transactionTypes } from "@constants/index";
import { type TransactionType } from "@money-tracker-types/index";
import TransactionTypeRadio from "@pages/TransactionCreate/components/TransactionTypeRadio";
import { useState } from "react";

const TransactionNew = () => {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTransactionType(event.target.value as TransactionType);

  return (
    <div>
      <div className="mb-6 space-y-0.5">
        <h1 className="font-semibold text-xl text-gray-900">Add Transaction</h1>
        <p className="text-xs text-gray-400">
          Create your new transaction by filling these form.
        </p>
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Rp. 50.000"
            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-900 font-semibold">
            Transaction Type
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
            {transactionTypes.map((type) => (
              <TransactionTypeRadio
                key={type}
                type={type}
                value={transactionType}
                handleOptionChange={handleOptionChange}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionNew;
