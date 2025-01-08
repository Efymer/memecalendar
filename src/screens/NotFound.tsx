import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";
import Layout from "./Layout";

export default function NotFound() {
  const [dots, setDots] = useState(".");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Animate loading dots
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);

    // Show error message after "loading"
    const timeout = setTimeout(() => {
      setShowError(true);
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Layout>
      <div className="container  max-w-2xl border border-[#1a2333] rounded-lg overflow-hidden">
        <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-white/50 text-sm">
            C:\Users\Anon\MemeCalendar\error.exe
          </span>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-white/90">
              {">"} searching for page{dots}
            </p>
            {showError && (
              <>
                <p className="text-sm text-red-500">
                  {">"} error: page not found (404)
                </p>
                <div className="bg-[#1a2333]/50 border border-[#1a2333] rounded-lg p-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Terminal className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">
                        404 - Page Not Found
                      </h1>
                      <p className="text-sm text-white/70">
                        The requested page could not be located
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#0A0D14] border border-[#1a2333] rounded-md p-4">
                      <code className="text-sm text-white/90">
                        <span className="text-red-500">Error:</span> Unable to
                        locate the requested resource. Please check the URL and
                        try again.
                      </code>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="pt-4 border-t border-[#1a2333]">
            <p className="text-sm text-white/50">
              If you believe this is an error, please contact support or report
              it on our Discord server.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
