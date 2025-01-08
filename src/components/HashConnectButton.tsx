import { useWallet } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";
import { WalletModal } from "./WalletModal";
import { useState } from "react";

export const HashConnectButton = () => {
  const { isConnected, disconnect } = useWallet(HashpackConnector);
  const [showWalletModal, setShowWalletModal] = useState(false);


  if (isConnected) {
    return (
      <Button
        size="sm"
        className="bg-blue-500 hover:bg-blue-600 text-white font-mono"
        onClick={disconnect}
      >
        Disconnect
      </Button>
    );
  }

  return (
    <>
      <Button
        size="sm"
        className="bg-blue-500 hover:bg-blue-600 text-white font-mono w-full"
        onClick={() => setShowWalletModal(true)}
      >
        <Wallet className="h-4 w-4" />
        Connect Wallet
      </Button>

      <WalletModal open={showWalletModal} onOpenChange={setShowWalletModal} />
    </>
  );
};
