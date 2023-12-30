import {
  HomeIcon,
  ChartPieIcon,
  PlusCircleIcon,
  ArrowsRightLeftIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="max-w-[480px] w-full grid grid-cols-5 fixed bg-white bottom-0 border-t border-gray-300 py-3 gap-2">
      <NavItem label="Home" to="/" Icon={HomeIcon} />
      <NavItem label="Reports" to="/reports" Icon={ChartPieIcon} />
      <NavItem label="New" to="/transactions/new" Icon={PlusCircleIcon} />
      <NavItem
        label="Transaction"
        to="/transactions"
        Icon={ArrowsRightLeftIcon}
      />
      <NavItem label="Profile" to="/profile" Icon={UserCircleIcon} />
    </div>
  );
};

export default Navbar;
