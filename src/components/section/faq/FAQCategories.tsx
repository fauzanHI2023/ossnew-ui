import { Heart, Globe2, Handshake, FileText, Users, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    icon: Heart,
    title: "Donations & Payments",
    description: "Learn how to donate safely and easily.",
    link: "#donations",
  },
  {
    id: 2,
    icon: Globe2,
    title: "Programs & Impact",
    description: "Discover how your support creates change.",
    link: "#programs",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Partnership & Collaboration",
    description: "Join hands with us for sustainable solutions.",
    link: "#partnership",
  },
  {
    id: 4,
    icon: FileText,
    title: "Transparency & Reports",
    description: "See how we ensure accountability.",
    link: "#transparency",
  },
  {
    id: 5,
    icon: Users,
    title: "Volunteering & Involvement",
    description: "Explore ways to contribute your time and skills.",
    link: "#volunteering",
  },
];

export function FAQCategories() {
  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.substring(1); // Remove the # from link
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 120; // Offset for sticky header + some padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Browse by Category</h2>
          <p className="text-black/60 max-w-2xl mx-auto">Select a category to find answers to your most pressing questions about our humanitarian work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href={category.link}
                onClick={(e) => handleCategoryClick(e, category.link)}
                className="group relative overflow-hidden rounded-2xl bg-white border border-black/10 p-8 transition-all hover:border-[#268ece]/30 hover:shadow-xl hover:shadow-[#268ece]/5 hover:-translate-y-1 cursor-pointer"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#268ece]/5 rounded-full blur-3xl transition-all group-hover:bg-[#268ece]/10" />

                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#268ece] to-[#1f7ab8] shadow-lg shadow-[#268ece]/25 transition-transform group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-black mb-3 group-hover:text-[#268ece] transition-colors">{category.title}</h3>
                  <p className="text-black/60 mb-6 leading-relaxed">{category.description}</p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[#268ece] text-sm">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
