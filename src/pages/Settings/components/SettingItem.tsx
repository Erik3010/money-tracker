import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { type Icon } from "@money-tracker-types/index";
import { Link, type To } from "react-router-dom";
import { cn } from "@utils/index";

interface SettingItemProps {
  title: string;
  subtitle?: string;
  iconWrapperClass?: string;
  icon: Icon;
  onClick?: (event: React.MouseEvent) => void;
  to?: To;
}
type SettingItemContentProps = Pick<
  SettingItemProps,
  "title" | "subtitle" | "iconWrapperClass" | "icon"
>;

const CONTAINER_CLASS =
  "w-full flex justify-between items-center px-4 py-3.5 hover:bg-gray-50 cursor-pointer";

const SettingItem = ({ onClick, to, ...props }: SettingItemProps) => {
  const isLink = !!to;
  const content = <SettingItemContent {...props} />;
  const containerProps = { className: CONTAINER_CLASS };

  if (isLink) {
    return (
      <Link to={to} {...containerProps}>
        {content}
      </Link>
    );
  }

  return (
    <button {...containerProps} onClick={onClick}>
      {content}
    </button>
  );
};

const SettingItemContent = ({
  title,
  subtitle,
  iconWrapperClass = "bg-blue-500",
  icon: Icon,
}: SettingItemContentProps) => {
  return (
    <>
      <div className="flex items-center gap-x-3.5 text-sm text-left">
        <div className={cn("rounded-lg p-2", iconWrapperClass)}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="space-y-0.5">
          <h3 className="font-semibold">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </>
  );
};

export default SettingItem;
