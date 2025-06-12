
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Our Brand', path: '/our-brand' },
    { name: 'Where to Buy', path: '/where-to-buy' },
    { name: 'For Your Business', path: '/for-your-business' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      // Navigate to search results or filter products
    }
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="section-bg-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center gap-4 text-muted">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>info@riverheadfoods.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link to="/private-label" className="text-muted hover:text-primary transition-colors">
                Private Label
              </Link>
              <Link to="/faq" className="text-muted hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="h-20 w-48 bg-primary-green rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">Riverhead Foods</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-body hover:text-primary transition-colors py-2 ${
                    isActiveLink(item.path) ? 'nav-link-active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 rounded-r-none border-r-0"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="rounded-l-none px-3"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-body hover:text-primary transition-colors py-2 ${
                      isActiveLink(item.path) ? 'font-semibold text-primary' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2 border-t">
                  <Link
                    to="/private-label"
                    className="text-muted hover:text-primary transition-colors block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Private Label
                  </Link>
                  <Link
                    to="/faq"
                    className="text-muted hover:text-primary transition-colors block py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
