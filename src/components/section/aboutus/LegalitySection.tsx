import { FileCheck, Shield, CheckCircle, Building, Award, Users, Globe } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const LegalitySection = () => {
  const registrations = [
    {
      icon: Building,
      title: "Akta Notaris Pendirian Yayasan",
      number: "No. 9 10 Desember 1999",
      category: "Terdaftar sebagai NGO di",
    },
    {
      icon: FileCheck,
      title: "Kementerian Sosial Republik Indonesia",
      number: "No. Registrasi 310/5/PI.02/06/2022",
      category: "Terdaftar sebagai NGO di",
    },
    {
      icon: Globe,
      title: "Perserikatan Bangsa-Bangsa",
      number: "Special Consultative Status with the Economic and Social Council",
      category: "Terdaftar sebagai NGO di",
    },
  ];

  const memberships = [
    {
      name: "HFI (Humanitarian Forum Indonesia)",
      network: "Sphere International",
    },
    {
      name: "Perhimpunan Filantropi Indonesia",
      network: "",
    },
    {
      name: "Network for Empowered Aid Response",
      network: "NEAR",
    },
    {
      name: "ICVA",
      network: "International Council of Voluntary Agencies",
    },
  ];

  const certifications = [
    {
      name: "PSEA International",
      type: "Standarisasi",
    },
    {
      name: "TUV Nord Indonesia",
      type: "Sistem Manajemen Mutu",
    },
    {
      name: "Komisi Akreditasi Indonesia",
      type: "Sistem Manajemen Mutu",
    },
  ];

  return (
    <section id="legality" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Organizational Credentials</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Dokumen legal dan sertifikasi yang menjamin transparansi dan akuntabilitas organisasi</p>
        </div>

        {/* Registered as NGO */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-2">Registered as an NGO in:</h3>
            <div className="w-16 h-1 bg-[#268ece]"></div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden max-w-sm mx-auto px-4">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {registrations.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <CarouselItem key={index}>
                      <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 mx-2">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex-shrink-0">
                            <IconComponent size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg mb-2 text-gray-900">{item.title}</h4>
                            <p className="text-sm text-[#268ece]">{item.number}</p>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-2 h-10 w-10" />
              <CarouselNext className="-right-2 h-10 w-10" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {registrations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-lg flex-shrink-0">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-sm text-[#268ece]">{item.number}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Member Organizations */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-2">Member of:</h3>
            <div className="w-16 h-1 bg-[#268ece]"></div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden max-w-sm mx-auto px-4">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {memberships.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-xl p-6 border-2 border-gray-100 mx-2">
                      <div className="flex items-start gap-3 mb-3">
                        <Users size={20} className="text-[#268ece] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-base mb-1 text-gray-900">{item.name}</h4>
                          {item.network && <p className="text-sm text-gray-600">{item.network}</p>}
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

          {/* Desktop Grid */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#268ece] transition-all hover:shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <Users size={20} className="text-[#268ece] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base mb-1 text-gray-900">{item.name}</h4>
                    {item.network && <p className="text-sm text-gray-600">{item.network}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-2">Standards & Quality Management Systems:</h3>
            <div className="w-16 h-1 bg-[#268ece]"></div>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden max-w-sm mx-auto px-4">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {certifications.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-xl p-6 text-white mx-2">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                          <Award size={24} />
                        </div>
                        <div>
                          <p className="text-sm opacity-90 mb-1">{item.type}</p>
                          <h4 className="text-lg">{item.name}</h4>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-2 h-10 w-10 border-white text-white hover:bg-white hover:text-[#268ece]" />
              <CarouselNext className="-right-2 h-10 w-10 border-white text-white hover:bg-white hover:text-[#268ece]" />
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {certifications.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-xl p-6 text-white hover:shadow-xl transition-all hover:scale-105">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">{item.type}</p>
                    <h4 className="text-lg">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalitySection;
