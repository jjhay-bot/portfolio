export interface ProjectItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  tags?: string[];
}

export const PROJECTS: ProjectItem[] = [
  {
    icon: "🌎",
    title: "NearMe",
    description: "Discover nearby products and local merchants for faster, same-day purchases.",
    link: "https://nearme.cofeeui.com/",
    tags: ["marketplace", "mobile-first"],
  },
  {
    icon: "🧁",
    title: "BakeBoard",
    description: "Orders, payments and production for home bakers.",
    link: "https://bakeboard.cofeeui.com/",
    tags: ["saas", "operations"],
  },
  {
    icon: "🏨",
    title: "BedderDeals",
    description: "A modern hotel discovery and booking concept.",
    link: "https://bedderdeals.cofeeui.com/",
  },
  // {
  //   icon: "🛍️",
  //   title: "Bookas",
  //   description: "Appointment and schedule management for service businesses.",
  //   link: "https://bookas.cofeeui.com/",
  //   tags: ["booking", "Dashboard"],
  // },
  {
    icon: "📚"
    title: "Learn",
    description: "Bite-sized software architecture and backend lessons.",
    link: "https://learn.cofeeui.com/",
  },
  {
    icon: "☕",
    title: "Coffee Break",
    description: "Short development reads made for quick breaks.",
    link: "https://coffee-break-reads.cofeeui.com/",
  },
  {
    icon: "💳",
    title: "eService",
    description: "Fees and service information for digital payments.",
    link: "https://eservice.cofeeui.com/",
  },
  {
    icon: "💍",
    title: "Weds",
    description: "Wedding inspirations organized into one vision board.",
    link: "https://weds.cofeeui.com/",
  },
];
