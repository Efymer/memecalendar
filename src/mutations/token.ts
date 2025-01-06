import { useMutation } from "react-query";
import { useAccountId } from "@buidlerlabs/hashgraph-react-wallets";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { format, startOfDay } from "date-fns";
import { queryClient } from "@/App";
import axios from "axios";

export interface Token {
  conensusTimestamp: string;
  id: string;
  name: string;
  symbol: string;
  description: string;
  cover_image: string;
  date: string;
  dev_wallet: string;
  twitter: string;
  discord: string;
  telegram: string;
  website: string;
}

export function useCreateToken() {
  const navigate = useNavigate();
  const { data: accountId } = useAccountId();
  const { toast } = useToast();

  return useMutation(
    async (token: Token) => {
      const response = await axios.post(
        `http://localhost:3000/verify-transaction`,
        {
          consensusTimestamp: token.conensusTimestamp,
          content: {
            name: token.name,
            symbol: token.symbol,
            description: token.description,
            cover_image: token.cover_image,
            date: format(
              startOfDay(new Date(token.date).toUTCString()),
              "yyyy-MM-dd"
            ),
            dev_wallet: token.dev_wallet,
            twitter: token.twitter,
            discord: token.discord,
            telegram: token.telegram,
            website: token.website,
            created_by: accountId,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to create token submission");
      }

      return response.data;
    },
    {
      retry: 10,
      onSuccess: (data: { id: string }) => {
        queryClient.invalidateQueries(["tokens"]);
        navigate("/add/success", { state: { id: data.id } });
      },
      onError: () => {
        toast({
          title: "Error",
          description:
            "Failed to create token submission, please contact with support.",
          duration: 15000,
        });
      },
    }
  );
}
