import axios from "axios";
import { CartItem } from "@/app/types/transaction";
import { CreateTransactionPayload } from "@/app/types/transaction";
import { CreateTransactionResponse } from "@/app/types/transaction";

export const createTransactionFlip = async (data: Omit<CreateTransactionPayload, "items"> & { items: CartItem[] }): Promise<CreateTransactionResponse> => {
  try {
    // Ubah struktur item agar sesuai API (price dari amount)
    const payload: CreateTransactionPayload = {
      ...data,
      items: data.items.map((item) => ({
        campaign_id: item.campaign_id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    const response = await axios.post<CreateTransactionResponse>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/donation/create-transaction-flip`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
    console.log("Data sebelum dikirim ke createTransactionFlip:", JSON.stringify(data, null, 2));
  } catch (error: any) {
    console.error("Error creating transaction:", error);
    throw error.response?.data || error;
  }
};

export const createTransactionBankTransfer = async (data: Omit<CreateTransactionPayload, "items"> & { items: CartItem[] }): Promise<CreateTransactionResponse> => {
  try {
    // Ubah struktur item agar sesuai API (price dari amount)
    const payload: CreateTransactionPayload = {
      ...data,
      items: data.items.map((item) => ({
        campaign_id: item.campaign_id,
        quantity: item.quantity,
        price: item.price,
      })),
    };

    const response = await axios.post<CreateTransactionResponse>(`${process.env.NEXT_PUBLIC_BASE_API_URL}/donation/create-transaction-bank-transfer`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Error creating transaction:", error);
    throw error.response?.data || error;
  }
};
