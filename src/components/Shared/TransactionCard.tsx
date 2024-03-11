import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { type TransactionType } from "@money-tracker-types/index";
import { cn } from "@utils/index";

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
            Subway Sandwich
          </a>
          <p className="text-xs text-gray-400">Food</p>
        </div>
      </div>
      <div className="text-sm font-semibold text-gray-900">
        <span className="text-xs text-gray-400 font-semibold">Rp</span> 50.000
      </div>
      {/* <NavLink
        to="/transactions/123"
        className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        View
      </NavLink> */}
    </article>
  );
};

export default TransactionCard;
