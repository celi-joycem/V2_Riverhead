
import React, { useState } from 'react';
import { ArrowRight, Download, Plus, Minus, Building, Award, Truck, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const ForYourBusiness = () => {
  const [selectedProducts, setSelectedProducts] = useState<Array<{
    product: string;
    size: string;
    quantity: string;
  }>>([]);

  const [businessForm, setBusinessForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    estimatedVolume: '',
    additionalInfo: ''
  });

  const productOptions = [
    'Premium Black Beans',
    'Red Kidney Beans',
    'Navy Beans',
    'Jasmine Rice',
    'Basmati Rice',
    'Brown Rice',
    'Organic Quinoa',
    'Wild Rice',
    'Pinto Beans',
    'Great Northern Beans'
  ];

  const sizeOptions = ['1 lb', '2 lb', '5 lb', '10 lb', '25 lb', '50 lb'];

  const addProduct = () => {
    setSelectedProducts([...selectedProducts, { product: '', size: '', quantity: '' }]);
  };

  const removeProduct = (index: number) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
  };

  const updateProduct = (index: number, field: string, value: string) => {
    const updated = [...selectedProducts];
    updated[index] = { ...updated[index], [field]: value };
    setSelectedProducts(updated);
  };

  const handleBusinessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBusinessForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setBusinessForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Business inquiry submitted:', { businessForm, selectedProducts });
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-dark-green mb-6">
                Partner with Riverhead Foods
              </h1>
              <p className="text-xl text-body leading-relaxed mb-8">
                Discover wholesale opportunities and business solutions designed for retailers, 
                foodservice operators, and distributors who demand premium quality and reliable supply.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-success text-lg px-8 py-4">
                  <Download className="mr-2 h-5 w-5" />
                  Download Wholesale Catalog
                </Button>
                <Button asChild className="btn-outline-success text-lg px-8 py-4">
                  <a href="#inquiry-form">
                    Start Your Inquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Stock Riverhead */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                Why Stock Riverhead Foods?
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto mb-6">
                For decades, Riverhead (under Metro Commodities, Inc.) has been a trusted name in quality 
                grains and legumes. By partnering with us, you offer your customers products known for their 
                consistency, quality, and value. We are committed to supporting our retail and wholesale 
                partners with reliable service and products that meet the high demand for pantry staples.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-green mb-4">Quality Your Customers Trust</h3>
                <p className="text-muted">
                  Leverage our family legacy and expertise in sourcing and packaging to provide your customers 
                  with top-tier products they'll come back for.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-green mb-4">Reliable Supply & Service</h3>
                <p className="text-muted">
                  We understand the importance of a consistent supply chain. Count on us for dependable 
                  deliveries and responsive customer support.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-green mb-4">Expert Support</h3>
                <p className="text-muted">
                  Dedicated account management and marketing support to help grow your business with products 
                  that deliver consistent results.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark-green mb-4">Flexible Terms</h3>
                <p className="text-muted">
                  Competitive pricing and flexible ordering options tailored to your business needs and volume requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Lines */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                  Our Wholesale Product Lines
                </h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-2">Premium Beans</h4>
                    <p className="text-muted">Black beans, kidney beans, navy beans, pinto beans, and specialty varieties</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-2">Rice Varieties</h4>
                    <p className="text-muted">Jasmine, basmati, brown rice, wild rice, and long-grain white rice</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-2">Specialty Grains</h4>
                    <p className="text-muted">Quinoa, barley, lentils, and other ancient grains and superfoods</p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button className="btn-success">
                    <Download className="mr-2 h-5 w-5" />
                    Download Complete Catalog
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
                  alt="Wholesale products"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <section id="inquiry-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                  Build Your Wholesale Inquiry
                </h2>
                <p className="text-lg text-muted">
                  Complete this two-step process to get personalized wholesale pricing and information.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Step 1: Product Selection */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-dark-green mb-6">
                      Step 1: Product Selection
                    </h3>
                    <p className="text-muted mb-6">
                      Add the products you're interested in with specific sizes and quantities.
                    </p>
                    
                    <div className="space-y-4">
                      {selectedProducts.map((product, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                          <Select onValueChange={(value) => updateProduct(index, 'product', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                            <SelectContent>
                              {productOptions.map((option) => (
                                <SelectItem key={option} value={option}>{option}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <Select onValueChange={(value) => updateProduct(index, 'size', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Size" />
                            </SelectTrigger>
                            <SelectContent>
                              {sizeOptions.map((size) => (
                                <SelectItem key={size} value={size}>{size}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          
                          <Input
                            type="number"
                            placeholder="Quantity"
                            value={product.quantity}
                            onChange={(e) => updateProduct(index, 'quantity', e.target.value)}
                          />
                          
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeProduct(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      
                      <Button type="button" onClick={addProduct} variant="outline" className="w-full">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Product
                      </Button>
                    </div>

                    {selectedProducts.length > 0 && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                        <h4 className="font-semibold text-dark-green mb-2">Your Product List:</h4>
                        <ul className="space-y-1">
                          {selectedProducts.map((product, index) => (
                            <li key={index} className="text-sm text-body">
                              {product.quantity} x {product.product} ({product.size})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Step 2: Business Information */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-dark-green mb-6">
                      Step 2: Your Business Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Company Name *
                        </label>
                        <Input
                          name="companyName"
                          required
                          value={businessForm.companyName}
                          onChange={handleBusinessFormChange}
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Contact Name *
                        </label>
                        <Input
                          name="contactName"
                          required
                          value={businessForm.contactName}
                          onChange={handleBusinessFormChange}
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Email *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          required
                          value={businessForm.email}
                          onChange={handleBusinessFormChange}
                          placeholder="business@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Phone *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          required
                          value={businessForm.phone}
                          onChange={handleBusinessFormChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-body mb-2">
                          Business Address
                        </label>
                        <Input
                          name="address"
                          value={businessForm.address}
                          onChange={handleBusinessFormChange}
                          placeholder="Street address, city, state, zip"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Business Type *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('businessType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retailer">Retailer</SelectItem>
                            <SelectItem value="distributor">Distributor</SelectItem>
                            <SelectItem value="foodservice">Foodservice</SelectItem>
                            <SelectItem value="manufacturer">Manufacturer</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Estimated Monthly Volume
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('estimatedVolume', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select volume" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under 1,000 lbs</SelectItem>
                            <SelectItem value="1000-5000">1,000 - 5,000 lbs</SelectItem>
                            <SelectItem value="5000-10000">5,000 - 10,000 lbs</SelectItem>
                            <SelectItem value="over-10000">Over 10,000 lbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-body mb-2">
                          Additional Information
                        </label>
                        <Textarea
                          name="additionalInfo"
                          value={businessForm.additionalInfo}
                          onChange={handleBusinessFormChange}
                          placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                          rows={4}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button type="submit" className="btn-success text-lg px-12 py-4">
                    Submit Inquiry & Product List
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-sm text-muted mt-4">
                    Our wholesale team will respond within 24 hours with personalized pricing and information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForYourBusiness;
