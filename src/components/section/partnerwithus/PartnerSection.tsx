import { partnerLogos } from "../../../../data/constants";
import Image from "next/image";

export function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 text-gray-900">Our Clients and Partners</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partnerLogos, ...partnerLogos].map((card, index) => (
              <div key={`${card.id}-${index}`} className="flex-shrink-0 flex-col w-48 h-24 mx-4 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow">
                <Image src={card.img} alt={card.title} width={80} height={50} className="object-contain" />
                <span className="text-gray-400 hidden">{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
