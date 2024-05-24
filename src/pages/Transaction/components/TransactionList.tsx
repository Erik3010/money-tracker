import TransactionCard from "@components/Shared/TransactionCard";
import * as Accordion from "@radix-ui/react-accordion";

interface TransactionListProps {
  date?: string;
}

const TransactionList = ({ date = "Today" }: TransactionListProps) => {
  return (
    <Accordion.Item
      className="bg-white border shadow-sm rounded-lg overflow-hidden"
      value={date}
    >
      <Accordion.Trigger className="accordion-trigger data-[state=open]:border-b data-[state=closed]:border-b-1 transition-[border-width] delay-100 w-full flex justify-between items-center py-3.5 hover:bg-gray-50 cursor-pointer px-4">
        <div className="flex flex-col items-start space-y-1">
          <h2 className="text-xs uppercase font-semibold text-gray-700">
            {date}
          </h2>
          <p className="text-xs text-gray-400">5 transaction(s) was made</p>
        </div>
        <div className="flex flex-col items-end gap-x-3">
          <h2 className="text-sm font-semibold text-gray-700">
            <span className="text-xs text-gray-400 font-semibold">Rp</span>{" "}
            250.000
          </h2>
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="data-[state=open]:animate-accordion-slide-down data-[state=closed]:animate-accordion-slide-up divide-y divide-gray-100 px-4">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <TransactionCard
              key={index}
              type={index === 1 ? "outcome" : "income"}
            />
          ))}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default TransactionList;
