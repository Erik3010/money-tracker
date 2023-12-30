import { useState } from "react";
import { type TransactionType } from "../../types";
import { transactionTypes } from "../../constants";
import TransactionTypeRadio from "../../components/Transactions/TransactionTypeRadio";

const TransactionNew = () => {
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTransactionType(event.target.value as TransactionType);

  return (
    <div>
      <div className="mb-6">
        <h1 className="font-semibold text-xl text-gray-900">Add Transaction</h1>
        <p className="text-xs mt-1 text-gray-500">
          Create your new transaction by filling these form.
        </p>
      </div>
      <div>
        <div className="space-y-2">
          <p className="text-sm text-gray-900 font-semibold">
            Transaction Type
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
            {transactionTypes.map((type) => (
              <TransactionTypeRadio
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
