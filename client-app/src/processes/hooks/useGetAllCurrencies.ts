import { trpcReactQuery } from '../../trpc/client';

export const useGetAllCurrencies = (page: number) => {
  const data = trpcReactQuery.currency.getAllCurrencies.useQuery({ page: page * 6, limit: 6 });
  return data;
};
