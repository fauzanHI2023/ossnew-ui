"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    badge: "Campaign Unggulan",
    title: "Bersama Membangun Harapan untuk Masa Depan",
    description: "Mari bergabung dalam gerakan kemanusiaan untuk memberikan bantuan kepada mereka yang membutuhkan.",
    image:
      "https://images.unsplash.com/photo-1758790636662-2f8eec12077e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjBjaGFyaXR5fGVufDF8fHx8MTc2MDUxOTgwNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    badge: "Pendidikan Anak",
    title: "Memberikan Akses Pendidikan untuk Semua Anak",
    description: "Setiap anak berhak mendapatkan pendidikan berkualitas. Mari kita wujudkan bersama.",
    image:
      "https://images.unsplash.com/photo-1727553957752-bca64c93249e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBjaGlsZHJlbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjA1MjYxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    badge: "Bantuan Bencana",
    title: "Sigap Membantu Korban Bencana",
    description: "Ketika bencana datang, kita harus bersatu memberikan bantuan darurat kepada mereka yang terdampak.",
    image: "https://images.unsplash.com/photo-1758656993582-ebe464c8011c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGFpZHxlbnwxfHx8fDE3NjA1MDMwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    badge: "Pemberdayaan Masyarakat",
    title: "Memberdayakan Komunitas untuk Masa Depan Lebih Baik",
    description: "Program pemberdayaan yang berkelanjutan untuk menciptakan perubahan positif di masyarakat.",
    image:
      "https://images.unsplash.com/photo-1759922378187-11a435837df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudCUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MDUyNjE1NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HeroBanner() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="pt-4 mt-[4rem] bg-white">
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative bg-gradient-to-r from-[#268ece] to-[#1a6ea5] rounded-xl md:rounded-2xl overflow-hidden shadow-xl">
                  {/* Mobile: Full width banner style */}
                  <div className="md:hidden relative">
                    <div className="relative h-[400px] w-full">
                      <Image src={slide.image} width={1000} height={600} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Content overlay on image */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 pb-6">
                        <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs mb-3 w-fit">{slide.badge}</div>

                        <h1 className="text-white text-2xl leading-tight mb-3">{slide.title}</h1>

                        <p className="text-white/90 text-sm mb-4 line-clamp-2">{slide.description}</p>

                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" className="bg-white text-[#268ece] hover:bg-gray-100">
                            Donasi Sekarang
                            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                          </Button>
                          <Button size="sm" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                            Lihat Detail
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Two column layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-8 items-center h-[510px]">
                    <div className="p-10 space-y-5 flex flex-col justify-center h-full">
                      <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-1 w-fit">{slide.badge}</div>

                      <h1 className="text-white text-4xl lg:text-5xl leading-tight">{slide.title}</h1>

                      <p className="text-white/90 text-lg">{slide.description}</p>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button size="lg" variant="secondary" className="group">
                          Donasi Sekarang
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                          Lihat Detail
                        </Button>
                      </div>
                    </div>

                    <div className="relative h-full">
                      <Image src={slide.image} width={800} height={800} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Arrows - Desktop Only */}
          <div className="hidden md:block">
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white h-12 w-12" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 hover:text-white h-12 w-12" />
          </div>
        </Carousel>

        {/* Dots Navigation Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === current ? "w-8 bg-[#268ece]" : "w-2 bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
