import { useQuery } from "react-query";
import request, { gql } from "graphql-request";
import { Token } from "@/mutations/token";
import { format, getUnixTime } from "date-fns";
import { formatCompactNumber, sumLiquidityUsd, sumVolumeUsd } from "@/lib/utils";

interface Tokens {
  token_launch: Array<Token>;
}

interface TokenById {
  token_launch_by_pk: Token;
}

export function useGetTodayTokens() {
  const today = format(new Date(), "yyyy-MM-dd");

  return useQuery(["tokens", "today"], async () => {
    const data: Tokens = await request(
      import.meta.env.VITE_GRAPHQL_ENDPOINT_URL,
      gql`
      query GetTokenLaunch {
        token_launch(order_by: { created_at: desc }, where: { date: {_eq: "${today}" } }) {
          id
          name
          symbol
          description
          created_at
          updated_at
          cover_image
          date
          dev_wallet
          twitter
          discord
          website
          telegram
        }
      }
      `
    );
    return data?.token_launch;
  });
}

export function useGetUpcomingTokens() {
  const today = format(new Date(), "yyyy-MM-dd");

  return useQuery(["tokens", "upcoming"], async () => {
    const data: Tokens = await request(
      import.meta.env.VITE_GRAPHQL_ENDPOINT_URL,
      gql`
      query GetTokenLaunch {
        token_launch(order_by: { date: asc }, where: { date: {_gt: "${today}" } }) {
          id
          name
          symbol
          description
          created_at
          updated_at
          cover_image
          date
          dev_wallet
          twitter
          discord
          website
          telegram
        }
      }
      `
    );

    return data?.token_launch;
  });
}

export function useGetOngoingTokens() {
  const today = format(new Date(), "yyyy-MM-dd");

  return useQuery(["tokens", "ongoing"], async () => {
    const data: Tokens = await request(
      import.meta.env.VITE_GRAPHQL_ENDPOINT_URL,
      gql`
      query GetTokenLaunch {
        token_launch(order_by: { date: desc }, where: { date: {_lt: "${today}" } }) {
          id
          name
          symbol
          description
          created_at
          updated_at
          cover_image
          date
          dev_wallet
          twitter
          discord
          website
          telegram
        }
      }
      `
    );

    return data?.token_launch;
  });
}

export function useGetTokenById(tokenId: string) {
  return useQuery(
    ["tokens", tokenId],
    async () => {
      const data: TokenById = await request(
        import.meta.env.VITE_GRAPHQL_ENDPOINT_URL,
        gql`
          query ($token_id: uuid!) {
            token_launch_by_pk(id: $token_id) {
              id
              name
              symbol
              description
              created_at
              updated_at
              cover_image
              date
              dev_wallet
              twitter
              discord
              website
              telegram
            }
          }
        `,
        {
          token_id: tokenId,
        }
      );
      return data?.token_launch_by_pk;
    },
    {
      retry: false,
      enabled: !!tokenId,
    }
  );
}

export async function fetchTokenInfo(tokenId: string) {
  const response = await fetch(
    `${import.meta.env.VITE_SAUCERSWAP_API}/tokens/${tokenId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export function useGetTokenInfo(tokenId: string) {
  return useQuery(["tokenInfo", tokenId], () => fetchTokenInfo(tokenId), {
    retry: false,
    enabled: !!tokenId,
    refetchInterval: 1000 * 60 * 1, // 1 minute
  });
}

export async function fetchPrices() {
  const response = await fetch(
    `${import.meta.env.VITE_SAUCERSWAP_API}/tokens/price-change`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export function useFetchPrices() {
  return useQuery(["prices"], () => fetchPrices(), {
    retry: false,
    refetchInterval: 1000 * 60 * 1, // 1 minute
  });
}

export async function fetchVolume(tokenId: string) {
  var d = new Date();
  d.setDate(d.getDate() - 1);
  const yesterday = getUnixTime(d);
  const now = getUnixTime(new Date());

  const response = await fetch(
    `${
      import.meta.env.VITE_SAUCERSWAP_API
    }/tokens/prices/${tokenId}?interval=FIVEMIN&from=${yesterday}&to=${now}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return formatCompactNumber(sumVolumeUsd(data));
}

export function useFetchVolume(tokenId: string) {
  return useQuery(["volume", tokenId], () => fetchVolume(tokenId), {
    retry: false,
    enabled: !!tokenId,
    refetchInterval: 1000 * 60 * 1, // 1 minute
  });
}

export async function fetchLiquidity(tokenId: string) {
  var d = new Date();
  d.setDate(d.getDate() - 1);
  const yesterday = getUnixTime(d);
  const now = getUnixTime(new Date());

  const response = await fetch(
    `${
      import.meta.env.VITE_SAUCERSWAP_API
    }/tokens/prices/${tokenId}?interval=FIVEMIN&from=${yesterday}&to=${now}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();

  return formatCompactNumber(sumLiquidityUsd(data));
}


export function useFetchLiquidity(tokenId: string) {
  return useQuery(["liquidity", tokenId], () => fetchLiquidity(tokenId), {
    retry: false,
    enabled: !!tokenId,
    refetchInterval: 1000 * 60 * 1, // 1 minute
  });
}