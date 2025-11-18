"use client";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../services/dashboard/myaccount/editprofil";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: ({ id, payload }: { id: number | string; payload: any }) => updateProfile(id, payload),
  });
};
