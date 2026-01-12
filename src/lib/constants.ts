export const COMPANY_NAME = "Al Alis Building Materials & Electricals";
export const COMPANY_SHORT_NAME = "Al Alis";
export const WHATSAPP_NUMBER = "+97455622006";
export const PHONE_NUMBER = "+97444864702";
export const PHONE_NUMBER_2 = "+97470089595";
export const EMAIL = "sales@alalistrading.com";
export const WEBSITE = "www.alalistrading.com";
export const ADDRESS = "Omar bin Al Khattab Street, Madinat Khalifa South 34, Ad Dawhah, Doha, Qatar";
export const PO_BOX = "P.O.Box: 200437";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/alalicompany1?igsh=MXB0bmVvZDdmMDVvbw%3D%3D&utm_source=qr",
  facebook: "https://www.facebook.com/profile.php?id=61586204797969",
  twitter: "https://twitter.com/alalistrading",
  linkedin: "https://linkedin.com/company/alalistrading",
};

export const ABOUT_US = {
  description: "Al Alis Building Materials & Electricals is a fast growing retail chain headquartered in Doha, Qatar. We are specialized in Building materials, Electrical and Plumbing supplies. Founded in 2000, Al Alis has since continued to grow and serve customers across Qatar.",
  vision: "To grow and thrive with our customers by being their reliable supplier partner.",
  mission: "To empower our customers, to help them achieve higher levels of productivity by providing better solutions, services and products.",
  specialization: "We are a professional trading company, grouping under one roof a wide range of construction materials. We represent worldwide known manufacturers and offer complete solutions for all Electrical, Plumbing and Building materials products and services.",
};

export const PRODUCT_CATEGORIES = [
  {
    id: "electrical",
    title: "Electrical",
    description: "Complete range of electrical supplies including switches, plugs, breakers, LED tubes, fluorescent tubes and lighting solutions.",
    image: "/images/categories/electricalcategory.png",
    href: "/products/electrical",
    items: [
      "Switches & Plugs",
      "Circuit Breakers",
      "LED & Fluorescent Tubes",
      "Wiring & Cables",
      "Distribution Boards",
      "Industrial Electrical",
    ],
    subcategories: [
      { name: "Switches & Plugs", href: "/products/electrical/switches-plugs" },
      { name: "Circuit Breakers", href: "/products/electrical/breakers" },
      { name: "LED & Lighting", href: "/products/electrical/lighting" },
      { name: "Wiring & Cables", href: "/products/electrical/wiring" },
      { name: "Distribution Boards", href: "/products/electrical/distribution" },
    ],
  },
  {
    id: "sanitary-plumbing",
    title: "Sanitary & Plumbing Materials",
    description: "Premium sanitary ware, faucets, and comprehensive plumbing solutions including PVC fittings, PPR pipes, valves and accessories.",
    image: "/images/categories/plumbingandsanitarycategory.png",
    href: "/products/sanitary-plumbing",
    items: [
      "Wash Basins & Toilets",
      "Mixers & Faucets",
      "PVC Fittings & Pipes",
      "PPR Fittings & Pipes",
      "Valves & Accessories",
      "Shower Systems",
    ],
    subcategories: [
      { name: "Sanitary Ware", href: "/products/sanitary-plumbing/sanitary" },
      { name: "Faucets & Mixers", href: "/products/sanitary-plumbing/faucets" },
      { name: "PVC Fittings", href: "/products/sanitary-plumbing/pvc" },
      { name: "PPR Fittings", href: "/products/sanitary-plumbing/ppr" },
      { name: "Valves", href: "/products/sanitary-plumbing/valves" },
    ],
  },
  {
    id: "building-materials",
    title: "Building Materials",
    description: "High-quality construction materials including nails, wiremesh, bitumen membranes, abrasives, adhesives and more.",
    image: "/images/categories/buildingmaterialscategory.png",
    href: "/products/building-materials",
    items: [
      "Nails & Fasteners",
      "Wiremesh & Welded Rolls",
      "Bitumen Membranes",
      "Adhesives & Sealants",
      "Abrasives",
      "Construction Chemicals",
    ],
    subcategories: [
      { name: "Nails & Fasteners", href: "/products/building-materials/nails" },
      { name: "Wiremesh", href: "/products/building-materials/wiremesh" },
      { name: "Waterproofing", href: "/products/building-materials/waterproofing" },
      { name: "Adhesives & Sealants", href: "/products/building-materials/adhesives" },
      { name: "Abrasives", href: "/products/building-materials/abrasives" },
    ],
  },
  {
    id: "hardware-tools",
    title: "Hardware & Tools",
    description: "Professional-grade power tools, hand tools, ladders, locks, and all hardware accessories for construction and maintenance.",
    image: "/images/categories/hardwareandtoolscategory.png",
    href: "/products/hardware-tools",
    items: [
      "Power Tools",
      "Hand Tools",
      "Ladders & Scaffolding",
      "Locks & Door Hardware",
      "Drill Bits & Accessories",
      "Painting Tools",
    ],
    subcategories: [
      { name: "Power Tools", href: "/products/hardware-tools/power-tools" },
      { name: "Hand Tools", href: "/products/hardware-tools/hand-tools" },
      { name: "Ladders", href: "/products/hardware-tools/ladders" },
      { name: "Locks & Hardware", href: "/products/hardware-tools/locks" },
      { name: "Painting Tools", href: "/products/hardware-tools/painting" },
    ],
  },
  {
    id: "safety",
    title: "Safety Items",
    description: "Complete fire safety and personal protective equipment including helmets, gloves, safety shoes, fire alarms and more.",
    image: "/images/categories/safetycategory.png",
    href: "/products/safety",
    items: [
      "Safety Helmets & Goggles",
      "Safety Shoes & Gloves",
      "Fire Extinguishers",
      "Fire Alarms & Detectors",
      "Safety Vests & Coveralls",
      "First Aid Kits",
    ],
    subcategories: [
      { name: "PPE Equipment", href: "/products/safety/ppe" },
      { name: "Fire Safety", href: "/products/safety/fire" },
      { name: "Safety Shoes", href: "/products/safety/shoes" },
      { name: "Safety Gloves", href: "/products/safety/gloves" },
      { name: "First Aid", href: "/products/safety/first-aid" },
    ],
  },
];

