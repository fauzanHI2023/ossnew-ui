"use client";
import { useMutation } from "@tanstack/react-query";
import { updatePasswordApi, getUserByIdApi } from "../services/dashboard/myaccount/editpassword";
import { useSession } from "next-auth/react";

export const useUpdatePassword = () => {
  const { update, data: session } = useSession();

  return useMutation({
    mutationFn: async ({ newPassword, confirmPassword }: { newPassword: string; confirmPassword: string }) => {
      const user = session?.user;
      if (!user) throw new Error("User tidak ditemukan");

      const donor = user.phpDonorData?.[0];
      const donorId = donor?.id ?? user.id;

      // 🔐 Validasi password
      if (newPassword !== confirmPassword) {
        throw new Error("Kata sandi baru dan konfirmasi tidak cocok");
      }

      // 1️⃣ Update backend
      await updatePasswordApi(donorId, newPassword);

      // 2️⃣ Fetch updated data
      const updated = await getUserByIdApi(donorId);

      // 3️⃣ Update session NextAuth
      await update({
        passwd: updated.passwd,
      });

      return updated;
    },
  });
};
