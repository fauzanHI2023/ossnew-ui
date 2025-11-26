"use client";
import { useState, useRef } from "react";
import { MapPin, Phone, Mail, Navigation } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const BranchSection = () => {
  const [selectedBranch, setSelectedBranch] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);

  const branches = [
    {
      city: "Operational Office",
      address: "Jl. Anggrek, Curug, Kec. Cimanggis, Kota Depok, Jawa Barat 16453",
      phone: "(021) 21287213",
      email: "care@human-initiative.org",
      region: "Jawa Barat",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.028!2d106.8744773!3d-6.2566842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e10e4!2sJl.%20Condet%20Raya%2C%20Jakarta%20Timur!5e0!3m2!1sen!2sid!4v1234567890",
    },
    {
      city: "Adminitratif Office",
      address: "Jl. Raya Condet No.27-G, Batu Ampar, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13520",
      phone: "-",
      email: "-",
      region: "DKI Jakarta",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.028!2d106.8744773!3d-6.2566842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e10e4!2sJl.%20Condet%20Raya%2C%20Jakarta%20Timur!5e0!3m2!1sen!2sid!4v1234567890",
    },
    {
      city: "Bandung",
      address: "Jalan Cikutra No.138, Bandung 40124",
      phone: "(022) 7100035",
      email: "-",
      region: "Jawa Barat",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d107.6191!3d-6.9734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e!2sJl.%20Soekarno%20Hatta%2C%20Bandung!5e0!3m2!1sen!2sid!4v1234567891",
    },
    {
      city: "Semarang",
      address: "Jalan Setiabudi No. 70, Semarang 50269",
      phone: "(024) 7477405",
      email: "-",
      region: "Jawa Tengah",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.4203!3d-7.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708!2sJl.%20Setiabudi%2C%20Semarang!5e0!3m2!1sen!2sid!4v1234567892",
    },
    {
      city: "Surabaya",
      address: "Jalan Ngagel Madya VIII no. 32, Baratajaya, Gubeng, Surabaya, Jawa Timur, 60284",
      phone: "(031) 99441809",
      email: "-",
      region: "Jawa Timur",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5!2d112.7521!3d-7.2575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f!2sJl.%20Ahmad%20Yani%2C%20Surabaya!5e0!3m2!1sen!2sid!4v1234567893",
    },
    {
      city: "Yogyakarta",
      address: "Jl. Bangirejo Taman No.9, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55241",
      phone: "(0274) 551355",
      email: "-",
      region: "DI Yogyakarta",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d110.3695!3d-7.7827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5!2sJl.%20Kaliurang%2C%20Yogyakarta!5e0!3m2!1sen!2sid!4v1234567894",
    },
    {
      city: "Medan",
      address: "Jalan Kenanga Raya No. 22, Kel. Tanjung Sari Kec. Medan Selayang, 20132",
      phone: "(061) 8229273",
      email: "-",
      region: "Sumatera Utara",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0!2d98.6722!3d3.5952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131!2sJl.%20Gatot%20Subroto%2C%20Medan!5e0!3m2!1sen!2sid!4v1234567895",
    },
    {
      city: "Makassar",
      address: "Jl. Puri Tata Indah No.36 Palace, Blok A, Parang Tambung, Kec. Tamalate, Kota Makassar, Sulawesi Selatan 90224",
      phone: "0852-9977-4141",
      email: "-",
      region: "Sulawesi Selatan",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.4!2d119.4327!3d-5.1477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee!2sJl.%20AP%20Pettarani%2C%20Makassar!5e0!3m2!1sen!2sid!4v1234567896",
    },
    {
      city: "Aceh",
      address: "Jalan Reformasi, Desa Santan, Kec. Ingin Jaya, Aceh Besar 23371",
      phone: "(0651) 7315716",
      email: "-",
      region: "Aceh",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Ambon",
      address: "Jalan Kebun Cengkeh Komp. BTN Manusela Blok B/5-6, Lt. 2, Desa Batu Merah Kec, Sirimau, Ambon 97128",
      phone: "(0911) 3827345",
      email: "-",
      region: "Maluku",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Padang",
      address: "Jalan By Pass, Kayu Gadang RT/RW 04/06 (Belakang Masjid Taufiq), Kel. Pasar Ambacang, Kec. Kuranji, Padang 25152",
      phone: "(0751) 779260",
      email: "-",
      region: "Sumatera Barat",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Balikpapan",
      address: "Balikpapan Baru Cluster Toronto Blok JA6, Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114",
      phone: "0851-0003-9222",
      email: "-",
      region: "Kalimantan Timur",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Bukittinggi",
      address: "Jalan Hafid Jalil, RT 03/RW 01 Birugo Bukittinggi 26181",
      phone: "+62 82174400110",
      email: "-",
      region: "Bukittinggi",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Pekanbaru",
      address: "Jalan Paus Ujung No. 1B, Simpang Arifin Ahmad Tangkerang Barat, Kec. Marpoyan Damai Pekanbaru 28125",
      phone: "(0761) 8416191",
      email: "-",
      region: "Riau",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Bontang",
      address: "Jln HM Ardhan RT 25 Pisangan Kelurahan Satimpo – Bontang Selatan Kota Bontang Kalimantan Timur",
      phone: "0811-5415-800",
      email: "-",
      region: "Kalimantan Timur",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
    {
      city: "Bengkulu",
      address: "Jl Merapi Raya No. 64 Kel panorama Kec. Singaran Pati Kota Bengkulu 38226",
      phone: "(0736) 8050026",
      email: "-",
      region: "Bengkulu",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d95.3238!3d5.5483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040!2sJl.%20Teuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sen!2sid!4v1234567897",
    },
  ];

  const handleViewOnMap = (index: number) => {
    setSelectedBranch(index);
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="branches" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">Our Branches</h2>
          <div className="w-20 h-1 bg-[#268ece] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Find our offices across Indonesia serving communities nationwide</p>
        </div>

        {/* Carousel for Branch Cards */}
        <div className="max-w-7xl mx-auto mb-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {branches.map((branch, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4">
                  <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#268ece] transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-1">{branch.region}</h3>
                        <p className="text-lg text-gray-600">{branch.city}</p>
                      </div>
                      <div className="p-2 bg-[#268ece] rounded-lg">
                        <MapPin size={20} className="text-white" />
                      </div>
                    </div>

                    <div className="space-y-3 mb-4 flex-grow">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-[#268ece] flex-shrink-0 mt-1" />
                        <p className="text-sm text-gray-600">{branch.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-[#268ece] flex-shrink-0" />
                        <a href={`tel:${branch.phone}`} className="text-sm text-gray-600 hover:text-[#268ece]">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={16} className="text-[#268ece] flex-shrink-0" />
                        <a href={`mailto:${branch.email}`} className="text-sm text-gray-600 hover:text-[#268ece] break-all">
                          {branch.email}
                        </a>
                      </div>
                    </div>

                    {/* View on Maps Button */}
                    <button
                      onClick={() => handleViewOnMap(index)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-[#268ece] to-[#1a5f8f] text-white rounded-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Navigation size={16} />
                      <span className="text-sm">View on Maps</span>
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white border-2 border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border-2 border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white" />
          </Carousel>
        </div>

        {/* Google Maps */}
        <div className="max-w-6xl mx-auto" ref={mapRef}>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl text-gray-900">Find Us on the Map</h3>
              <p className="text-[#268ece] mt-2">
                Currently showing:{" "}
                <span className="font-semibold">
                  {branches[selectedBranch].city} - {branches[selectedBranch].region}
                </span>
              </p>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <iframe
                key={selectedBranch}
                src={branches[selectedBranch].mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${branches[selectedBranch].city} Office Map`}
              ></iframe>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#268ece] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg text-gray-900 mb-1">{branches[selectedBranch].city} Office</h4>
                  <p className="text-gray-600">{branches[selectedBranch].address}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <a href={`tel:${branches[selectedBranch].phone}`} className="text-sm text-[#268ece] hover:underline">
                      📞 {branches[selectedBranch].phone}
                    </a>
                    <a href={`mailto:${branches[selectedBranch].email}`} className="text-sm text-[#268ece] hover:underline">
                      ✉️ {branches[selectedBranch].email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
