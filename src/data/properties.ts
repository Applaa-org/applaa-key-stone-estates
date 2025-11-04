export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  shortDescription: string;
  longDescription: string;
  images: string[];
  amenities: string[];
  isFeatured: boolean;
};

export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury 4-Bedroom Detached House',
    price: 750000,
    location: 'Chelsea, London',
    type: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    shortDescription: 'A stunning family home with a private garden in the heart of Chelsea.',
    longDescription: 'This beautifully presented four-bedroom detached house offers spacious living accommodation, a modern kitchen, three luxury bathrooms, and a private landscaped garden. Located on a quiet residential street, it is just moments away from the vibrant King\'s Road and local amenities. The property benefits from off-street parking and excellent transport links.',
    images: [
      'https://picsum.photos/seed/prop1-1/1200/800',
      'https://picsum.photos/seed/prop1-2/1200/800',
      'https://picsum.photos/seed/prop1-3/1200/800',
      'https://picsum.photos/seed/prop1-4/1200/800',
    ],
    amenities: ['Private Garden', 'Off-street Parking', 'Modern Kitchen', 'En-suite Master Bedroom'],
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Modern 2-Bedroom Apartment',
    price: 2500,
    location: 'Canary Wharf, London',
    type: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    shortDescription: 'Sleek apartment with stunning city views and resident amenities.',
    longDescription: 'A contemporary two-bedroom, two-bathroom apartment on the 25th floor of a prestigious development in Canary Wharf. The property boasts floor-to-ceiling windows, a private balcony with breathtaking views, and high-end finishes. Residents have access to a 24-hour concierge, gym, and swimming pool.',
    images: [
      'https://picsum.photos/seed/prop2-1/1200/800',
      'https://picsum.photos/seed/prop2-2/1200/800',
      'https://picsum.photos/seed/prop2-3/1200/800',
    ],
    amenities: ['24h Concierge', 'Gym & Pool Access', 'Private Balcony', 'City Views'],
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Charming 3-Bedroom Cottage',
    price: 480000,
    location: 'The Cotswolds, Oxfordshire',
    type: 'sale',
    bedrooms: 3,
    bathrooms: 1,
    area: 1500,
    shortDescription: 'A picturesque cottage blending traditional charm with modern comforts.',
    longDescription: 'Nestled in a quintessential Cotswolds village, this charming cottage features exposed beams, an inglenook fireplace, and a delightful country garden. The property has been sympathetically updated to include a modern kitchen and bathroom while retaining its period character. Perfect as a primary residence or a weekend retreat.',
    images: [
      'https://picsum.photos/seed/prop3-1/1200/800',
      'https://picsum.photos/seed/prop3-2/1200/800',
    ],
    amenities: ['Country Garden', 'Period Features', 'Inglenook Fireplace', 'Village Location'],
    isFeatured: false,
  },
  {
    id: '4',
    title: 'Stylish 1-Bedroom Flat',
    price: 1800,
    location: 'Shoreditch, London',
    type: 'rent',
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    shortDescription: 'A trendy and well-located flat in the heart of vibrant Shoreditch.',
    longDescription: 'This stylish one-bedroom flat is perfect for a young professional. It features an open-plan living area, a fully equipped kitchen, and a modern bathroom. Located just a short walk from Old Street station and the eclectic mix of bars, restaurants, and boutiques that Shoreditch has to offer.',
    images: [
      'https://picsum.photos/seed/prop4-1/1200/800',
      'https://picsum.photos/seed/prop4-2/1200/800',
    ],
    amenities: ['Open-plan Living', 'Excellent Location', 'Modern Appliances', 'Close to Transport'],
    isFeatured: true,
  },
  {
    id: '5',
    title: 'Grand Victorian Terrace',
    price: 1200000,
    location: 'Richmond, London',
    type: 'sale',
    bedrooms: 5,
    bathrooms: 4,
    area: 3000,
    shortDescription: 'An elegant and spacious family home near Richmond Park.',
    longDescription: 'A substantial five-bedroom Victorian terraced house retaining many original features, including high ceilings, ornate cornicing, and feature fireplaces. The property offers generous living space over four floors, a large kitchen-diner opening onto a south-facing garden, and is located within a sought-after school catchment area.',
    images: [
      'https://picsum.photos/seed/prop5-1/1200/800',
      'https://picsum.photos/seed/prop5-2/1200/800',
      'https://picsum.photos/seed/prop5-3/1200/800',
    ],
    amenities: ['South-facing Garden', 'Victorian Features', 'Sought-after Location', 'Spacious Rooms'],
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Penthouse with Rooftop Terrace',
    price: 5500,
    location: 'South Bank, London',
    type: 'rent',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    shortDescription: 'Exceptional penthouse with panoramic views of the London skyline.',
    longDescription: 'This spectacular three-bedroom penthouse offers the ultimate in luxury living. Featuring a vast open-plan reception room, a state-of-the-art kitchen, and three en-suite bedrooms. The highlight is the private rooftop terrace, providing an incredible space for entertaining with 360-degree views of the city.',
    images: [
      'https://picsum.photos/seed/prop6-1/1200/800',
      'https://picsum.photos/seed/prop6-2/1200/800',
      'https://picsum.photos/seed/prop6-3/1200/800',
    ],
    amenities: ['Rooftop Terrace', 'Panoramic Views', 'Luxury Finishes', 'Underfloor Heating'],
    isFeatured: true,
  },
];