export const BUSINESS_NAME = "Skyline Interior"
export const BUSINESS_EMAIL = "skylineinterior108@gmail.com"
export const BUSINESS_PHONE = "+91 96873 57996"
export const BUSINESS_PHONE_HREF = BUSINESS_PHONE.replace(/\s/g, "")
export const BUSINESS_WHATSAPP_NUMBER = "919687357996"
export const BUSINESS_ADDRESS = "Radhe Signature, Opp. Sahajanand City, Kudasan, Gandhinagar - 382421"
export const BUSINESS_MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(BUSINESS_ADDRESS)}&output=embed`
export const WORKING_HOURS = "Closes at 6 PM"
export const BUSINESS_TAGLINE = "We do all kind of interior, architecture, set design, landscape work"
export const GOOGLE_RATING = "4.9"
export const GOOGLE_REVIEWS = 30
export const FACEBOOK_LIKES = "3,242"

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { href: '#style-quiz', label: 'Find Your Style' },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export const SERVICES = [
  { icon: "Home", title: "Residential Design", description: "Transform your home into a sanctuary with personalized residential interior design." },
  { icon: "Building2", title: "Commercial Spaces", description: "Create professional and inspiring commercial environments for your business." },
  { icon: "UtensilsCrossed", title: "Modular Kitchens", description: "Modern, functional kitchens designed for contemporary living." },
  { icon: "Layers", title: "False Ceiling", description: "Aesthetic and functional ceiling solutions to elevate your interiors." },
  { icon: "Eye", title: "3D Visualization", description: "See your space come alive with detailed 3D renders before execution." },
  { icon: "Sofa", title: "Custom Furniture", description: "Bespoke furniture pieces crafted to your exact specifications." },
  { icon: "Hammer", title: "Renovation", description: "Complete renovation services to modernize your existing spaces." },
  { icon: "Building", title: "Architecture", description: "Architectural design services for structural and aesthetic excellence." },
  { icon: "Clapperboard", title: "Set Design", description: "Purpose-built set design for shoots, events, retail displays, and creative spaces." },
  { icon: "Trees", title: "Landscape Work", description: "Outdoor and landscape concepts that connect your interiors with refined exterior spaces." },
]

export const USP_ITEMS = [
  { icon: "Palette", title: "Personalized Design", description: "Tailored solutions that reflect your unique style and preferences." },
  { icon: "DollarSign", title: "Transparent Pricing", description: "Clear, honest pricing with no hidden costs or surprises." },
  { icon: "Users", title: "In-house Team", description: "Dedicated professionals handling every aspect of your project." },
  { icon: "Eye", title: "3D Preview", description: "Visualize before implementation with advanced rendering." },
  { icon: "CheckCircle", title: "Quality Materials", description: "Premium materials sourced for durability and aesthetics." },
  { icon: "User", title: "Dedicated Manager", description: "Personal project manager ensuring smooth execution." },
]

export const PROCESS_STEPS = [
  { title: "Consultation", description: "Understanding your vision and requirements" },
  { title: "Concept & 3D", description: "Creating design concepts and 3D visualizations" },
  { title: "Material Selection", description: "Choosing premium materials and finishes" },
  { title: "Execution", description: "Professional implementation of the design" },
  { title: "Handover", description: "Final inspection and project completion" },
]

export const PORTFOLIO_CATEGORIES = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Bathroom"]

export const PORTFOLIO_PROJECTS = [
  { id: 1, title: "Modern Living Room", category: "Living Room", image: "/images/living_room.webp" },
  { id: 2, title: "Elegant Living Space", category: "Living Room", image: "/images/living_room2.webp" },
  { id: 3, title: "Contemporary Lounge", category: "Living Room", image: "/images/living_room3.webp" },
  { id: 4, title: "Serene Bedroom", category: "Bedroom", image: "/images/bedroom.webp" },
  { id: 5, title: "Master Bedroom", category: "Bedroom", image: "/images/bedroom2.webp" },
  { id: 6, title: "Modular Kitchen", category: "Kitchen", image: "/images/kitchen.webp" },
]

export const STATS = [
  { label: "Google Rating", value: 49, display: `${GOOGLE_RATING}★`, detail: `${GOOGLE_REVIEWS} Google reviews` },
  { label: "Facebook Likes", value: 3242, display: FACEBOOK_LIKES, detail: "Established local studio" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Projects Completed", value: 200, suffix: "+" },
]

export const TESTIMONIALS = [
  {
    name: "Priya Shah",
    project: "Residential Makeover",
    rating: 5,
    quote: "Skyline Interior transformed our home into a dream space. Exceptional attention to detail!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
  },
  {
    name: "Rajesh Kumar",
    project: "Office Renovation",
    rating: 5,
    quote: "Professional team, excellent execution, and timeline management. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
  },
  {
    name: "Meera Patel",
    project: "Kitchen Design",
    rating: 5,
    quote: "Best investment in our home. The kitchen is functional and beautiful. Thank you!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
  },
  {
    name: "Vikram Singh",
    project: "Commercial Space",
    rating: 5,
    quote: "Outstanding design sense and project management. Exceeded all our expectations.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop",
  },
]

export const FAQ_ITEMS = [
  {
    question: "What is your design process?",
    answer: "We start with a detailed consultation to understand your vision, then create 3D visualizations, finalize material selections, execute the design professionally, and complete with final handover.",
  },
  {
    question: "How long do projects typically take?",
    answer: "Project timelines vary based on scope. Small renovations take 2-4 weeks, while comprehensive designs may take 2-3 months. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you offer 3D visualization?",
    answer: "Yes! We provide detailed 3D renders of your space before implementation, allowing you to visualize the final result and make adjustments.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer transparent, project-based pricing with no hidden costs. Prices depend on scope, materials, and complexity. We provide detailed quotes after consultation.",
  },
  {
    question: "Do you work within budget constraints?",
    answer: "Absolutely! We work closely with clients to maximize their budgets, offering options for premium and value-conscious choices.",
  },
  {
    question: "What areas do you serve?",
    answer: "We are based in Kudasan, Gandhinagar, and take up interior, architecture, set design, and landscape projects across nearby areas.",
  },
]

export const SOCIAL_LINKS = [
  { icon: "Globe", label: "Website", url: "https://skylineinterior.com" },
  { icon: "Mail", label: "Email", url: `mailto:${BUSINESS_EMAIL}` },
  ...(BUSINESS_WHATSAPP_NUMBER
    ? [{ icon: "MessageCircle", label: "WhatsApp", url: `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}` }]
    : []),
]

export const HERO_HEADLINES = [
  "Spaces That Feel Like Home",
  "Where Design Meets Excellence",
  "Transform Your Space Into Art",
]
