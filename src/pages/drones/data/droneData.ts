import { DroneProject } from "../types";
const base = import.meta.env.BASE_URL;

export const droneProjects: DroneProject[] = [
  {
    name: "Atlas",
    description:
      "Atlas is a backup drone developed by the team for testing purposes. This quadcopter offers greater stability compared to smaller quadcopters commonly available in the market.",
    specs: ["Flight time: 35 Minutes","Wingspan: 1.35 Metres","Mtow: 6000 Grams","Range: 10 Kilometers"],
    image: `${base}drones/atlas.jpeg`,
  },
  {
    name: "Icarus",
    description:
      "Icarus is one of the first drones to be completely designed, fabricated, and manufactured by our team. It was developed entirely in our workshop by the team members and is a hexacopter intended for scouting applications.",
    specs: ["Flight Time: 28 Minutes", "WingSpan: 2.3 Metres", "Mtow: 9000 Grams", "Range: 18 Kilometers"],
    image: `${base}drones/Icarus.jpeg`,
  },
  {
    name: "Phoenix",
    description:
      "Phoenix is another drone developed entirely by the team alongside Icarus. It is also a hexacopter, designed for payload delivery, and features an innovative payload deployment mechanism.",
    specs: ["Flight Time: 30 Minutes", "WingSpan: 2.3 Metres", "Mtow: 9000 Grams", "Range: 18 Kilometers"],
    image: `${base}drones/phoenix.jpeg`,
  },
  {
    name: "Vayu",
    description:
      "Our first fixed-wing UAV designed for payload dropping missions. Features a lightweight frame and advanced aerodynamics for optimal performance.",
    specs: ["Flight Time: 20 Minutes", "WingSpan: 2.3 Metres", "Payload Capacity: 3000 Grams", "Range: 16 Kilometers"],
    image: `${base}drones/vayu.jpg`,
  },
  {
    name: "4+1 VTOL Keish",
    description:
      "Our first VTOL prepared for UAS 23. It was designed take off, hover, and land vertically like a helicopter, but fly horizontally like a fixed-wing plane.",
    specs: ["Flight Time: 15 Minutes", "WingSpan: 2.2 Metres", "Payload Capacity: 3000 Grams",  "Range: 15 Kilometers"],
    image: `${base}drones/keish.jpg`,
  },
  {
    name: "Akira",
    description:
      "Long range HexaCopter equipped with a cold storage payload mechanism engineered for delivering medical aid between hospitals.",
    specs: ["Flight Time: 30 Minutes", "Payload Capacity: 3000 Grams ","Cold Storage: 0c for 10m", "Range: 15 Kilometers"],
    image: `${base}drones/akira.jpg`,
  },
  {
    name: "Murphy Mark IV.",
    description:
      "A Quadcopter, one of the first few drones we built as a student project, it is used for testing of AI and Automation",
    specs: [
      "Flight Time: 15 Minutes",
      "Wingspan: 760 MilliMetres",
      "Payload Capacity: 500 Grams",
      "Range: 9 Kilometers",
    ],
    image: `${base}drones/murphy.jpg`,
  },
  {
    name: "Murphy Mark VI.",
    description:
      " A hexacopter used for testing of AI and automation, more powerful and more stable compared to Murphy Mark IV.",
    specs: ["Flight Time: 15 Minutes", "Wingspan: 1.6 Metres", "Payload Capacity: 6000 Grams", "Range: 14 Kilometers"],
    image: `${base}drones/murphy-vi.jpg`,
  },
];
