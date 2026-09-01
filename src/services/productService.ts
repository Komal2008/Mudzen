import { Product } from '../types';
import { products as fallbackProducts } from '../data/products';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const normalizeText = (value?: string | number | null) =>
  String(value ?? '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '');

const HOME_PRODUCT_IMAGE_MAP: Record<string, string> = {
  ceramicmugs: 'https://images.unsplash.com/photo-1563696629964-8c3ce077cf3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwbXVncyUyMGhhbmRjcmFmdGVkfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  claypots: 'https://images.unsplash.com/photo-1736143157411-0a70fe999ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGNsYXklMjBwb3RzfGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  decorativevases: 'https://images.unsplash.com/photo-1760402327535-85a771fb034c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWNvcmF0aXZlJTIwdmFzZXMlMjBwb3R0ZXJ5fGVufDF8fHx8MTc2MTIzODQ1OXww&ixlib=rb-4.1.0&q=80&w=1080',
  handcraftedplates: 'https://images.unsplash.com/photo-1758789891883-2058dd8d5898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcGxhdGVzJTIwaGFuZGNyYWZ0ZWR8ZW58MXx8fHwxNzYxMjM4NDYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
};

const resolveHomeImage = (product: Pick<BackendProduct, 'category' | 'name' | 'image'>): string => {
  if (product.image) return product.image;

  const categoryKey = normalizeText(product.category);
  const nameKey = normalizeText(product.name);

  return HOME_PRODUCT_IMAGE_MAP[categoryKey] ?? HOME_PRODUCT_IMAGE_MAP[nameKey] ?? '';
};

type BackendProduct = {
  _id?: string;
  id?: string | number;
  name?: string;
  category?: string;
  price?: number | string;
  originalPrice?: number | string;
  image?: string;
  description?: string;
  features?: string[];
  stock?: number | string;
  rating?: number | string;
  reviews?: number | string;
  isNew?: boolean;
};

const normalizeProduct = (product: BackendProduct): Product => {
  const numericPrice = Number(product.price ?? 0);
  const numericRating = Number(product.rating ?? 0);
  const numericReviews = Number(product.reviews ?? 0);
  const numericOriginalPrice =
    product.originalPrice !== undefined && product.originalPrice !== null
      ? Number(product.originalPrice)
      : undefined;

  const resolvedImage = resolveHomeImage(product);

  return {
    id: product._id ?? product.id ?? '',
    name: product.name ?? 'Unnamed Product',
    category: product.category ?? 'General',
    price: Number.isFinite(numericPrice) ? numericPrice : 0,
    originalPrice:
      numericOriginalPrice !== undefined && Number.isFinite(numericOriginalPrice)
        ? numericOriginalPrice
        : undefined,
    image: resolvedImage || fallbackProducts[0]?.image || '',
    description: product.description ?? '',
    features: Array.isArray(product.features) ? product.features : [],
    inStock: Number(product.stock ?? 0) > 0,
    isNew: Boolean(product.isNew ?? false),
    rating: Number.isFinite(numericRating) ? numericRating : 0,
    reviews: Number.isFinite(numericReviews) ? numericReviews : 0,
  };
};

const getProductsFromPayload = (payload: unknown): Product[] => {
  if (Array.isArray(payload)) {
    return payload.map((product) => normalizeProduct(product as BackendProduct));
  }

  if (payload && typeof payload === 'object' && 'products' in payload) {
    const products = (payload as { products?: BackendProduct[] }).products ?? [];
    return products.map((product) => normalizeProduct(product));
  }

  return [];
};

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const normalizedProducts = getProductsFromPayload(data);

    return normalizedProducts.length > 0 ? normalizedProducts : fallbackProducts;
  } catch (error) {
    console.error('Failed to fetch products from API, using fallback products.', error);
    return fallbackProducts;
  }
};

export const fetchProductById = async (
  productId: string | number
): Promise<Product | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (data?.product) {
      return normalizeProduct(data.product as BackendProduct);
    }

    return fallbackProducts.find((product) => String(product.id) === String(productId)) ?? null;
  } catch (error) {
    console.error(`Failed to fetch product ${productId} from API, using fallback lookup.`, error);
    return fallbackProducts.find((product) => String(product.id) === String(productId)) ?? null;
  }
};
