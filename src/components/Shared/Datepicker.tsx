import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { DayPicker } from "react-day-picker";

type DatePickerProps = React.ComponentProps<typeof DayPicker>;

const DatePicker = (props: DatePickerProps) => {
  return (
    <DayPicker
      showOutsideDays
      className="absolute top-100 left-0 bg-white p-3 shadow-sm border rounded-md mt-1"
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
        day_selected: "bg-blue-500 text-white",
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-5 w-5" />,
        IconRight: () => <ChevronRightIcon className="h-5 w-5" />,
      }}
      {...props}
    />
  );
};

export default DatePicker;
