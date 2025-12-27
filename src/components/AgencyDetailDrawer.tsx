import { X, MapPin, Star, Users, Briefcase, Globe, Mail, Calendar, ExternalLink } from "lucide-react";
import { Agency } from "@/data/agencies";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface AgencyDetailDrawerProps {
  agency: Agency | null;
  isOpen: boolean;
  onClose: () => void;
}

const AgencyDetailDrawer = ({ agency, isOpen, onClose }: AgencyDetailDrawerProps) => {
  if (!agency) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-[480px] bg-card shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card/95 backdrop-blur-md border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-display text-lg font-semibold text-foreground">Agency Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Agency Header */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src={agency.logo}
              alt={`${agency.name} logo`}
              className="w-20 h-20 rounded-xl object-cover bg-muted"
            />
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {agency.name}
                </h3>
                {agency.isHiring && (
                  <Badge className="bg-green-100 text-green-700 border-0">
                    Hiring
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-1 mt-1 text-muted-foreground">
                <MapPin size={16} />
                <span>{agency.location}</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-amber-500 fill-amber-500" />
                  <span className="font-semibold text-foreground">{agency.rating}</span>
                </div>
                <span className="text-muted-foreground">·</span>
                <span className="text-muted-foreground">{agency.budget}</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Users size={20} className="mx-auto text-accent mb-1" />
              <p className="font-semibold text-foreground">{agency.companySize}</p>
              <p className="text-xs text-muted-foreground">Employees</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Briefcase size={20} className="mx-auto text-accent mb-1" />
              <p className="font-semibold text-foreground">{agency.projects}</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <Calendar size={20} className="mx-auto text-accent mb-1" />
              <p className="font-semibold text-foreground">{agency.founded}</p>
              <p className="text-xs text-muted-foreground">Founded</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-2">About</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {agency.longDescription}
            </p>
          </div>

          {/* Industry & Services */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Industry & Services</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-medium">
                {agency.industry}
              </Badge>
              {agency.services.map((service) => (
                <Badge key={service} variant="secondary">
                  {service}
                </Badge>
              ))}
            </div>
          </div>

          {/* Notable Clients */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Notable Clients</h4>
            <div className="flex flex-wrap gap-2">
              {agency.clients.map((client) => (
                <span
                  key={client}
                  className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-3">
              <a
                href={`https://${agency.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Globe size={18} />
                <span>{agency.website}</span>
                <ExternalLink size={14} className="ml-auto" />
              </a>
              <a
                href={`mailto:${agency.email}`}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={18} />
                <span>{agency.email}</span>
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border">
            <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
              Contact Agency
            </Button>
            <Button variant="outline" className="flex-1">
              Visit Website
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AgencyDetailDrawer;
