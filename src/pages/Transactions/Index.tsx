import TransactionList from "../../components/Transactions/TransactionList";

const TransactionIndex = () => {
  return (
    <div>
      <div className="mb-6 space-y-1">
        <h1 className="font-semibold text-xl text-gray-900">Transactions</h1>
        <p className="text-xs text-gray-500">
          All transactions are listed here
        </p>
      </div>
      <div className="space-y-5">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <TransactionList key={index} />
          ))}
      </div>
    </div>
  );
};

export default TransactionIndex;
