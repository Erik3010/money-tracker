import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { type TransactionType } from "@money-tracker-types/index";
import { cn } from "@utils/index";

interface BalanceCardProps {
  dense?: boolean;
  label: string;
  type: TransactionType;
  balance: string;
}

const BalanceCard = ({
  label,
  balance,
  type,
  dense = false,
}: BalanceCardProps) => {
  const isIncome = type === "income";
  const Icon = isIncome ? ArrowDownCircleIcon : ArrowUpCircleIcon;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg bg-white border hover:bg-gray-50 shadow-sm px-4 py-5 flex items-center gap-3 cursor-pointer",
        { "sm:p-4": !dense },
        { "sm:py-3": dense }
      )}
    >
      <Icon
        className={cn("w-7 h-7", isIncome ? "fill-green-600" : "fill-red-600")}
      />
      <div>
        <div className="truncate text-xs font-medium text-gray-500">
          {label} Balance
        </div>
        <div
          className={cn("mt-1 font-semibold tracking-tight text-gray-900", {
            "text-xl": !dense,
            "text-base": dense,
          })}
        >
          <span className="text-xs text-gray-400 font-semibold">Rp</span>{" "}
          {balance}
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
