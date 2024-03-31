import { cn } from "@utils/index";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const inputClass =
  "block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6";

const Input = ({ className, ...props }: InputProps) => {
  return <input className={cn(inputClass, className)} {...props} />;
};

export default Input;
