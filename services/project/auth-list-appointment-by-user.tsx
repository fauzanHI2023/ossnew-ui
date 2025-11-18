import axios from "axios";
import { Appointment } from "@/app/types/appointment";

export const fetchListAppointmentbyUser = async (userId: string): Promise<Appointment[]> => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project/appoinment/appoinment-api/get-appointment-by-user?user_id=${userId}`, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY_APPOINTMENT || "",
      },
    });
    return response.data.data; // ⬅️ ambil array-nya langsung
  } catch (error) {
    console.log("Error data Appointment", error);
    return [];
  }
};
