import { useMutation } from "react-query";
import { useAccountId } from "@buidlerlabs/hashgraph-react-wallets";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { format, startOfDay } from "date-fns";
import { queryClient } from "@/App";
import axios from "axios";
import useAppStore from "@/states/app";

export interface Token {
  conensusTimestamp: string;
  file: File;
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
  const setIsCreating = useAppStore((state) => state.setIsCreating);

  return useMutation(
    async (token: Token) => {
      const formData = new FormData();
      formData.append("file", token.file);
      formData.append(
        "data",
        JSON.stringify({
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
        })
      );

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/verify-transaction`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
      retryDelay: 3000,
      onSuccess: (data: { id: string }) => {
        queryClient.invalidateQueries(["tokens", "today"]);
        queryClient.invalidateQueries(["tokens", "upcoming"]);
        queryClient.invalidateQueries(["tokens", "ongoing"]);
        navigate("/submit-token/success", { state: { id: data.id } });
        setIsCreating(false);
      },
      onError: () => {
        setIsCreating(false);
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

export async function uploadFile(file: File): Promise<any> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error("Failed to upload file, please try again.");
  }
}
