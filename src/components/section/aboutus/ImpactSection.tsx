"use client";
import Image from "next/image";
import { Users, Heart, HandHeart, Home, Baby, Lightbulb, ShieldAlert, Building2, Globe, TrendingUp, DollarSign, PieChart, ChevronRight, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell, LineChart, Line } from "recharts";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("impact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Impact Statistics
  const impactNumbers = [
    {
      icon: Users,
      value: "2.5M+",
      label: "Lives Impacted",
      description: "People reached globally",
      color: "from-blue-500 to-[#268ece]",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries",
      description: "Worldwide presence",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HandHeart,
      value: "500+",
      label: "Active Programs",
      description: "Running initiatives",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Total Aid",
      description: "Distributed globally",
      color: "from-orange-500 to-red-500",
    },
  ];

  // 4 Program Sections
  const programs = [
    {
      icon: Baby,
      title: "Child Development",
      description: "Ensuring every child has access to education, nutrition, and healthcare for a brighter future.",
      stats: "150,000+ Children Supported",
      image:
        "https://images.unsplash.com/photo-1594391227854-f7baa68a6039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MDY4OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-blue-500",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Lightbulb,
      title: "Empowerment",
      description: "Building sustainable livelihoods through skills training, entrepreneurship, and community development.",
      stats: "80,000+ People Empowered",
      image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjA2ODkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-green-500",
      gradient: "from-green-500/20 to-green-600/20",
    },
    {
      icon: ShieldAlert,
      title: "Disaster Relief",
      description: "Rapid response and recovery support for communities affected by natural disasters and emergencies.",
      stats: "200+ Emergency Responses",
      image:
        "https://images.unsplash.com/photo-1760013767160-8eb4d9ed3115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzYwNjg5MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-red-500",
      gradient: "from-red-500/20 to-red-600/20",
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Building essential facilities including schools, health centers, clean water systems, and shelters.",
      stats: "1,000+ Projects Completed",
      image:
        "https://images.unsplash.com/photo-1694969318559-146aab58627e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzYwNjg5MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "bg-purple-500",
      gradient: "from-purple-500/20 to-purple-600/20",
    },
  ];

  // Storytelling Carousel
  const stories = [
    {
      name: "Aisha Rahman",
      location: "Bangladesh",
      story: '"Thanks to the scholarship program, I completed my education and became the first doctor in my village. Now I serve my community with pride."',
      image:
        "https://images.unsplash.com/photo-1594391227854-f7baa68a6039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2MDY4OTMxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Child Development",
    },
    {
      name: "David Okonkwo",
      location: "Nigeria",
      story: '"The vocational training gave me skills to start my own carpentry business. I now employ 5 people from my community."',
      image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjA2ODkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Empowerment",
    },
    {
      name: "Maria Santos",
      location: "Philippines",
      story: '"After the typhoon destroyed our home, Human Initiative helped rebuild our lives. We now have a safe place to call home."',
      image:
        "https://images.unsplash.com/photo-1760013767160-8eb4d9ed3115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMHZvbHVudGVlcnN8ZW58MXx8fHwxNzYwNjg5MzE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      program: "Disaster Relief",
    },
  ];

  // Transparency Data
  const budgetData = [
    { name: "Programs", value: 75, color: "#268ece" },
    { name: "Operations", value: 15, color: "#60a5fa" },
    { name: "Fundraising", value: 10, color: "#93c5fd" },
  ];

  const yearlyImpact = [
    { year: "2020", beneficiaries: 1.5 },
    { year: "2021", beneficiaries: 1.8 },
    { year: "2022", beneficiaries: 2.1 },
    { year: "2023", beneficiaries: 2.3 },
    { year: "2024", beneficiaries: 2.5 },
  ];

  const programDistribution = [
    { program: "Child", count: 150 },
    { program: "Empowerment", count: 120 },
    { program: "Disaster", count: 80 },
    { program: "Infrastructure", count: 100 },
  ];

  return (
    <section id="impact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">See Our Impact</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Together, we're creating meaningful change in communities worldwide through compassion and action.</p>
        </div>

        {/* Impact Numbers */}
        {/* Mobile Carousel */}
        <div className="lg:hidden max-w-sm mx-auto px-4 mb-20">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {impactNumbers.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <CarouselItem key={index}>
                    <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center mx-2 ${isVisible ? "animate-fade-in" : "opacity-0"}`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                        <IconComponent size={32} />
                      </div>
                      <div className="text-5xl mb-2">{stat.value}</div>
                      <div className="text-xl mb-1">{stat.label}</div>
                      <div className="text-sm opacity-90">{stat.description}</div>
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
        <div className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto">
          {impactNumbers.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white text-center hover:scale-105 transition-transform ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <IconComponent size={32} />
                </div>
                <div className="text-5xl mb-2">{stat.value}</div>
                <div className="text-xl mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* 4 Program Sections */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-3">Our Programs</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Four pillars of impact driving sustainable change</p>
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
                {programs.map((program, index) => {
                  const IconComponent = program.icon;
                  return (
                    <CarouselItem key={index}>
                      <div className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 mx-2">
                        <div className="relative aspect-video overflow-hidden">
                          <Image src={program.image} width={800} height={800} alt={program.title} className="w-full h-full object-cover" />
                          <div className={`absolute top-4 left-4 ${program.color} p-3 rounded-xl text-white shadow-lg`}>
                            <IconComponent size={24} />
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-2xl text-gray-900 mb-3">{program.title}</h4>
                          <p className="text-gray-600 mb-4">{program.description}</p>
                          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${program.gradient} rounded-full`}>
                            <TrendingUp size={16} className="text-[#268ece]" />
                            <span className="text-sm text-gray-900">{program.stats}</span>
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
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#268ece] transition-all hover:shadow-xl">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={program.image} width={800} height={800} alt={program.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className={`absolute top-4 left-4 ${program.color} p-3 rounded-xl text-white shadow-lg`}>
                      <IconComponent size={24} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl text-gray-900 mb-3">{program.title}</h4>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${program.gradient} rounded-full`}>
                      <TrendingUp size={16} className="text-[#268ece]" />
                      <span className="text-sm text-gray-900">{program.stats}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Program Distribution Chart */}
          <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg max-w-6xl mx-auto mt-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#268ece]/10 rounded-lg">
                <Heart size={24} className="text-[#268ece]" />
              </div>
              <h4 className="text-xl text-gray-900">Active Programs by Category</h4>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={programDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="program" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#268ece" name="Programs" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Storytelling Carousel */}
        <div className="mb-20 bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-white mb-3">Stories of Hope</h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">Real people, real impact - hear directly from those whose lives have been transformed</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {stories.map((story, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                      <div className="grid md:grid-cols-2">
                        <div className="aspect-square md:aspect-auto relative overflow-hidden">
                          <Image src={story.image} width={1000} height={800} alt={story.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 md:p-10 flex flex-col justify-center">
                          <div className="mb-6">
                            <div className="inline-block px-3 py-1 bg-[#268ece]/10 text-[#268ece] rounded-full text-sm mb-4">{story.program}</div>
                            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">{story.story}</p>
                          </div>
                          <div>
                            <h4 className="text-xl text-gray-900">{story.name}</h4>
                            <p className="text-gray-500 flex items-center gap-1">
                              <Globe size={14} />
                              {story.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white text-[#268ece] hover:bg-[#268ece] hover:text-white" />
              <CarouselNext className="right-2 bg-white text-[#268ece] hover:bg-[#268ece] hover:text-white" />
            </Carousel>
          </div>
        </div>

        {/* Transparency Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl text-gray-900 mb-3">Transparency & Accountability</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We believe in complete transparency - see exactly how your contributions create impact</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Budget Allocation */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#268ece]/10 rounded-lg">
                  <PieChart size={24} className="text-[#268ece]" />
                </div>
                <h4 className="text-xl text-gray-900">Budget Allocation</h4>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <RePieChart>
                  <Pie data={budgetData} cx="50%" cy="50%" labelLine={false} label={(entry) => `${entry.name}: ${entry.value}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {budgetData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Yearly Growth */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#268ece]/10 rounded-lg">
                  <TrendingUp size={24} className="text-[#268ece]" />
                </div>
                <h4 className="text-xl text-gray-900">Yearly Impact Growth</h4>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={yearlyImpact}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="beneficiaries" stroke="#268ece" strokeWidth={3} name="Beneficiaries (M)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* CTA Section - Join the Movement */}
        <div className="bg-gradient-to-br from-[#268ece] to-[#1a5f8f] rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h3 className="text-4xl md:text-5xl mb-4">Join the Movement</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">Your support can transform lives. Be part of our mission to create dignity and hope for communities in need.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-[#268ece] rounded-full hover:bg-gray-100 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="text-lg">Donate Now</span>
              <Heart size={20} />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2">
              <span className="text-lg">Become a Volunteer</span>
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">💝</div>
              <div className="text-sm opacity-90">Every donation counts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-sm opacity-90">Together we're stronger</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <div className="text-sm opacity-90">Create lasting impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
