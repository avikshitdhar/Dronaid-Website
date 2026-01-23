export interface Competition {
  name: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  media?: {
    images?: string[];
  };
}
