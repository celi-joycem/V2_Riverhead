
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-bg text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Company Info */}
          <div className="col-span-1">
            <div className="mb-4">
              <div className="h-12 w-40 bg-white/10 rounded-md flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">Riverhead Foods</span>
              </div>
              <p className="text-white/80 text-sm mb-2">
                Premium beans, rice, and grains since 1960
              </p>
              <p className="text-white/60 text-xs">
                © 2024 Riverhead Foods. All rights reserved.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link to="/products" className="block text-white/80 hover:text-white transition-colors text-sm">
                Products
              </Link>
              <Link to="/our-brand" className="block text-white/80 hover:text-white transition-colors text-sm">
                Our Brand
              </Link>
              <Link to="/where-to-buy" className="block text-white/80 hover:text-white transition-colors text-sm">
                Where to Buy
              </Link>
            </nav>
          </div>

          {/* Column 3: Support */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <nav className="space-y-2">
              <Link to="/for-your-business" className="block text-white/80 hover:text-white transition-colors text-sm">
                For Your Business
              </Link>
              <Link to="/private-label" className="block text-white/80 hover:text-white transition-colors text-sm">
                Private Label
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link to="/faq" className="block text-white/80 hover:text-white transition-colors text-sm">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80">(555) 123-4567</p>
                  <p className="text-white/60 text-xs">Mon-Fri 8am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80">info@riverheadfoods.com</p>
                  <p className="text-white/60 text-xs">General inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-white/60" />
                <div>
                  <p className="text-white/80">123 Food Industry Way</p>
                  <p className="text-white/80">Riverhead, NY 11901</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>© 2024 Riverhead Foods. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
