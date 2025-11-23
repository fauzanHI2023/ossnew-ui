export interface CartItem {
  campaign_id: number | string;
  quantity: number;
  price: number;
}

export interface CreateTransactionPayload {
  user_id: number | null;
  full_name: string;
  email: string;
  phone: string | undefined;
  payment_channel_id: string | number;
  is_anonim: boolean;
  items: {
    campaign_id: number | string;
    quantity: number;
    price: number | string;
  }[];
}

export interface CreateTransactionResponse {
  status: string;
  message: string;
  data?: any;
  flip_response?: {
    payment_url: string;
    link_url?: string;
    link_id?: number;
    amount?: number;
  };
}
