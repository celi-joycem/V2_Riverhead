
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Search, Home, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Search query:', searchQuery);
      // In a real app, this would redirect to search results
    }
  };

  const popularPages = [
    { name: 'Our Products', path: '/products' },
    { name: 'Where to Buy', path: '/where-to-buy' },
    { name: 'Our Brand Story', path: '/our-brand' },
    { name: 'Business Solutions', path: '/for-your-business' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <Layout>
      <div className="bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Error Message */}
              <div className="mb-8">
                <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                  404
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                  Page Not Found
                </h2>
                <p className="text-lg text-muted mb-8">
                  Oops! The page you're looking for seems to have wandered off. 
                  Don't worry, it happens to the best of us. Let's get you back on track.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-dark-green mb-4">
                  Search Our Site
                </h3>
                <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
                  <Input
                    type="text"
                    placeholder="Search for products, pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" className="btn-success">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild className="btn-success">
                  <Link to="/">
                    <Home className="mr-2 h-5 w-5" />
                    Go to Homepage
                  </Link>
                </Button>
                <Button asChild variant="outline" onClick={() => window.history.back()}>
                  <span className="cursor-pointer">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Go Back
                  </span>
                </Button>
              </div>

              {/* Popular Pages */}
              <div>
                <h3 className="text-xl font-semibold text-dark-green mb-6">
                  Popular Pages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {popularPages.map((page, index) => (
                    <Link
                      key={index}
                      to={page.path}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow text-left hover:bg-primary/5"
                    >
                      <span className="text-primary hover:text-primary/80 font-medium">
                        {page.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-12 p-6 section-bg-light rounded-lg">
                <h4 className="font-semibold text-dark-green mb-2">
                  Still Need Help?
                </h4>
                <p className="text-muted mb-4">
                  Our customer service team is here to help you find what you're looking for.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:info@riverheadfoods.com"
                    className="text-primary hover:text-primary/80"
                  >
                    info@riverheadfoods.com
                  </a>
                  <a 
                    href="tel:5551234567"
                    className="text-primary hover:text-primary/80"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NotFound;
