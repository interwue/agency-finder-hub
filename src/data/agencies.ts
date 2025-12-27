export interface Agency {
  id: string;
  name: string;
  logo: string;
  location: string;
  description: string;
  longDescription: string;
  industry: string;
  services: string[];
  companySize: number;
  budget: string;
  rating: number;
  isHiring: boolean;
  founded: string;
  website: string;
  email: string;
  projects: number;
  clients: string[];
}

export const agencies: Agency[] = [
  {
    id: "1",
    name: "Pixel Perfect Studio",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=80&h=80&fit=crop",
    location: "San Francisco, CA",
    description: "Award-winning digital agency specializing in brand identity and web design.",
    longDescription: "Pixel Perfect Studio is a full-service creative agency that transforms brands through strategic design and innovative digital experiences. With over 10 years of experience, we've helped Fortune 500 companies and startups alike create memorable brand identities that resonate with their audiences.",
    industry: "Design",
    services: ["Branding", "Web Design", "UI/UX"],
    companySize: 45,
    budget: "$50k - $100k",
    rating: 4.9,
    isHiring: true,
    founded: "2014",
    website: "pixelperfect.studio",
    email: "hello@pixelperfect.studio",
    projects: 280,
    clients: ["Spotify", "Airbnb", "Slack"]
  },
  {
    id: "2",
    name: "CodeCraft Labs",
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=80&h=80&fit=crop",
    location: "Austin, TX",
    description: "Full-stack development agency building scalable applications.",
    longDescription: "CodeCraft Labs specializes in building enterprise-grade web and mobile applications. Our team of senior engineers brings expertise in modern technologies like React, Node.js, and cloud infrastructure to deliver robust, scalable solutions.",
    industry: "Development",
    services: ["Web Development", "Mobile Apps", "Cloud"],
    companySize: 120,
    budget: "$100k - $500k",
    rating: 4.8,
    isHiring: true,
    founded: "2016",
    website: "codecraft.dev",
    email: "projects@codecraft.dev",
    projects: 450,
    clients: ["Microsoft", "Tesla", "Stripe"]
  },
  {
    id: "3",
    name: "Growth Engine",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17ber0?w=80&h=80&fit=crop",
    location: "New York, NY",
    description: "Data-driven marketing agency focused on measurable growth.",
    longDescription: "Growth Engine is a performance marketing agency that combines data science with creative strategy to drive sustainable growth. We specialize in paid acquisition, SEO, and conversion optimization for B2B and e-commerce brands.",
    industry: "Marketing",
    services: ["SEO", "Paid Ads", "Analytics"],
    companySize: 35,
    budget: "$25k - $50k",
    rating: 4.7,
    isHiring: false,
    founded: "2018",
    website: "growthengine.io",
    email: "grow@growthengine.io",
    projects: 180,
    clients: ["Shopify", "HubSpot", "Mailchimp"]
  },
  {
    id: "4",
    name: "Motion Studio",
    logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop",
    location: "Los Angeles, CA",
    description: "Creative production house for video and motion design.",
    longDescription: "Motion Studio creates compelling video content and motion graphics for brands worldwide. From commercial productions to animated explainers, we bring stories to life through stunning visual narratives.",
    industry: "Creative",
    services: ["Video Production", "Motion Graphics", "3D Animation"],
    companySize: 28,
    budget: "$50k - $100k",
    rating: 4.9,
    isHiring: true,
    founded: "2015",
    website: "motionstudio.co",
    email: "create@motionstudio.co",
    projects: 320,
    clients: ["Nike", "Apple", "Netflix"]
  },
  {
    id: "5",
    name: "Strategy First",
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=80&fit=crop",
    location: "Chicago, IL",
    description: "Business consulting with focus on digital transformation.",
    longDescription: "Strategy First helps organizations navigate digital transformation. Our consultants bring decades of experience in change management, process optimization, and technology implementation to drive business outcomes.",
    industry: "Consulting",
    services: ["Strategy", "Digital Transformation", "Process Optimization"],
    companySize: 85,
    budget: "$100k - $500k",
    rating: 4.6,
    isHiring: false,
    founded: "2012",
    website: "strategyfirst.com",
    email: "consult@strategyfirst.com",
    projects: 150,
    clients: ["Deloitte", "McKinsey", "BCG"]
  },
  {
    id: "6",
    name: "Social Spark",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=80&h=80&fit=crop",
    location: "Miami, FL",
    description: "Social media management and influencer marketing experts.",
    longDescription: "Social Spark is a boutique social media agency that builds authentic connections between brands and their audiences. We manage communities, create viral content, and execute influencer campaigns that drive engagement.",
    industry: "Marketing",
    services: ["Social Media", "Influencer Marketing", "Content Creation"],
    companySize: 18,
    budget: "$10k - $25k",
    rating: 4.8,
    isHiring: true,
    founded: "2019",
    website: "socialspark.agency",
    email: "spark@socialspark.agency",
    projects: 95,
    clients: ["Glossier", "Fenty", "Gymshark"]
  },
  {
    id: "7",
    name: "DataViz Pro",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop",
    location: "Seattle, WA",
    description: "Data visualization and analytics dashboard specialists.",
    longDescription: "DataViz Pro transforms complex data into actionable insights through beautiful, interactive visualizations. We build custom dashboards and reporting solutions that help businesses make data-driven decisions.",
    industry: "Development",
    services: ["Data Visualization", "Dashboard Development", "BI Solutions"],
    companySize: 42,
    budget: "$50k - $100k",
    rating: 4.7,
    isHiring: false,
    founded: "2017",
    website: "datavizpro.com",
    email: "data@datavizpro.com",
    projects: 210,
    clients: ["Tableau", "Snowflake", "Looker"]
  },
  {
    id: "8",
    name: "UX Collective",
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop",
    location: "Boston, MA",
    description: "Human-centered design agency creating intuitive experiences.",
    longDescription: "UX Collective is a research-driven design agency that puts users at the center of every project. We conduct extensive user research, create detailed prototypes, and design interfaces that delight and convert.",
    industry: "Design",
    services: ["UX Research", "Product Design", "Usability Testing"],
    companySize: 32,
    budget: "$25k - $50k",
    rating: 4.9,
    isHiring: true,
    founded: "2016",
    website: "uxcollective.design",
    email: "hello@uxcollective.design",
    projects: 175,
    clients: ["Figma", "InVision", "Sketch"]
  },
  {
    id: "9",
    name: "Cloud Nine Tech",
    logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=80&h=80&fit=crop",
    location: "Denver, CO",
    description: "Cloud infrastructure and DevOps consulting specialists.",
    longDescription: "Cloud Nine Tech helps companies modernize their infrastructure and adopt cloud-native practices. Our certified engineers specialize in AWS, GCP, and Azure, delivering scalable, secure, and cost-effective solutions.",
    industry: "Development",
    services: ["Cloud Architecture", "DevOps", "Infrastructure"],
    companySize: 65,
    budget: "$100k - $500k",
    rating: 4.8,
    isHiring: true,
    founded: "2015",
    website: "cloudnine.tech",
    email: "ops@cloudnine.tech",
    projects: 340,
    clients: ["AWS", "Google", "Docker"]
  },
  {
    id: "10",
    name: "Brand Builders",
    logo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=80&h=80&fit=crop",
    location: "Portland, OR",
    description: "Strategic branding agency for startups and scale-ups.",
    longDescription: "Brand Builders helps emerging companies develop distinctive brand identities that stand out in crowded markets. From naming to visual systems, we create cohesive brand experiences that drive recognition and loyalty.",
    industry: "Creative",
    services: ["Brand Strategy", "Visual Identity", "Brand Guidelines"],
    companySize: 22,
    budget: "$25k - $50k",
    rating: 4.7,
    isHiring: false,
    founded: "2018",
    website: "brandbuilders.co",
    email: "build@brandbuilders.co",
    projects: 120,
    clients: ["Y Combinator", "Sequoia", "a16z"]
  },
  {
    id: "11",
    name: "E-Com Experts",
    logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=80&h=80&fit=crop",
    location: "Atlanta, GA",
    description: "End-to-end e-commerce solutions and optimization.",
    longDescription: "E-Com Experts is a specialized agency focused exclusively on e-commerce success. We build, optimize, and scale online stores on Shopify, WooCommerce, and custom platforms, driving revenue growth for D2C brands.",
    industry: "Development",
    services: ["E-commerce Development", "CRO", "Platform Migration"],
    companySize: 48,
    budget: "$50k - $100k",
    rating: 4.6,
    isHiring: true,
    founded: "2017",
    website: "ecomexperts.io",
    email: "shop@ecomexperts.io",
    projects: 290,
    clients: ["Allbirds", "Warby Parker", "Casper"]
  },
  {
    id: "12",
    name: "PR Pulse",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop",
    location: "Washington, DC",
    description: "Public relations and communications strategy firm.",
    longDescription: "PR Pulse is a strategic communications firm that helps brands tell their stories and manage their reputations. We specialize in media relations, crisis communications, and thought leadership for tech and finance sectors.",
    industry: "Marketing",
    services: ["Public Relations", "Crisis Management", "Media Training"],
    companySize: 28,
    budget: "$25k - $50k",
    rating: 4.5,
    isHiring: false,
    founded: "2014",
    website: "prpulse.com",
    email: "press@prpulse.com",
    projects: 165,
    clients: ["Bloomberg", "Reuters", "WSJ"]
  }
];

export const industries = ["All Industries", "Design", "Development", "Marketing", "Creative", "Consulting"];
export const services = ["Branding", "Web Design", "UI/UX", "Web Development", "Mobile Apps", "Cloud", "SEO", "Paid Ads", "Analytics", "Video Production", "Motion Graphics", "Strategy", "Social Media", "Data Visualization"];
export const locations = ["All Locations", "San Francisco, CA", "Austin, TX", "New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Seattle, WA", "Boston, MA", "Denver, CO", "Portland, OR", "Atlanta, GA", "Washington, DC"];
export const budgets = ["All Budgets", "$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k - $500k"];
