import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Star, Truck, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface HomePageProps {
  onNavigate: (page: string, productId?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    {
      id: 1,
      name: 'Ceramic Mugs',
      image: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Perfect for your morning coffee'
    },
    {
      id: 2,
      name: 'Clay Pots',
      image: 'https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsYXklMjBwb3RzfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Traditional and functional'
    },
    {
      id: 3,
      name: 'Decorative Vases',
      image: 'https://images.unsplash.com/photo-1760402327535-85a771fb034c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXMlMjBwb3R0ZXJ5fGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Elevate your home decor'
    },
    {
      id: 4,
      name: 'Handcrafted Plates',
      image: 'https://images.unsplash.com/photo-1758789891883-2058dd8d5898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwaGFuZGNyYWZ0ZWR8ZW58MXx8fHwxNzYxMjM4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Dine in style'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely love my ceramic mugs! The craftsmanship is incredible and each piece feels unique. Worth every penny.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      text: 'The vases are stunning! They add such a warm, earthy feel to my home. The quality is outstanding.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
      id: 3,
      name: 'Emma Williams',
      rating: 5,
      text: 'I appreciate the eco-friendly approach and the attention to detail. These are truly handcrafted treasures.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Made from natural, sustainable materials'
    },
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Guaranteed',
      description: 'Each piece is carefully inspected'
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Welcome to MUDZEN community! Check your email for exclusive offers.');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZG1hZGUlMjBjZXJhbWljfGVufDF8fHx8MTc2MTIzODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Handcrafted pottery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-cream mb-4">
            Crafted by Hands,
            <br />
            Rooted in Earth
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover authentic handcrafted pottery that brings warmth and artistry to your home
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('shop')}
            className="bg-terracotta hover:bg-[#CB6843]/90 text-cream px-8"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-12 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-clay-brown/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 clay-brown" />
                </div>
                <h4 className="text-dark-earth mb-2">{feature.title}</h4>
                <p className="text-dark-earth/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-dark-earth mb-4">Explore Our Collections</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each piece tells a story of tradition, skill, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate('shop')}>
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-dark-earth mb-2">{category.name}</h4>
                    <p className="text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Story */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676125105159-517d135a6cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwcG90dGVyeSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan at work"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-dark-earth mb-6">The Art of Pottery</h2>
              <p className="mb-4 text-dark-earth/80">
                At MUDZEN, we believe in preserving ancient pottery traditions while embracing contemporary design. Each piece is lovingly crafted by skilled artisans who have dedicated their lives to mastering this timeless art.
              </p>
              <p className="mb-4 text-dark-earth/80">
                Our pottery is more than just functional ware—it's a celebration of human creativity, natural materials, and sustainable practices. From the clay we source to the glazes we apply, every step honors the earth and the hands that shape it.
              </p>
              <p className="mb-6 text-dark-earth/80">
                When you choose MUDZEN, you're not just buying pottery; you're supporting artisan communities and bringing a piece of authentic craftsmanship into your home.
              </p>
              <Button
                variant="outline"
                onClick={() => onNavigate('about')}
                className="border-clay-brown text-clay-brown hover:bg-clay-brown hover:text-cream"
              >
                Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-dark-earth mb-4">What Our Customers Say</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy customers who trust MUDZEN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <p>{testimonial.name}</p>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-[#CB6843] text-[#CB6843]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-clay-brown text-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-cream mb-4">Join Our Community</h2>
            <p className="mb-8 text-cream/90">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-cream text-dark-earth placeholder:text-dark-earth/50"
                required
              />
              <Button type="submit" className="bg-terracotta hover:bg-[#CB6843]/90 whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
