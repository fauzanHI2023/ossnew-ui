import { Eye, Target, Building2, Users, TrendingUp } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Vision & Mission</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-lg">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl">Our Vision</h3>
            </div>
            <p className="leading-relaxed opacity-95" style={{ fontSize: "36px" }}>
              Goodness For Dignity
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-[#268ece] rounded-lg">
                <Target size={32} className="text-white" />
              </div>
              <h3 className="text-3xl text-gray-900">Our Mission</h3>
            </div>
            <ul className="space-y-6 text-gray-700">
              <li className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-[#268ece] rounded-lg">
                    <Building2 size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#268ece] mb-1">ORGANIZATION</h4>
                  <p className="text-sm">Strengthening the governance of an adaptive, innovative, and globally reachable organization.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-[#268ece] rounded-lg">
                    <Users size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#268ece] mb-1">RESOURCES</h4>
                  <p className="text-sm">Strengthening inclusive collaboration among stakeholders in humanitarian crisis management and community development.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-[#268ece] rounded-lg">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#268ece] mb-1">IMPACT</h4>
                  <p className="text-sm">Developing programs by optimizing community resources to promote self-sufficiency.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
