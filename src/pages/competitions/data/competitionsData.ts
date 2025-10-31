import { Competition } from "../types";

export const competitions: Competition[] = [
  {
    name: "Quark Search and Rescue",
    date: "February 2025",
    location: "Goa, India",
    description:
      "Quark is the annual techno-management fest of the college, BITS Pilani KK Birla Goa Campus. It has a variety of events, workshops, guest lectures and more. Our team competed with the Murphy and placed 3rd.",
    achievements: [
      "Second Runners Up",
    ],
    mediaCount: { images: 8, videos: 3 },
  },
  {
    name: "UAS Challenge 2024",
    date: "November 2023",
    location: "London, England",
    description:
      "A prestigious competition focusing on autonomous navigation and AI-powered decision making. Our Phoenix Surveillance drone demonstrated advanced obstacle avoidance and autonomous path planning in complex environments.",
    achievements: [
      "1st Place - Autonomous Navigation",
      "Innovation in AI Award",
      "Audience Choice Award",
    ],
    mediaCount: { images: 12, videos: 5 },
  },
  {
    name: "Collegiate Drone Engineering Challenge 2023",
    date: "September 2023",
    location: "Boston, Massachusetts",
    description:
      "An engineering-focused competition where teams design and build drones for specific mission profiles. We presented our Eagle Scout mapping drone with advanced LiDAR capabilities and precision surveying features.",
    achievements: [
      "2nd Place - Overall Competition",
      "Best Technical Documentation",
      "Outstanding Presentation Award",
    ],
    mediaCount: { images: 10, videos: 2 },
  },
  {
    name: "Regional Micro Drone Competition 2023",
    date: "May 2023",
    location: "Seattle, Washington",
    description:
      "A competition focused on ultra-compact drones for indoor navigation and precision maneuvers. Our Sparrow Micro drone excelled in tight spaces and demonstrated exceptional stability and control.",
    achievements: [
      "1st Place - Indoor Navigation",
      "3rd Place - Overall Rankings",
    ],
    mediaCount: { images: 6, videos: 4 },
  },
];
