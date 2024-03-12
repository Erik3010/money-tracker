import { ChevronRightIcon, Squares2X2Icon } from "@heroicons/react/20/solid";

const Setting = () => {
  return (
    <div>
      <div className="mb-6 space-y-0.5">
        <h1 className="font-semibold text-xl text-gray-900">Settings</h1>
        <p className="text-xs text-gray-400">Manage your settings here</p>
      </div>
      <section className="space-y-5">
        <div className="space-y-2">
          <h2 className="uppercase text-xs font-semibold text-gray-400">
            Transaction
          </h2>
          <div className="divide-y divide-gray-100 bg-white border shadow-sm rounded-lg overflow-hidden">
            {Array(3)
              .fill(null)
              .map(() => (
                <article className="flex justify-between items-center px-4 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-x-4 text-sm">
                    <div className="rounded-lg p-2 bg-blue-500">
                      <Squares2X2Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Category</h3>
                      <p className="text-xs text-gray-400">
                        Manage your category
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </article>
              ))}
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="uppercase text-xs font-semibold text-gray-400">
            Transaction
          </h2>
          <div className="divide-y divide-gray-100 bg-white border shadow-sm rounded-lg overflow-hidden">
            {Array(3)
              .fill(null)
              .map(() => (
                <article className="flex justify-between items-center px-4 py-3.5 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-x-4 text-sm">
                    <div className="rounded-lg p-2 bg-blue-500">
                      <Squares2X2Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Category</h3>
                      <p className="text-xs text-gray-400">
                        Manage your category
                      </p>
                    </div>
                  </div>
                  <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;
