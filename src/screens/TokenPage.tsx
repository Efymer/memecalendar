import {
  Twitter,
  MessageCircle,
  Globe,
  Share2,
  Calendar,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";
import { Link, useParams } from "react-router-dom";
import AddToCalendar from "@/components/AddToCalendar";
import { useGetTokenById } from "@/queries/token";
import { format } from "date-fns";
import Banner from "@/components/Banner";
import GoBack from "@/components/GoBack";

export default function TokenPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetTokenById(id);

  if (isLoading) return null;

  return (
    <Layout>
      <Banner />
      <GoBack />
      <div className="min-h-screen bg-[#0A0D14] text-white font-mono">
        <div className="border border-[#1a2333] rounded-lg overflow-hidden mx-auto my-6">
          <div className="bg-[#1a2333] px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-white/50 text-sm">token_details.exe</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/50 hover:text-white"
            >
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid md:grid-cols-[300px_1fr] gap-6">
              <div className="space-y-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-[#1a2333]">
                  <img
                    src={data.cover_image}
                    alt={data.name}
                    className="object-cover"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <AddToCalendar
                    event={{
                      name: data.name,
                      description: data.description,
                      date: data.date,
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">
                      {data.name} ({data.symbol})
                    </h1>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{format(data.date, "PPP")}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {data.twitter && (
                      <Link
                        to={data.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                        <span>Twitter</span>
                      </Link>
                    )}
                    {data.discord && (
                      <Link
                        to={data.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Discord</span>
                      </Link>
                    )}
                    {data.website && (
                      <Link
                        to={data.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Website</span>
                      </Link>
                    )}
                    {data.telegram && (
                      <Link
                        to={data.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white/50 hover:text-white transition-colors"
                      >
                        <Send className="h-4 w-4" />
                        <span>Website</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="whitespace-pre-wrap text-white/70">
                  {data.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
