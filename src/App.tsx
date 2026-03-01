import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { OrderConfirmationPage } from './components/OrderConfirmationPage';
import { AccountPage } from './components/AccountPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { Toaster } from './components/ui/sonner';
import { Product, CartItem, User } from './types';
import { toast } from 'sonner@2.0.3';
import { LanguageProvider } from './contexts/LanguageContext';

type Page = 'home' | 'shop' | 'product' | 'cart' | 'checkout' | 'order-confirmation' | 'account' | 'contact' | 'about';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string, productId?: number) => {
    setCurrentPage(page as Page);
    if (productId !== undefined) {
      setSelectedProductId(productId);
    }
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    toast.success('Item removed from cart');
  };

  const handleLogin = (email: string, password: string) => {
    // Mock login - in a real app, this would authenticate with a backend
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      email: email,
      orders: [
        {
          id: 'ORD-2024-1001',
          date: 'October 15, 2024',
          total: 156.00,
          status: 'Delivered',
          items: [
            {
              product: {
                id: 1,
                name: 'Artisan Coffee Mug',
                category: 'Ceramic Mugs',
                price: 28,
                image: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e',
                description: 'Handcrafted ceramic mug',
                features: [],
                inStock: true,
                rating: 4.8,
                reviews: 127
              },
              quantity: 2
            }
          ]
        },
        {
          id: 'ORD-2024-1015',
          date: 'October 20, 2024',
          total: 95.00,
          status: 'Shipped',
          items: [
            {
              product: {
                id: 6,
                name: 'Elegant Tea Set',
                category: 'Ceramic Mugs',
                price: 95,
                image: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e',
                description: 'Complete tea set',
                features: [],
                inStock: true,
                rating: 4.8,
                reviews: 76
              },
              quantity: 1
            }
          ]
        }
      ]
    };
    setUser(mockUser);
    toast.success('Welcome back!');
  };

  const handleSignup = (name: string, email: string, password: string) => {
    // Mock signup - in a real app, this would create an account via backend
    const newUser: User = {
      id: Date.now(),
      name: name,
      email: email,
      orders: []
    };
    setUser(newUser);
    toast.success('Account created successfully!');
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePlaceOrder = (orderData: any) => {
    // Generate order number
    const newOrderNumber = `ORD-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
    setOrderNumber(newOrderNumber);

    // If user is logged in, add order to their history
    if (user) {
      const newOrder = {
        id: newOrderNumber,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        total: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
        status: 'Processing' as const,
        items: cart
      };
      setUser(prev => prev ? { ...prev, orders: [newOrder, ...prev.orders] } : null);
    }

    // Clear cart and navigate to confirmation
    setCart([]);
    setCurrentPage('order-confirmation');
    toast.success('Order placed successfully!');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onNavigate={handleNavigate}
        cartItemCount={cartItemCount}
        currentPage={currentPage}
      />

      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'shop' && (
          <ShopPage onNavigate={handleNavigate} onAddToCart={handleAddToCart} />
        )}
        {currentPage === 'product' && selectedProductId && (
          <ProductDetailPage
            productId={selectedProductId}
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'checkout' && (
          <CheckoutPage cart={cart} onPlaceOrder={handlePlaceOrder} />
        )}
        {currentPage === 'order-confirmation' && (
          <OrderConfirmationPage
            orderNumber={orderNumber}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'account' && (
          <AccountPage
            user={user}
            onLogin={handleLogin}
            onSignup={handleSignup}
            onLogout={handleLogout}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer />
      <Chatbot />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}