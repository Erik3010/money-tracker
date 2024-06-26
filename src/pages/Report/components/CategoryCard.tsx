const CategoryCard = () => {
  return (
    <div className="rounded-lg border flex flex-col p-4 cursor-pointer hover:bg-gray-50">
      <div className="text-2xl w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 border self-start">
        🍔
      </div>
      <div className="mt-2.5 mb-3 space-y-0.5">
        <h2 className="text-xs font-medium text-gray-500">Food & Beverage</h2>
        <h2 className="text-base font-semibold">
          <span className="text-xs text-gray-400 font-semibold">Rp</span>{" "}
          250.000
        </h2>
      </div>
      <div className="flex items-center w-full gap-x-2.5">
        <div className="h-2 w-full bg-gray-300 rounded-md overflow-hidden">
          <div className="h-full bg-blue-500 w-3/4"></div>
        </div>
        <span className="text-xs text-gray-500">75%</span>
      </div>
    </div>
  );
};

export default CategoryCard;