export const FEATURES = [
  {
    title: "Quality Products",
    description: "We represent worldwide known manufacturers and source only the highest quality materials.",
    icon: "quality",
  },
  {
    title: "Competitive Pricing",
    description: "Best prices in Qatar with bulk discounts for contractors and businesses.",
    icon: "pricing",
  },
  {
    title: "Fast Delivery",
    description: "Quick delivery across Qatar from our large warehouse facility in Doha.",
    icon: "delivery",
  },
  {
    title: "Expert Support",
    description: "Our experienced team provides technical guidance and complete solutions for all your needs.",
    icon: "support",
  },
];

export const TESTIMONIALS = [
  {
    name: "Mohammad Mohyiddin",
    role: "Local Guide · 94 reviews",
    company: "Google Review",
    content: "Very convenient place for hardwares and building materials",
    rating: 5,
    time: "5 years ago",
  },
  {
    name: "ZUNAID UR RAHMAN",
    role: "Local Guide · 33 reviews",
    company: "Google Review",
    content: "Good",
    rating: 5,
    time: "6 years ago",
  },
  {
    name: "gulshan shaan",
    role: "9 reviews",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "2 years ago",
  },
  {
    name: "Akhil R",
    role: "Local Guide · 8 reviews",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "6 years ago",
  },
  {
    name: "Muhammed Famin.u.m",
    role: "3 reviews",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "7 years ago",
  },
  {
    name: "Nishad Jabeen",
    role: "Google Review",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "7 years ago",
  },
  {
    name: "irfan kamal",
    role: "1 review",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "7 years ago",
  },
  {
    name: "uzair ummer",
    role: "Local Guide · 5 reviews",
    company: "Google Review",
    content: "Rated 5 stars",
    rating: 5,
    time: "8 years ago",
  },
];

export const STATS = [
  { value: "8+", label: "Years Experience" },
  { value: "5000+", label: "Products Available" },
  { value: "1000+", label: "Happy Customers" },
  { value: "24/7", label: "Customer Support" },
];

export const WORKING_HOURS = {
  weekdays: "Saturday - Thursday: 6:00 AM - 10:00 PM",
  friday: "Friday: 6:00 PM - 10:00 PM",
};
