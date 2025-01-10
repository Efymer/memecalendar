import Banner from "@/components/Banner";
import Layout from "./Layout";
import { LaunchedTokenList } from "@/components/LaunchedTokenList";

export default function HallOfMemesPage() {
  return (
    <Layout>
      <Banner />
      <div className="bg-[#0A0D14] text-white font-mono flex flex-col">
        <LaunchedTokenList />
      </div>
    </Layout>
  );
}
