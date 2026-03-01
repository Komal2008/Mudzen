# Translation Implementation Guide

## Setup Complete ✅

The following infrastructure has been set up:

1. **Translation Files**: `/translations/en.ts`, `/translations/hi.ts`, `/translations/mr.ts`
2. **Language Context**: `/contexts/LanguageContext.tsx`
3. **Language Provider**: Wraps the entire app in `/App.tsx`
4. **Language Switcher**: Added to Header component with Globe icon

## How to Use Translations in Components

### 1. Import the useLanguage hook

```tsx
import { useLanguage } from '../contexts/LanguageContext';
```

### 2. Get the translation object

```tsx
export function YourComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t.yourSection.title}</h1>
      <p>{t.yourSection.description}</p>
    </div>
  );
}
```

## Components Updated

- [x] Header (with language switcher)
- [x] App (with LanguageProvider)
- [ ] Footer
- [ ] Chatbot
- [ ] HomePage
- [ ] ShopPage
- [ ] ProductDetailPage
- [ ] CartPage
- [ ] CheckoutPage
- [ ] OrderConfirmationPage
- [ ] AccountPage
- [ ] ContactPage
- [ ] AboutPage

## Translation Structure

All translations are organized by component/section:

- `header.*` - Header navigation
- `footer.*` - Footer links and info
- `chatbot.*` - Chatbot messages
- `home.*` - Home page content
- `shop.*` - Shop page filters and products
- `product.*` - Product detail page
- `cart.*` - Shopping cart
- `checkout.*` - Checkout form
- `orderConfirmation.*` - Order confirmation
- `account.*` - User account
- `contact.*` - Contact page
- `about.*` - About page
- `common.*` - Shared text

## Example: Updating a Component

**Before:**
```tsx
<h1>Shopping Cart</h1>
<p>Your cart is empty</p>
<button>Continue Shopping</button>
```

**After:**
```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function CartPage() {
  const { t } = useLanguage();
  
  return (
    <>
      <h1>{t.cart.title}</h1>
      <p>{t.cart.empty}</p>
      <button>{t.cart.continueShopping}</button>
    </>
  );
}
```

## Languages Available

- **English (en)** - Default
- **Hindi (hi)** - हिंदी
- **Marathi (mr)** - मराठी

Users can switch languages using the Globe icon in the header (desktop) or in the mobile menu.
