import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <Button className="hidden lg:flex bg-gradient-to-r from-[#268ece] to-[#3da9f5] text-white hover:shadow-xl hover:shadow-[#268ece]/40 rounded-xl px-6 py-5 gap-2 transition-all duration-300 group hover:scale-105">
      <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 fill-white" />
      <span className="font-medium">Donate</span>
    </Button>
  );
};

export default Donate;
