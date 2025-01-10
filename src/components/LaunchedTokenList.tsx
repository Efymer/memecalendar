import { LaunchedTokenCard } from "./LaunchedTokenCard";

const tokens = [
  {
    id: "0.0.7907968", // DINO
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmToicLd4wAqZNydZg9vWCxcPdTtVMotnmpZuVWxkos1KS",
  },
  {
    id: "0.0.8041571", // SMACKM
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmVbmeXMunrpxgQs6z4bouw2sM1w6VYsyKurXTevMXuZd5",
  },
  {
    id: "0.0.7893707",
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmbrGPjEkLNcGPZwedUtAeshAB2peeKM7BEwMPR2N2NihF",
  },
  {
    id: "0.0.7925466",
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmVuUZGVM8Z4dEoWBoLMLoNMjBzW3m4ERuA6YdiKP4psro",
  },
  {
    id: "0.0.7985880",
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/Qmd91WcNjBLWQEgvCR7qDEQ9gTEVdsuostUKrnXvmDoSXe",
  },
  {
    id: "0.0.7893347",
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmP7WVWVPeZhA5CW7vhV6EFLpKdawMD9xgF5MJtb1nTJFW",
  },
  {
    id: "0.0.7893583",
    cover_image: "https://maroon-junior-aphid-734.mypinata.cloud/ipfs/QmRUrLajRxBtWm8eff9g49m7toLsYsz5PbjYsE2phazWu7",
  },
];

export function LaunchedTokenList() {
  return (
    <div className="grid gap-6">
      {tokens.map((token) => (
        <LaunchedTokenCard key={token.id} token={token} />
      ))}
    </div>
  );
}
