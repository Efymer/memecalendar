import { HWBridgeProvider } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { HederaTestnet } from "@buidlerlabs/hashgraph-react-wallets/chains";

const metadata = {
  name: "MemeCalendar.fun",
  description: "Discover the Next Big Token Launch 🚀",
  icons: ["DAppLogo.png"],
  url: window.location.href,
};

export const ReactWalletsProvider = ({ children }) => {
  return (
    <HWBridgeProvider
      metadata={metadata}
      projectId={"655429453a17835dec55d8f12364aa81"}
      connectors={[HashpackConnector]}
      chains={[HederaTestnet]}
    >
      {children}
    </HWBridgeProvider>
  );
};
