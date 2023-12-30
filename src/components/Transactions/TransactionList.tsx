import TransactionCard from "../../components/Transactions/TransactionCard";

const TransactionList = () => {
  return (
    <div className="divide-y divide-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl px-4 overflow-hidden">
      <h2 className="py-3 bg-gray-100 -mx-4 px-4 text-xs uppercase font-semibold text-gray-500">
        Today
      </h2>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <TransactionCard
            key={index}
            type={index === 1 ? "outcome" : "income"}
          />
        ))}
    </div>
  );
};

export default TransactionList;
