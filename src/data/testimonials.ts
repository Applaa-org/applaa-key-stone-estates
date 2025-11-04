export type Testimonial = {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Tom Wilson',
    location: 'Sold in Chelsea',
    quote: 'Key Stone Estates were exceptional from start to finish. Their market knowledge and professionalism secured us a fantastic price for our home. We couldn\'t be happier with the service.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Let in Canary Wharf',
    quote: 'The letting process was seamless and efficient. The team found me the perfect tenant in under a week. Highly professional and communicative throughout. I would definitely recommend them.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    rating: 5,
  },
  {
    id: 3,
    name: 'The Peterson Family',
    location: 'Bought in Richmond',
    quote: 'As first-time buyers, we were nervous, but the team at Key Stone guided us through every step with patience and expertise. They made our dream of owning a family home a reality.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    rating: 5,
  },
  {
    id: 4,
    name: 'Emily Carter',
    location: 'Rented in Shoreditch',
    quote: 'Fantastic agency! They listened to my requirements and found me a brilliant flat in the perfect location. The whole process was quick, easy, and stress-free.',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
    rating: 4,
  },
];