import { url } from "inspector";
import ProgramCard from "./ProgramCard";
import { Separator } from "@/components/ui/separator";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Initiative For Children",
      description:
        "We believe every child deserves access to quality education, healthcare, and protection. Our comprehensive children's initiative provides educational resources, nutritional support, and safe learning environments to ensure children can thrive and reach their full potential.",
      imageUrl: "/initiatives/Initiative Children.JPG",
      rightholders: "15,432",
      regions: "34 Provinces",
      reverse: false,
      url: "/initiatives/children",
    },
    {
      title: "Initiative For Empowerment",
      description:
        "Empowerment begins with opportunity. We provide skills training, entrepreneurship programs, and microfinance access to help individuals and communities achieve economic independence. Our programs focus on women, youth, and marginalized groups to create sustainable livelihoods.",
      imageUrl: "/initiatives/DSC09480 (1).jpg",
      rightholders: "8,756",
      regions: "28 Provinces",
      reverse: true,
      url: "/initiatives/empowerment",
    },
    {
      title: "Initiative For Disaster Risk Management",
      description:
        "When disaster strikes, rapid response saves lives. Our disaster initiative provides emergency relief, medical assistance, and long-term recovery support. We work with local communities to build resilience and preparedness for future challenges through training and resource mobilization.",
      imageUrl: "/initiatives/DSC00884 (1).jpg",
      rightholders: "23,891",
      regions: "12 Provinces",
      reverse: false,
      url: "/initiatives/disaster",
    },
    {
      title: "Initiative For Infrastructure",
      description:
        "Strong communities are built on strong foundations. We develop essential infrastructure including clean water systems, sanitation facilities, community centers, and sustainable housing. Our approach combines modern engineering with community participation for lasting impact.",
      imageUrl: "/initiatives/DSC00561 (1).jpg",
      rightholders: "11,234",
      regions: "19 Provinces",
      reverse: true,
      url: "/initiatives/infrastructure",
    },
  ];

  return (
    <section id="programs" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#268ece]/10 text-[#268ece] rounded-full text-sm mb-4">Our Programs</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-black">Creating Impact Through Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Four comprehensive initiatives designed to address the most pressing needs of communities and create sustainable, long-term positive change.</p>
        </div>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <div key={index}>
              <ProgramCard {...program} />
              {index < programs.length - 1 && <Separator className="mt-24 bg-gray-200" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
