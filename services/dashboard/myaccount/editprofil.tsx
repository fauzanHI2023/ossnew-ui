import axios from "axios";

export interface UpdateProfilePayload {
  full_name: string;
  email: string;
  phone_no: string;
  birth_date: string;
  religion: string;
  blood_type: string;
  country_id: string | number;
  address: string;
  facebook: string;
  instagram: string;
  website: string;
  youtube: string;
  twitter: string;
  linkedin: string;
}

export const updateProfile = async (id: number | string, payload: UpdateProfilePayload) => {
  const { data } = await axios.post(`https://adminx.human-initiative.org/account-api/update/${id}`, payload, {
    headers: { "Content-Type": "application/json" },
  });
  return data;
};
