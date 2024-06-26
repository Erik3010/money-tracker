import { cn } from "@utils/index";

interface LoaderProps extends React.SVGProps<SVGSVGElement> {
  strokeColor: string;
}

const Loader = ({ className, strokeColor }: LoaderProps) => {
  return (
    <svg
      className={cn("animate-spin", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        className="stroke-current opacity-25"
      />
      <path
        d="M12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19"
        className={strokeColor}
      />
    </svg>
  );
};

export default Loader;
