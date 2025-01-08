import React, { useState } from "react";
import {
  AlertCircle,
  CalendarIcon,
  DollarSign,
  Loader,
  Upload,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, startOfDay } from "date-fns";
import { getHbarAmountFromDollars, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import Layout from "./Layout";
import { useCreateToken } from "@/mutations/token";
import { HashpackConnector } from "@buidlerlabs/hashgraph-react-wallets/connectors";
import { useWallet } from "@buidlerlabs/hashgraph-react-wallets";
import { HashConnectButton } from "@/components/HashConnectButton";
import { TransferTransaction } from "@hashgraph/sdk";
import { useToast } from "@/hooks/use-toast";
import GoBack from "@/components/GoBack";
import { Signer } from "node_modules/@hashgraph/sdk/lib/Signer";
import useAppStore from "@/states/app";

const MAX_FILE_SIZE = 2000000;

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name must be at least 3 characters.",
    })
    .max(50, {
      message: "Name must be at most 50 characters.",
    }),
  symbol: z
    .string()
    .min(3, {
      message: "Symbol must be at least 3 characters.",
    })
    .max(50, {
      message: "Symbol must be at most 50 characters.",
    }),
  description: z
    .string()
    .min(3, {
      message: "Description must be at least 3 characters.",
    })
    .max(690, {
      message: "Description must be at most 50 characters.",
    }),
  date: z.date({
    message: "A start date is required.",
  }),
  cover_image: z.string().min(1, { message: "Image is required." }),
  dev_wallet: z
    .string()
    .regex(/^(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))\.(0|(?:[1-9]\d*))$/)
    .optional()
    .or(z.string().max(0)),
  twitter: z.string().url().or(z.string().max(0)),
  discord: z.string().url().or(z.string().max(0)),
  telegram: z.string().url().or(z.string().max(0)),
  website: z.string().url().or(z.string().max(0)),
});

