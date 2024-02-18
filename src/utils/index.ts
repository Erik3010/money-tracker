import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(date);

export const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("id-ID").format(amount);

export const toCurrency = (value: string) =>
  Number(value.replace(/(-(?!\d))|[^0-9|-]/g, "") || "");

export const diffInDays = (date1: Date, date2: Date) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  const diff = Math.floor((utc2 - utc1) / MS_PER_DAY);
  return diff;
};
