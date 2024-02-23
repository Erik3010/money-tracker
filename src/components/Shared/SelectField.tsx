import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cn } from "@utils/index";

interface SelectFieldProps {
  expand?: boolean;
  dense?: boolean;
  initialValue?: string;
  placeholder?: string;
  items: string[];
  onChange: (value: string) => void;
}

const SelectItem = ({ item }: { item: string }) => {
  return (
    <Select.Item
      key={item}
      value={item}
      className="relative flex items-center w-full outline-none text-sm rounded py-1.5 pl-2 pr-9 hover:bg-gray-100 select-none cursor-default"
    >
      <Select.ItemText>{item}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon className="absolute h-4 w-4 right-2.5 top-1/2 -translate-y-1/2" />
      </Select.ItemIndicator>
    </Select.Item>
  );
};

const SelectField = ({
  placeholder,
  items,
  onChange,
  expand = false,
  dense = false,
  initialValue = "",
}: SelectFieldProps) => {
  const baseTriggerClasses =
    "flex items-center justify-between rounded-md border-0 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-none sm:text-sm sm:leading-6";

  return (
    <Select.Root defaultValue={initialValue} onValueChange={onChange}>
      <Select.Trigger
        className={cn(
          baseTriggerClasses,
          { "py-1.5": !dense },
          { "py-1": dense },
          { "w-full": expand }
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon>
          <ChevronUpDownIcon className="h-4 w-4 ml-2" />
        </Select.Icon>
        <Select.Portal>
          <Select.Content
            position="popper"
            className="scale-in bg-white shadow border p-1.5 rounded-md w-full min-w-[var(--radix-select-trigger-width)] data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1"
          >
            <Select.Viewport>
              {items.map((item) => (
                <SelectItem key={item} item={item} />
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Trigger>
    </Select.Root>
  );
};

export default SelectField;
