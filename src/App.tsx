import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/Home";
import { SubmitForm } from "./screens/SubmitForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactWalletsProvider } from "./states/HashConnect";
import TokenPage from "./screens/TokenPage";
import SubmissionSuccess from "./screens/SubmissionSuccess";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./screens/NotFound";

export const GRAPHQL_ENDPOINT_URL =
  "https://possible-midge-98.hasura.app/v1/graphql";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: Infinity },
  },
});

const App: React.FC = () => {
  return (
    <ReactWalletsProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add/success" element={<SubmissionSuccess />} />
            <Route path="/add" element={<SubmitForm />} />
            <Route path="/token/:id" element={<TokenPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ReactWalletsProvider>
  );
};

export default App;
