import { useQuery } from "react-query";
import request, { gql } from "graphql-request";
import { GRAPHQL_ENDPOINT_URL } from "@/App";
import { Token } from "@/mutations/token";
import { format } from "date-fns";

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
      GRAPHQL_ENDPOINT_URL,
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
      GRAPHQL_ENDPOINT_URL,
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
      GRAPHQL_ENDPOINT_URL,
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
        GRAPHQL_ENDPOINT_URL,
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
      enabled: !!tokenId,
    }
  );
}
