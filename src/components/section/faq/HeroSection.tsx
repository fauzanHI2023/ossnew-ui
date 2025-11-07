import { Search, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        const headerOffset = 120; // Same offset as category clicks
        const elementPosition = faqSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1641569707854-c80945fb4719?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbml0YXJpYW4lMjBhaWQlMjBjaGlsZHJlbiUyMGhlbHBpbmd8ZW58MXx8fHwxNzYxNjY5MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      />

      {/* Ultra Smooth Blue to White Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(38, 142, 206, 0.85) 0%, rgba(38, 142, 206, 0.75) 15%, rgba(38, 142, 206, 0.65) 25%, rgba(38, 142, 206, 0.55) 35%, rgba(38, 142, 206, 0.45) 45%, rgba(38, 142, 206, 0.35) 55%, rgba(38, 142, 206, 0.25) 65%, rgba(38, 142, 206, 0.15) 75%, rgba(255, 255, 255, 0.6) 85%, rgba(255, 255, 255, 0.9) 95%, rgba(255, 255, 255, 1) 100%)",
        }}
      />

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Tag */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-5 py-2.5 border border-white/30">
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Trusted Help Center</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-white leading-tight">Your Questions, Our Commitment.</h1>
          </div>

          {/* Subheadline */}
          <p className="text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed text-lg">
            Find clear answers about donations, partnerships, and humanitarian programs.
            <br className="hidden md:block" />
            We're here to help you make a greater impact with confidence and transparency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="bg-white text-[#268ece] hover:bg-white/90 shadow-xl">
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#268ece] bg-transparent">
              Visit Donation Guide
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative mx-auto max-w-2xl">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl" />
              <div className="relative">
                <Search className="absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-black/50" />
                <input
                  type="text"
                  placeholder="Type your question here…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchSubmit}
                  className="w-full rounded-2xl text-gray-800 border-none bg-white py-5 pl-14 pr-6 shadow-2xl transition-all focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>
            </div>

            {/* Popular Topics */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="text-sm text-white/70">Popular topics:</span>
              {["Donation Process", "Payment Methods", "Partnership", "Transparency", "Volunteering"].map((tag) => (
                <button key={tag} onClick={() => setSearchQuery(tag)} className="text-sm px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
