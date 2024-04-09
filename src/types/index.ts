import { transactionTypes } from "@constants/index";

export type TransactionType = (typeof transactionTypes)[number];

export interface AuthForm {
  email: string;
  password: string;
}
