export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
