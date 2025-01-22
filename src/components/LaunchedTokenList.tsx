import { LaunchedTokenCard } from "./LaunchedTokenCard";

const tokens = [
  {
    id: "0.0.7907968", // DINO
    cover_image:
      "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmToicLd4wAqZNydZg9vWCxcPdTtVMotnmpZuVWxkos1KS",
  },
  {
    id: "0.0.8105204", // IVY
    cover_image:
      "https://ipfs.memejob.fun/ipfs/Qmbn9jujzzBb44h8LU4HzLQadJT8xQvM35CpXQDGfGrZDj",
  },
  {
    id: "0.0.7893707", // GIB
    cover_image:
      "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmbrGPjEkLNcGPZwedUtAeshAB2peeKM7BEwMPR2N2NihF",
  },
  {
    id: "0.0.8041571", // SMACKM
    cover_image:
      "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmVbmeXMunrpxgQs6z4bouw2sM1w6VYsyKurXTevMXuZd5",
  },
  {
    id: "0.0.8090666", // HONK
    cover_image:
      "https://ipfs.memejob.fun/ipfs/QmbZfagjxqrLcLs7MkzeEGrAxiw2LiKFXNF2wjbshk5yr4",
  },
  {
    id: "0.0.8108066", // TOMU
    cover_image: "https://ipfs.memejob.fun/ipfs/QmNXRTGwnMkxL2vCwwFEgKDLgp6sRZ1XtMvULCQrtHUehy",
  },
  {
    id: "0.0.8102801", // BSL DEFENDER
    cover_image:
      "https://ipfs.memejob.fun/ipfs/QmTeLwBdiDvW89Kig9dRdguUtJ1TLDfkos8GDGPM3gaa2m",
  },
  {
    id: "0.0.7925466", // ESCO HBAR
    cover_image:
      "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmVuUZGVM8Z4dEoWBoLMLoNMjBzW3m4ERuA6YdiKP4psro",
  },
  {
    id: "0.0.7985880", // 2 FINGERS
    cover_image:
      "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/Qmd91WcNjBLWQEgvCR7qDEQ9gTEVdsuostUKrnXvmDoSXe",
  },
  // {
  //   id: "0.0.7893347", // HERT
  //   cover_image:
  //     "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmP7WVWVPeZhA5CW7vhV6EFLpKdawMD9xgF5MJtb1nTJFW",
  // },
  // {
  //   id: "0.0.7893583", // LARI
  //   cover_image:
  //     "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmRUrLajRxBtWm8eff9g49m7toLsYsz5PbjYsE2phazWu7",
  // },
  // {
  //   id: "0.0.7894172", // DINOPACK
  //   cover_image:
  //     "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmaD6cYZLETbKpzCJFzJu3LeEQCz6ah9Y9dYH2C23AurTP",
  // },
  // {
  //   id: "0.0.7893551", // FINS
  //   cover_image:
  //     "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmbaG7T8KiXEmxQy4BoX25TdcpbDHn1snBN8ZwCFUaYE7k",
  // },
];

export function LaunchedTokenList() {
  return (
    <div className="grid gap-6">
      {/* <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/40" />
          <Input
            placeholder="search for token..."
            className="pl-8 bg-[#1a2333] border-[#2a3343] text-white placeholder:text-white/40"
          />
        </div>

      </div> */}
      {tokens.map((token) => (
        <LaunchedTokenCard key={token.id} token={token} />
      ))}
    </div>
  );
}
