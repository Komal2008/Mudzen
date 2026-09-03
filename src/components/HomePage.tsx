import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Star, Truck, ShieldCheck, Leaf, ArrowRight, Sprout, Hand, Flame, House } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { toast } from 'sonner';
import logoImage from './logo/image.png';

interface HomePageProps {
  onNavigate: (page: string, productId?: string | number) => void;
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
      name: 'Priya Mehta',
      rating: 5,
      text: 'My ceramic mugs are beautiful and feel wonderfully personal. Perfect beside my morning chai.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya'
    },
    {
      id: 2,
      name: 'Aarav Sharma',
      rating: 5,
      text: 'The vase brings such a warm, earthy feeling to our home. The packaging was thoughtful too.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav'
    },
    {
      id: 3,
      name: 'Ananya Desai',
      rating: 5,
      text: "The little variations make every plate feel special. You can truly see the artisan's care.",
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya'
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
      description: 'On orders over ₹999'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Guaranteed',
      description: 'Each piece is carefully inspected'
    },
  ];

  const storyStages = [
    { number: '01', title: 'Earth', description: 'Where every piece begins.', detail: 'From the earth comes the clay.', icon: Sprout },
    { number: '02', title: 'Hands', description: 'Shaped slowly with care.', detail: 'Every movement carries generations.', icon: Hand },
    { number: '03', title: 'Fire', description: 'Strengthened through patience.', detail: 'Heat transforms humble clay into something lasting.', icon: Flame },
    { number: '04', title: 'Home', description: 'Made for your everyday story.', detail: 'For chai, meals, and celebrations.', icon: House },
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
      <section id="collections" className="py-20">
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
                <Card className="overflow-hidden group cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all" onClick={() => onNavigate('shop', category.id)}>
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
      <section className="bg-cream py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="story-layout mx-auto max-w-[1200px] items-start gap-10 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="story-image"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1676125105159-517d135a6cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwcG90dGVyeSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Artisan at work"
                className="h-full w-full object-cover shadow-[0_16px_38px_-22px_rgba(62,46,38,0.6)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="story-content py-1"
            >
              <div className="story-header mb-6 text-center">
                <img src={logoImage} alt="MUDZEN logo" className="story-logo mx-auto mb-3 object-contain" />
                
                <h2 className="story-heading text-dark-earth mb-4">The Story Behind Every Piece</h2>
      
                <p className="mb-6 max-w-xl text-lg italic leading-7 text-dark-earth/70">
                Before it reaches your home, every piece begins with earth, hands, patience, and a story.
                </p>
              </div>
              <div>
                <p className="mb-4 max-w-xl leading-7 text-dark-earth/80">
                  Long before a cup sits beside your morning chai, before a vase finds its place beside your window, before a plate becomes part of a family meal, there is a quiet moment in an artisan's hands.
                </p>
                <p className="max-w-xl leading-7 text-dark-earth/80">
                  The journey begins with clay. Collected from the earth and shaped slowly by hand, it carries generations of knowledge. An artisan's hands press, turn, smooth and shape it, never rushing the process.
                </p>
              </div>
              <div className="my-8 sm:my-9">
                <div className="grid gap-3 sm:grid-cols-2">
                  {storyStages.map((stage, index) => {
                    const Icon = stage.icon;
                    return (
                      <motion.div
                        key={stage.number}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.45 }}
                        className="relative flex min-h-[112px] items-start gap-3 rounded-[14px] border border-clay-brown/15 bg-white/50 p-4 transition-colors hover:border-terracotta/40"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-terracotta/40 bg-cream text-terracotta">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="mb-1 flex items-center gap-2">
                            <span className="text-xs font-semibold tracking-[0.16em] text-terracotta">{stage.number}</span>
                            <h3 className="text-base font-semibold capitalize text-dark-earth">{stage.title}</h3>
                          </div>
                          <p className="text-sm leading-5 text-dark-earth/70">{stage.description}</p>
                          <p className="mt-1 text-xs leading-4 text-dark-earth/50">{stage.detail}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              <div>
                
                <p className="mb-3 border-l-2 border-terracotta bg-[#F7EDE3] px-4 py-3 font-serif text-base italic leading-6 text-dark-earth/85">
                  <b>Every piece carries a little bit of the hands, the earth, and the time that shaped it.</b>
                </p>
                <p className="mb-5 max-w-xl leading-7 text-dark-earth/80">
                  When you choose MUDZEN, you're not simply bringing something beautiful home. You're bringing home a story.
                </p>


                <div>
                <Button
                  variant="outline"
                  onClick={() => onNavigate('about')}
                  className="border-clay-brown text-clay-brown hover:bg-clay-brown hover:text-cream"
                >
                  Meet the Makers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </div>
              </div>
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
