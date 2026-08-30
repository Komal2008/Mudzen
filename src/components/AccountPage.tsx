import { useMemo, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  EyeOff,
  Leaf,
  LoaderCircle,
  Lock,
  LogOut,
  Mail,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  UserRound,
} from 'lucide-react';
import { User } from '../types';
import { toast } from 'sonner';

interface AccountPageProps {
  user: User | null;
  onLogin: (email: string, password: string) => void;
  onSignup: (name: string, email: string, password: string) => void;
  onLogout: () => void;
  onNavigate: (page: string, productId?: number) => void;
}

export function AccountPage({ user, onLogin, onSignup, onLogout, onNavigate }: AccountPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const passwordStrength = useMemo(() => {
    let score = 0;
    if (signupPassword.length >= 8) score += 1;
    if (/[A-Z]/.test(signupPassword)) score += 1;
    if (/\d/.test(signupPassword)) score += 1;
    if (/[^A-Za-z0-9]/.test(signupPassword)) score += 1;

    const labels = ['Weak', 'Weak', 'Medium', 'Strong'];
    const colors = ['bg-[#C65A54]', 'bg-[#C65A54]', 'bg-[#D49A45]', 'bg-[#5F8B5A]'];

    return {
      score,
      label: labels[Math.min(score, labels.length - 1)],
      color: colors[Math.min(score, colors.length - 1)],
      metRequirements: [
        signupPassword.length >= 8,
        /[A-Z]/.test(signupPassword),
        /\d/.test(signupPassword),
        /[^A-Za-z0-9]/.test(signupPassword),
      ],
    };
  }, [signupPassword]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onLogin(loginEmail, loginPassword);
    window.setTimeout(() => setIsSubmitting(false), 250);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSignup(signupName, signupEmail, signupPassword);
    window.setTimeout(() => setIsSubmitting(false), 250);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Processing':
        return 'bg-yellow-500';
      case 'Shipped':
        return 'bg-blue-500';
      case 'Delivered':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  // Login/Signup Forms
  if (!user) {
    const authFeatures = [
      {
        icon: BadgeCheck,
        title: 'Authentic Handmade Products',
        description: 'Every pottery piece is carefully handcrafted by skilled artisans.',
      },
      {
        icon: ShieldCheck,
        title: 'Safe & Secure Checkout',
        description: 'Protected payments with a smooth and trusted shopping experience.',
      },
      {
        icon: Truck,
        title: 'Fast & Reliable Delivery',
        description: 'Your handcrafted orders are carefully packed and delivered safely.',
      },
    ];

    return (
      <div className=" min-h-screen flex items-center justify-centerbg-[#FAF7F2] px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-6xl items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="w-full max-w-7xl overflow-hidden rounded-[24px] border border-[#E8DDD2] bg-[#FFFDFB] shadow-[0_28px_80px_-36px_rgba(74,61,53,0.45)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] min-h-[760px]">
              <div className="flex flex-col justify-between bg-[#F4EBDC] p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-8 inline-flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DDD2] bg-[#FFFDFB] text-[#C96E46] shadow-sm">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-[0.18em] text-[#2C211A]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                        MUDZEN
                      </div>
                      <div className="text-xs uppercase tracking-[0.22em] text-[#6B5E56]">Handcrafted Pottery</div>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-center sm:justify-start lg:justify-center">
                    <div className="hidden sm:flex h-[320px] w-[320px] w-[230px] items-center justify-center rounded-[24px] border border-[#E8DDD2] bg-[#FFFDFB]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:h-[260px] sm:w-[260px]">
                      <svg className="h-full w-full" viewBox="0 0 260 260" role="img" aria-label="Handcrafted pottery illustration">
                        <ellipse cx="130" cy="221" rx="74" ry="12" fill="#E8DDD2" />
                        <path d="M78 96c7 17 14 31 14 55 0 39 17 61 38 61s38-22 38-61c0-24 7-38 14-55H78Z" fill="#C96E46" />
                        <path d="M92 111c8 11 17 20 17 43 0 27 8 42 21 42s21-15 21-42c0-23 9-32 17-43H92Z" fill="#D87B4A" opacity="0.58" />
                        <ellipse cx="130" cy="96" rx="52" ry="18" fill="#B75F39" />
                        <ellipse cx="130" cy="94" rx="35" ry="10" fill="#F4EBDC" />
                        <path d="M78 139c35 12 69 12 104 0" fill="none" stroke="#F4EBDC" strokeWidth="7" strokeLinecap="round" opacity="0.72" />
                        <path d="M91 172c25 9 53 9 78 0" fill="none" stroke="#F4EBDC" strokeWidth="6" strokeLinecap="round" opacity="0.62" />
                        <path d="M72 75c18-22 40-33 67-34 19-1 36 4 51 15" fill="none" stroke="#A46B47" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
                        <path d="M79 65c15-11 31-18 49-20" fill="none" stroke="#C96E46" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
                      </svg>
                    </div>
                  </div>

                  <h2 className="mb-4 text-5xl lg:text-6xl font-semibold leading-tight text-[#2C211A] sm:text-[2.35rem] lg:text-[2.7rem]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                    Crafted by Hands,
                    <span className="block text-[#C96E46]">Rooted in Earth</span>
                  </h2>
                  <p className="max-w-md text-[15px] leading-7 text-[#6B5E56]">
                    Experience timeless handcrafted pottery created with care by local artisans.
                  </p>
                </div>

                <div className="mt-8 grid gap-3">
                  {authFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.08 }}
                        className="flex items-start gap-3 rounded-[16px] border border-[#E8DDD2] bg-[#FFFDFB] px-4 py-3 shadow-sm"
                      >
                        <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#FAF7F2] text-[#C96E46]">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#2C211A]">{feature.title}</div>
                          <p className="mt-1 text-sm leading-6 text-[#6B5E56]">{feature.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-[#FFFDFB] p-6 sm:p-8 lg:p-10 xl:p-12">
                <motion.div
                  key={isLogin ? 'login' : 'signup'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mx-auto flex h-full max-w-[500px] flex-col justify-center"
                >
                  <div className="mb-8 text-center lg:text-left">
                    <div className="mb-4 flex items-center justify-center lg:justify-start">
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#E8DDD2] bg-[#FAF7F2] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C96E46]">
                        <Sparkles className="h-3.5 w-3.5" />
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                      </div>
                    </div>
                    <h2 className="text-[2rem] font-semibold tracking-normal text-[#2C211A] sm:text-[2.1rem]" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      {isLogin ? 'Sign in to Mudzen' : 'Create your account'}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[#6B5E56] sm:text-[15px]">
                      {isLogin
                        ? 'Continue your handcrafted shopping journey.'
                        : 'Join our artisan community and discover timeless, handmade essentials.'}
                    </p>
                  </div>

                  {isLogin ? (
                    <form onSubmit={handleLoginSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-[#2C211A]">Email address</Label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="email"
                            type="email"
                            required
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            className="h-14 rounded-[14px] border-[#E6D9CA] bg-[#FFFDFB] pl-12 pr-4 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#C96E46]/30"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-[#2C211A]">Password</Label>
                        <div className="relative">
                          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="password"
                            type={showLoginPassword ? 'text' : 'password'}
                            required
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            className="h-14 rounded-[14px] border-[#E6D9CA] bg-[#FFFDFB] pl-12 pr-12 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#C96E46]/30"
                            placeholder="Enter your password"
                          />
                          <button
                            type="button"
                            aria-label={showLoginPassword ? 'Hide password' : 'Show password'}
                            onClick={() => setShowLoginPassword((value) => !value)}
                            className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1.5 text-[#C96E46] transition-colors hover:bg-[#F4EBDC] focus:outline-none focus:ring-2 focus:ring-[#C96E46]/25"
                          >
                            {showLoginPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <Label htmlFor="remember-me" className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#6B5E56]">
                          <Checkbox
                            id="remember-me"
                            className="h-4 w-4 border-[#E8DDD2] bg-[#FFFDFB] text-[#FFFDFB] data-[state=checked]:border-[#C96E46] data-[state=checked]:bg-[#C96E46] focus-visible:ring-[#C96E46]/30"
                          />
                          Remember Me
                        </Label>
                        <button
                          type="button"
                          className="text-sm font-semibold text-[#C96E46] transition-colors hover:text-[#B75F39] focus:outline-none focus:ring-2 focus:ring-[#C96E46]/25"
                        >
                          Forgot Password
                        </button>
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex h-14 w-full items-center justify-center rounded-[14px] bg-[#C96E46] text-sm font-semibold text-[#FFFDFB] shadow-[0_12px_30px_-14px_rgba(201,110,70,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B75F39] focus-visible:ring-2 focus-visible:ring-[#C96E46]/35"
                      >
                        {isSubmitting ? (
                          <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Signing in...</>
                        ) : (
                          <><span>Sign In</span><ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleSignupSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-[#2C211A]">Full name</Label>
                        <div className="relative">
                          <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="name"
                            required
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            className="h-14 rounded-[14px] border-[#E6D9CA] bg-[#FFFDFB] pl-12 pr-4 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#C96E46]/30"
                            placeholder="Ava Chen"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email" className="text-sm font-medium text-[#2C211A]">Email address</Label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="signup-email"
                            type="email"
                            required
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            className="h-[54px] rounded-[14px] border-[#E8DDD2] bg-[#FFFDFB] pl-12 pr-4 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#D87B4A]/20"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password" className="text-sm font-medium text-[#2C211A]">Password</Label>
                        <div className="relative">
                          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="signup-password"
                            type={showSignupPassword ? 'text' : 'password'}
                            required
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            className="h-[54px] rounded-[14px] border-[#E8DDD2] bg-[#FFFDFB] pl-12 pr-12 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#D87B4A]/20"
                            placeholder="Create a strong password"
                          />
                          <button
                            type="button"
                            aria-label={showSignupPassword ? 'Hide password' : 'Show password'}
                            onClick={() => setShowSignupPassword((value) => !value)}
                            className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1.5 text-[#C96E46] transition-colors hover:bg-[#F4EBDC] focus:outline-none focus:ring-2 focus:ring-[#C96E46]/25"
                          >
                            {showSignupPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                          </button>
                        </div>
                        <div className="rounded-[14px] border border-[#E8DDD2] bg-[#FAF7F2] p-3">
                          <div className="mb-2 flex items-center  flex flex-col justify-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C96E46]">
                            <span>Password strength</span>
                            <span className="text-xs font-semibold text-[#6B5E56]">{passwordStrength.label}</span>
                          </div>
                          <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-[#EADBC8]">
                            <div className={`h-full rounded-full transition-all duration-300 ${passwordStrength.color}`} style={{ width: `${(passwordStrength.score / 4) * 100}%` }} />
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-[#6B5E56]">
                            {['8+ characters', 'One uppercase', 'One number', 'One special char'].map((item, index) => {
                              const met = passwordStrength.metRequirements[index];
                              return (
                                <div key={item} className="flex items-center gap-3">
                                  <div className={`h-3 w-3 flex-shrink-0 rounded-full border ${met ? 'border-[#5E8A5A] bg-[#EAF4EA]' : 'border-[#E8DDD2] bg-white'}`} />
                                  <span className={`${met ? 'text-[#5E8A5A]' : 'text-[#6B5E56]'}`}>{item}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-sm font-medium text-[#2C211A]">Confirm password</Label>
                        <div className="relative">
                          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#C96E46]" />
                          <Input
                            id="confirm-password"
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            value={signupConfirmPassword}
                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                            className="h-[54px] rounded-[14px] border-[#E8DDD2] bg-[#FFFDFB] pl-12 pr-12 text-[15px] text-[#2C211A] shadow-[0_10px_30px_-20px_rgba(44,33,26,0.35)] transition-all duration-200 placeholder:text-[#6B5E56]/60 focus:border-[#D87B4A] focus:ring-2 focus:ring-[#D87B4A]/20"
                            placeholder="Repeat your password"
                          />
                          <button
                            type="button"
                            aria-label={showConfirmPassword ? 'Hide confirmation password' : 'Show confirmation password'}
                            onClick={() => setShowConfirmPassword((value) => !value)}
                            className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1.5 text-[#C96E46] transition-colors hover:bg-[#F4EBDC] focus:outline-none focus:ring-2 focus:ring-[#C96E46]/25"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                          </button>
                        </div>
                      </div>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex h-[54px] w-full items-center justify-center rounded-[14px] bg-[#C96E46] text-sm font-semibold text-[#FFFDFB] shadow-[0_12px_30px_-14px_rgba(201,110,70,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B75F39] focus-visible:ring-2 focus-visible:ring-[#C96E46]/35"
                      >
                        {isSubmitting ? (
                          <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Creating account...</>
                        ) : (
                          <><span>Create Account</span><ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" /></>
                        )}
                      </Button>
                    </form>
                  )}

                  <div className="mt-8 text-center text-sm text-[#6B5E56]">
                    <span>{isLogin ? "Don't have an account? " : 'Already have an account? '}</span>
                    <button
                      type="button"
                      onClick={() => setIsLogin((value) => !value)}
                      className="font-semibold text-[#C96E46] transition-colors hover:text-[#B75F39] focus:outline-none focus:ring-2 focus:ring-[#C96E46]/25"
                    >
                      {isLogin ? 'Create Account' : 'Sign in'}
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // User Dashboard
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-between items-center"
      >
        <div>
          <h1 className="text-dark-earth mb-2">My Account</h1>
          <p className="text-muted-foreground">Welcome back, {user.name}!</p>
        </div>
        <Button
          variant="outline"
          onClick={() => {
            onLogout();
            toast.success('Logged out successfully');
          }}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </motion.div>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {user.orders.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-dark-earth mb-2">No Orders Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't placed any orders yet.
                  </p>
                  <Button
                    onClick={() => onNavigate('shop')}
                    className="bg-clay-brown hover:bg-[#A46B47]/90"
                  >
                    Start Shopping
                  </Button>
                </CardContent>
              </Card>
            ) : (
              user.orders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:flex flex-col justify-center gap-10 mb-4">
                      <div>
                        <p>Order #{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="space-y-3 mb-4">
                      {order.items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center gap-3 text-sm"
                        >
                          <div className="w-12 h-12 rounded bg-cream overflow-hidden">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p>{item.product.name}</p>
                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                          </div>
                          <p className="clay-brown">
                            ${item.product.price * item.quantity}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span>Total</span>
                      <span className="clay-brown">${order.total.toFixed(2)}</span>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </motion.div>
        </TabsContent>

        <TabsContent value="profile" className="mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-dark-earth mb-6">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="profile-name">Full Name</Label>
                    <Input id="profile-name" defaultValue={user.name} />
                  </div>
                  <div>
                    <Label htmlFor="profile-email">Email</Label>
                    <Input id="profile-email" type="email" defaultValue={user.email} />
                  </div>
                  <Button className="bg-clay-brown hover:bg-[#A46B47]/90">
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
