import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { type Icon } from "@money-tracker-types/index";
import { cn } from "@utils/index";

interface SettingItemProps {
  title: string;
  subtitle?: string;
  iconWrapperClass?: string;
  icon: Icon;
}

const SettingItem = ({
  title,
  subtitle,
  iconWrapperClass = "bg-blue-500",
  icon: Icon,
}: SettingItemProps) => {
  return (
    <article className="flex justify-between items-center px-4 py-3.5 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-x-3.5 text-sm">
        <div className={cn("rounded-lg p-2", iconWrapperClass)}>
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
        </div>
      </div>
      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </article>
  );
};

export default SettingItem;
