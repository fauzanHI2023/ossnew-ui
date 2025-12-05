import { Button } from "@/components/ui/button";
import { Heart, Handshake, Users } from "lucide-react";
import Image from "next/image";

interface CTASectionProps {
  backgroundImage: string;
}

export default function CTASection({ backgroundImage }: CTASectionProps) {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage} width={1800} height={1000} alt="Join us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#268ece]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Be Part of the Change</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Your support creates lasting impact. Choose how you want to make a difference.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-xl">
            <div className="bg-[#268ece] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-black">Donate Now</h3>
            <p className="text-gray-600 mb-6 flex flex-1">Your contribution directly supports communities in need</p>
            <Button className="w-full bg-[#268ece] hover:bg-[#1d6fa3] text-white">Make a Donation</Button>
          </div>

          <div className="bg-white rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-xl">
            <div className="bg-[#268ece] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-black">Partner with Us</h3>
            <p className="text-gray-600 mb-6 flex flex-1">Collaborate to amplify impact and reach more communities</p>
            <Button className="w-full bg-[#268ece] hover:bg-[#1d6fa3] text-white">Become a Partner</Button>
          </div>

          <div className="bg-white rounded-xl p-8 text-center hover:transform hover:scale-105 transition-all shadow-xl">
            <div className="bg-[#268ece] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl mb-3 text-black">Be a Rightsholder</h3>
            <p className="text-gray-600 mb-6 flex flex-1">Access programs and services to empower yourself and your community</p>
            <Button className="w-full bg-[#268ece] hover:bg-[#1d6fa3] text-white">Join Program</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
