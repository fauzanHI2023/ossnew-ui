import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mt-[4rem] relative bg-gradient-to-br from-white via-blue-50/30 to-white py-20 md:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#268ece]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#268ece]/10 rounded-full blur-3xl"></div>

      {/* Geometric Decorations */}
      <div className="absolute top-20 right-10 w-20 h-20 border-4 border-[#268ece]/20 rounded-lg rotate-12"></div>
      <div className="absolute top-40 right-32 w-12 h-12 bg-[#268ece]/10 rounded-full"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border-4 border-[#268ece]/20 rounded-full"></div>
      <div className="absolute bottom-20 right-1/4 w-8 h-8 bg-[#268ece]/20 rounded-lg rotate-45"></div>

      {/* Dotted Pattern */}
      <div className="absolute top-10 left-10 grid grid-cols-3 gap-3 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-[#268ece] rounded-full"></div>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 grid grid-cols-4 gap-2 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-[#268ece] rounded-full"></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-[#268ece]/10 text-[#268ece] rounded-full text-sm mb-6 backdrop-blur-sm border border-[#268ece]/20">✨ Making a Difference Together</div>
          <h1 className="text-5xl md:text-6xl mb-6 text-black">
            Empowering Communities,
            <span className="text-[#268ece]"> Transforming Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Join us in creating lasting impact through our comprehensive initiatives that touch lives, build resilience, and foster sustainable development across communities.</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#268ece] hover:bg-[#1d6fa3] text-white px-8 shadow-lg shadow-[#268ece]/20 hover:shadow-xl hover:shadow-[#268ece]/30 transition-all">
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white px-8 shadow-md hover:shadow-lg transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
