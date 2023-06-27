import { router, publicProcedure } from '../trpc'
import { z } from 'zod';
import {coinsAPI} from "../api/api";


export const currenciesRouter = router({
    getAllCurrencies: publicProcedure
        .input(z.object({ page: z.number(), limit: z.number() }))
        .query(async (opts) => {
            const res = await coinsAPI.getAllCurrencies(opts.input.page, opts.input.limit)
            return res.data
        }),
    getCurrenciesByIds: publicProcedure
        .input(z.object({ ids: z.string() }))
        .query(async (opts) => {
            return await coinsAPI.getCurrenciesByIds(opts.input.ids)
        }),
    getCurrencyById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async (opts) => {
            const res = await coinsAPI.getCurrencyById(opts.input.id)
            return res.data.data
        }),
    getCurrencyHistory: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async (opts) => {
            const res = await coinsAPI.getCurrencyHistory(opts.input.id)
            return res.data.data
        })
})

// const foo = async () => {
//     const res = await currenciesRouter.createCaller({}).getAllCurrencies({page: 1, limit: 5})
//         console.log(res)
// }
//
// foo()

