export interface Competition {
  name: string;
  date: string;
  location: string;
  description: string;
  achievements: string[];
  mediaCount: { images: number; videos: number };
  media?: {
    images?: string[];
    videos?: string[];
  };
}
