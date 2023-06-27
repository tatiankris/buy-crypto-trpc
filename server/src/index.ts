import express from 'express'
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express'
import {appRouter} from "./router";
import {createContext} from "./context";


const app = express()

app.use(cors(
    { origin: "http://localhost:3000" }
))

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    }),
)

app.listen(4000, () => {
    console.log('Server running on port 4000')
})
