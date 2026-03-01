import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Minus, Plus, ShoppingCart, Heart, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/products';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface ProductDetailPageProps {
  productId: number;
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetailPage({ productId, onNavigate, onAddToCart }: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-dark-earth mb-4">Product not found</h2>
        <Button onClick={() => onNavigate('shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    onAddToCart(product, quantity);
    onNavigate('cart');
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <button onClick={() => onNavigate('home')} className="hover:text-clay-brown">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('shop')} className="hover:text-clay-brown">
          Shop
        </button>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative rounded-lg overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
            {product.isNew && (
              <Badge className="absolute top-4 right-4 bg-terracotta">
                New Arrival
              </Badge>
            )}
            {product.originalPrice && (
              <Badge className="absolute top-4 left-4 bg-clay-brown">
                Sale
              </Badge>
            )}
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          <h1 className="text-dark-earth mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-[#CB6843] text-[#CB6843]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="clay-brown">${product.price}</span>
            {product.originalPrice && (
              <>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
                <Badge variant="outline" className="border-terracotta text-terracotta">
                  Save ${product.originalPrice - product.price}
                </Badge>
              </>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <Button
              className="flex-1 bg-clay-brown hover:bg-[#A46B47]/90"
              size="lg"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
            <Button
              className="flex-1 bg-terracotta hover:bg-[#CB6843]/90"
              size="lg"
              onClick={handleBuyNow}
              disabled={!product.inStock}
            >
              Buy Now
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0"
              onClick={() => {
                setIsFavorite(!isFavorite);
                toast.success(isFavorite ? 'Removed from wishlist' : 'Added to wishlist');
              }}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
          </div>

          {/* Delivery Info */}
          <Card className="bg-cream">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 clay-brown shrink-0 mt-0.5" />
                <div>
                  <p>Free Shipping on orders over $50</p>
                  <p className="text-sm text-muted-foreground">
                    Standard delivery in 5-7 business days
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 clay-brown shrink-0 mt-0.5" />
                <div>
                  <p>30-Day Returns</p>
                  <p className="text-sm text-muted-foreground">
                    Free returns within 30 days of purchase
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 clay-brown shrink-0 mt-0.5" />
                <div>
                  <p>Quality Guarantee</p>
                  <p className="text-sm text-muted-foreground">
                    Each piece is carefully inspected
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Product Details Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="care">Care Guide</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-dark-earth mb-4">Product Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-dark-earth mb-4">Shipping Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2">Standard Shipping (Free over $50)</h4>
                    <p className="text-muted-foreground">
                      Delivery in 5-7 business days. Orders are processed within 1-2 business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">Express Shipping ($15)</h4>
                    <p className="text-muted-foreground">
                      Delivery in 2-3 business days. Available for select regions.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-2">International Shipping</h4>
                    <p className="text-muted-foreground">
                      We ship worldwide. Delivery times vary by location (7-14 business days).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="care" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-dark-earth mb-4">Care Instructions</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    To ensure your handcrafted pottery lasts for years to come, please follow these care instructions:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>Most pieces are dishwasher safe, but hand washing is recommended to preserve the finish</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>Avoid sudden temperature changes to prevent cracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>Do not use abrasive cleaners or scouring pads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>Store carefully to avoid chipping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="clay-brown mt-1">•</span>
                      <span>Some natural variation in color and texture is normal and adds to the unique character</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-dark-earth mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <Card
                key={relatedProduct.id}
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onNavigate('product', relatedProduct.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-dark-earth mb-2">{relatedProduct.name}</h4>
                  <p className="clay-brown">${relatedProduct.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
