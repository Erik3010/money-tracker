import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { type TransactionType } from "../../types";
import { cn } from "../../utils";

interface TransactionCardProps {
  type: TransactionType;
}

const TransactionCard = ({ type }: TransactionCardProps) => {
  const isIncome = type === "income";
  const Icon = isIncome ? ArrowDownCircleIcon : ArrowUpCircleIcon;

  return (
    <article className="py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Icon
          className={cn(
            "w-6 h-6",
            isIncome ? "fill-green-600" : "fill-red-600"
          )}
        />
        <div className="space-y-1">
          <a
            href="#"
            className="font-semibold text-sm text-gray-900 d-block hover:underline"
          >
            Freelance project
          </a>
          <p className="text-xs text-gray-400">16 Des 2023</p>
        </div>
      </div>
      <p
        className={cn(
          "font-semibold text-sm",
          isIncome ? "text-green-600" : "text-red-600"
        )}
      >
        <span className="text-[10px] text-gray-400 font-semibold">Rp</span>{" "}
        105.000
      </p>
    </article>
  );
};

export default TransactionCard;
