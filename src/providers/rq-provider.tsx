"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function ReactQueryProvider({
  children,
  shouldDisplay,
}: {
  children: React.ReactNode;
  shouldDisplay?: boolean;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {shouldDisplay && (
        <div style={{ position: "fixed", bottom: 75, left: 12, zIndex: 9999 }}>
          <ReactQueryDevtools
            initialIsOpen={false}
            position="left"
            buttonPosition="relative"
          />
        </div>
      )}
    </QueryClientProvider>
  );
}
