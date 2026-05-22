export const company = {
  name: "Cyprus Joy",
  fullName: "Cyprus Joy Building and Landscaping",
  location: "Paphos, Cyprus",
  region: "the Paphos region of Cyprus",
  phoneDisplay: "00357 99 427 481",
  phoneHref: "tel:+35799427481",
  emailPrimary: "douglascyprusjoy@gmail.com",
  emailSecondary: "cyprusjoy@cytanet.com.cy",
  facebook: "Cyprus Joy Building and Landscaping",
  established: "2003",
};

export type Service = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  intro: string;
  included: string[];
};

export const services: Service[] = [
  {
    title: "Garden Landscaping",
    slug: "garden-landscaping",
    image: "/images/garden-landscaping.jpg",
    summary:
      "Garden design and construction work for practical, long-lasting outdoor spaces.",
    intro:
      "Cyprus Joy provides garden landscaping and garden construction across the Paphos region, with a focus on practical designs, durable finishes and outdoor areas that suit the customer’s budget and requirements.",
    included: [
      "Garden design and layout advice",
      "Garden construction and hard landscaping",
      "Low-maintenance garden improvements",
      "Patios, paths and outdoor sitting areas",
      "Natural stone and feature areas",
      "Preparation for artificial grass and fencing",
    ],
  },
  {
    title: "Building Renovations",
    slug: "building-renovations",
    image: "/images/renovation-work.jpg",
    summary:
      "Exterior and interior renovation work completed with care and practical planning.",
    intro:
      "Cyprus Joy has undertaken a wide and varied amount of exterior and interior renovation work over the years. The company is suited to customers who need inspiration in design and quality in completion.",
    included: [
      "Interior and exterior renovation projects",
      "Garden construction linked to building work",
      "Repairs, alterations and improvements",
      "Planning the most suitable approach for the property",
      "Cost-effective solutions to fit the budget",
      "Long-lasting workmanship",
    ],
  },
  {
    title: "General Renovations",
    slug: "general-renovations",
    image: "/images/general-renovations.jpg",
    summary:
      "A wide range of renovation tasks for homes, villas and managed properties.",
    intro:
      "Cyprus Joy takes a good look at the customer’s requirements, designs the most suitable solution, and carries out cost-effective, long-lasting work to fit the budget.",
    included: [
      "General property improvements",
      "Repairs and renovation works",
      "Tiling, surfaces and finishing",
      "Outdoor and indoor improvements",
      "Practical advice before work begins",
      "Work carried out with a long-term finish in mind",
    ],
  },
  {
    title: "Interior Renovations",
    slug: "interior-renovations",
    image: "/images/interior-renovations.jpg",
    summary:
      "Interior renovation work including tiles, bathrooms, fireplaces and finishing.",
    intro:
      "Cyprus Joy has completed a variety of interior projects over the years, from removing outdated fireplaces to relaying tiles and carrying out bathroom improvements.",
    included: [
      "Tiling and replacement tiles",
      "Bathroom and room improvements",
      "Fireplace removal and updating",
      "Underfloor heating preparation where suitable",
      "Interior repairs and finishing",
      "Advice on practical, lasting materials",
    ],
  },
  {
    title: "Exterior Renovations",
    slug: "exterior-renovations",
    image: "/images/exterior-renovations.jpeg",
    summary:
      "Exterior work and garden construction to improve outdoor areas around the property.",
    intro:
      "Exterior renovations and garden construction are a key part of Cyprus Joy’s work, helping customers improve outside spaces with practical and durable results.",
    included: [
      "Garden construction",
      "Exterior property improvements",
      "Patios and paved areas",
      "Boundary and outdoor feature work",
      "Stone, tile and surface finishes",
      "Preparation for fencing and landscaping",
    ],
  },
  {
    title: "Aluminium Fencing",
    slug: "aluminium-fencing",
    image: "/images/aluminium-fencing.jpg",
    summary:
      "Maintenance-free aluminium fencing for privacy, safety and security.",
    intro:
      "As more clients move towards maintenance-free gardens and villas, aluminium fencing has become a first choice over wood. Cyprus Joy has been fitting aluminium fencing since 2010.",
    included: [
      "Aluminium fencing supply and installation",
      "12cm stacked panel fencing",
      "Privacy, safety and security fencing",
      "Colour options including white, cream, brown and wood effect",
      "Maintenance-free fencing solutions",
      "Fitting with a long-lasting finish",
    ],
  },
  {
    title: "Artificial Grass",
    slug: "artificial-grass",
    image: "/images/artificial-grass.jpg",
    summary:
      "Artificial grass supply and installation for low-maintenance gardens.",
    intro:
      "Artificial grass has made fantastic improvements in quality over the last few years. Many Cyprus Joy customers looking for low-maintenance gardens now choose artificial grass to reduce water bills and garden upkeep.",
    included: [
      "Artificial grass supply and fitting",
      "Low-maintenance garden surfaces",
      "Ground preparation",
      "Family and villa garden areas",
      "Practical design advice",
      "Different layouts and finishes",
    ],
  },
  {
    title: "Painting",
    slug: "painting",
    image: "/images/painting.jpg",
    summary:
      "Painting and finishing work as part of renovation and property improvement projects.",
    intro:
      "Cyprus Joy carries out painting and finishing work for customers who need clear, practical property improvements completed as part of a wider renovation or maintenance project.",
    included: [
      "Interior painting",
      "Exterior painting",
      "Preparation and finishing",
      "Painting linked to renovation works",
      "Refreshes for villas and rental properties",
      "Advice on a suitable finish for the property",
    ],
  },
  {
    title: "Other Services",
    slug: "other-services",
    image: "/images/other-services.jpg",
    summary:
      "Additional building and landscaping services including glass screens, natural stone and patios.",
    intro:
      "Cyprus Joy offers a wide array of building, renovation and landscaping services at competitive prices, including specialist outdoor and finishing work.",
    included: [
      "Glass screens",
      "Natural stone and cladding",
      "Crazy paving and patios",
      "Tiling",
      "Outdoor feature areas",
      "General building and garden improvements",
    ],
  },
];

