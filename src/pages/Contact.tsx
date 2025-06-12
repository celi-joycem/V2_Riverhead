import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Page Header */}
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-muted">
                Get in touch with our team for product information, wholesale inquiries, 
                or any questions about Riverhead Foods.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Contact Details and Business Channels */}
              <div className="space-y-8">
                {/* Metro Commodities Contact Details */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-dark-green mb-6">Metro Commodities, Inc.</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-body">(555) 123-4567</p>
                        <p className="text-sm text-muted">Mon-Fri 8am-5pm EST</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-body">info@riverheadfoods.com</p>
                        <p className="text-sm text-muted">General inquiries</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-body">123 Food Industry Way</p>
                        <p className="font-medium text-body">Riverhead, NY 11901</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium text-body">Monday - Friday</p>
                        <p className="font-medium text-body">8:00 AM - 5:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="bg-primary/5 rounded-lg p-4">
                  <h5 className="font-semibold text-dark-green mb-2">Quick Response</h5>
                  <p className="text-sm text-muted">
                    We typically respond to inquiries within 24 hours during business days.
                  </p>
                </div>

                {/* Business Channels */}
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-3">
                      Business Inquiries
                    </h4>
                    <p className="text-muted mb-4 text-sm">
                      Looking for wholesale opportunities or business partnerships?
                    </p>
                    <Button asChild className="btn-outline-success w-full">
                      <Link to="/for-your-business">
                        Business Solutions
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-3">
                      Private Label Services
                    </h4>
                    <p className="text-muted mb-4 text-sm">
                      Interested in developing your own brand of premium products?
                    </p>
                    <Button asChild className="btn-outline-success w-full">
                      <Link to="/private-label">
                        Private Label Options
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg font-semibold text-dark-green mb-3">
                      Store Locations
                    </h4>
                    <p className="text-muted mb-4 text-sm">
                      Find Riverhead Foods products at retailers near you.
                    </p>
                    <Button asChild className="btn-outline-success w-full">
                      <Link to="/where-to-buy">
                        Find Stores
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Our Location - Moved to bottom */}
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h4 className="font-semibold text-dark-green mb-4">Our Location</h4>
                  <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted">Riverhead, NY</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white border rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-dark-green mb-6">Send Us a General Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-body mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-body mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-body mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-body mb-2">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-body mb-2">
                        Inquiry Type *
                      </label>
                      <Select onValueChange={(value) => handleSelectChange('inquiryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="product">Product Questions</SelectItem>
                          <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                          <SelectItem value="private-label">Private Label</SelectItem>
                          <SelectItem value="customer-service">Customer Service</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-body mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-body mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" className="btn-success w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
