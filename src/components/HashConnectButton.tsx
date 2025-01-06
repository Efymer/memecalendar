import { useWallet } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { Button } from "./ui/button";

export const HashConnectButton = () => {
  const { isConnected, connect, disconnect } = useWallet(HashpackConnector);

  const handleConnect = async (e) => {
    e.preventDefault();
    await connect();
  };

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
    <Button
      size="sm"
      className="bg-blue-500 hover:bg-blue-600 text-white font-mono w-full"
      onClick={handleConnect}
    >
      Connect
    </Button>
  );
};
