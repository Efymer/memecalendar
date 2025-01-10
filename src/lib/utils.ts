/// <reference types="vite/client" />
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

export function sumLiquidityUsd(data: any[]) {
  return data.reduce((sum, item) => sum + parseFloat(item.liquidityUsd), 0);
}

export function sumVolumeUsd(data: any[]) {
  return data.reduce((sum, item) => sum + parseFloat(item.volumeUsd), 0);
}

export function formatCompactNumber(number: number): string {
  const suffixes = ["", "K", "M", "B", "T"];
  const magnitude = Math.floor(Math.log10(Math.abs(number)) / 3);
  const scaledNumber = number / Math.pow(1000, magnitude);
  const suffix = suffixes[magnitude];

  // Handle decimals based on size
  if (scaledNumber >= 100) {
    return `${scaledNumber.toFixed(0)}${suffix}`;
  } else if (scaledNumber >= 10) {
    return `${scaledNumber.toFixed(1)}${suffix}`;
  }
  return `${scaledNumber.toFixed(2)}${suffix}`;
}
