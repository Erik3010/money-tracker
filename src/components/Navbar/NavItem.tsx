// import { HomeIcon as HeroIcon } from "@heroicons/react/20/solid";
import { type Icon } from "@money-tracker-types/index";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  to: string;
  icon: Icon;
}

const NavItem = ({ label, to, icon: Icon }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      end
      className="flex flex-col items-center text-center text-gray-400 hover:text-blue-500 transition-colors [&.active]:text-blue-700"
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </NavLink>
  );
};

export default NavItem;
