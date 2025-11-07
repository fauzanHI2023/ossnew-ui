import ProgramCard from "./ProgramCard";
import { Separator } from "@/components/ui/separator";

export default function ProgramsSection() {
  const programs = [
    {
      title: "Initiative For Children",
      description:
        "We believe every child deserves access to quality education, healthcare, and protection. Our comprehensive children's initiative provides educational resources, nutritional support, and safe learning environments to ensure children can thrive and reach their full potential.",
      imageUrl:
        "https://images.unsplash.com/photo-1758894650175-a4942061c7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjA0OTI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rightholders: "15,432",
      regions: "34 Provinces",
      reverse: false,
    },
    {
      title: "Initiative For Empowerment",
      description:
        "Empowerment begins with opportunity. We provide skills training, entrepreneurship programs, and microfinance access to help individuals and communities achieve economic independence. Our programs focus on women, youth, and marginalized groups to create sustainable livelihoods.",
      imageUrl:
        "https://images.unsplash.com/photo-1711202675927-b81cc42a479c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MDQzNTg1Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      rightholders: "8,756",
      regions: "28 Provinces",
      reverse: true,
    },
    {
      title: "Initiative For Disaster",
      description:
        "When disaster strikes, rapid response saves lives. Our disaster initiative provides emergency relief, medical assistance, and long-term recovery support. We work with local communities to build resilience and preparedness for future challenges through training and resource mobilization.",
      imageUrl:
        "https://images.unsplash.com/photo-1760013767160-8eb4d9ed3115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMHZvbHVudGVlcnxlbnwxfHx8fDE3NjA1MTI5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rightholders: "23,891",
      regions: "12 Provinces",
      reverse: false,
    },
    {
      title: "Initiative For Infrastructure",
      description:
        "Strong communities are built on strong foundations. We develop essential infrastructure including clean water systems, sanitation facilities, community centers, and sustainable housing. Our approach combines modern engineering with community participation for lasting impact.",
      imageUrl:
        "https://images.unsplash.com/photo-1759445777690-769fc6ae0ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGNvbnN0cnVjdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjA1MTI5MDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rightholders: "11,234",
      regions: "19 Provinces",
      reverse: true,
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
