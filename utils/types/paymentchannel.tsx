export interface PaymentChannel {
  id: number;
  payment_channel_name: string;
  sender_type: string;
  donation_payment_id: number;
  code: string;
}
