import { HWBridgeProvider } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { HederaMainnet, HederaTestnet } from "@buidlerlabs/hashgraph-react-wallets/chains";

const metadata = {
  name: "MemeCalendar.fun",
  description: "Discover the Next Big Token Launch 🚀",
  icons: ["DAppLogo.png"],
  url: window.location.href,
};

export const ReactWalletsProvider = ({ children }) => {
  const isTestnet = import.meta.env.VITE_HEDERA_NETWORK === "testnet";

  return (
    <HWBridgeProvider
      metadata={metadata}
      projectId={"655429453a17835dec55d8f12364aa81"}
      connectors={[HashpackConnector]}
      chains={[isTestnet ? HederaTestnet : HederaMainnet]}
    >
      {children}
    </HWBridgeProvider>
  );
};
