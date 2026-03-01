import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Package, Truck } from 'lucide-react';
import { motion } from 'motion/react';

interface OrderConfirmationPageProps {
  orderNumber: string;
  onNavigate: (page: string) => void;
}

export function OrderConfirmationPage({ orderNumber, onNavigate }: OrderConfirmationPageProps) {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>

        <h1 className="text-dark-earth mb-4">Order Confirmed!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <p className="clay-brown">{orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Confirmation Email</p>
                <p>A confirmation email has been sent to your registered email address.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Package className="h-10 w-10 mx-auto mb-3 clay-brown" />
              <h4 className="mb-2">Processing</h4>
              <p className="text-sm text-muted-foreground">1-2 business days</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Truck className="h-10 w-10 mx-auto mb-3 clay-brown" />
              <h4 className="mb-2">Shipping</h4>
              <p className="text-sm text-muted-foreground">5-7 business days</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-10 w-10 mx-auto mb-3 clay-brown" />
              <h4 className="mb-2">Delivered</h4>
              <p className="text-sm text-muted-foreground">Track your order</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => onNavigate('account')}
            className="bg-clay-brown hover:bg-[#A46B47]/90"
          >
            View Order History
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onNavigate('shop')}
          >
            Continue Shopping
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
