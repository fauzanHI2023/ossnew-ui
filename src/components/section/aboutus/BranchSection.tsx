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
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.100489509324!2d106.86925507518521!3d-6.381028962416462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb7dc4e1647b%3A0x6d96f1d35162e056!2sHuman%20Initiative%20Headquarter!5e0!3m2!1sen!2sid!4v1764849361838!5m2!1sen!2sid",
    },
    {
      city: "Adminitratif Office",
      address: "Jl. Raya Condet No.27-G, Batu Ampar, Kec. Kramat jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13520",
      phone: "+62 812 8080 4561",
      email: "care@human-initiative.org",
      region: "DKI Jakarta",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.788251401664!2d106.8533156751842!3d-6.291537561579906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f27af8988cf9%3A0xe135f2396145053a!2sInisiatif%20Zakat%20Indonesia!5e0!3m2!1sen!2sid!4v1764849461213!5m2!1sen!2sid",
    },
    {
      city: "Bandung",
      address: "Jalan Cikutra No.138, Bandung 40124",
      phone: "(022) 7100035",
      email: "jawa.barat@human-initiative.org",
      region: "Jawa Barat",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9114269255106!2d107.64160467519186!3d-6.901195667537541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7be09f0ae2b%3A0xb37d473ebf866ba2!2sJl.%20Cikutra%20No.138%2C%20Cikutra%2C%20Kec.%20Cibeunying%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040124!5e0!3m2!1sen!2sid!4v1764849555803!5m2!1sen!2sid",
    },
    {
      city: "Semarang",
      address: "Jalan Setiabudi No. 70, Semarang 50269",
      phone: "(024) 7477405",
      email: "jawa.tengah@human-initiative.org",
      region: "Jawa Tengah",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0!2d110.4203!3d-7.0051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708!2sJl.%20Setiabudi%2C%20Semarang!5e0!3m2!1sen!2sid!4v1234567892",
    },
    {
      city: "Surabaya",
      address: "Jalan Ngagel Madya VIII no. 32, Baratajaya, Gubeng, Surabaya, Jawa Timur, 60284",
      phone: "(031) 99441809",
      email: "jawa.timur@human-initiative.org",
      region: "Jawa Timur",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5386459008564!2d112.75512257519708!3d-7.2932127716885855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb3cffb986f%3A0x897233ed3db6420a!2sJl.%20Ngagel%20Madya%20VIII%20No.32%2C%20Baratajaya%2C%20Kec.%20Gubeng%2C%20Surabaya%2C%20Jawa%20Timur%2060282!5e0!3m2!1sen!2sid!4v1764849663624!5m2!1sen!2sid",
    },
    {
      city: "Yogyakarta",
      address: "Jl. Bangirejo Taman No.9, Karangwaru, Kec. Tegalrejo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55241",
      phone: "(0274) 551355",
      email: "yogyakarta@human-initiative.org",
      region: "DI Yogyakarta",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1117672485907!2d110.36120737520388!3d-7.777972377167972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58385508419f%3A0x31274b39df833294!2sJl.%20Bangirejo%20Taman%20No.9%2C%20Karangwaru%2C%20Kec.%20Tegalrejo%2C%20Kota%20Yogyakarta%2C%20Daerah%20Istimewa%20Yogyakarta%2055241!5e0!3m2!1sen!2sid!4v1764849714277!5m2!1sen!2sid",
    },
    {
      city: "Medan",
      address: "Jl. Abdul Hakim, Komplek Classic II No. 75, Medan, Indonesia 20131",
      phone: "(0751) 779260",
      email: "@human-initiative.org",
      region: "Sumatera Utara",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1285643405513!2d98.63902407512549!3d3.5578458505040973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312febb1be6a93%3A0xbb38c6488c27433d!2sJl.%20Classic%20II%20Jl.%20Abdul%20Hakim%20No.75%2C%20Tj.%20Sari%2C%20Kec.%20Medan%20Selayang%2C%20Kota%20Medan%2C%20Sumatera%20Utara%2020132!5e0!3m2!1sen!2sid!4v1764849806579!5m2!1sen!2sid",
    },
    {
      city: "Makassar",
      address: "Jl. Puri Tata Indah No.36 Palace, Blok A, Parang Tambung, Kec. Tamalate, Kota Makassar, Sulawesi Selatan 90224",
      phone: "0852-9977-4141",
      email: "sulawesi.selatan@human-initiative.org",
      region: "Sulawesi Selatan",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3973.5095045906774!2d119.41575192517139!3d-5.182273502296168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sJl.%20Puri%20Tata%20Indah%20No.36%20Palace%2C%20Blok%20A%2C%20Parang%20Tambung%2C%20Kec.%20Tamalate!5e0!3m2!1sen!2sid!4v1764849929573!5m2!1sen!2sid",
    },
    {
      city: "Aceh",
      address: "Jalan Reformasi, Desa Santan, Kec. Ingin Jaya, Aceh Besar 23371",
      phone: "(0651) 7315716",
      email: "@human-initiative.org",
      region: "Aceh",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31769.90132230794!2d95.31724857431641!3d5.531721000000011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3040390016dc89f7%3A0x1051403622c3aed3!2sDESA%20SANTAN!5e0!3m2!1sen!2sid!4v1764850007854!5m2!1sen!2sid",
    },
    {
      city: "Ambon",
      address: "Jalan Kebun Cengkeh Komp. BTN Manusela Blok B/5-6, Lt. 2, Desa Batu Merah Kec, Sirimau, Ambon 97128",
      phone: "(0911) 3827345",
      email: "maluku@human-initiative.org",
      region: "Maluku",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7963.187452335614!2d128.19857069193117!3d-3.6795350284232313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d6ce980d589fb15%3A0x603b1503dd0393fc!2sHuman%20Initiative%20Maluku!5e0!3m2!1sen!2sid!4v1764850058244!5m2!1sen!2sid",
    },
    {
      city: "Padang",
      address: "Jalan By Pass, Kayu Gadang RT/RW 04/06 (Belakang Masjid Taufiq), Kel. Pasar Ambacang, Kec. Kuranji, Padang 25152",
      phone: "(0751) 779260",
      email: "sumatera.barat@human-initiative.org",
      region: "Sumatera Barat",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.294799274403!2d100.39522957513672!3d-0.9281814853399311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b9a96713b53b%3A0xa536790a58a08a07!2sHuman%20Initiative%20Sumbar!5e0!3m2!1sen!2sid!4v1764850112710!5m2!1sen!2sid",
    },
    {
      city: "Balikpapan",
      address: "Balikpapan Baru Cluster Toronto Blok JA6, Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114",
      phone: "0851-0003-9222",
      email: "kalimantan.timur@human-initiative.org",
      region: "Kalimantan Timur",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8729417672907!2d116.85529309678957!3d-1.2473045999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147d276fdf341%3A0x4e2aaab12fbe3984!2sPKPU%20Human%20Initiative%20Kalimantan%20Timur!5e0!3m2!1sen!2sid!4v1764850162730!5m2!1sen!2sid",
    },
    {
      city: "Bukittinggi",
      address: "Jalan Hafid Jalil, RT 03/RW 01 Birugo Bukittinggi 26181",
      phone: "+62 82174400110",
      email: "bukittinggi@human-initiative.org",
      region: "Bukittinggi",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757734866669!2d100.37553667513366!3d-0.315751835335791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd53890ce1f3af3%3A0xa711ee6cc7dfa2de!2sPKPU%20Human%20Initiative%20Bukittinggi!5e0!3m2!1sen!2sid!4v1764850337447!5m2!1sen!2sid",
    },
    {
      city: "Pekanbaru",
      address: "Jalan Paus Ujung No. 1B, Simpang Arifin Ahmad Tangkerang Barat, Kec. Marpoyan Damai Pekanbaru 28125",
      phone: "(0761) 8416191",
      email: "riau@human-initiative.org",
      region: "Riau",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6775035101728!2d101.4339487751305!3d0.48138176375138975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aed4f6f73677%3A0x2b8ad33fc55f6981!2sJl.%20Paus%20Ujung%20No.1b%2C%20Tengkerang%20Bar.%2C%20Kec.%20Marpoyan%20Damai%2C%20Kota%20Pekanbaru%2C%20Riau%2028125!5e0!3m2!1sen!2sid!4v1764850385886!5m2!1sen!2sid",
    },
    {
      city: "Bengkulu",
      address: "Jl Merapi Raya No. 64 Kel panorama Kec. Singaran Pati Kota Bengkulu 38226",
      phone: "(0736) 8050026",
      email: "@human-initiative.org",
      region: "Bengkulu",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0261516768!2d102.28696907515767!3d-3.804423543563958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b065826ec9ad%3A0xce85ee4ac0acf2dd!2sJl.%20Merapi%20Raya%20No.64%2C%20Kebun%20Tebeng%2C%20Kec.%20Ratu%20Agung%2C%20Kota%20Bengkulu%2C%20Bengkulu%2038223!5e0!3m2!1sen!2sid!4v1764850554569!5m2!1sen!2sid",
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
