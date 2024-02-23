import TransactionList from "@pages/Transaction/components/TransactionList";
import * as Accordion from "@radix-ui/react-accordion";

const TransactionIndex = () => {
  return (
    <div>
      <div className="mb-6 space-y-0.5">
        <h1 className="font-semibold text-xl text-gray-900">Transactions</h1>
        <p className="text-xs text-gray-400">
          All transactions are listed here
        </p>
      </div>
      <Accordion.Root
        className="space-y-3.5"
        type="multiple"
        defaultValue={["Today", "1 Feb 2023", "2 Feb 2023"]}
      >
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <TransactionList
              key={index}
              date={index !== 0 ? `${index} Feb 2023` : "Today"}
            />
          ))}
      </Accordion.Root>
    </div>
  );
};

export default TransactionIndex;
