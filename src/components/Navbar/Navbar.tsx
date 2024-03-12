import {
  ArrowsRightLeftIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusCircleIcon,
} from "@heroicons/react/20/solid";

import NavItem from "@components/Navbar/NavItem";

const Navbar = () => {
  return (
    <div className="max-w-[480px] w-full grid grid-cols-5 fixed bg-white bottom-0 border-t border-gray-300 py-3 gap-2">
      <NavItem label="Home" to="/" Icon={HomeIcon} />
      <NavItem label="Report" to="/report" Icon={ChartPieIcon} />
      <NavItem label="New" to="/transactions/new" Icon={PlusCircleIcon} />
      <NavItem
        label="Transaction"
        to="/transactions"
        Icon={ArrowsRightLeftIcon}
      />
      <NavItem label="Settings" to="/settings" Icon={Cog6ToothIcon} />
    </div>
  );
};

export default Navbar;
