/// <reference types="vite/client" />
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PinataSDK } from "pinata-web3"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}`).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export async function getHbarAmountFromDollars(usdAmount = 1) {
  try {
    // Fetch current HBAR price from a reliable crypto price API
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=hedera-hashgraph&vs_currencies=usd"
    );
    const data = await response.json();

    // Get HBAR price in USD
    const hbarPriceUSD = data["hedera-hashgraph"].usd;

    // Calculate required HBAR amount
    const requiredHBAR = usdAmount / hbarPriceUSD;

    // Round to 8 decimal places (standard for most crypto transactions)
    const roundedHBAR = Number(requiredHBAR.toFixed(8));

    return {
      hbarAmount: roundedHBAR,
      usdPrice: hbarPriceUSD,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    throw new Error("Failed to calculate HBAR amount. Please try again later.");
  }
}


export const pinata = new PinataSDK({
  pinataJwt: `${import.meta.env.VITE_PINATA_JWT}`,
  pinataGateway: `${import.meta.env.VITE_GATEWAY_URL}`
})