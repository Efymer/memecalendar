import { BotsList } from "@/components/BotsList";
import Layout from "./Layout";

export default function BotsPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Notification Bots</h1>
          <p className="text-white/70">Stay updated with new token listings</p>
        </div>
        <BotsList />
      </div>
    </Layout>
  );
}
