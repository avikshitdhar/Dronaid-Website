import { DroneProject } from "../types";
const base = import.meta.env.BASE_URL;

export const droneProjects: DroneProject[] = [
  {
    name: "Vayu",
    description:
      "Our first fixed-wing UAV designed for payload dropping missions. Features a lightweight frame and advanced aerodynamics for optimal performance.",
    specs: ["Top Speed: 60 kmph", "Weight: 9000g", "Payload Capacity: 3000g", "WingSpan: 2.3m"],
    image: `${base}drones/vayu.jpg`,
  },
  {
    name: "Akira",
    description:
      "Long range HexaCopter equipped with a cold storage payload mechanism engineered for delivering medical aid between hospitals.",
    specs: ["Flight Time: 30 minutes", "Payload Capacity: ","Cold Storage Unit: Can store Supplies at 0c upto 10 minutes", "Range: 15km"],
    image: `${base}drones/akira.jpg`,
  },
  {
    name: "Murphy",
    description:
      "Autonomous mapping drone equipped with LiDAR and photogrammetry capabilities. Ideal for agricultural analysis and topographic surveying with centimeter-level accuracy.",
    specs: [
      "LiDAR Accuracy: 2cm",
      "Coverage: 200 acres/hour",
      "Autonomous: Yes",
    ],
    image: `${base}drones/murphy.jpg`,
  },
  {
    name: "Murphy Mark VI.",
    description:
      "Ultra-compact indoor navigation drone. Perfect for confined space inspection and educational demonstrations. Features obstacle avoidance and precision hover capabilities.",
    specs: ["Weight: 89g", "Indoor Flight: Yes", "Obstacle Avoidance: Active"],
    image: `${base}drones/murphy-vi.jpg`,
  },
];
