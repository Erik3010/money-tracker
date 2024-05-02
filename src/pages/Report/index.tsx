import SelectField from "@components/Shared/SelectField";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import BalanceCard from "@components/Shared/BalanceCard";
import { noop } from "@utils/index";

import TransactionList from "@pages/Transaction/components/TransactionList";
import CategoryCard from "./components/CategoryCard";
import Chart from "./components/Chart";
import * as Accordion from "@radix-ui/react-accordion";
import * as Tabs from "@radix-ui/react-tabs";

const Report = () => {
  return (
    <div className="space-y-6">
      <section className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-semibold text-xl text-gray-900">Report</h1>
          <p className="text-xs text-gray-400">Your weekly insight for March</p>
        </div>
        <SelectField
          initialValue="weekly"
          onChange={noop}
          dense
          items={["weekly", "monthly", "yearly"]}
        />
      </section>
      <div className="space-y-5">
        <section className="flex justify-between items-center">
          <div className="flex items-center gap-x-4">
            <button className="p-0.5 rounded-full border text-gray-400 hover:bg-gray-100 flex items-center justify-center">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="space-y-0.5">
              <p className="text-xs uppercase font-semibold text-gray-400">
                March
              </p>
              <h2 className="font-semibold text-base text-gray-900 space-x-1">
                <span className="text-sm text-gray-400 font-semibold">Rp</span>
                <span>250.000</span>
              </h2>
            </div>
            <button className="p-0.5 rounded-full border text-gray-400 hover:bg-gray-100 flex items-center justify-center">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-end space-y-0.5">
            <p className="text-xs uppercase font-semibold text-gray-400">
              Spend per day
            </p>
            <h2 className="font-semibold text-base text-gray-900 space-x-1">
              <span className="text-sm text-gray-400 font-semibold">Rp</span>
              <span>250.000</span>
            </h2>
          </div>
        </section>
        <section className="h-52">
          <Chart />
        </section>
        <section className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          <BalanceCard dense type="income" label="Income" balance="10.000" />
          <BalanceCard dense type="outcome" label="Outcome" balance="10.000" />
        </section>
        <Tabs.Root defaultValue="transaction">
          <Tabs.List className="grid grid-cols-2 bg-gray-200 rounded-lg p-1">
            <Tabs.Trigger
              className="tabs-trigger leading-relaxed rounded-md transition flex items-center justify-center text-center font-semibold text-sm py-1 text-gray-500 hover:text-gray-900"
              value="transaction"
            >
              Transaction
            </Tabs.Trigger>
            <Tabs.Trigger
              className="tabs-trigger leading-relaxed rounded-md transition flex items-center justify-center text-center font-semibold text-sm py-1 text-gray-500 hover:text-gray-900"
              value="category"
            >
              Category
            </Tabs.Trigger>
          </Tabs.List>
          <div className="mt-3">
            <Tabs.Content value="transaction">
              <Accordion.Root className="space-y-2.5" type="multiple">
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <TransactionList
                      key={index}
                      date={index !== 0 ? `${index} Feb 2023` : "Today"}
                    />
                  ))}
              </Accordion.Root>
            </Tabs.Content>
            <Tabs.Content value="category">
              <div className="grid grid-cols-2 gap-3.5">
                {Array(5)
                  .fill(null)
                  .map((_, index) => (
                    <CategoryCard key={index} />
                  ))}
              </div>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default Report;
