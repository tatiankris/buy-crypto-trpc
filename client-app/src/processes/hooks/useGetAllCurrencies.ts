// import { useQuery } from 'react-query';
// import { coinsAPI } from '../../api/api';
//
// export const useGetAllCurrencies = (page: number) => {
//   return useQuery(['currencies', page], async () => {
//     return await coinsAPI.getAssets(page * 6, 6);
//   });
// };

import {trpcReactQuery} from "../../trpc/client";
import {useMemo} from "react";

export const useGetAllCurrencies = (page: number) => {
    //@ts-ignore
    const data = trpcReactQuery.currency.getAllCurrencies.useQuery( {page: page * 6, limit: 6});
    return data
};
