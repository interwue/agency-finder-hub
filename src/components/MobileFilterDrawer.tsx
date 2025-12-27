import { X } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
import { Button } from "./ui/button";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    industries: string[];
    services: string[];
    locations: string[];
    budgets: string[];
    companySize: [number, number];
    rating: number;
    isHiring: boolean;
  };
  onFilterChange: (filters: MobileFilterDrawerProps["filters"]) => void;
}

const MobileFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
}: MobileFilterDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 h-full w-full sm:w-80 bg-background z-50 overflow-y-auto lg:hidden transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-display text-lg font-semibold text-foreground">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-4">
          <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
        </div>

        {/* Apply Button */}
        <div className="sticky bottom-0 p-4 bg-background/95 backdrop-blur-md border-t border-border">
          <Button
            onClick={onClose}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Apply Filters
          </Button>
        </div>
      </aside>
    </>
  );
};

export default MobileFilterDrawer;
