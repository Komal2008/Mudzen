# Component Translation Update Pattern

## ✅ Already Updated
- Header
- Footer  
- Chatbot
- App (with LanguageProvider)

## 📋 Pattern to Follow

For each component, follow these steps:

### Step 1: Add Import
```tsx
import { useLanguage } from '../contexts/LanguageContext';
```

### Step 2: Get Translations
```tsx
export function ComponentName() {
  const { t } = useLanguage();
  // ... rest of component
}
```

### Step 3: Replace Hardcoded Text
Replace all hardcoded strings with `t.section.key`

---

## Remaining Components Quick Reference

### HomePage
Replace:
- "Crafted by Hands, Rooted in Earth" → `{t.home.heroTitle.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>)}`
- "Discover authentic handcrafted..." → `{t.home.heroSubtitle}`
- "Shop Now" → `{t.home.shopNow}`
- "Eco-Friendly" → `{t.home.ecoFriendly}`
- "Free Shipping" → `{t.home.freeShipping}`
- And so on...

### ShopPage
Replace:
- "Shop Our Collection" → `{t.shop.title}`
- "Filters" → `{t.shop.filters}`
- "Add to Cart" → `{t.shop.addToCart}`
- Category names stay in English (or translate from product data)

### CartPage
Replace:
- "Shopping Cart" → `{t.cart.title}`
- "Your Cart is Empty" → `{t.cart.empty}`
- "Continue Shopping" → `{t.cart.continueShopping}`
- toast messages → use `t.cart.itemRemoved`

### CheckoutPage
Replace:
- "Checkout" → `{t.checkout.title}`
- "First Name" → `{t.checkout.firstName}`
- "Place Order" → `{t.checkout.placeOrder}`
- toast → use `t.checkout.orderPlaced`

### OrderConfirmationPage  
Replace:
- "Order Confirmed!" → `{t.orderConfirmation.title}`
- "Thank you for your purchase" → `{t.orderConfirmation.thankYou}`

### AccountPage
Replace:
- "My Account" → `{t.account.title}`
- "Welcome Back" → `{t.account.welcomeBackMsg}`
- "Sign In" → `{t.account.signInBtn}`
- toast messages → use `t.account.loggedOut`, `t.account.accountCreated`

### ContactPage
Replace:
- "Get in Touch" → `{t.contact.title}`
- "Send us a Message" → `{t.contact.sendMessage}`
- toast → use `t.contact.messageSent`

### AboutPage
Replace:
- "Our Story" → `{t.about.title}`
- "The Heart of MUDZEN" → `{t.about.heartOfMudzen}`

### ProductDetailPage
Replace:
- "Quantity" → `{t.product.quantity}`
- "Buy Now" → `{t.product.buyNow}`
- "Add to Cart" → `{t.shop.addToCart}`
- toast messages → use `t.product.addedToCart`, `t.product.addedToWishlist`

---

## Important Notes

1. **Toast Messages**: Update all toast.success() and toast.error() calls to use translation keys
2. **Placeholders**: Update all placeholder attributes: `placeholder={t.section.placeholder}`
3. **Dynamic Content**: For content that changes based on variables, use template literals:
   ```tsx
   `${quantity} x ${product.name} ${t.product.addedToCart}`
   ```
4. **Line Breaks**: When text has `\n`, split and add `<br />`:
   ```tsx
   {t.home.heroTitle.split('\n').map((line, i) => (
     <React.Fragment key={i}>
       {line}
       {i === 0 && <br />}
     </React.Fragment>
   ))}
   ```

---

## Testing

After updating each component:
1. Switch to English - verify all text appears
2. Switch to Hindi - verify all text appears in Hindi
3. Switch to Marathi - verify all text appears in Marathi
4. Check that no hardcoded English text remains

---

## All Translation Keys Available

See `/translations/en.ts` for the complete list of available translation keys organized by section.
