import BalanceCard from "@components/Shared/BalanceCard";
import TransactionCard from "@components/Shared/TransactionCard";
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
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="space-y-0.5">
              <h2 className="font-semibold text-lg">Today's Activity</h2>
              <p className="text-xs text-gray-400">
                You've made 5 transactions today
              </p>
            </div>
            <NavLink
              to="/transactions"
              className="text-blue-700 hover:underline text-xs font-medium"
            >
              See all transaction
            </NavLink>
          </div>
          <div className="divide-y divide-gray-100 bg-white border shadow-sm rounded-xl px-4">
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
