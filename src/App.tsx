import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {window.location.pathname === "/" ? <Index /> : <NotFound />}
  </QueryClientProvider>
);

export default App;
