import { useState } from "react";
import { Building2, Baby, AlertTriangle, Sparkles, Home, MapPin, Users, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import { projects, categories } from "../../../../data/constants";

interface ProjectsSectionProps {
  onProjectDetails: (project: any) => void;
  onBookProject: (project: any) => void;
  onOpenSorting: () => void;
  sortBy: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Baby: <Baby className="w-5 h-5" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
};

const ITEMS_PER_LOAD = 6;

export function ProjectsSection({ onProjectDetails, onBookProject, onOpenSorting, sortBy }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState<number>(ITEMS_PER_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Helper function for sorting
  const parseBudget = (budgetStr: string) => {
    const match = budgetStr.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, "")) : 0;
  };

  // Get projects for current category
  const getCurrentCategoryProjects = (categoryId: string) => {
    return categoryId === "all" ? projects : projects.filter((p) => p.category === categoryId);
  };

  // Apply sorting
  const sortProjects = (projectsToSort: any[]) => {
    const sorted = [...projectsToSort];

    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => new Date(b.createdDate || "2024-01-01").getTime() - new Date(a.createdDate || "2024-01-01").getTime());
      case "most-supported":
        return sorted.sort((a, b) => (b.supportCount || 0) - (a.supportCount || 0));
      case "highest-budget":
        return sorted.sort((a, b) => parseBudget(b.budget) - parseBudget(a.budget));
      default:
        return sorted;
    }
  };

  // Filter and sort projects
  const filteredProjects = getCurrentCategoryProjects(selectedCategory);
  const sortedProjects = sortProjects(filteredProjects);

  // Visible projects (with Load More)
  const visibleProjects = sortedProjects.slice(0, visibleProjectsCount);
  const hasMoreProjects = visibleProjectsCount < sortedProjects.length;
  const progressPercentage = Math.min((visibleProjectsCount / sortedProjects.length) * 100, 100);
  const remainingProjects = sortedProjects.length - visibleProjectsCount;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setVisibleProjectsCount((prev) => Math.min(prev + ITEMS_PER_LOAD, sortedProjects.length));
      setIsLoadingMore(false);
    }, 800);
  };

  // Reset visible count when category changes
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setVisibleProjectsCount(ITEMS_PER_LOAD);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="projects">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#268ece]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#268ece]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#268ece]/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-[#268ece] rounded-full animate-pulse"></div>
            <span className="text-[#268ece]">Ready for Partnership</span>
          </div>
          <h2 className="text-4xl lg:text-5xl mb-6 text-gray-900">
            Available <span className="text-[#268ece]">CSR Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore our curated portfolio of impactful CSR programs designed to create lasting change in communities across Indonesia</p>
        </div>

        {/* Ultra Modern Tabs */}
        <Tabs defaultValue="all" className="w-full" onValueChange={handleCategoryChange}>
          {/* Sleek Tabs Navigation + Sort Button */}
          <div className="mb-16 relative">
            {/* Tab Container */}
            <div className="relative bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-xl rounded-3xl p-3 shadow-xl border border-gray-200/50">
              <div className="flex items-center gap-3">
                {/* Tabs Wrapper with Scroll Indicator */}
                <div className="relative group/tabs" style={{ width: "calc(100% - 180px)" }}>
                  <TabsList className="flex justify-start gap-2 bg-transparent h-auto p-0 pb-2 overflow-x-auto scrollbar-light scroll-smooth w-full">
                    {categories.map((category) => {
                      const categoryProjects = category.id === "all" ? projects : projects.filter((p) => p.category === category.id);
                      return (
                        <TabsTrigger
                          key={category.id}
                          value={category.id}
                          className="relative group flex-shrink-0 px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-gray-50 data-[state=active]:bg-transparent border-0 data-[state=active]:shadow-none"
                        >
                          {/* Active Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#268ece] to-[#1d7ab8] rounded-2xl opacity-0 group-data-[state=active]:opacity-100 transition-opacity duration-300"></div>

                          {/* Content */}
                          <div className="relative flex items-center gap-3">
                            {/* Icon */}
                            <div className="w-10 h-10 rounded-xl bg-gray-100 group-data-[state=active]:bg-white/20 flex items-center justify-center text-gray-700 group-data-[state=active]:text-white transition-all duration-300 group-hover:scale-110">
                              {iconMap[category.icon]}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col items-start gap-0.5">
                              <span className="text-gray-900 group-data-[state=active]:text-white transition-colors duration-300 whitespace-nowrap">{category.name}</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500 group-data-[state=active]:text-white/80 transition-colors duration-300">
                                  {categoryProjects.length} {categoryProjects.length === 1 ? "project" : "projects"}
                                </span>
                                {categoryProjects.length > 0 && <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-data-[state=active]:bg-green-300"></div>}
                              </div>
                            </div>
                          </div>

                          {/* Active Indicator Line - Simple White */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 group-data-[state=active]:w-3/4 bg-white rounded-full transition-all duration-300"></div>
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>

                  {/* Scroll Indicator - Right Gradient Fade */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/90 to-transparent pointer-events-none rounded-r-3xl"></div>
                </div>

                {/* Sort Button - Clean Minimalist Design */}
                <button
                  onClick={onOpenSorting}
                  className="group relative flex-shrink-0 px-5 py-4 rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#268ece] transition-all duration-300 hover:shadow-md flex items-center"
                >
                  {/* Content */}
                  <div className="relative flex items-center gap-2.5 whitespace-nowrap">
                    <ArrowUpDown className="w-4 h-4 text-gray-600 group-hover:text-[#268ece] transition-colors duration-300" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs text-gray-500">Sort by</span>
                      <span className="text-sm font-medium text-gray-900 group-hover:text-[#268ece] transition-colors duration-300">
                        {sortBy === "newest" && "Terbaru"}
                        {sortBy === "most-supported" && "Terbanyak"}
                        {sortBy === "highest-budget" && "Tertinggi"}
                      </span>
                    </div>
                    <svg className="w-3.5 h-3.5 ml-1 text-gray-400 group-hover:text-[#268ece] group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            {/* Scroll Hint - Below Container */}
            <div className="mt-2 text-xs text-gray-400 flex items-center justify-end gap-1 opacity-60">
              <span>Swipe to see more</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-[#268ece]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-[#268ece]/10 rounded-full blur-2xl"></div>
          </div>

          {/* Tab Contents */}
          {categories.map((category) => {
            return (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {/* Projects Grid */}
                {sortedProjects.length > 0 ? (
                  <>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {visibleProjects.map((project, index) => (
                        <div
                          key={project.id}
                          className="group relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#268ece] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {/* Image */}
                          <div className="relative h-56 overflow-hidden flex-shrink-0">
                            <Image src={project.image} width={400} height={400} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Category Badge on Image */}
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-[#268ece] text-white shadow-lg backdrop-blur-sm">{categories.find((c) => c.id === project.category)?.name}</Badge>
                            </div>

                            {/* Quick View Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex gap-2">
                                <button onClick={() => onProjectDetails(project)} className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors" title="View Details">
                                  <svg className="w-5 h-5 text-[#268ece]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-xl mb-3 text-gray-900 group-hover:text-[#268ece] transition-colors line-clamp-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

                            {/* Meta Info */}
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span className="truncate">{project.location.split(",")[0]}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" />
                                <span>{project.beneficiaries.split(" ")[0]}</span>
                              </div>
                            </div>

                            {/* Spacer to push buttons to bottom */}
                            <div className="flex-grow"></div>

                            {/* Action Buttons - Always Aligned */}
                            <div className="flex gap-3 items-stretch">
                              <Button variant="outline" className="flex-1 bg-white border-[#268ece] text-[#268ece] hover:bg-[#268ece] hover:text-white group/btn h-11" onClick={() => onProjectDetails(project)}>
                                <span>View Details</span>
                                <svg className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Button>
                              <Button className="flex-1 bg-[#268ece] hover:bg-[#1d7ab8] shadow-lg shadow-[#268ece]/30 h-11" onClick={() => onBookProject(project)}>
                                Book Now
                              </Button>
                            </div>
                          </div>

                          {/* Corner Decoration */}
                          <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#268ece]/5 rounded-full blur-2xl group-hover:bg-[#268ece]/10 transition-colors"></div>
                        </div>
                      ))}
                    </div>

                    {/* Engaging Load More Section */}
                    {hasMoreProjects && (
                      <div className="mt-12 space-y-6">
                        {/* Progress Bar */}
                        <div className="max-w-md mx-auto">
                          <div className="flex items-center justify-between text-sm mb-3">
                            <span className="text-gray-600">
                              Showing <span className="text-[#268ece]">{visibleProjectsCount}</span> of {sortedProjects.length} projects
                            </span>
                            <span className="text-gray-500">{Math.round(progressPercentage)}%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-[#268ece] to-[#1d7ab8] rounded-full transition-all duration-500 ease-out relative" style={{ width: `${progressPercentage}%` }}>
                              <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                            </div>
                          </div>
                        </div>

                        {/* Load More Button */}
                        <div className="text-center">
                          <Button
                            size="lg"
                            onClick={handleLoadMore}
                            disabled={isLoadingMore}
                            className="group relative bg-gradient-to-r from-[#268ece] to-[#1d7ab8] hover:from-[#1d7ab8] hover:to-[#268ece] text-white px-12 py-6 rounded-2xl shadow-lg shadow-[#268ece]/30 hover:shadow-xl hover:shadow-[#268ece]/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {isLoadingMore ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Loading Projects...
                              </>
                            ) : (
                              <>
                                <span className="mr-2">Load More Projects</span>
                                <svg className="w-5 h-5 inline-block group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </>
                            )}
                          </Button>

                          {/* Helper Text */}
                          <p className="mt-4 text-sm text-gray-500">
                            {remainingProjects} more {remainingProjects === 1 ? "project" : "projects"} to explore
                          </p>
                        </div>
                      </div>
                    )}

                    {/* All Projects Loaded Message */}
                    {!hasMoreProjects && sortedProjects.length > ITEMS_PER_LOAD && (
                      <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <div className="text-left">
                            <div className="text-green-900">All Projects Loaded!</div>
                            <div className="text-sm text-green-700">You've viewed all {sortedProjects.length} projects in this category</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl text-gray-900 mb-2">No Projects Available</h3>
                    <p className="text-gray-600">Check back soon for new opportunities in this category</p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
