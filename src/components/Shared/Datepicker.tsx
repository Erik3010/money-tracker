import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { useMemo, useRef, useState } from "react";
import { diffInDays, formatDate } from "@utils/index";

interface DatePickerProps {
  onChange: (date: Date) => void;
}

const DatePicker = ({ onChange }: DatePickerProps) => {
  const today = useRef(new Date());
  const [date, setDate] = useState<Date>(today.current);

  const handleChangeDate = (day: Date) => {
    setDate(day);
    onChange(day);
  };

  const showDate = useMemo(() => {
    const dayTerms = ["Yesterday", "Today", "Tomorrow"];
    const differenceInDays = diffInDays(today.current, date);
    if (differenceInDays >= -1 && differenceInDays <= 1) {
      return dayTerms[differenceInDays + 1];
    }

    return formatDate(date);
  }, [today, date]);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="flex items-center w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-none sm:text-sm sm:leading-6">
          <CalendarIcon className="h-5 w-5 mr-2" />
          <span>{showDate}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          className="data-[state=open]:animate-zoom-in data-[state=closed]:animate-zoom-out"
        >
          <DayPicker
            showOutsideDays
            mode="single"
            selected={date}
            required
            onSelect={handleChangeDate as SelectSingleEventHandler}
            className="bg-white p-3 shadow-sm border rounded-md mt-1"
            classNames={{
              month: "space-y-3",
              caption: "relative flex h-9 justify-center items-center",
              caption_label: "flex text-sm font-medium",
              nav: "flex items-center justify-between",
              nav_button:
                "rounded-md border text-gray-400 hover:bg-gray-100 h-8 w-8 flex items-center justify-center cursor-pointer focus:outline-none",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse",
              head_cell: "text-sm rounded-md text-gray-500 w-9 h-9 font-normal",
              cell: "text-center h-9 w-9 text-sm hover:bg-gray-100 rounded-md cursor-pointer",
              day: "w-9 h-9 flex items-center justify-center rounded-md",
              day_outside: "text-gray-300",
              day_today: "[&:not([aria-selected])]:bg-gray-200",
              day_selected: "bg-blue-500 text-white",
            }}
            components={{
              IconLeft: () => <ChevronLeftIcon className="h-5 w-5" />,
              IconRight: () => <ChevronRightIcon className="h-5 w-5" />,
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default DatePicker;
