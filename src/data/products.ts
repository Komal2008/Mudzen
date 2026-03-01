import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Artisan Coffee Mug',
    category: 'Ceramic Mugs',
    price: 28,
    originalPrice: 35,
    image: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Handcrafted ceramic mug with a unique glaze pattern. Each piece is one-of-a-kind, made with love by our skilled artisans. Perfect for your morning coffee or evening tea.',
    features: [
      'Handmade by skilled artisans',
      'Eco-friendly materials',
      'Microwave and dishwasher safe',
      'Capacity: 350ml',
      'Unique glaze pattern'
    ],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: 2,
    name: 'Traditional Clay Pot',
    category: 'Clay Pots',
    price: 45,
    image: 'https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsYXklMjBwb3RzfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Authentic clay pot perfect for cooking traditional dishes or as a decorative piece. Made using centuries-old techniques passed down through generations.',
    features: [
      '100% natural clay',
      'Traditional craftsmanship',
      'Excellent heat retention',
      'Perfect for slow cooking',
      'Hand-shaped and fired'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: 'Minimalist Ceramic Vase',
    category: 'Decorative Vases',
    price: 52,
    image: 'https://images.unsplash.com/photo-1760402327535-85a771fb034c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXMlMjBwb3R0ZXJ5fGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Elegant minimalist vase that complements any interior design. The smooth finish and organic shape bring a touch of serenity to your space.',
    features: [
      'Modern minimalist design',
      'Smooth matte finish',
      'Perfect for fresh or dried flowers',
      'Height: 25cm',
      'Watertight'
    ],
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: 4,
    name: 'Rustic Dinner Plate Set',
    category: 'Handcrafted Plates',
    price: 68,
    originalPrice: 85,
    image: 'https://images.unsplash.com/photo-1758789891883-2058dd8d5898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwaGFuZGNyYWZ0ZWR8ZW58MXx8fHwxNzYxMjM4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Set of 4 handcrafted dinner plates with a beautiful rustic glaze. Each plate is unique, bringing character and warmth to your dining table.',
    features: [
      'Set of 4 plates',
      'Diameter: 27cm each',
      'Food-safe glaze',
      'Dishwasher safe',
      'Rustic artisan finish'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: 5,
    name: 'Terracotta Planter',
    category: 'Clay Pots',
    price: 32,
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZG1hZGUlMjBjZXJhbWljfGVufDF8fHx8MTc2MTIzODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Beautiful terracotta planter perfect for your indoor plants. Excellent drainage and breathability for healthy plant growth.',
    features: [
      'Natural terracotta clay',
      'Drainage hole included',
      'Perfect for succulents and herbs',
      'Diameter: 15cm',
      'Handcrafted design'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 94
  },
  {
    id: 6,
    name: 'Elegant Tea Set',
    category: 'Ceramic Mugs',
    price: 95,
    image: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete tea set including teapot and 4 cups. Perfect for hosting tea ceremonies or enjoying a quiet afternoon.',
    features: [
      'Includes teapot and 4 cups',
      'Elegant design',
      'Heat-resistant',
      'Easy to clean',
      'Gift-ready packaging'
    ],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: 7,
    name: 'Decorative Bowl',
    category: 'Handcrafted Plates',
    price: 42,
    image: 'https://images.unsplash.com/photo-1758789891883-2058dd8d5898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwaGFuZGNyYWZ0ZWR8ZW58MXx8fHwxNzYxMjM4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Large decorative bowl perfect for serving salads, fruits, or as a centerpiece. Hand-painted with traditional patterns.',
    features: [
      'Hand-painted details',
      'Large capacity',
      'Food-safe finish',
      'Diameter: 30cm',
      'Unique pattern on each piece'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: 8,
    name: 'Sculptural Vase',
    category: 'Decorative Vases',
    price: 78,
    originalPrice: 98,
    image: 'https://images.unsplash.com/photo-1760402327535-85a771fb034c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXMlMjBwb3R0ZXJ5fGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Statement piece with an artistic sculptural form. This vase is a work of art that transforms any space.',
    features: [
      'Artistic sculptural design',
      'Museum-quality craftsmanship',
      'Signed by the artisan',
      'Height: 35cm',
      'Limited edition'
    ],
    inStock: true,
    rating: 5.0,
    reviews: 45
  },
];
