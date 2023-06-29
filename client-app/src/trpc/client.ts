import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../../../server/src/router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

export const trpcReactQuery = createTRPCReact<AppRouter>();

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});

// //@ts-ignore
// const r = await trpc.currency.getCurrencyById.query( {id: 'bitcoin' })
// console.log('r', r)

type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

export type GetAllCurrenciesInput = RouterInput['currency']['getAllCurrencies'];
export type GetAllCurrenciesOutput = RouterOutput['currency']['getAllCurrencies'];

export type getCurrenciesByIdsInput = RouterInput['currency']['getCurrenciesByIds'];
export type getCurrenciesByIdsOutput = RouterOutput['currency']['getCurrenciesByIds'];

export type getCurrencyByIdInput = RouterInput['currency']['getCurrencyById'];
export type getCurrencyByIdOutput = RouterOutput['currency']['getCurrencyById'];

export type getCurrencyHistoryInput = RouterInput['currency']['getCurrencyHistory'];
export type getCurrencyHistoryOutput = RouterOutput['currency']['getCurrencyHistory'];
