import { transactionTypes } from "@constants/index";
import { ComponentType } from "react";

export type Icon = ComponentType<{ className?: string }>;

export type TransactionType = (typeof transactionTypes)[number];

export interface AuthForm {
  email: string;
  password: string;
}
