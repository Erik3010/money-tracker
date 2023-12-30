import TransactionCard from "../components/Home/TransactionCard";
import BalanceCard from "../components/Home/BalanceCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <section>
            <p className="text-xs uppercase text-gray-400 font-semibold mb-1">
              Current Balance
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              <span className="text-xs text-gray-400 font-semibold">Rp</span>{" "}
              10.000
            </h2>
          </section>
          <section className="grid grid-cols-1 xs:grid-cols-2 gap-4">
            <BalanceCard type="income" label="Income" balance="10.000" />
            <BalanceCard type="outcome" label="Outcome" balance="10.000" />
          </section>
        </div>
        <section>
          <div className="mb-2 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Latest Transactions</h2>
            <NavLink
              to="/transactions"
              className="text-blue-700 hover:underline text-xs font-medium"
            >
              See all transaction
            </NavLink>
          </div>
          <div className="divide-y divide-gray-200 bg-white shadow-sm ring-1 ring-gray-900/5 rounded-xl px-4">
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <TransactionCard
                  type={index === 1 ? "outcome" : "income"}
                  key={index}
                />
              ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
