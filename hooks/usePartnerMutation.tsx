import { useMutation } from "@tanstack/react-query";
import { postAppointment } from "../services/project/auth-post-appoinment";
import { toast } from "sonner";

export function usePartnerMutation() {
  return useMutation({
    mutationFn: postAppointment,
    onSuccess: (data) => {
      toast.success("Partnership request submitted successfully!");
      console.log("Response:", data);
    },
    onError: (error: any) => {
      toast.error("Failed to submit partnership request");
      console.error(error);
    },
  });
}
