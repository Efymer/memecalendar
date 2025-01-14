import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import { SubmitForm } from "./screens/SubmitForm";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactWalletsProvider } from "./states/HashConnect";
import TokenPage from "./screens/TokenPage";
import SubmissionSuccess from "./screens/SubmissionSuccess";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./screens/NotFound";
import { Analytics } from "@vercel/analytics/react";
import HallOfMemesPage from "./screens/HallOfMemes";
import PrivacyPage from "./screens/PrivacyPage";
import TermsPage from "./screens/TermsPage";
// import BotsPage from "./screens/Bots";
import Upcoming from "./screens/Upcoming";
import ComingSoonPage from "./screens/ComingSoonPage";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, staleTime: Infinity },
  },
});

const App: React.FC = () => {
  return (
    <ReactWalletsProvider>
      <Analytics />
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tokens/:id" element={<TokenPage />} />
            <Route path="/tokens" element={<Upcoming />} />
            <Route path="/submit-token" element={<SubmitForm />} />
            <Route
              path="/submit-token/success"
              element={<SubmissionSuccess />}
            />
            <Route path="/hall-of-fame" element={<HallOfMemesPage />} />
            <Route path="/submit-token" element={<SubmitForm />} />
            <Route path="/bots" element={<ComingSoonPage />} />
            <Route path="terms-of-service" element={<TermsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </ReactWalletsProvider>
  );
};

export default App;