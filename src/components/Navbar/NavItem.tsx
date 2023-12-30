import { HomeIcon as HeroIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  to: string;
  Icon: typeof HeroIcon;
}

const NavItem = ({ label, to, Icon }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      end
      className="nav-link flex flex-col items-center text-center text-gray-400 hover:text-blue-500 transition-colors"
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs mt-1">{label}</span>
    </NavLink>
  );
};

export default NavItem;
