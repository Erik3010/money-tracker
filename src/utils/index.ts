import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));

export const dateFormat = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);
