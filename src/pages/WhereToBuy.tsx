
import React, { useState } from 'react';
import { MapPin, Search, Phone, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const WhereToBuy = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');

  // Sample store data
  const stores = [
    {
      id: 1,
      name: 'FreshMart Supermarket',
      address: '123 Main Street, Anytown, NY 12345',
      phone: '(555) 123-4567',
      hours: 'Mon-Sun 7AM-10PM',
      distance: '2.3 miles'
    },
    {
      id: 2,
      name: 'Healthy Foods Co-op',
      address: '456 Green Avenue, Riverside, NY 12346',
      phone: '(555) 234-5678',
      hours: 'Mon-Sat 8AM-9PM, Sun 9AM-8PM',
      distance: '4.1 miles'
    },
    {
      id: 3,
      name: 'Metro Grocery Plus',
      address: '789 Commerce Blvd, Centertown, NY 12347',
      phone: '(555) 345-6789',
      hours: 'Daily 6AM-11PM',
      distance: '5.7 miles'
    },
    {
      id: 4,
      name: 'Natural Foods Market',
      address: '321 Organic Way, Greenville, NY 12348',
      phone: '(555) 456-7890',
      hours: 'Mon-Sat 7AM-10PM, Sun 8AM-9PM',
      distance: '7.2 miles'
    }
  ];

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for stores near:', searchQuery);
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Page Header */}
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Where to Buy
              </h1>
              <p className="text-lg text-muted">
                Find Riverhead Foods products at retailers near you. Our premium beans, 
                rice, and grains are available at grocery stores nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search Form */}
              <div className="bg-white border rounded-lg p-8 shadow-sm mb-12">
                <h2 className="text-2xl font-semibold text-dark-green mb-6 text-center">
                  Find Stores Near You
                </h2>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="location" className="block text-sm font-medium text-body mb-2">
                        Enter your zip code or city
                      </label>
                      <Input
                        id="location"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="e.g. 12345 or New York, NY"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-body mb-2">
                        State (optional)
                      </label>
                      <Select onValueChange={setSelectedState}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent className="max-h-48">
                          {states.map((state) => (
                            <SelectItem key={state} value={state.toLowerCase()}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="btn-success px-8 py-3">
                      <Search className="mr-2 h-5 w-5" />
                      Find Stores
                    </Button>
                  </div>
                </form>
              </div>

              {/* Store Results */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-dark-green">
                    Stores near you ({stores.length} found)
                  </h3>
                  <div className="text-sm text-muted">
                    Showing results within 25 miles
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stores.map((store) => (
                    <div key={store.id} className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-dark-green mb-1">
                            {store.name}
                          </h4>
                          <div className="flex items-center gap-1 text-sm text-primary">
                            <MapPin className="h-4 w-4" />
                            <span>{store.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-muted mt-0.5 flex-shrink-0" />
                          <span className="text-body text-sm">{store.address}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted" />
                          <a href={`tel:${store.phone}`} className="text-primary text-sm hover:underline">
                            {store.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted" />
                          <span className="text-body text-sm">{store.hours}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs"
                            onClick={() => console.log('Get directions to', store.name)}
                          >
                            Get Directions
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="text-xs"
                            onClick={() => console.log('Call', store.name)}
                          >
                            Call Store
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" className="px-8">
                    Load More Stores
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-green mb-4">
                    Can't Find Our Products?
                  </h3>
                  <p className="text-body mb-4">
                    If your local store doesn't carry Riverhead Foods products yet, 
                    you can request them! Most retailers are happy to stock products 
                    their customers request.
                  </p>
                  <ul className="text-sm text-muted space-y-2 mb-6">
                    <li>• Ask to speak with the store manager or grocery buyer</li>
                    <li>• Mention Riverhead Foods by name</li>
                    <li>• Provide our contact information: (555) 123-4567</li>
                    <li>• Ask friends and family to make the same request</li>
                  </ul>
                  <Button className="btn-outline-success w-full">
                    Contact Our Sales Team
                  </Button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-green mb-4">
                    Retail Partners
                  </h3>
                  <p className="text-body mb-4">
                    Our products are available at major grocery chains, 
                    health food stores, and specialty retailers across the country.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-body">Major Grocery Chains</span>
                      <span className="text-primary">500+ locations</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-body">Health Food Stores</span>
                      <span className="text-primary">300+ locations</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-body">Specialty Retailers</span>
                      <span className="text-primary">200+ locations</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted">
                    We're constantly expanding our retail network. 
                    Check back regularly for new store locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhereToBuy;
