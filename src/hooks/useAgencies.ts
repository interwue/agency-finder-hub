import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Agency } from "@/data/agencies";

export const useAgencies = () => {
  return useQuery({
    queryKey: ["agencies"],
    queryFn: async (): Promise<Agency[]> => {
      const { data, error } = await supabase
        .from("agencies")
        .select("*")
        .order("rating", { ascending: false });

      if (error) {
        console.error("Error fetching agencies:", error);
        throw error;
      }

      // Map database columns to Agency interface
      return (data || []).map((row) => ({
        id: row.id,
        name: row.name,
        logo: row.logo || "",
        location: row.location,
        description: row.description,
        longDescription: row.long_description || "",
        industry: row.industry,
        services: row.services || [],
        companySize: row.company_size,
        budget: row.budget || "",
        rating: Number(row.rating) || 0,
        isHiring: row.is_hiring || false,
        founded: row.founded || "",
        website: row.website || "",
        email: row.email || "",
        projects: row.projects || 0,
        clients: row.clients || [],
      }));
    },
  });
};