export const featuredServices = [
  services.find((service) => service.slug === "garden-landscaping")!,
  services.find((service) => service.slug === "building-renovations")!,
  services.find((service) => service.slug === "artificial-grass")!,
  services.find((service) => service.slug === "aluminium-fencing")!,
  {
    title: "Interior & Exterior Renovations",
    slug: "interior-renovations",
    image: "/images/exterior-renovations.jpeg",
    summary:
      "Renovation work inside and outside the property, planned around your requirements.",
  },
  {
    title: "Painting, Tiling & Natural Stone",
    slug: "other-services",
    image: "/images/stonework.jpg",
    summary:
      "Finishing work, surface improvements, natural stone, tiling and patios.",
  },
];

export const trustItems = [
  "Serving Paphos since 2003",
  "Landscaping & Renovations",
  "Artificial Grass & Aluminium Fencing",
  "Free Quotations",
];

export const materialBadges = [
  "Serving Paphos since 2003",
  "Landscaping",
  "Renovations",
  "Artificial Grass",
  "Aluminium Fencing",
];

export const serviceTileMap = [
  {
    title: "Garden Landscaping",
    slug: "garden-landscaping",
    note: "Garden layouts, construction, paths and practical outdoor areas.",
    tone: "bg-olive",
  },
  {
    title: "Artificial Grass",
    slug: "artificial-grass",
    note: "Low-maintenance gardens with prepared surfaces and clean fitting.",
    tone: "bg-sage",
  },
  {
    title: "Aluminium Fencing",
    slug: "aluminium-fencing",
    note: "Maintenance-free fencing for privacy, safety and security.",
    tone: "bg-stone",
  },
  {
    title: "Building Renovations",
    slug: "building-renovations",
    note: "Interior and exterior improvements with long-lasting work.",
    tone: "bg-clay",
  },
  {
    title: "Interior Renovations",
    slug: "interior-renovations",
    note: "Tiles, bathrooms, fireplaces, repairs and practical updates.",
    tone: "bg-paper",
  },
  {
    title: "Exterior Renovations",
    slug: "exterior-renovations",
    note: "Garden construction, surfaces, boundaries and outdoor finishes.",
    tone: "bg-limestone",
  },
  {
    title: "Painting",
    slug: "painting",
    note: "Interior and exterior preparation, painting and finishing.",
    tone: "bg-paper",
  },
  {
    title: "Tiling",
    slug: "other-services",
    note: "Tiling and surface work as part of renovation projects.",
    tone: "bg-stone",
  },
  {
    title: "Natural Stone",
    slug: "other-services",
    note: "Stonework, cladding, features and 10cm natural stone rocks.",
    tone: "bg-limestone",
  },
  {
    title: "Glass Screens",
    slug: "other-services",
    note: "Glass screen work included within the wider services range.",
    tone: "bg-sage",
  },
  {
    title: "Other Services",
    slug: "other-services",
    note: "Crazy paving, patios and general building or garden improvements.",
    tone: "bg-clay",
  },
];

