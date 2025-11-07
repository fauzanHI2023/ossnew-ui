"use client";
import { useState } from "react";
import { CampaignCard } from "./CampaignCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchCampaign } from "../../../../services/donation/campaign/auth-campaign";
import { useQuery } from "@tanstack/react-query";

const featuredCampaigns = [
  {
    id: 1,
    title: "Pendidikan untuk Anak-Anak Pedalaman",
    category: "Initiative For Children",
    image:
      "https://images.unsplash.com/photo-1758894650175-a4942061c7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjA0OTI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 125000000,
    target: 200000000,
    daysLeft: 45,
    donors: 450,
    slug: "",
    description: "Membangun fasilitas pendidikan dan menyediakan beasiswa untuk anak-anak di pedalaman",
  },
  {
    id: 2,
    title: "Bantuan Korban Bencana Banjir",
    category: "Initiative for Disaster",
    image: "https://images.unsplash.com/photo-1760013767160-8eb4d9ed3115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlbGllZiUyMGhlbHB8ZW58MXx8fHwxNzYwNTE5ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 230000000,
    target: 300000000,
    daysLeft: 30,
    donors: 680,
    slug: "",
    description: "Memberikan bantuan darurat dan kebutuhan pokok bagi korban banjir di berbagai daerah",
  },
  {
    id: 3,
    title: "Pemberdayaan UMKM Perempuan",
    category: "Initiative for Empowerment",
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjA1MTk4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 85000000,
    target: 150000000,
    daysLeft: 60,
    donors: 320,
    slug: "",
    description: "Program pelatihan dan modal usaha untuk memberdayakan UMKM yang dikelola perempuan",
  },
  {
    id: 4,
    title: "Pembangunan Akses Air Bersih",
    category: "Initiative for Infrastructure",
    image: "https://images.unsplash.com/photo-1709901728903-6d66b8f0fa2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwcHJvamVjdHxlbnwxfHx8fDE3NjA1MTk4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 180000000,
    target: 250000000,
    daysLeft: 20,
    donors: 520,
    slug: "",
    description: "Membangun fasilitas air bersih untuk desa-desa yang kesulitan akses air layak pakai",
  },
  {
    id: 5,
    title: "Program Beasiswa Anak Yatim",
    category: "Initiative For Children",
    image: "https://images.unsplash.com/photo-1629470937900-f9ef0f2a8086?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlZHVjYXRpb258ZW58MXx8fHwxNzYwNTE4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 95000000,
    target: 180000000,
    daysLeft: 50,
    donors: 380,
    slug: "",
    description: "Memberikan beasiswa pendidikan lengkap untuk anak yatim dari keluarga kurang mampu",
  },
  {
    id: 6,
    title: "Layanan Kesehatan Gratis",
    category: "Initiative for Empowerment",
    image: "https://images.unsplash.com/photo-1512069511692-b82d787265cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjA0ODYxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 160000000,
    target: 220000000,
    daysLeft: 35,
    donors: 590,
    slug: "",
    description: "Program layanan kesehatan dan pengobatan gratis untuk masyarakat prasejahtera",
  },
  {
    id: 7,
    title: "Bantuan Pangan untuk Keluarga Prasejahtera",
    category: "Initiative for Empowerment",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb258ZW58MXx8fHwxNzYwNTA1MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 142000000,
    target: 200000000,
    daysLeft: 25,
    donors: 470,
    slug: "",
    description: "Distribusi paket sembako dan makanan bergizi untuk keluarga yang membutuhkan",
  },
  {
    id: 8,
    title: "Renovasi Sekolah Daerah Terpencil",
    category: "Initiative for Infrastructure",
    image:
      "https://images.unsplash.com/photo-1706437524158-6ca925ce5a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MDQ2MjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 210000000,
    target: 350000000,
    daysLeft: 40,
    donors: 630,
    slug: "",
    description: "Perbaikan dan pembangunan kembali gedung sekolah di daerah terpencil dan tertinggal",
  },
  {
    id: 9,
    title: "Tanggap Darurat Gempa Bumi",
    category: "Initiative for Disaster",
    image:
      "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYwNDkyNDc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 275000000,
    target: 400000000,
    daysLeft: 15,
    donors: 820,
    slug: "",
    description: "Bantuan darurat, tempat tinggal sementara, dan kebutuhan pokok untuk korban gempa",
  },
  {
    id: 10,
    title: "Perlindungan Anak dari Kekerasan",
    category: "Initiative For Children",
    image:
      "https://images.unsplash.com/photo-1758894650175-a4942061c7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGVkdWNhdGlvbiUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjA0OTI5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 118000000,
    target: 175000000,
    daysLeft: 55,
    donors: 410,
    slug: "",
    description: "Program perlindungan, pendampingan, dan rehabilitasi untuk anak korban kekerasan",
  },
  {
    id: 11,
    title: "Program Sanitasi Lingkungan",
    category: "Initiative for Infrastructure",
    image: "https://images.unsplash.com/photo-1709901728903-6d66b8f0fa2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdhdGVyJTIwcHJvamVjdHxlbnwxfHx8fDE3NjA1MTk4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 195000000,
    target: 280000000,
    daysLeft: 42,
    donors: 550,
    slug: "",
    description: "Pembangunan fasilitas sanitasi dan kebersihan lingkungan untuk desa-desa tertinggal",
  },
  {
    id: 12,
    title: "Rehabilitasi Korban Trauma",
    category: "Initiative for Disaster",
    image: "https://images.unsplash.com/photo-1512069511692-b82d787265cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjA0ODYxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 87000000,
    target: 140000000,
    daysLeft: 38,
    donors: 290,
    slug: "",
    description: "Layanan konseling dan terapi untuk pemulihan trauma korban bencana dan konflik",
  },
  {
    id: 13,
    title: "Pelatihan Keterampilan Pemuda",
    category: "Initiative for Empowerment",
    image: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudHxlbnwxfHx8fDE3NjA1MTk4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 103000000,
    target: 165000000,
    daysLeft: 28,
    donors: 360,
    slug: "",
    description: "Program pelatihan keahlian dan kewirausahaan untuk meningkatkan kompetensi pemuda",
  },
  {
    id: 14,
    title: "Gizi Buruk untuk Balita",
    category: "Initiative For Children",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZG9uYXRpb258ZW58MXx8fHwxNzYwNTA1MzYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 156000000,
    target: 210000000,
    daysLeft: 33,
    donors: 540,
    slug: "",
    description: "Bantuan makanan bergizi dan suplemen untuk balita yang mengalami gizi buruk",
  },
  {
    id: 15,
    title: "Pembangunan Jembatan Penghubung",
    category: "Initiative for Infrastructure",
    image:
      "https://images.unsplash.com/photo-1706437524158-6ca925ce5a06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2MDQ2MjY5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    raised: 324000000,
    target: 500000000,
    daysLeft: 22,
    donors: 750,
    slug: "",
    description: "Pembangunan jembatan untuk menghubungkan desa terisolir dengan akses ke kota",
  },
];

