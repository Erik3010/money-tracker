import DatePicker from "@components/Shared/Datepicker";
import { transactionTypes } from "@constants/index";
import { type TransactionType } from "@money-tracker-types/index";
import TransactionTypeRadio from "@pages/TransactionCreate/components/TransactionTypeRadio";
import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { dateFormat } from "@utils/index";

const TransactionNew = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const [transactionType, setTransactionType] =
    useState<TransactionType>("income");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTransactionType(event.target.value as TransactionType);

  const toggleDatePicker = () => {
    setIsOpenDatePicker((prev) => !prev);
  };

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
          <div className="flex">
            <span className="text-sm mr-2 text-gray-400 font-medium">Rp</span>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="50.000"
              className="border-none text-3xl font-bold outline-none w-full"
            />
          </div>
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
        <div className="space-y-2">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="relative">
            <button
              className="flex items-center w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-none sm:text-sm sm:leading-6"
              onClick={toggleDatePicker}
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              <span>{date ? dateFormat(date) : "Today"}</span>
            </button>
            {isOpenDatePicker && (
              <DatePicker mode="single" selected={date} onSelect={setDate} />
            )}
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
    </div>
  );
};

export default TransactionNew;
