import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/products';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface ShopPageProps {
  onNavigate: (page: string, productId?: number) => void;
  onAddToCart: (product: Product) => void;
}

export function ShopPage({ onNavigate, onAddToCart }: ShopPageProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showNewOnly, setShowNewOnly] = useState(false);

  const categories = ['Ceramic Mugs', 'Clay Pots', 'Decorative Vases', 'Handcrafted Plates'];

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }

    // Price filter
    if (priceRange === 'under-30' && product.price >= 30) return false;
    if (priceRange === '30-50' && (product.price < 30 || product.price > 50)) return false;
    if (priceRange === '50-75' && (product.price < 50 || product.price > 75)) return false;
    if (priceRange === 'over-75' && product.price <= 75) return false;

    // New arrivals filter
    if (showNewOnly && !product.isNew) return false;

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured (default order)
  });

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-dark-earth mb-4">Shop Our Collection</h1>
        <p className="text-lg text-muted-foreground">
          Discover handcrafted pottery pieces that bring warmth to your home
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-dark-earth mb-6">Filters</h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="mb-3">Category</h4>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <Label htmlFor={category} className="cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="mb-3">Price Range</h4>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-30">Under $30</SelectItem>
                    <SelectItem value="30-50">$30 - $50</SelectItem>
                    <SelectItem value="50-75">$50 - $75</SelectItem>
                    <SelectItem value="over-75">Over $75</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* New Arrivals Filter */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="new-arrivals"
                    checked={showNewOnly}
                    onCheckedChange={(checked) => setShowNewOnly(checked as boolean)}
                  />
                  <Label htmlFor="new-arrivals" className="cursor-pointer">
                    New Arrivals Only
                  </Label>
                </div>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange('all');
                  setShowNewOnly(false);
                }}
              >
                Clear All Filters
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {/* Sort and Results Count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <p className="text-muted-foreground">
              Showing {sortedProducts.length} of {products.length} products
            </p>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-shadow">
                  <div
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => onNavigate('product', product.id)}
                  >
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-3 right-3 bg-terracotta">
                        New
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-3 left-3 bg-clay-brown">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">
                        {product.category}
                      </p>
                      <h4
                        className="text-dark-earth mb-2 cursor-pointer hover:text-clay-brown transition-colors"
                        onClick={() => onNavigate('product', product.id)}
                      >
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-[#CB6843] text-[#CB6843]" />
                          <span className="ml-1 text-sm">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="clay-brown">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button
                      className="w-full bg-clay-brown hover:bg-[#A46B47]/90"
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No products found matching your filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange('all');
                  setShowNewOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
