import SelectField from "@components/Shared/SelectField";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import BalanceCard from "@pages/Home/components/BalanceCard";
import { noop } from "@utils/index";

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
            <div className="space-y-1">
              <p className="text-xs uppercase font-semibold text-gray-400">
                March
              </p>
              <h1 className="font-semibold text-xl text-gray-900 space-x-1">
                <span className="text-sm text-gray-400 font-semibold">Rp</span>
                <span>250.000</span>
              </h1>
            </div>
            <button className="p-0.5 rounded-full border text-gray-400 hover:bg-gray-100 flex items-center justify-center">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <p className="text-xs uppercase font-semibold text-gray-400">
              Spend per day
            </p>
            <h1 className="font-semibold text-xl text-gray-900 space-x-1">
              <span className="text-sm text-gray-400 font-semibold">Rp</span>
              <span>250.000</span>
            </h1>
          </div>
        </section>
        <section className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          <BalanceCard dense type="income" label="Income" balance="10.000" />
          <BalanceCard dense type="outcome" label="Outcome" balance="10.000" />
        </section>
      </div>
    </div>
  );
};

export default Report;
