import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useWallet } from "@buidlerlabs/hashgraph-react-wallets";
import { HashpackConnector, KabilaConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";

interface WalletModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WalletModal({ open, onOpenChange }: WalletModalProps) {
  const { connect: connectHashpack } = useWallet(HashpackConnector);
  const { connect: connectKabila } = useWallet(KabilaConnector);

  const handleConnectHashpack = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    await connectHashpack();
  };

  const handleConnectKabila = async (e) => {
    e.preventDefault();
    await connectKabila();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#0A0D14] border-[#1a2333] text-white font-mono sm:max-w-[425px]">
        <div className="bg-[#1a2333] -m-6 mb-0 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-white/50 text-sm">connect_wallet.exe</span>
        </div>

        <div className="pt-2 pb-4">
          <p className="text-sm text-white/90">
            {">"} select wallet to connect...
          </p>
          <p className="text-sm text-white/70 animate-pulse">{">"} _</p>
        </div>

        <div className="grid gap-4">
          <Button
            variant="outline"
            className="h-auto p-4 border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333] justify-start"
            onClick={(e) => {
              handleConnectHashpack(e);
              onOpenChange(false);
            }}
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.prod.website-files.com/61ce2e4bcaa2660da2bb419e/62e14973c65367120073a891_app-icon.webp"
                  alt="Hashpack"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-semibold">Hashpack</div>
                <div className="text-xs text-white/70">
                  Connect using Hashpack
                </div>
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-auto p-4 border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] font-mono bg-[#0A0D14]/50 hover:bg-[#1a2333] justify-start"
            onClick={(e) => {
              handleConnectKabila(e);
              onOpenChange(false);
            }}
          >
            <div className="flex items-center gap-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <img
                  src="https://cdn.prod.website-files.com/663a0ca9873d010c1225243c/6640fec5eb5ed88df3261fa7_Wallet_Logo%201.png"
                  alt="Kabila"
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-semibold">Kabila</div>
                <div className="text-xs text-white/70">
                  Connect using Kabila
                </div>
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
