import TransactionCard from "./TransactionCard";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface TransactionListProps {
  date?: string;
}

const TransactionList = ({ date = "Today" }: TransactionListProps) => {
  return (
    <div className="bg-white border shadow-sm rounded-xl px-4 overflow-hidden">
      <div className="flex justify-between items-center border-b py-3.5 hover:bg-gray-50 -mx-4 px-4 cursor-pointer">
        <div className="space-y-1">
          <h2 className="text-xs uppercase font-semibold text-gray-700">
            {date}
          </h2>
          <p className="text-xs text-gray-400">5 transaction(s) was made</p>
        </div>
        <ChevronUpIcon className="h-4 w-4 text-gray-500" />
      </div>
      <div className="divide-y divide-gray-100">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <TransactionCard
              key={index}
              type={index === 1 ? "outcome" : "income"}
            />
          ))}
      </div>
    </div>
  );
};

export default TransactionList;
