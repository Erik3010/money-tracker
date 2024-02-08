import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { cn } from "../../utils";

import { type TransactionType } from "../../types";

interface BalanceCardProps {
  label: string;
  type: TransactionType;
  balance: string;
}

const BalanceCard = ({ label, balance, type }: BalanceCardProps) => {
  const isIncome = type === "income";
  const Icon = isIncome ? ArrowDownCircleIcon : ArrowUpCircleIcon;

  return (
    <div className="overflow-hidden rounded-lg bg-white border hover:bg-gray-50 shadow-sm px-4 py-5 sm:p-4 flex items-center gap-3 cursor-pointer">
      <Icon
        className={cn("w-7 h-7", isIncome ? "fill-green-600" : "fill-red-600")}
      />
      <div>
        <div className="truncate text-xs font-medium text-gray-500">
          {label} Balance
        </div>
        <div className="mt-1 text-xl font-semibold tracking-tight text-gray-900">
          <span className="text-xs text-gray-400 font-semibold">Rp</span>{" "}
          {balance}
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
