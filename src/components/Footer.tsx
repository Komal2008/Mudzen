import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.footer.subscribeSuccess);
  };

  return (
    <footer className="bg-dark-earth text-cream mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-cream mb-4">MUDZEN</h3>
            <p className="text-sm mb-4">
              {t.header.slogan}
            </p>
            <p className="text-sm opacity-80">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.aboutUs}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.header.shop}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.ourArtisans}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.blog}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.faqs}</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-cream mb-4">{t.footer.customerService}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.shipping}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.returns}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.trackOrder}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.privacy}</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">{t.footer.terms}</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-cream mb-4">{t.footer.stayConnected}</h4>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                <span>{t.footer.email}</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4" />
                <span>{t.footer.phone}</span>
              </div>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={t.footer.yourEmail}
                className="bg-background/10 border-cream/20 text-cream placeholder:text-cream/50"
                required
              />
              <Button type="submit" className="bg-terracotta hover:bg-[#CB6843]/90">
                {t.footer.subscribe}
              </Button>
            </form>
            <div className="flex gap-3 mt-4">
              <Button variant="ghost" size="icon" className="text-cream hover:text-[#CB6843] hover:bg-cream/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream hover:text-[#CB6843] hover:bg-cream/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-cream hover:text-[#CB6843] hover:bg-cream/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}