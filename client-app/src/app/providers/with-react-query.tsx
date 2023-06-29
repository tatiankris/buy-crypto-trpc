import { useState } from 'react';
import { trpcReactQuery } from '../../trpc/client';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
export const withReactQuery = (component: () => React.ReactNode) => () => {
  const [queryClient] = useState(() => new QueryClient());

  const [client] = useState(() =>
    trpcReactQuery.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
        }),
      ],
    })
  );

  return (
    <trpcReactQuery.Provider queryClient={queryClient} client={client}>
      <QueryClientProvider client={queryClient}>{component()}</QueryClientProvider>
    </trpcReactQuery.Provider>
  );
};
