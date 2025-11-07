"use client";
import { useState, useEffect } from "react";
import { Target, Users, BookOpen, Award, FileText, TrendingUp, MapPin, Mail, ChevronRight, ChevronLeft, Compass } from "lucide-react";

const FloatingExplorer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "vision-mission", icon: Target, label: "Vision & Mission", color: "from-hi-blue-600 to-hi-blue-700" },
    { id: "management", icon: Users, label: "Management", color: "from-hi-blue-500 to-hi-blue-600" },
    { id: "story", icon: BookOpen, label: "Our Story", color: "from-hi-blue-700 to-hi-blue-800" },
    { id: "awards", icon: Award, label: "Awards", color: "from-hi-blue-400 to-hi-blue-500" },
    { id: "legality", icon: FileText, label: "Credentials", color: "from-hi-blue-800 to-hi-blue-900" },
    { id: "impact", icon: TrendingUp, label: "Impact", color: "from-hi-blue-500 to-hi-blue-700" },
    { id: "branch", icon: MapPin, label: "Branches", color: "from-hi-blue-400 to-hi-blue-600" },
    { id: "contact", icon: Mail, label: "Contact", color: "from-hi-blue-300 to-hi-blue-500" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show floating explorer after scrolling past hero section
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom - 200);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${isExpanded ? "w-64" : "w-16"}`}>
        {/* Header */}
        <div className={`flex items-center border-b border-gray-100 ${isExpanded ? "justify-between p-4" : "justify-center p-3"}`}>
          {isExpanded ? (
            <>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex items-center justify-center shadow-md">
                  <Compass size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-900">Explorer</span>
              </div>
              <button onClick={() => setIsExpanded(false)} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors" title="Collapse">
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="w-10 h-10 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              title="Expand Explorer"
            >
              <Compass size={18} className="text-white" />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <div className={`${isExpanded ? "p-3" : "p-2"} space-y-2 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400`}>
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full relative transition-all group ${
                  isExpanded
                    ? `flex items-center gap-3 p-3 rounded-xl ${isActive ? "bg-[#268ece] text-white shadow-lg" : "hover:bg-gray-50 text-gray-700"}`
                    : `flex items-center justify-center p-2 rounded-xl ${isActive ? "bg-[#268ece] shadow-lg" : "hover:bg-gray-50"}`
                }`}
                title={section.label}
              >
                <div className={`${isExpanded ? "w-8 h-8" : "w-10 h-10"} flex-shrink-0 rounded-lg flex items-center justify-center transition-all ${isActive ? "bg-white/20" : `bg-gradient-to-br ${section.color}`}`}>
                  <Icon size={isExpanded ? 16 : 18} className="text-white" />
                </div>
                {isExpanded && (
                  <>
                    <div className="flex-1 text-left">
                      <div className={`text-sm transition-colors ${isActive ? "text-white" : "text-gray-900 group-hover:text-[#268ece]"}`}>{section.label}</div>
                    </div>
                    {isActive && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                  </>
                )}
                {!isExpanded && isActive && <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#268ece] rounded-full"></div>}
              </button>
            );
          })}
        </div>

        {/* Footer - Progress Indicator */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#268ece] to-[#1a5f8f] transition-all duration-300 rounded-full"
                  style={{
                    width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="tabular-nums">
                {sections.findIndex((s) => s.id === activeSection) + 1}/{sections.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingExplorer;
