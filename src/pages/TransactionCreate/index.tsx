import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import AmountField, { AmountFieldValue } from "@components/Shared/AmountField";
import DatePicker from "@components/Shared/Datepicker";
import { TRANSACTION_CATEGORY, transactionTypes } from "@constants/index";
import { type TransactionType } from "@money-tracker-types/index";
import TransactionTypeRadio from "@pages/TransactionCreate/components/TransactionTypeRadio";
import SelectField from "@components/Shared/SelectField";
import Button from "@components/Shared/Button";

const TransactionNew = () => {
  const navigate = useNavigate();
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
      <div className="flex items-center gap-x-3">
        <button
          className="rounded-full hover:bg-gray-100 p-1 transition"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="h-7 w-h-7 text-gray-500" />
        </button>
        <div className="flex flex-col space-y-0.5">
          <h1 className="font-semibold text-xl text-gray-900">
            Add Transaction
          </h1>
          <p className="text-xs text-gray-400">
            Create your new transaction by filling these form.
          </p>
        </div>
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
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
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
              expand
              placeholder="Choose category..."
              items={[...TRANSACTION_CATEGORY]}
              onChange={setCategory}
            />
          </div>
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
      <Button>
        Add your <span className="capitalize">{transactionType}</span>
      </Button>
    </div>
  );
};

export default TransactionNew;
