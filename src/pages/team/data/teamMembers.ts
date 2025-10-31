import { TeamMember } from "../types";

const base = import.meta.env.BASE_URL;

export const teamMembers: TeamMember[] = [
    // Executive Board
    {
    name: "Tushar Bhat",
    designation: "Technical Head",
    department: "Executive Board",
    image: `${base}members/tushar.jpg`,
    linkedin: "http://www.linkedin.com/in/tusharbhat2005",
    github: "https://github.com",
    email: "tusharbhat2005@gmail.com",
    },
    {
    name: "Aarya Singh",
    designation: "Team Manager",
    department: "Executive Board",
    image: `${base}members/aarya.jpg`,
    linkedin: "https://linkedin.com/in/aaryasingh",
    email: "aarya@example.com",
    },

    // Board
    {
      name: "Varun",
      designation: "Electronics Head",
      department: "Board",
      image: `${base}members/varun.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
    {
      name: "Parag Gupta",
      designation: "AI Head",
      department: "Board",
      image: `${base}members/parag.jpg`,
      linkedin: "https://www.linkedin.com/in/parag-gupta-0b79b5290/",
      email: "guptaparag2701@gmail.com",
    },
    {
      name: "Shashank Devadiga",
      designation: "DFM Head",
      department: "Board",
      image: `${base}members/shashank.jpg`,
      linkedin: "https://linkedin.com/in/shashankdevadiga",
      email: "shashank@example.com",
    },
    {
      name: "Tanishq Sharma",
      designation: "Software Head",
      department: "Board",
      image: `${base}members/tanishq.jpg`,
      linkedin: "https://linkedin.com/in/shashankdevadiga",
      email: "shashank@example.com",
    },
    {
      name: "Himanjali Ganapa",
      designation: "Research Head",
      department: "Board",
      image: `${base}members/himanjali.jpg`,
      linkedin: "https://www.linkedin.com/in/himanjali-ganapa-9286432a9/",
      email: "shashank@example.com",
    },

    //Electronics
    {
      name: "Aditi Nair",
      designation: "Team Member",
      department: "Electronics",
      image: `${base}members/aditi.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
    {
      name: "Kevin Siby",
      designation: "Team Member",
      department: "Electronics",
      image: `${base}members/kevin.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },

    //AI & Automation
    {
      name: "Urja Srivastava",
      designation: "Team Member",
      department: "AI & Automation",
      image: `${base}members/urja.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
    {
      name: "Javvaji Aditya Banasri",
      designation: "Team Member",
      department: "AI & Automation",
      image: `${base}members/aditya.jpg`,
      linkedin: "www.linkedin.com/in/adityabanasri",
      github: "https://github.com/Banasri007",
      email: "varun@example.com",
    },

    //DFM
    {
      name: "Laksh Sashis",
      designation: "Team Member",
      department: "DFM",
      image: `${base}members/laksh.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
    {
      name: "Hursh Ramachandran Pai",
      designation: "Team Member",
      department: "DFM",
      image: `${base}members/hursh.jpg`,
      linkedin: "http://www.linkedin.com/in/hurshpai",
      email: "varun@example.com",
    },

    //Software
    {
      name: "Avikshit Dhar",
      designation: "Team Member",
      department: "Software",
      image: `${base}members/avikshit.jpg`,
      linkedin: "https://www.linkedin.com/in/avikshitdhar/",
      github: "https://github.com/avikshitdhar",
      email: "avikshitdhar75@gmail.com",
    },

    //management
    {
      name: "Medha J",
      designation: "Team Member",
      department: "Management",
      image: `${base}members/medha.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
    {
      name: "Devika",
      designation: "Team Member",
      department: "Management",
      image: `${base}members/medha.jpg`,
      linkedin: "https://linkedin.com/in/varun",
      email: "varun@example.com",
    },
];
