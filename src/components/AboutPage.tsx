import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Handcrafted with Love',
      description: 'Every piece is crafted by skilled artisans who pour their heart and soul into their work.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We support local artisan communities and ensure fair wages and working conditions.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Committed to sustainable practices and using natural, environmentally friendly materials.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: 'Each piece is carefully inspected to meet our high standards of craftsmanship.'
    },
  ];

  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Master Potter',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      bio: '25 years of experience in traditional pottery techniques'
    },
    {
      name: 'James Chen',
      role: 'Ceramic Artist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      bio: 'Specializes in contemporary ceramic design and glazing'
    },
    {
      name: 'Aisha Patel',
      role: 'Lead Artisan',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aisha',
      bio: 'Expert in decorative pottery and hand-painting'
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1676125105159-517d135a6cc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGF5JTIwcG90dGVyeSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-cream mb-4">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Crafting pottery with passion, tradition, and a commitment to excellence
          </p>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-dark-earth mb-6">The Heart of MUDZEN</h2>
              <p className="mb-4 text-muted-foreground">
                Founded in 2010, MUDZEN was born from a simple belief: that handcrafted pottery has the power to transform everyday moments into meaningful experiences. Our journey began in a small workshop with just three artisans who shared a passion for preserving traditional pottery techniques while embracing modern design sensibilities.
              </p>
              <p className="mb-4 text-muted-foreground">
                Today, we work with a community of over 50 skilled artisans, each bringing their unique expertise and artistic vision to every piece they create. We source our clay from sustainable suppliers and use eco-friendly glazes, ensuring that our commitment to the earth is as strong as our commitment to craftsmanship.
              </p>
              <p className="text-muted-foreground">
                Every item in our collection tells a story—of hands that shaped it, of traditions passed down through generations, and of a dedication to creating pieces that will be cherished for years to come.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695740633675-d060b607f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwaGFuZG1hZGUlMjBjZXJhbWljfGVufDF8fHx8MTc2MTIzODQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pottery workshop"
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-dark-earth mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at MUDZEN
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8 clay-brown" />
                      </div>
                      <h4 className="text-dark-earth mb-3">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-dark-earth mb-4">Meet Our Artisans</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The talented hands behind every MUDZEN piece
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-dark-earth mb-1">{member.name}</h4>
                      <p className="text-sm text-clay-brown mb-3">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-clay-brown text-cream">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-cream mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the beauty of handcrafted pottery and support artisan communities worldwide. Every purchase makes a difference.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
