
import { Children } from "@/shared/types/ChildrenTypes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from 'react-redux'
import { store } from '@/app/store/Store'

export default function Providers({ children }: Children) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
