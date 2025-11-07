import { Grid3x3, Building2, Package, ScrollText, BookOpen, Images } from "lucide-react";

const categories = [
  { id: "all", label: "All", icon: Grid3x3 },
  { id: "magazine", label: "Magazine", icon: Building2 },
  { id: "catalog", label: "Catalog", icon: Package },
  { id: "companyprofile", label: "Company Profile", icon: BookOpen },
  { id: "document", label: "Document", icon: ScrollText },
];

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <section className="sticky top-16 z-40 py-6">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-gray-200/50">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`group relative px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    isActive ? "bg-gradient-to-r from-[#268ece] to-[#1f7cb0] text-white shadow-lg shadow-[#268ece]/30 scale-105" : "bg-transparent text-gray-700 hover:bg-gray-100 hover:shadow-md"
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-all duration-300 ${isActive ? "rotate-0" : "group-hover:rotate-12"}`} />
                  <span className="text-sm">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
