import { MapPin, Star, Users, Briefcase } from "lucide-react";
import { Agency } from "@/data/agencies";
import { Badge } from "./ui/badge";

interface AgencyCardProps {
  agency: Agency;
  onClick: () => void;
}

const AgencyCard = ({ agency, onClick }: AgencyCardProps) => {
  return (
    <article
      onClick={onClick}
      className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group border border-transparent hover:border-accent/20"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={agency.logo}
            alt={`${agency.name} logo`}
            className="w-14 h-14 rounded-lg object-cover bg-muted"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-1">
                {agency.name}
              </h3>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <MapPin size={14} />
                <span>{agency.location}</span>
              </div>
            </div>
            {agency.isHiring && (
              <Badge variant="secondary" className="bg-green-100 text-green-700 border-0 text-xs flex-shrink-0">
                Hiring
              </Badge>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {agency.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            <Badge variant="outline" className="text-xs font-medium">
              {agency.industry}
            </Badge>
            {agency.services.slice(0, 2).map((service) => (
              <Badge key={service} variant="secondary" className="text-xs">
                {service}
              </Badge>
            ))}
            {agency.services.length > 2 && (
              <Badge variant="secondary" className="text-xs">
                +{agency.services.length - 2}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-amber-500 fill-amber-500" />
              <span className="font-medium text-foreground">{agency.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={14} />
              <span>{agency.companySize}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase size={14} />
              <span>{agency.projects} projects</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AgencyCard;
