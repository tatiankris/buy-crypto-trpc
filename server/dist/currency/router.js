import { router, publicProcedure } from '../trpc.js';
const currenciesRouter = router({
    greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});
export default currenciesRouter;
