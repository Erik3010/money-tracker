import { ChevronUpIcon } from "@heroicons/react/20/solid";
import TransactionCard from "@pages/Transaction/components/TransactionCard";
import * as Accordion from "@radix-ui/react-accordion";

interface TransactionListProps {
  date?: string;
}

const TransactionList = ({ date = "Today" }: TransactionListProps) => {
  return (
    <Accordion.Item
      className="bg-white border shadow-sm rounded-xl overflow-hidden"
      value={date}
    >
      <Accordion.Trigger className="accordion-trigger data-[state=open]:border-b data-[state=closed]:border-b-1 transition-[border-width] delay-100 w-full flex justify-between items-center py-3.5 hover:bg-gray-50 cursor-pointer px-4">
        <div className="flex flex-col items-start space-y-1">
          <h2 className="text-xs uppercase font-semibold text-gray-700">
            {date}
          </h2>
          <p className="text-xs text-gray-400">5 transaction(s) was made</p>
        </div>
        <ChevronUpIcon className="accordion-chevron h-4 w-4 text-gray-500" />
      </Accordion.Trigger>
      <Accordion.Content className="accordion-content divide-y divide-gray-100 px-4">
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
