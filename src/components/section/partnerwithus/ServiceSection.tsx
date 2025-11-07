import { Heart, Handshake, Users, TrendingUp, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "../../../../data/constants";

interface ServicesSectionProps {
  onScheduleClick: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-8 h-8" />,
  Handshake: <Handshake className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
};

export function ServicesSection({ onScheduleClick }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#268ece]" />
            <span className="text-[#268ece]">Comprehensive Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Our CSR <span className="text-[#268ece]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Empower your corporate social responsibility with our strategic consultation services designed to maximize social impact and create sustainable business value</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#268ece] transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#268ece]/20 to-[#268ece]/5 rounded-2xl flex items-center justify-center text-[#268ece] group-hover:scale-110 transition-transform duration-300">{iconMap[service.icon]}</div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#268ece] rounded-full flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</div>
              </div>

              {/* Content */}
              <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#268ece] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>

              {/* Bottom Indicator */}
              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#268ece] to-[#1d7ab8] transition-all duration-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#268ece] hover:bg-[#1d7ab8] text-white px-8" onClick={onScheduleClick}>
              <Handshake className="w-5 h-5 mr-2" />
              Schedule a Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white px-8">
              Download Service Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