export function FeaturedCampaigns() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= featuredCampaigns.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, featuredCampaigns.length - 3) : prev - 3));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900 text-3xl mb-2">Butuh Dukungan</h2>
          <p className="text-gray-600">Campaign unggulan yang membutuhkan dukungan Anda</p>
        </div>

        <div className="hidden md:flex gap-2">
          <Button variant="outline" size="icon" onClick={prevSlide} disabled={currentIndex === 0} className="rounded-full bg-white text-gray-400">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextSlide} disabled={currentIndex + 3 >= featuredCampaigns.length} className="rounded-full bg-white text-gray-400">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}>
          {featuredCampaigns.map((campaign) => (
            <div key={campaign.id} className="w-1/3 flex-shrink-0 px-3">
              <CampaignCard {...campaign} variant="featured" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - Swipeable */}
      <div className="md:hidden overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 pb-4">
          {featuredCampaigns.map((campaign) => (
            <div key={campaign.id} className="w-[280px] flex-shrink-0">
              <CampaignCard {...campaign} variant="featured" />
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 md:hidden">
        {Array.from({ length: Math.ceil(featuredCampaigns.length / 3) }).map((_, idx) => (
          <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === Math.floor(currentIndex / 3) ? "w-8 bg-[#268ece]" : "w-1.5 bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}