export const processSteps = [
  {
    label: "Visit",
    title: "Visit & understand the space",
    text: "Look at the garden, property, access, use, budget and what needs to last.",
  },
  {
    label: "Plan",
    title: "Suggest practical options",
    text: "Recommend a clear route using suitable materials and sensible costs.",
  },
  {
    label: "Build",
    title: "Build with the right materials",
    text: "Carry out landscaping, renovation, fencing, stone, tiling or grass work carefully.",
  },
  {
    label: "Finish",
    title: "Leave a clean, long-lasting finish",
    text: "Complete the job neatly so the space is ready to use and simple to maintain.",
  },
];

export const reasons = [
  "Experienced since 2003",
  "Local Paphos knowledge",
  "Wide range of building and garden services",
  "Practical advice and cost-effective solutions",
  "Long-lasting workmanship",
];

export const galleryItems = [
  {
    title: "Garden landscaping",
    image: "/images/garden-landscaping.jpg",
    span: "lg:col-span-5 lg:row-span-2",
  },
  {
    title: "Artificial grass installation",
    image: "/images/artificial-grass.jpg",
    span: "lg:col-span-3",
  },
  {
    title: "Aluminium fencing",
    image: "/images/aluminium-fencing.jpg",
    span: "lg:col-span-4 lg:row-span-2",
  },
  {
    title: "Renovation work",
    image: "/images/general-renovations.jpg",
    span: "lg:col-span-4",
  },
  {
    title: "Natural stone",
    image: "/images/stonework.jpg",
    span: "lg:col-span-3",
  },
  {
    title: "Patios and paving",
    image: "/images/patios.jpg",
    span: "lg:col-span-5",
  },
];

export const currentProjects = [
  {
    title: "Garden reshaping and planting areas",
    type: "Current project note",
    image: "/images/current-project-garden.jpg",
    text: "A compact place to add recent garden transformations, progress photos and finished results as new work is completed.",
  },
  {
    title: "Aluminium fencing installation",
    type: "Recent result",
    image: "/images/current-project-fencing.jpeg",
    text: "Use this area for safety, privacy and maintenance-free fencing projects around villas and gardens.",
  },
  {
    title: "Renovation and finishing work",
    type: "Project update",
    image: "/images/current-project-renovation.jpeg",
    text: "Short project updates can be added here for renovation, tiling, painting, stonework and exterior improvements.",
  },
];

export const videos = [
  {
    title: "Artificial grass project",
    embed: "https://www.youtube.com/embed/HjZeVFJpxcI?rel=0",
  },
  {
    title: "Garden and landscaping work",
    embed: "https://www.youtube.com/embed/wQBEzS4zPog?rel=0",
  },
  {
    title: "Aluminium fencing",
    embed: "https://www.youtube.com/embed/PWDodX0iwco?rel=0",
  },
  {
    title: "Aluminium fencing safety focus",
    embed: "https://www.youtube.com/embed/OK5DgvgJH_k?rel=0",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
