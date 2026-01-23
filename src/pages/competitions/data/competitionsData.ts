import { Competition } from "../types";
const base = import.meta.env.BASE_URL;


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
    media: {
      images: [
        `${base}competitions/25/quarks2.jpg`,
        `${base}competitions/25/quarks1.jpg`,
      ],
    },
  },
  {
    name: "UAS Challenge 2024",
    date: "July 2024",
    location: "London, England",
    description:
      "The UAS Challenge is an international student competition that tasks teams with designing, building, and operating an autonomous unmanned aircraft to complete complex real-world missions.",
    achievements: [
      "1st Place - Design Implementation",
      "3rd in Asia",
      "5th in Business Case",
      "22nd Globally",
    ],
    media: {
      images: [
        `${base}competitions/24/UAS1.jpg`,
        `${base}competitions/24/UAS2.png`,
      ],
    },
  },
  {
    name: "Vayurvya RotorCraft Multirotor Competition",
    date: "April 2024",
    location: "Udupi, India",
    description:
      "Update Needed",
    achievements: [
      "2nd Place - Overall Competition",
    ],
    media: {
      images: [
        `${base}competitions/24/Vayu1.jpg`,
        `${base}competitions/24/Vayu2.jpg`,
      ],
    },
  },
  {
    name: "Startup Expo - UDGAM 2024",
    date: "January 2024",
    location: "Guwahati, India",
    description:
      "The UDGAM Startup Expo is a premier event and a central part of UDGAM, the annual and largest entrepreneurship summit of IIT Guwahati's Entrepreneurial Development Cell (E-Cell).",
    achievements: [
      "1st Runners Up",
    ],
    media: {
      images: [
        `${base}competitions/24/UDG2.jpg`,
        `${base}competitions/24/UDG1.jpg`,
      ],
    },
  },
  {
    name: "Mangaluru Blue 2023",
    date: "November 2023",
    location: "Mangaluru, India",
    description:
      "an annual pitching program organized by the Karnataka Digital Economy Mission (KDEM) to connect startups in the Mangaluru region with investors.",
    achievements: [
      "Placed in the top 15",
    ],
    media: {
      images: [
        `${base}competitions/23/blue1.jpg`,
        `${base}competitions/23/blue2.jpg`,
      ],
    },
  },
  {
    name: "Elicit Expo 2023",
    date: "October 2023",
    location: "Jaipur, India",
    description:
      "The Elicit Expo is a prominent project exhibition event held as a core part of Elicit, the annual technical and cultural fest of Manipal University Jaipur (MUJ), organized by the MUJ ACM Student Chapter. It serves as a platform for students to showcase their innovative and completed projects, often in fields like embedded systems, AI, and other technologies.",
    achievements: [
      "First Runners Up",
    ],
    media: {
      images: [
        `${base}competitions/23/elicit2.jpg`,
        `${base}competitions/23/elicit1.jpg`,
      ],
    },
  },
  {
    name: "UAS Challenge 2023",
    date: "October 2023",
    location: "London, UK",
    description:
      "The UAS Challenge is an international student competition that tasks teams with designing, building, and operating an autonomous unmanned aircraft to complete complex real-world missions.",
    achievements: [
      "3rd in Asia",
      "24th Globally",
      "16th in flight readiness",
      "19th in flight demo",
      "20th in the X plane model",
    ],
    media: {
      images: [
        `${base}competitions/23/UAS1.jpg`,
        `${base}competitions/23/UAS2.jpg`,
      ],
    },
  },
  {
    name: "TechnoXian WRC 22",
    date: "August 2022",
    location: "Delhi, India",
    description:
      "The challenge has been designed to build drones and encourage participants for creativity, teamwork, critical thinking, and enjoyment.The challenge is to build a drone within the specified dimensions that are aerodynamically stable to achieve a successful flight.",
    achievements: [
      "2nd overall",
    ],
    media: {
      images: [
        `${base}competitions/22/techno2.jpg`,
        `${base}competitions/22/techno1.jpg`,
      ],
    },
  },
];
