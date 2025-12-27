-- Create agencies table
CREATE TABLE public.agencies (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo TEXT,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  long_description TEXT,
  industry TEXT NOT NULL,
  services TEXT[] NOT NULL DEFAULT '{}',
  company_size INTEGER NOT NULL DEFAULT 1,
  budget TEXT,
  rating NUMERIC(2,1) DEFAULT 0,
  is_hiring BOOLEAN DEFAULT false,
  founded TEXT,
  website TEXT,
  email TEXT,
  projects INTEGER DEFAULT 0,
  clients TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.agencies ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (agencies are public data)
CREATE POLICY "Agencies are viewable by everyone" 
ON public.agencies 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_agencies_updated_at
BEFORE UPDATE ON public.agencies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert seed data
INSERT INTO public.agencies (name, logo, location, description, long_description, industry, services, company_size, budget, rating, is_hiring, founded, website, email, projects, clients) VALUES
('Pixel Perfect Studio', 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop', 'San Francisco, CA', 'Award-winning digital agency specializing in brand identity and web design.', 'Pixel Perfect Studio is a full-service creative agency that transforms brands through strategic design and innovative digital experiences. With over 10 years of experience, we''ve helped Fortune 500 companies and startups alike create memorable brand identities that resonate with their audiences.', 'Design', ARRAY['Branding', 'Web Design', 'UI/UX'], 45, '$50k - $100k', 4.9, true, '2014', 'pixelperfect.studio', 'hello@pixelperfect.studio', 280, ARRAY['Spotify', 'Airbnb', 'Slack']),
('CodeCraft Labs', 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=80&h=80&fit=crop', 'Austin, TX', 'Full-stack development agency building scalable applications.', 'CodeCraft Labs specializes in building enterprise-grade web and mobile applications. Our team of senior engineers brings expertise in modern technologies like React, Node.js, and cloud infrastructure to deliver robust, scalable solutions.', 'Development', ARRAY['Web Development', 'Mobile Apps', 'Cloud'], 120, '$100k - $500k', 4.8, true, '2016', 'codecraft.dev', 'projects@codecraft.dev', 450, ARRAY['Microsoft', 'Tesla', 'Stripe']),
('Growth Engine', 'https://images.unsplash.com/photo-1572021335469-31706a17ber0?w=80&h=80&fit=crop', 'New York, NY', 'Data-driven marketing agency focused on measurable growth.', 'Growth Engine is a performance marketing agency that combines data science with creative strategy to drive sustainable growth. We specialize in paid acquisition, SEO, and conversion optimization for B2B and e-commerce brands.', 'Marketing', ARRAY['SEO', 'Paid Ads', 'Analytics'], 35, '$25k - $50k', 4.7, false, '2018', 'growthengine.io', 'grow@growthengine.io', 180, ARRAY['Shopify', 'HubSpot', 'Mailchimp']),
('Motion Studio', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop', 'Los Angeles, CA', 'Creative production house for video and motion design.', 'Motion Studio creates compelling video content and motion graphics for brands worldwide. From commercial productions to animated explainers, we bring stories to life through stunning visual narratives.', 'Creative', ARRAY['Video Production', 'Motion Graphics', '3D Animation'], 28, '$50k - $100k', 4.9, true, '2015', 'motionstudio.co', 'create@motionstudio.co', 320, ARRAY['Nike', 'Apple', 'Netflix']),
('Strategy First', 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=80&fit=crop', 'Chicago, IL', 'Business consulting with focus on digital transformation.', 'Strategy First helps organizations navigate digital transformation. Our consultants bring decades of experience in change management, process optimization, and technology implementation to drive business outcomes.', 'Consulting', ARRAY['Strategy', 'Digital Transformation', 'Process Optimization'], 85, '$100k - $500k', 4.6, false, '2012', 'strategyfirst.com', 'consult@strategyfirst.com', 150, ARRAY['Deloitte', 'McKinsey', 'BCG']),
('Social Spark', 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=80&h=80&fit=crop', 'Miami, FL', 'Social media management and influencer marketing experts.', 'Social Spark is a boutique social media agency that builds authentic connections between brands and their audiences. We manage communities, create viral content, and execute influencer campaigns that drive engagement.', 'Marketing', ARRAY['Social Media', 'Influencer Marketing', 'Content Creation'], 18, '$10k - $25k', 4.8, true, '2019', 'socialspark.agency', 'spark@socialspark.agency', 95, ARRAY['Glossier', 'Fenty', 'Gymshark']),
('DataViz Pro', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop', 'Seattle, WA', 'Data visualization and analytics dashboard specialists.', 'DataViz Pro transforms complex data into actionable insights through beautiful, interactive visualizations. We build custom dashboards and reporting solutions that help businesses make data-driven decisions.', 'Development', ARRAY['Data Visualization', 'Dashboard Development', 'BI Solutions'], 42, '$50k - $100k', 4.7, false, '2017', 'datavizpro.com', 'data@datavizpro.com', 210, ARRAY['Tableau', 'Snowflake', 'Looker']),
('UX Collective', 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop', 'Boston, MA', 'Human-centered design agency creating intuitive experiences.', 'UX Collective is a research-driven design agency that puts users at the center of every project. We conduct extensive user research, create detailed prototypes, and design interfaces that delight and convert.', 'Design', ARRAY['UX Research', 'Product Design', 'Usability Testing'], 32, '$25k - $50k', 4.9, true, '2016', 'uxcollective.design', 'hello@uxcollective.design', 175, ARRAY['Figma', 'InVision', 'Sketch']),
('Cloud Nine Tech', 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop', 'Denver, CO', 'Cloud infrastructure and DevOps consulting specialists.', 'Cloud Nine Tech helps companies modernize their infrastructure and adopt cloud-native practices. Our certified engineers specialize in AWS, GCP, and Azure, delivering scalable, secure, and cost-effective solutions.', 'Development', ARRAY['Cloud Architecture', 'DevOps', 'Infrastructure'], 65, '$100k - $500k', 4.8, true, '2015', 'cloudnine.tech', 'ops@cloudnine.tech', 340, ARRAY['AWS', 'Google', 'Docker']),
('Brand Builders', 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=80&h=80&fit=crop', 'Portland, OR', 'Strategic branding agency for startups and scale-ups.', 'Brand Builders helps emerging companies develop distinctive brand identities that stand out in crowded markets. From naming to visual systems, we create cohesive brand experiences that drive recognition and loyalty.', 'Creative', ARRAY['Brand Strategy', 'Visual Identity', 'Brand Guidelines'], 22, '$25k - $50k', 4.7, false, '2018', 'brandbuilders.co', 'build@brandbuilders.co', 120, ARRAY['Y Combinator', 'Sequoia', 'a16z']),
('E-Com Experts', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop', 'Atlanta, GA', 'End-to-end e-commerce solutions and optimization.', 'E-Com Experts is a specialized agency focused exclusively on e-commerce success. We build, optimize, and scale online stores on Shopify, WooCommerce, and custom platforms, driving revenue growth for D2C brands.', 'Development', ARRAY['E-commerce Development', 'CRO', 'Platform Migration'], 48, '$50k - $100k', 4.6, true, '2017', 'ecomexperts.io', 'shop@ecomexperts.io', 290, ARRAY['Allbirds', 'Warby Parker', 'Casper']),
('PR Pulse', 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop', 'Washington, DC', 'Public relations and communications strategy firm.', 'PR Pulse is a strategic communications firm that helps brands tell their stories and manage their reputations. We specialize in media relations, crisis communications, and thought leadership for tech and finance sectors.', 'Marketing', ARRAY['Public Relations', 'Crisis Management', 'Media Training'], 28, '$25k - $50k', 4.5, false, '2014', 'prpulse.com', 'press@prpulse.com', 165, ARRAY['Bloomberg', 'Reuters', 'WSJ']);