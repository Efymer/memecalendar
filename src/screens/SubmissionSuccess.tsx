import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Copy, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import GoBack from "@/components/GoBack";

export default function SubmissionSuccess() {
  const { state } = useLocation();
  const { id } = state;
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const submissionUrl = window.location.origin + "/tokens/" + id;

  if (!id) navigate("/");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(submissionUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <GoBack />
      <div className="bg-[#0A0D14] text-white font-mono container max-w-2xl">
        <div className="border border-[#1a2333] rounded-lg overflow-hidden mx-auto my-6">
          <div className="bg-[#1a2333] px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/50 text-sm">
                C:\Users\Anon\MemeCalendar\token_details.exe
              </span>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-white/90">
                {">"} processing submission...
              </p>
              <p className="text-sm text-green-500">
                {">"} submission successful!
              </p>
            </div>

            <div className="bg-[#1a2333]/50 border border-[#1a2333] rounded-lg p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">
                    Token Submitted Successfully!
                  </h1>
                  <p className="text-sm text-white/70">
                    Your token has been submitted
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#2a3343] text-white/70"
                  >
                    Submission ID
                  </Badge>
                  <code className="text-sm text-white/90">{id}</code>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={window.location.origin + "/tokens/" + id}
                    readOnly
                    className="w-full bg-[#0A0D14] border border-[#1a2333] rounded-md py-2 px-3 text-sm text-white/70"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1 text-white/50 hover:text-white hover:bg-[#0A0D14]/50"
                    onClick={copyToClipboard}
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              {/* <div className="space-y-3">
                <h2 className="text-sm font-semibold text-white">
                  Share your submission
                </h2>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353]"
                  >
                    <Twitter className="h-4 w-4 mr-2" />
                    Share on Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353]"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Share on Discord
                  </Button>
                </div>
              </div> */}
            </div>

            {/* <div className="space-y-4">
              <h2 className="text-sm font-semibold text-white">Next steps</h2>
              <div className="space-y-3">
                {[
                  "Our team will review your submission within 24 hours",
                  "You'll receive a notification once your token is approved",
                  "After approval, your token will be listed in our calendar",
                  "You can edit your submission anytime from your dashboard",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-white/70"
                  >
                    <div className="h-5 w-5 rounded-full bg-[#1a2333] flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="flex items-center justify-between pt-4 border-t border-[#1a2333]">
              <Button
                variant="outline"
                className="border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333]"
                onClick={() => navigate("/tokens/" + id)}
              >
                View Submission
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
