import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { type TransactionType } from "@money-tracker-types/index";
import { cn } from "@utils/index";

interface TransactionTypeRadioProps {
  type: TransactionType;
  value: TransactionType;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TransactionTypeRadio = ({
  type,
  value,
  handleOptionChange,
}: TransactionTypeRadioProps) => {
  const checked = value === type;

  return (
    <label
      key={type}
      className={cn(
        "relative flex cursor-pointer rounded-lg border-2 bg-white p-3 shadow-sm focus:outline-none transition-all",
        checked ? "border-blue-700 bg-blue-50" : "border-gray-300"
      )}
    >
      <input
        type="radio"
        name="transaction-type"
        className="sr-only"
        value={type}
        checked={checked}
        onChange={handleOptionChange}
      />
      <span className="flex items-center space-x-2 flex-1">
        {type === "income" ? (
          <ArrowDownCircleIcon className="w-6 h-6 fill-green-600" />
        ) : (
          <ArrowUpCircleIcon className="w-6 h-6 fill-red-600" />
        )}
        <div>
          <div
            className={cn(
              "block text-sm font-medium text-gray-900 capitalize",
              checked && "text-blue-900"
            )}
          >
            {type}
          </div>
          <div
            className={cn("text-xs text-gray-500", checked && "text-blue-700")}
          >
            {type === "income" ? "Track your income" : "Track your spending"}
          </div>
        </div>
      </span>
    </label>
  );
};

export default TransactionTypeRadio;
