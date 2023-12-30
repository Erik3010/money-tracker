import TransactionList from "../../components/Transactions/TransactionList";

const TransactionIndex = () => {
  return (
    <div>
      <div className="mb-4">
        <h1 className="font-semibold text-xl text-gray-900">
          All Transactions
        </h1>
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
