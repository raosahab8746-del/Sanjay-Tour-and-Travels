export interface TourPackage {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
