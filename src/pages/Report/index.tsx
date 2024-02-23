import SelectField from "@components/Shared/SelectField";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { noop } from "@utils/index";

const Report = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-x-3">
            <button className="p-0.5 rounded-full border text-gray-400 hover:bg-gray-100 flex items-center justify-center">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="font-semibold text-xl text-gray-900">March</h1>
            <button className="p-0.5 rounded-full border text-gray-400 hover:bg-gray-100 flex items-center justify-center">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-400">Your weekly insight for March</p>
        </div>
        <SelectField
          initialValue="weekly"
          onChange={noop}
          dense
          items={["weekly", "monthly", "yearly"]}
        />
      </div>
      <div>Hello world</div>
    </div>
  );
};

export default Report;
