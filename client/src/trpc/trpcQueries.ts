import { TRPCClientError } from '@trpc/client';
import type { AppRouter } from '../../server/src/router'

export function isTRPCClientError(
    cause: unknown,
): cause is TRPCClientError<AppRouter> {
    return cause instanceof TRPCClientError;
}

export async function getAllCurrencies(page: number, limit: number) {
    // try {
    //     return await trpc.currency.getAllCurrencies({page: 1, limit: 5});
    // } catch (cause) {
    //     if (isTRPCClientError(cause)) {
    //         // `cause` is now typed as your router's `TRPCClientError`
    //         console.log('data', cause.data);
    //     } else {
    //         // [...]
    //     }
    // }
}
