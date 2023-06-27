import { TRPCClientError } from '@trpc/client';
import type { AppRouter } from '../../../server/src/router'
import {client} from "./client";

export function isTRPCClientError(
    cause: unknown,
): cause is TRPCClientError<AppRouter> {
    return cause instanceof TRPCClientError;
}

export async function getCurrenciesByIds(ids: string) {
        return await client.currency.getCurrenciesByIds.query({ids});
}
export async function getCurrencyById(id: string) {
        return await client.currency.getCurrencyById.query({id});
}
export async function getCurrencyHistory(id: string) {
        return await client.currency.getCurrencyHistory.query({id})
}
