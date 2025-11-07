export interface CartItem {
  campaign_id: number | string;
  quantity: number;
  amount: number;
}

export interface CreateTransactionPayload {
  user_id: number | string;
  full_name: string;
  email: string;
  phone: string;
  payment_channel_id: string | number;
  is_anonim: boolean;
  items: {
    campaign_id: number | string;
    quantity: number;
    price: number;
  }[];
}

export interface CreateTransactionResponse {
  status: string;
  message: string;
  data?: any;
}
