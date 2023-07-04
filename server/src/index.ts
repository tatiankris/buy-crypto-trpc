import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./router";
import { createContext } from "./context";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: ["https://buy-crypto-trpc.vercel.app/", "http://localhost:3000"],
  })
);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
