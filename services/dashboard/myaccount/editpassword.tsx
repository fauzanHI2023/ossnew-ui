import axios from "axios";

const API_BASE = "https://adminx.human-initiative.org/account-api";

export const updatePasswordApi = async (id: number, newPassword: string) => {
  const res = await axios.post(`${API_BASE}/update-password/${id}`, {
    passwd: newPassword,
  });
  return res.data;
};

export const getUserByIdApi = async (id: number) => {
  const res = await axios.get(`${API_BASE}/get/${id}`);
  return res.data;
};
