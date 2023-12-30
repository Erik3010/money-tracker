import { transactionTypes } from "../constants";

export type TransactionType = (typeof transactionTypes)[number];
