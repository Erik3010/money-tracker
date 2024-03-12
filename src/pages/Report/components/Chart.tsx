import { formatCurrency } from "@utils/index";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (!active || !payload || !payload.length) return null;

  const {
    payload: { date, outcome, income },
  } = payload[0];
  return (
    <div className="rounded-lg border bg-white shadow-sm p-2.5 space-y-2">
      <h2 className="text-xs font-semibold text-gray-400 uppercase">{date}</h2>
      <div className="space-y-1">
        <div className="flex items-center gap-x-1.5 text-sm font-semibold">
          <ArrowDownCircleIcon className="w-5 h-5 fill-green-600" />
          <div className="text-gray-700">
            <span className="text-[11px] text-gray-400 font-semibold">Rp</span>{" "}
            {formatCurrency(income)}
          </div>
        </div>
        <div className="flex items-center gap-x-1.5 text-sm font-semibold">
          <ArrowUpCircleIcon className="w-5 h-5 fill-red-600" />
          <div className="text-gray-700">
            <span className="text-[11px] text-gray-400 font-semibold">Rp</span>{" "}
            {formatCurrency(outcome)}
          </div>
        </div>
      </div>
    </div>
  );
};

const Chart = () => {
  const transactionData = [
    {
      date: "01 Feb 2024",
      outcome: 150000,
      income: 200000,
    },
    {
      date: "02 Feb 2024",
      outcome: 80000,
      income: 300000,
    },
    {
      date: "03 Feb 2024",
      outcome: 120000,
      income: 150000,
    },
    {
      date: "04 Feb 2024",
      outcome: 250000,
      income: 100000,
    },
    {
      date: "05 Feb 2024",
      outcome: 180000,
      income: 250000,
    },
    {
      date: "06 Feb 2024",
      outcome: 320000,
      income: 150000,
    },
    {
      date: "07 Feb 2024",
      outcome: 190000,
      income: 125000,
    },
  ];
  // const transactionData = Array(4)
  //   .fill(data)
  //   .reduce((acc, curr) => [...acc, ...curr], []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={transactionData} margin={{ top: 10, right: 10 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Line
          dataKey="income"
          type="monotone"
          stroke="#16a34a"
          strokeWidth={1.5}
        />
        <Line
          dataKey="outcome"
          type="monotone"
          stroke="#dc2626"
          strokeWidth={1.5}
        />
        <XAxis
          dataKey="date"
          interval="preserveStartEnd"
          padding={{ left: 5 }}
          tick={{ fontSize: 10 }}
        />
        <YAxis
          padding={{ bottom: 5 }}
          tick={{ fontSize: 10 }}
          tickFormatter={(value) =>
            formatCurrency(value, { notation: "compact" })
          }
        />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
