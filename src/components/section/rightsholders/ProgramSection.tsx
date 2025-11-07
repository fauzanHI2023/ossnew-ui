import { GraduationCap, Users, CloudRain, Building } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Program {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  image: string;
}

const programs: Program[] = [
  {
    id: "children",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Initiative for Children",
    description: "Education, health, and child protection programs for a better future",
    color: "bg-blue-50 text-blue-600",
    image:
      "https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjA0NjYwMzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "empowerment",
    icon: <Users className="w-8 h-8" />,
    title: "Initiative for Empowerment",
    description: "Community empowerment through skills training and economic development",
    color: "bg-green-50 text-green-600",
    image:
      "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MDUzNzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "disaster",
    icon: <CloudRain className="w-8 h-8" />,
    title: "Initiative for Disaster",
    description: "Emergency response and rehabilitation for natural disaster victims",
    color: "bg-red-50 text-red-600",
    image:
      "https://images.unsplash.com/photo-1758204054848-f053e83095fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGh1bWFuaXRhcmlhbiUyMGFpZHxlbnwxfHx8fDE3NjA1MzUwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "infrastructure",
    icon: <Building className="w-8 h-8" />,
    title: "Initiative for Infrastructure",
    description: "Building essential infrastructure to improve community quality of life",
    color: "bg-purple-50 text-purple-600",
    image:
      "https://images.unsplash.com/photo-1722495063143-e76e72d93d78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGluZnJhc3RydWN0dXJlJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjA1Mzc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-700">Rights Holder Programs</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the program that fits your needs and complete the application form</p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow group overflow-hidden">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={program.image} width={400} height={400} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-lg ${program.color} flex items-center justify-center shadow-lg`}>{program.icon}</div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-600">{program.title}</CardTitle>
                <CardDescription className="text-gray-600">{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-white border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
