import { inferAsyncReturnType } from '@trpc/server'
import * as trpcExpress from '@trpc/server/adapters/express'

export const createContext = ({
                           req,
                           res,
                       }: trpcExpress.CreateExpressContextOptions) => {
    return {}
}

export type Context = inferAsyncReturnType<typeof createContext>

