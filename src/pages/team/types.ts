export interface TeamMember {
  name: string;
  designation: string;
  department: string;
  image?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface Alumni {
  name: string;
  designation: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface AlumniByYear {
  [year: string]: Alumni[];
}
