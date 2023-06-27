import {router} from "./trpc";
import {currenciesRouter} from "./currency/router";

export const appRouter = router({
    currency: currenciesRouter,
});

export type AppRouter = typeof appRouter;
