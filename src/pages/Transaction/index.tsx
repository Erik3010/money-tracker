import TransactionList from "@pages/Transaction/components/TransactionList";

const TransactionIndex = () => {
  return (
    <div>
      <div className="mb-6 space-y-0.5">
        <h1 className="font-semibold text-xl text-gray-900">Transactions</h1>
        <p className="text-xs text-gray-400">
          All transactions are listed here
        </p>
      </div>
      <div className="space-y-3.5">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <TransactionList
              key={index}
              date={index !== 0 ? "09 Feb 2023" : "Today"}
            />
          ))}
      </div>
    </div>
  );
};

export default TransactionIndex;