export function SubmitForm() {
  const createToken = useCreateToken();
  const { isConnected, signer } = useWallet(HashpackConnector);
  const isCreating = useAppStore((state) => state.isCreating);
  const setIsCreating = useAppStore((state) => state.setIsCreating);
  const [dragActive, setDragActive] = React.useState(false);
  const [coverImage, setCoverImage] = React.useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      symbol: "",
      description: "",
      date: null,
      cover_image: "",
      dev_wallet: "",
      twitter: "",
      discord: "",
      telegram: "",
      website: "",
    },
  });

  function onSubmit(values: any) {
    handlePayment(values);
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.size <= MAX_FILE_SIZE) {
        try {
          setCoverImage(file);
          form.setValue("cover_image", file.name);
          form.clearErrors("cover_image");
        } catch (error) {
          toast({
            title: "Error uploading image",
            description: "Please try again later.",
            duration: 5000,
          });
        }
      } else {
        toast({
          title: "File is too large",
          description: "Please upload a file smaller than 2MB.",
          duration: 5000,
        });
      }
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size <= MAX_FILE_SIZE) {
        try {
          setCoverImage(file);
          form.setValue("cover_image", file.name);
          form.clearErrors("cover_image");
        } catch (error) {
          toast({
            title: "Error uploading image",
            description: "Please try again later.",
            duration: 5000,
          });
        }
      } else {
        toast({
          title: "File is too large",
          description: "Please upload a file smaller than 2MB.",
          duration: 5000,
        });
      }
    }
  };

  const getHbarAmount = async () => {
    const b = await getHbarAmountFromDollars(1);
    return b.hbarAmount;
  };

  const handlePayment = async (values) => {
    const hbarAmount = await getHbarAmount();

    if (!signer) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to continue.",
        duration: 5000,
      });
      throw new Error("Signer is required");
    }

    if (!hbarAmount) {
      toast({
        title: "Couldn't fetch the HBAR amount",
        description: "Please try again later.",
        duration: 5000,
      });
      throw new Error("Couldn't fetch the HBAR amount");
    }

    try {
      setIsCreating(true);
      const memeCalendarAccount = import.meta.env.VITE_HEDERA_ACCOUNT;

      const transaction = await new TransferTransaction()
        .addHbarTransfer(signer.getAccountId(), -hbarAmount)
        .addHbarTransfer(memeCalendarAccount, hbarAmount)
        .freezeWithSigner(signer as Signer);

      const signedTx = await transaction.signWithSigner(signer as Signer);
      const txResponse = await signedTx.executeWithSigner(signer as Signer);
      const transferTxReceipt = await txResponse.getReceiptWithSigner(
        signer as Signer
      );
      const transactionStatus = transferTxReceipt.status;

      if (transactionStatus.toString() === "SUCCESS") {
        createToken.mutate({
          ...values,
          conensusTimestamp: txResponse.transactionId.toString(),
          file: coverImage,
        });
      }
    } catch (error) {
      setIsCreating(false);
      toast({
        title: "Error",
        description:
          "Failed to create token submission, please contact with support.",
        duration: 15000,
      });
    }
  };

  return (
    <Layout>
      <GoBack />
      <div className="border border-[#1a2333] rounded-lg overflow-hidden my-6">
        <div className="bg-[#1a2333] px-4 py-2 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-white/50 text-sm">
            C:\Users\Anon\MemeCalendar\create_token_launch.exe
          </span>
        </div>
        <div className="p-4 bg-[#0A0D14] space-y-6">
          <div className="flex gap-6">
            <div className="flex-1 space-y-6">
              <div className="mx-auto max-w-2xl space-y-8 p-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">Submit Your Token</h1>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name{" "}
                            <span className="text-red-600 font-semibold">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your token name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="symbol"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Symbol{" "}
                            <span className="text-red-600 font-semibold">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your token symbol"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Description{" "}
                            <span className="text-red-600 font-semibold">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Provide a detailed description of your token..."
                              className="min-h-[200px]"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                            Please provide a detailed description of the token
                            (120+ words) to increase your chances of getting
                            listed.
                          </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="cover_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Image{" "}
                            <span className="text-red-600 font-semibold">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <div
                              className={cn(
                                "relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/25 px-6 py-8 text-center",
                                dragActive && "border-primary",
                                coverImage && "border-green-500"
                              )}
                              onDragEnter={handleDrag}
                              onDragLeave={handleDrag}
                              onDragOver={handleDrag}
                              onDrop={handleDrop}
                            >
                              <Input
                                type="file"
                                accept="image/png,image/jpeg,image/gif,image/webp"
                                className="absolute h-full w-full opacity-0 cursor-pointer"
                                onChange={handleChange}
                              />
                              <div className="flex flex-col items-center gap-2">
                                <>
                                  {coverImage ? (
                                    <img
                                      src={URL.createObjectURL(coverImage)}
                                    />
                                  ) : (
                                    // <div className="text-sm text-muted-foreground">
                                    //   {coverImage.name}
                                    // </div>
                                    <>
                                      <Upload className="h-8 w-8 text-muted-foreground" />
                                      <div className="text-base">
                                        Drag & Drop your files or Browse
                                      </div>
                                      <div className="text-sm text-muted-foreground">
                                        PNG, JPG, GIF up to 1MB
                                      </div>
                                    </>
                                  )}
                                </>
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>
                            Launch Date{" "}
                            <span className="text-red-600 font-semibold">
                              *
                            </span>
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal border-[#2a3343] text-white/70 hover:text-white hover:border-[#3a4353] bg-[#0A0D14]/50 hover:bg-[#1a2333]",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select Start Date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  startOfDay(date.toUTCString()) <
                                  startOfDay(new Date().toUTCString())
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dev_wallet"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dev Wallet</FormLabel>
                          <FormDescription>Optional</FormDescription>
                          <FormControl>
                            <Input placeholder="0.0.123456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <h2 className="text-xl font-bold">Social Links</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="twitter"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Twitter</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="https://x.com/yourproject"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="discord"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Discord</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="https://discord.gg/yourproject"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="telegram"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telegram</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="https://t.me/yourproject"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="https://yourproject.fun"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-500 p-3 rounded-lg text-sm font-mono">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <div className="flex items-center gap-1">
                        <span>Listing fee:</span>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4" />
                          <span>1.00</span>
                        </div>
                        <span>paid in ℏbar</span>
                      </div>
                    </div>
                    {isConnected ? (
                      <>
                        {isCreating ? (
                          <Button
                            className="w-full border-orange-500 text-white bg-orange-600 hover:bg-orange-600 hover:text-white font-mono"
                            disabled
                          >
                            <Loader className="h-4 w-4 animate-spin" />{" "}
                            Creating...
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="w-full border-orange-500 text-white bg-orange-600 hover:bg-orange-600 hover:text-white font-mono"
                          >
                            Submit
                          </Button>
                        )}
                      </>
                    ) : (
                      <HashConnectButton />
                    )}
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
