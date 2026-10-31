export type Language = 'en' | 'bn';

export type MenuCategory = 
  | 'all'
  | 'breakfast'
  | 'starters'
  | 'main-course'
  | 'seafood'
  | 'desserts'
  | 'beverages'
  | 'special-dishes';

export interface MenuItem {
  id: string;
  name: string;
  nameBn: string;
  category: MenuCategory;
  priceBDT: number;
  description: string;
  descriptionBn: string;
  ingredients: string[];
  ingredientsBn: string[];
  image: string;
  isPopular?: boolean;
  isSpecial?: boolean;
  prepTime?: string;
  calories?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface ReservationData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  area: 'main-dining' | 'garden-terrace' | 'private-vault' | 'chefs-table';
  specialRequests?: string;
  createdAt?: string;
}

export interface CheckoutData {
  id?: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  deliveryType: 'delivery' | 'pickup';
  orderNotes?: string;
  paymentMethod: 'cash_on_delivery' | 'card_on_arrival' | 'bkash_nagad_demo';
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  timestamp?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleBn: string;
  category: 'interior' | 'food' | 'chef' | 'experience';
  image: string;
  caption: string;
  captionBn: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
  category: 'reservations' | 'menu' | 'hours' | 'delivery' | 'events';
}

export interface TestimonialItem {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  rating: number;
  quote: string;
  quoteBn: string;
  dishRecommended: string;
  dishRecommendedBn: string;
  date: string;
}
