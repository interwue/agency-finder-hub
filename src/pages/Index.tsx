import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import AgencyCard from "@/components/AgencyCard";
import AgencyDetailDrawer from "@/components/AgencyDetailDrawer";
import SearchAndSort from "@/components/SearchAndSort";
import MobileFilterDrawer from "@/components/MobileFilterDrawer";
import { useAgencies } from "@/hooks/useAgencies";
import type { Agency } from "@/data/agencies";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedAgency, setSelectedAgency] = useState<Agency | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    industries: [] as string[],
    services: [] as string[],
    locations: [] as string[],
    budgets: [] as string[],
    companySize: [1, 500] as [number, number],
    rating: 0,
    isHiring: false,
  });

  const { data: agencies = [], isLoading } = useAgencies();

  const filteredAgencies = useMemo(() => {
    let result = agencies.filter((agency) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          agency.name.toLowerCase().includes(query) ||
          agency.description.toLowerCase().includes(query) ||
          agency.location.toLowerCase().includes(query) ||
          agency.services.some((s) => s.toLowerCase().includes(query)) ||
          agency.industry.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Industry filter
      if (
        filters.industries.length > 0 &&
        !filters.industries.includes(agency.industry)
      ) {
        return false;
      }

      // Services filter
      if (
        filters.services.length > 0 &&
        !filters.services.some((s) => agency.services.includes(s))
      ) {
        return false;
      }

      // Location filter
      if (
        filters.locations.length > 0 &&
        !filters.locations.includes(agency.location)
      ) {
        return false;
      }

      // Budget filter
      if (
        filters.budgets.length > 0 &&
        !filters.budgets.includes(agency.budget)
      ) {
        return false;
      }

      // Company size filter
      if (
        agency.companySize < filters.companySize[0] ||
        agency.companySize > filters.companySize[1]
      ) {
        return false;
      }

      // Rating filter
      if (filters.rating > 0 && agency.rating < filters.rating) {
        return false;
      }

      // Hiring filter
      if (filters.isHiring && !agency.isHiring) {
        return false;
      }

      return true;
    });

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "size":
          return b.companySize - a.companySize;
        case "projects":
          return b.projects - a.projects;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [agencies, searchQuery, sortBy, filters]);

  const handleAgencyClick = (agency: Agency) => {
    setSelectedAgency(agency);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setSelectedAgency(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto text-center">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Find your perfect agency
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover top-rated agencies across design, development, marketing, and more. 
              Filter by industry, services, budget, and location to find your ideal partner.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <FilterSidebar filters={filters} onFilterChange={setFilters} />
            </div>

            {/* Agency List */}
            <div className="flex-1 min-w-0">
              <SearchAndSort
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalResults={filteredAgencies.length}
                onToggleFilters={() => setIsMobileFiltersOpen(true)}
                showFiltersButton={true}
              />

              {isLoading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-card rounded-xl p-6 shadow-card animate-pulse">
                      <div className="flex gap-4">
                        <div className="w-16 h-16 bg-muted rounded-lg" />
                        <div className="flex-1 space-y-3">
                          <div className="h-5 bg-muted rounded w-1/3" />
                          <div className="h-4 bg-muted rounded w-1/2" />
                          <div className="h-4 bg-muted rounded w-full" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : filteredAgencies.length > 0 ? (
                <div className="space-y-4">
                  {filteredAgencies.map((agency) => (
                    <AgencyCard
                      key={agency.id}
                      agency={agency}
                      onClick={() => handleAgencyClick(agency)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-card rounded-xl p-12 text-center shadow-card">
                  <p className="text-muted-foreground mb-2">No agencies found</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or filters
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFiltersOpen}
        onClose={() => setIsMobileFiltersOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
      />

      {/* Agency Detail Drawer */}
      <AgencyDetailDrawer
        agency={selectedAgency}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </div>
  );
};

export default Index;
