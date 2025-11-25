export interface User {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  phones: { phone_no: string };
  phpDonorData?: { id: number }[];
}
