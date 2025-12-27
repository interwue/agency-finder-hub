import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { industries, services, locations, budgets } from "@/data/agencies";

interface FilterSidebarProps {
  filters: {
    industries: string[];
    services: string[];
    locations: string[];
    budgets: string[];
    companySize: [number, number];
    rating: number;
    isHiring: boolean;
  };
  onFilterChange: (filters: FilterSidebarProps["filters"]) => void;
}

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
      >
        {title}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
};

const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const handleCheckboxChange = (
    category: "industries" | "services" | "locations" | "budgets",
    value: string,
    checked: boolean
  ) => {
    const currentValues = filters[category];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value);
    onFilterChange({ ...filters, [category]: newValues });
  };

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="bg-card rounded-xl p-5 shadow-card sticky top-24">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-semibold text-foreground">Filters</h3>
          <button
            onClick={() =>
              onFilterChange({
                industries: [],
                services: [],
                locations: [],
                budgets: [],
                companySize: [1, 500],
                rating: 0,
                isHiring: false,
              })
            }
            className="text-xs text-accent hover:underline"
          >
            Clear all
          </button>
        </div>

        <div className="space-y-4">
          {/* Industry Filter */}
          <FilterSection title="Industry">
            {industries.slice(1).map((industry) => (
              <label
                key={industry}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={filters.industries.includes(industry)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("industries", industry, checked as boolean)
                  }
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {industry}
                </span>
              </label>
            ))}
          </FilterSection>

          {/* Services Filter */}
          <FilterSection title="Services">
            <div className="max-h-40 overflow-y-auto pr-2 space-y-2">
              {services.map((service) => (
                <label
                  key={service}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={filters.services.includes(service)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("services", service, checked as boolean)
                    }
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Location Filter */}
          <FilterSection title="Location">
            <div className="max-h-40 overflow-y-auto pr-2 space-y-2">
              {locations.slice(1).map((location) => (
                <label
                  key={location}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={filters.locations.includes(location)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange("locations", location, checked as boolean)
                    }
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {location}
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          {/* Budget Filter */}
          <FilterSection title="Budget Range">
            {budgets.slice(1).map((budget) => (
              <label
                key={budget}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <Checkbox
                  checked={filters.budgets.includes(budget)}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("budgets", budget, checked as boolean)
                  }
                />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {budget}
                </span>
              </label>
            ))}
          </FilterSection>

          {/* Company Size Filter */}
          <FilterSection title="Company Size">
            <div className="px-1">
              <Slider
                value={[filters.companySize[0], filters.companySize[1]]}
                onValueChange={(value) =>
                  onFilterChange({
                    ...filters,
                    companySize: [value[0], value[1]],
                  })
                }
                min={1}
                max={500}
                step={1}
                className="mt-2"
              />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>{filters.companySize[0]} employees</span>
                <span>{filters.companySize[1]}+ employees</span>
              </div>
            </div>
          </FilterSection>

          {/* Rating Filter */}
          <FilterSection title="Minimum Rating">
            <div className="flex gap-1">
              {[4, 4.5, 4.7, 4.9].map((rating) => (
                <button
                  key={rating}
                  onClick={() =>
                    onFilterChange({
                      ...filters,
                      rating: filters.rating === rating ? 0 : rating,
                    })
                  }
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                    filters.rating === rating
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-muted"
                  }`}
                >
                  {rating}+
                </button>
              ))}
            </div>
          </FilterSection>

          {/* Hiring Status */}
          <FilterSection title="Availability">
            <label className="flex items-center gap-3 cursor-pointer group">
              <Checkbox
                checked={filters.isHiring}
                onCheckedChange={(checked) =>
                  onFilterChange({ ...filters, isHiring: checked as boolean })
                }
              />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Currently Hiring
              </span>
            </label>
          </FilterSection>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
