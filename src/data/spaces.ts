import type { ColivingSpace } from '../types';

export const spaces: ColivingSpace[] = [
  {
    id: '1',
    name: 'The Nomad House',
    city: 'Canggu',
    country: 'Indonesia',
    price: 800,
    currency: 'month',
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    amenities: ['wifi', 'coworking', 'community'],
    description: 'A vibrant coliving space in the heart of Canggu.'
  },
  {
    id: '2',
    name: 'Digital Paradise',
    city: 'Medellin',
    country: 'Colombia',
    price: 600,
    currency: 'month',
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    amenities: ['wifi', 'coworking', 'community'],
    description: 'Modern coliving in the city of eternal spring.'
  },
  {
    id: '3',
    name: 'The Remote Villa',
    city: 'Chiang Mai',
    country: 'Thailand',
    price: 500,
    currency: 'month',
    rating: 4.7,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
    amenities: ['wifi', 'coworking', 'community'],
    description: 'Traditional meets modern in this peaceful setting.'
  }
];