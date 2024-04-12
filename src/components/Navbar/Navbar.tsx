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
      <NavItem label="Home" to="/" icon={HomeIcon} />
      <NavItem label="Report" to="/report" icon={ChartPieIcon} />
      <NavItem label="New" to="/transactions/new" icon={PlusCircleIcon} />
      <NavItem
        label="Transaction"
        to="/transactions"
        icon={ArrowsRightLeftIcon}
      />
      <NavItem label="Settings" to="/settings" icon={Cog6ToothIcon} />
    </div>
  );
};

export default Navbar;
