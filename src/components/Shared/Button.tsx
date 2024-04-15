import { cn } from "@utils/index";
import Loader from "@components/Shared/Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const buttonClass =
  "w-full h-11 rounded-md bg-blue-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm enabled:hover:bg-blue-600 leading-none flex justify-center items-center space-x-2.5 disabled:opacity-75 disabled:cursor-not-allowed";

const Button = ({
  className,
  children,
  loading = false,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonClass, className)} {...props}>
      {loading ? <Loader /> : <span>{children}</span>}
    </button>
  );
};

export default Button;
