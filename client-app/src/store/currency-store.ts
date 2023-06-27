import create from 'zustand';
import { CurrencyHistoryType, CurrencyType } from '../../../server/src/api/api';
import {getCurrencyById, getCurrencyHistory} from "../trpc/trpcQueries";
type CurrencyStateType = {
  currentCurrency: null | CurrencyType;
  currencyHistory: null | CurrencyHistoryType;
  setCurrentCurrency: (id: string) => void;
  setCurrencyHistory: (id: string) => void;
};

export const useCurrencyStore = create<CurrencyStateType>((set) => ({
  currentCurrency: null,
  currencyHistory: null,
  setCurrentCurrency: async (id: string) => {
    try {
      const currentCurrency = await getCurrencyById(id)
      set(() => {
        return { currentCurrency };
      });
    } catch (err) {
      console.log(err)

    }
  },
  setCurrencyHistory: async (id: string) => {
    try {
      const currencyHistory = await getCurrencyHistory(id)
      set(() => {
        return { currencyHistory };
      });
    } catch (err) {
      console.log( err )
    }
  },
}));
