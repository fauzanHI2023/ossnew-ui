import managementImage from "figma:asset/ac1d9740501e66dd229210dc77c46ffbe14f08a8.png";
import { Linkedin, Mail, Award } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ManagementSection = () => {
  const team = [
    {
      image: "/BoD Human Initiative - Tomy Hendrajati.jpg",
      name: "Tomy Hendrajati",
      position: "President of Human Initiative",
      description: "",
      linkedin: "#",
      email: "tomy@human-initiative.org",
    },
    {
      image: "/BoD Human Initiative - Romi Ardiansyah.jpg",
      name: "Romi Ardiansyah",
      position: "Vice President of Operation",
      description: "",
      linkedin: "#",
      email: "romi@human-initiative.org",
    },
    {
      image: "/BoD Human Initiative - Andjar Radite.jpg",
      name: "Andjar Radite",
      position: "Vice President of Resources & Social Enterprise",
      description: "",
      linkedin: "#",
      email: "andjar@human-initiative.org",
    },
    {
      image: "/BoD Human Initiative - Bambang Suherman.jpg",
      name: "Bambang Suherman",
      position: "Vice President of Worldwide Partnership & National Development",
      description: "",
      linkedin: "#",
      email: "bambang@human-initiative.org",
    },
  ];

  return (
    <section id="management" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Meet Our Management</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our experienced leadership team dedicated to creating positive impact and sustainable change</p>
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="md:hidden max-w-sm mx-auto px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {team.map((member, index) => (
                <CarouselItem key={index}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-md px-2">
                    {/* Profile Image with Overlay */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image src={member.image} width={400} height={400} alt={member.name} className="w-full h-full object-cover object-top" />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300"></div>

                      {/* Award Badge */}
                      <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                        <Award size={20} className="text-[#268ece]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-2 text-gray-900">{member.name}</h3>
                      <p className="text-sm text-[#268ece] mb-3">{member.position}</p>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{member.description}</p>

                      {/* Contact Actions */}
                      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                        <a href={member.linkedin} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#268ece] text-white rounded-lg active:bg-[#1a5f8f] transition-colors">
                          <Linkedin size={16} />
                          <span className="text-sm">LinkedIn</span>
                        </a>
                        <a href={`mailto:${member.email}`} className="p-2 bg-gray-100 rounded-lg active:bg-gray-200 transition-colors" title="Email">
                          <Mail size={16} className="text-gray-700" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-2 h-10 w-10" />
            <CarouselNext className="-right-2 h-10 w-10" />
          </Carousel>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Profile Image with Overlay */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <Image src={member.image} width={400} height={400} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <Award size={20} className="text-[#268ece]" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl mb-2 text-gray-900 group-hover:text-[#268ece] transition-colors">{member.name}</h3>
                <p className="text-sm text-[#268ece] mb-3">{member.position}</p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{member.description}</p>

                {/* Contact Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                  <a href={member.linkedin} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#268ece] text-white rounded-lg hover:bg-[#1a5f8f] transition-colors">
                    <Linkedin size={16} />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors" title="Email">
                    <Mail size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Statement */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our leadership team brings decades of combined experience in humanitarian work, social development, and sustainable impact initiatives. Together, we are committed to building a better future for communities across Indonesia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
