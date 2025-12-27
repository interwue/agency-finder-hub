import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface SearchAndSortProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  totalResults: number;
  onToggleFilters: () => void;
  showFiltersButton: boolean;
}

const sortOptions = [
  { value: "rating", label: "Highest Rated" },
  { value: "size", label: "Company Size" },
  { value: "projects", label: "Most Projects" },
  { value: "name", label: "Name (A-Z)" },
];

const SearchAndSort = ({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
  onToggleFilters,
  showFiltersButton,
}: SearchAndSortProps) => {
  const currentSortLabel = sortOptions.find((o) => o.value === sortBy)?.label || "Sort";

  return (
    <div className="bg-card rounded-xl p-4 shadow-card mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search agencies, services, or locations..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 bg-secondary/50 border border-border rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
          />
        </div>

        <div className="flex gap-3">
          {/* Mobile Filters Toggle */}
          {showFiltersButton && (
            <Button
              variant="outline"
              size="default"
              onClick={onToggleFilters}
              className="lg:hidden"
            >
              <SlidersHorizontal size={16} className="mr-2" />
              Filters
            </Button>
          )}

          {/* Sort Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="default">
                <ArrowUpDown size={16} className="mr-2" />
                <span className="hidden sm:inline">{currentSortLabel}</span>
                <span className="sm:hidden">Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option.value}
                  onClick={() => onSortChange(option.value)}
                  className={sortBy === option.value ? "bg-accent/10 text-accent" : ""}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mt-3">
        Showing <span className="font-medium text-foreground">{totalResults}</span> agencies
      </p>
    </div>
  );
};

export default SearchAndSort;
