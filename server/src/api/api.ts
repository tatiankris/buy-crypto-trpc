import { instance } from './instance';

export const coinsAPI = {
  async getAllCurrencies(page: number, limit: number) {
    const res = await instance.get<AxiosResponseType<CurrenciesType>>('assets', {
      params: { limit: String(limit), offset: String(page) },
    });
    return res.data;
  },
  async getCurrenciesByIds(ids: string) {
    const res = await instance.get<AxiosResponseType<CurrenciesType>>('assets', {
      params: { ids: ids },
    });
    return res.data;
  },
  getCurrencyById(id: string) {
    return instance.get<AxiosResponseType<CurrencyType>>(`assets/${id}`);
  },
  getCurrencyHistory(id: string) {
    return instance.get(`assets/${id}/history`, { params: { interval: 'd1' } });
  },
};

export type CurrenciesType = Array<CurrencyType>;

export type CurrencyType = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
};

export type CurrencyHistoryType = Array<{ date: string; priceUsd: string; time: number }>;

export type AxiosResponseType<T> = { data: T };


