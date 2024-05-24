import { forwardRef } from "react";
import Loader from "@components/Shared/Loader";
import { cva, type VariantProps } from "class-variance-authority";

const buttonBase =
  "h-11 rounded-md px-3.5 py-3.5 border text-sm font-semibold shadow-sm leading-none flex justify-center items-center space-x-2.5 transition-colors disabled:opacity-75 disabled:cursor-not-allowed";
const buttonStyles = cva(buttonBase, {
  variants: {
    variant: {
      primary:
        "bg-blue-500 border-transparent text-white enabled:hover:bg-blue-600",
      outline:
        "bg-transparent border-blue-500 text-blue-500 enabled:hover:bg-blue-50",
    },
    full: { true: "w-full" },
  },
  defaultVariants: { variant: "primary", full: false },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  children: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, full, loading = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles({ variant, full, className })}
        {...props}
      >
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
