import { transactionTypes } from "@constants/index";

export type TransactionType = (typeof transactionTypes)[number];
