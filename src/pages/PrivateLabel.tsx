import React, { useState } from 'react';
import { ArrowRight, Package, Palette, Truck, Users, CheckCircle, Shield } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const PrivateLabel = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: '',
    productCategories: [] as string[],
    otherCategory: '',
    estimatedVolume: '',
    timeline: '',
    budget: '',
    projectDescription: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      productCategories: checked 
        ? [...prev.productCategories, category]
        : prev.productCategories.filter(c => c !== category)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Private label inquiry submitted:', formData);
  };

  const capabilities = [
    {
      icon: Shield,
      title: 'Premium Sourcing & Quality Assurance',
      description: 'We meticulously select the best harvests from the market to ensure consistent, superior quality for your brand.',
      features: ['Meticulous harvest selection', 'Independence from farming risks', 'Seasonal risk mitigation', 'Reliable supply guarantee']
    },
    {
      icon: Palette,
      title: 'Packaging Design & Refinement',
      description: 'Our experienced team can help you create compelling packaging designs from scratch or refine your existing artwork for optimal production.',
      features: ['Custom design creation', 'Existing artwork refinement', 'Shelf appeal optimization', 'Brand differentiation']
    },
    {
      icon: Package,
      title: 'Product Packaging Expertise',
      description: 'We manage the entire packaging process, utilizing modern facilities and quality materials to ensure your product is well-protected, attractively presented, and compliant with all food safety standards.',
      features: ['Complete packaging management', 'Modern facility utilization', 'Food safety compliance', 'Quality material selection']
    },
    {
      icon: Truck,
      title: 'Efficient Distribution Network',
      description: 'Our established distribution services ensure your private label products are delivered efficiently and reliably to your specified locations, streamlining your supply chain.',
      features: ['Established distribution network', 'Efficient delivery systems', 'Supply chain streamlining', 'Reliable logistics support']
    }
  ];

  const benefits = [
    'Lower startup costs and faster time to market',
    'Access to premium ingredients and suppliers',
    'Professional packaging and design services',
    'Quality assurance and regulatory compliance',
    'Flexible minimum order quantities',
    'Scalable production capacity'
  ];

  const productCategories = ['Beans', 'Rice', 'Quinoa', 'Lentils', 'Ancient Grains', 'Specialty Items', 'Other'];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-dark-green mb-6">
                Your Brand, Our Expertise
              </h1>
              <p className="text-xl text-body leading-relaxed mb-8">
                Launch your own line of premium beans, rice, and grains with Riverhead Foods' 
                comprehensive private label services. From sourcing to shelf, we're your 
                trusted partner in bringing quality products to market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-success text-lg px-8 py-4">
                  <a href="#inquiry-form">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button asChild className="btn-outline-success text-lg px-8 py-4">
                  <a href="#capabilities">
                    Explore Our Capabilities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Action-Oriented Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                Launch Your Own Brand with Riverhead's Quality
              </h2>
              <p className="text-lg text-body leading-relaxed mb-8">
                Leverage our decades of expertise in sourcing, packaging, and distributing high-quality grains and legumes for your own private label. We offer an end-to-end solution, ensuring your brand benefits from our commitment to excellence and competitive pricing, thanks to our control over the entire post-harvest production chain.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">60+</div>
                  <div className="text-sm text-muted">Years of Experience</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted">Successful Brands Launched</div>
                </div>
                <div className="text-center p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted">Quality Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                Our Private Label Capabilities
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                End-to-end services to bring your vision to life, from initial concept to market delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <capability.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-dark-green mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-muted mb-4">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                  Why Choose Riverhead for Private Label?
                </h2>
                <p className="text-lg text-body mb-8 leading-relaxed">
                  Partner with a company that understands both quality and business. Our private label 
                  services are designed to help you succeed in the competitive food market.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-body">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop"
                  alt="Private label services"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold text-dark-green">Dedicated Account Manager</p>
                    <p className="text-xs text-muted">Personal support throughout your project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Private Label Inquiry Form */}
        <section id="inquiry-form" className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                  Start Your Private Label Project
                </h2>
                <p className="text-lg text-muted">
                  Tell us about your vision and we'll provide a customized proposal for your private label needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-xl font-semibold text-dark-green mb-6">Company Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Company Name *
                        </label>
                        <Input
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
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
                          value={formData.contactName}
                          onChange={handleInputChange}
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
                          value={formData.email}
                          onChange={handleInputChange}
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
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-xl font-semibold text-dark-green mb-6">Project Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Project Type *
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-brand">New Brand Launch</SelectItem>
                            <SelectItem value="line-extension">Product Line Extension</SelectItem>
                            <SelectItem value="co-packing">Co-Packing Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-body mb-4">
                          Product Categories of Interest *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {productCategories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={`category-${category}`}
                                checked={formData.productCategories.includes(category)}
                                onCheckedChange={(checked) => 
                                  handleCategoryChange(category, checked as boolean)
                                }
                              />
                              <label
                                htmlFor={`category-${category}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                        {formData.productCategories.includes('Other') && (
                          <div className="mt-4">
                            <Input
                              name="otherCategory"
                              value={formData.otherCategory}
                              onChange={handleInputChange}
                              placeholder="Please specify other product type"
                            />
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-body mb-2">
                            Estimated Volume
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('estimatedVolume', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select volume" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10000">Under 10,000 lbs annually</SelectItem>
                              <SelectItem value="10000-50000">10,000 - 50,000 lbs annually</SelectItem>
                              <SelectItem value="50000-100000">50,000 - 100,000 lbs annually</SelectItem>
                              <SelectItem value="over-100000">Over 100,000 lbs annually</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-body mb-2">
                            Timeline
                          </label>
                          <Select onValueChange={(value) => handleSelectChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3-months">Within 3 months</SelectItem>
                              <SelectItem value="6-months">3-6 months</SelectItem>
                              <SelectItem value="12-months">6-12 months</SelectItem>
                              <SelectItem value="over-12-months">Over 12 months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Project Budget Range
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-50k">Under $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="over-250k">Over $250,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-body mb-2">
                          Project Description *
                        </label>
                        <Textarea
                          name="projectDescription"
                          required
                          value={formData.projectDescription}
                          onChange={handleInputChange}
                          placeholder="Please describe your project goals, target market, specific requirements, and any other relevant details..."
                          rows={6}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-6">
                    <Button type="submit" className="btn-success text-lg px-12 py-4">
                      Submit Private Label Inquiry
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="text-sm text-muted mt-4">
                      Our private label specialists will contact you within 48 hours to discuss your project.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PrivateLabel;
