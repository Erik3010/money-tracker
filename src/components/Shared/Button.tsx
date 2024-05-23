import { cn } from "@utils/index";
import Loader from "@components/Shared/Loader";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

const buttonClass =
  "w-full h-11 rounded-md bg-blue-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm enabled:hover:bg-blue-600 leading-none flex justify-center items-center space-x-2.5 disabled:opacity-75 disabled:cursor-not-allowed";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, loading = false, ...props }: ButtonProps, ref) => {
    return (
      <button ref={ref} className={cn(buttonClass, className)} {...props}>
        {loading ? (
          <Loader
            className="h-6 w-6 text-white stroke-2"
            strokeColor="stroke-white"
          />
        ) : (
          <span>{children}</span>
        )}
      </button>
    );
  }
);

export default Button;
