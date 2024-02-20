import AmountField, { AmountFieldValue } from "@components/Shared/AmountField";
import DatePicker from "@components/Shared/Datepicker";
import { TRANSACTION_CATEGORY, transactionTypes } from "@constants/index";
import { type TransactionType } from "@money-tracker-types/index";
import TransactionTypeRadio from "@pages/TransactionCreate/components/TransactionTypeRadio";
import { ChangeEvent, useRef, useState } from "react";
import SelectField from "@components/Shared/SelectField";

const TransactionNew = () => {
  const today = useRef(new Date());

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [category, setCategory] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<Date>(today.current);
  const [amount, setAmount] = useState<number | undefined>();
  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");

  const handleTransactionType = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setTransactionType(target.value as TransactionType);
  const handleAmountChange = ({ value }: AmountFieldValue) => setAmount(value);

  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
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
          <AmountField value={amount} onChange={handleAmountChange} />
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
                handleOptionChange={handleTransactionType}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <DatePicker onChange={setDate} />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <SelectField
            placeholder="Choose category..."
            items={[...TRANSACTION_CATEGORY]}
            onChange={setCategory}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Notes
          </label>
          <textarea
            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 resize-none"
            placeholder="e.g Freelance Project"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TransactionNew;
