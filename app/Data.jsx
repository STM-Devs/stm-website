import {
  BarChart3,
  Briefcase,
  Building2,
  Layers3,
  Search,
  Sparkles,
  SplinePointer,
  TentTree,
  Users,
} from "lucide-react";

export const cx = (...classes) => classes.filter(Boolean).join(" ");

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const siteData = {
  nav: [
    {
      label: "About Us",
      children: [
        { label: "Who We Are", href: "/about-us#who-we-are" },
        { label: "Mission and Purpose", href: "/about-us#mission-and-purpose" },
        { label: "Core Values", href: "/about-us#core-values" },
      ],
    },
    { label: "People And Culture", href: "/people-and-culture" },
    {
      label: "Services",
      children: [
        { label: "SEO Strategy", href: "/services#seo" },
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "On The Ground Marketing", href: "/services#on-the-ground-marketing" },
        { label: "CRM & Retention", href: "/services#crm" },
        { label: "Graphic Design", href: "/services#graphic-design" },
        { label: "Analytics & CRO", href: "/services#analytics" },
      ],
    },
    { label: "Careers" },
  ],
  services: [
    {
      icon: Search,
      title: "SEO Strategy",
      body: "We specialize in link building, keyword research, technical SEO, landing page optimization, and on-page/off-page SEO to help your website rank higher and attract the right audience.",
      link: "/services#seo",
    },
    {
      icon: Users,
      title: "CRM & Retention",
      body: "We design lifecycle journeys, segmentation strategies, and retention frameworks to drive increased customer retention and value.",
      link: "/services#crm",
    }, {
      icon: Sparkles,
      title: "Digital Marketing",
      body: "We create campaigns across all major digital platforms and content systems focused on driving conversions.",
      link: "/services#digital-marketing",
    },
    {
      icon: TentTree,
      title: "On the Ground Marketing",
      body: "We design and manage out-of-home campaigns that boost brand visibility in high-traffic locations and deliver measurable results.",
      link: "/services#on-the-ground-marketing",
    },
    {
      icon: BarChart3,
      title: "Analytics & CRO",
      body: "We provide measurement, attribution, experimentation, and conversion insights to drive improved performance.",
      link: "/services#analytics",
    },
    {
      icon: SplinePointer,
      title: "Graphic Design",
      body: "We develop brand identity, campaign creatives, and presentation designs to enhance your visual presence.",
      link: "/services#graphic-design",
    },
  ],
  industries: [
    {
      icon: Building2,
      title: "Corporate & Professional",
      body: "Clear positioning and measurable pipeline growth for service-led brands.",
    },
    {
      icon: Briefcase,
      title: "Consumer & Lifestyle",
      body: "Acquisition, creative testing, and lifecycle marketing that improve revenue efficiency.",
    },
    {
      icon: Layers3,
      title: "Tech & Digital",
      body: "Go-to-market systems that balance brand clarity with performance execution.",
    },
  ],
  process: [
    {
      number: "01",
      title: "Discover",
      body: "Review the market, sales funnel, channels, and look for areas where there are opportunities.",
    },
    {
      number: "02",
      title: "Plan",
      body: "Create a clear plan that connects your key metrics and business goals.",
    },
    {
      number: "03",
      title: "Execute",
      body: "Start your campaigns, share content, run tests, and set up ways to track results.",
    },
    {
      number: "04",
      title: "Scale",
      body: "Focus on what works best and keep improving your approach.",
    },
  ],
  culture: ["Hybrid collaboration", "Growth-focused culture", "High-impact client work"],
};
