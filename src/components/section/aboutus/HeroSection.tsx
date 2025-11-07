"use client";
import { ChevronDown, Heart, Target, Users, BookOpen, Award, FileText, TrendingUp, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickNavSections = [
    { id: "vision-mission", icon: Target, label: "Vision & Mission", color: "from-hi-blue-600 to-hi-blue-700" },
    { id: "management", icon: Users, label: "Management", color: "from-hi-blue-500 to-hi-blue-600" },
    { id: "story", icon: BookOpen, label: "Our Story", color: "from-hi-blue-700 to-hi-blue-800" },
    { id: "awards", icon: Award, label: "Awards", color: "from-hi-blue-400 to-hi-blue-500" },
    { id: "legality", icon: FileText, label: "Credentials", color: "from-hi-blue-800 to-hi-blue-900" },
    { id: "impact", icon: TrendingUp, label: "Impact", color: "from-hi-blue-500 to-hi-blue-700" },
    { id: "branch", icon: MapPin, label: "Branches", color: "from-hi-blue-400 to-hi-blue-600" },
    { id: "contact", icon: Mail, label: "Contact", color: "from-hi-blue-300 to-hi-blue-500" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#268ece]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#268ece]/5 rounded-full blur-3xl"></div>

            <div className="relative">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-gradient-to-r from-[#268ece]/10 to-[#268ece]/5 backdrop-blur-sm rounded-full border border-[#268ece]/20">
                <Heart size={16} className="text-[#268ece]" />
                <span className="text-[#268ece]">Humanitarian Organization</span>
              </div>

              <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed">Discover our journey, values, and the impact we create together in building a better world for everyone.</p>

              {/* Quick Navigation Sections */}
              <div className="mb-8">
                <h3 className="text-sm mb-4 text-gray-500 uppercase tracking-wider">Explore Our Sections</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quickNavSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group relative p-3 bg-white border-2 border-gray-100 rounded-xl hover:border-[#268ece]/30 transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <div className={`w-10 h-10 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                            <Icon size={20} className="text-white" />
                          </div>
                          <span className="text-xs text-gray-700 group-hover:text-[#268ece] transition-colors text-center leading-tight">{section.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("vision-mission")} className="px-8 py-4 bg-[#268ece] text-white rounded-xl hover:bg-[#1a5f8f] transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Exploring
                </button>
                <button onClick={() => scrollToSection("contact")} className="px-8 py-4 bg-transparent text-[#268ece] border-2 border-[#268ece] rounded-xl hover:bg-[#268ece] hover:text-white transition-all hover:scale-105">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative Background Elements */}
            <div className="absolute top-10 right-10 w-72 h-72 bg-[#268ece]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#268ece]/10 rounded-full blur-3xl"></div>

            {/* Main Image Container */}
            <div className="relative z-10">
              {/* Image with rounded corners and shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1616992873922-94702fd40c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjB3b3JrZXJzJTIwcHJvZmVzc2lvbmFsJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MDg3NTU3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  width={800}
                  height={700}
                  alt="Professional humanitarian workers in action"
                  className="w-full h-[600px] object-cover"
                />
                {/* Gradient Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#268ece]/20 to-transparent"></div>
              </div>

              {/* Floating Quote Badge on Image */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Our Commitment</div>
                    <div className="text-gray-900 italic">"Making dignity through goodness for humanity"</div>
                  </div>
                </div>
              </div>

              {/* Decorative Dots Pattern */}
              <div className="absolute top-8 left-8 grid grid-cols-3 gap-2 opacity-50">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#268ece] rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button onClick={() => scrollToSection("vision-mission")} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <div className="p-2 bg-[#268ece]/10 backdrop-blur-sm rounded-full border border-[#268ece]/30 hover:bg-[#268ece]/20 transition-colors">
          <ChevronDown size={32} className="text-[#268ece]" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
