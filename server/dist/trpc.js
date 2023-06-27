import { initTRPC } from '@trpc/server';
import { z } from 'zod';
// const t = initTRPC.context<Context>().create()
const t = initTRPC.create();
// export const router = t.router
// export const middleware = t.middleware;
// export const publicProcedure = t.procedure
const appRouter = t.router({
    hello: t.procedure.input(z
        .object({
        name: z.string(),
    })
        .optional())
        .query(({ input }) => {
        var _a;
        return {
            greeting: `привет, ${(_a = input === null || input === void 0 ? void 0 : input.name) !== null && _a !== void 0 ? _a : 'народ'}`,
        };
    }),
});
