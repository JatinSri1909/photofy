"use server";

import Transaction from "../database/models/transaction.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function createTransactions(transaction: CreateTransactionParams) {
    try {
        await connectToDatabase();

        // Create a new transaction with a buyerId
        const newTransaction = await Transaction.create({
            ...transaction, buyer: transaction.buyerId
        })
    } catch (error) {
        handleError(error);
    }
}