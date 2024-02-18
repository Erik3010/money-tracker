import { formatCurrency, toCurrency } from "@utils/index";
import { useState } from "react";

export type AmountFieldValue = { formattedValue: string; value: number };

interface AmountFieldProps {
  value: number | undefined;
  placeholder?: string;
  onChange: (value: AmountFieldValue) => void;
}

const AmountField = ({ value, placeholder, onChange }: AmountFieldProps) => {
  const [formattedValue, setFormattedValue] = useState(() => {
    if (!value) return "";
    return formatCurrency(value);
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = toCurrency(event.target.value);

    setFormattedValue(formatCurrency(value));
    onChange({ formattedValue, value });
  };

  return (
    <div className="flex">
      <span className="text-sm mr-2 text-gray-400 font-medium">Rp</span>
      <input
        type="text"
        name="amount"
        id="amount"
        placeholder={placeholder || "50.000"}
        value={formattedValue}
        onChange={handleChange}
        className="border-none text-3xl font-bold outline-none w-full"
      />
    </div>
  );
};

export default AmountField;
