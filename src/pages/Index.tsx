import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Heart, DollarSign, Download, MapPin, Building, ChevronDown, HelpCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import HeroCarousel from '@/components/HeroCarousel';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Premium Black Beans',
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=280&fit=crop',
      category: 'Beans',
      description: 'Carefully selected black beans with rich flavor and perfect texture for any dish.',
      sizes: ['1 lb', '2 lb', '5 lb', '10 lb']
    },
    {
      id: '2',
      name: 'Jasmine Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=280&fit=crop',
      category: 'Rice',
      description: 'Aromatic jasmine rice with a delicate fragrance and fluffy texture.',
      sizes: ['2 lb', '5 lb', '10 lb', '25 lb']
    },
    {
      id: '3',
      name: 'Organic Quinoa',
      image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=400&h=280&fit=crop',
      category: 'Grains',
      description: 'Certified organic quinoa packed with protein and essential amino acids.',
      sizes: ['1 lb', '2 lb', '5 lb']
    },
    {
      id: '4',
      name: 'Red Kidney Beans',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=280&fit=crop',
      category: 'Beans',
      description: 'Premium red kidney beans perfect for chili, soups, and hearty stews.',
      sizes: ['1 lb', '2 lb', '5 lb', '10 lb']
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Naturally Nutritious',
      description: 'Our products are naturally rich in nutrients, providing wholesome nourishment for your family.'
    },
    {
      icon: Heart,
      title: 'Versatile & Delicious',
      description: 'From everyday meals to special occasions, our products enhance every culinary creation.'
    },
    {
      icon: Award,
      title: 'Consistent Quality',
      description: 'Every batch meets our rigorous standards, ensuring reliable results in your kitchen.'
    },
    {
      icon: DollarSign,
      title: 'Great Value',
      description: 'Premium quality at fair prices, delivering exceptional value for families and businesses.'
    }
  ];

  const quickFaqs = [
    {
      id: '1',
      question: 'What makes Riverhead Foods products different?',
      answer: 'We\'ve been committed to quality for over 60 years, carefully sourcing from trusted growers and maintaining rigorous standards without artificial additives.'
    },
    {
      id: '2',
      question: 'Where can I buy your products?',
      answer: 'Our products are available at major grocery chains and specialty retailers nationwide. Use our store locator to find retailers near you.'
    },
    {
      id: '3',
      question: 'Do you offer organic options?',
      answer: 'Yes! We offer certified organic quinoa, brown rice, beans, and more. Look for the "Organic" label on our packaging.'
    },
    {
      id: '4',
      question: 'Are your products gluten-free?',
      answer: 'Most of our beans, rice, and many grain products are naturally gluten-free. Check individual labels for specific certifications.'
    },
    {
      id: '5',
      question: 'Do you offer wholesale purchasing?',
      answer: 'Absolutely! We provide wholesale options for retailers and foodservice operations. Visit our "For Your Business" page for details.'
    }
  ];

  return (
    <Layout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
              Featured Products - He editado esto
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover our most popular beans, rice, and grains, carefully selected for their exceptional quality and taste.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} featured />
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="btn-success rounded-xl px-8 py-3">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-16 section-bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
              Our Commitment to Quality & The Benefits For Your Kitchen
            </h2>
          </div>
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop"
                alt="Quality promise"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-dark-green mb-4">
                A Legacy of Quality & Trust Since 1960
              </h3>
              <p className="text-body leading-relaxed mb-6">
                For over six decades, Riverhead Foods has been committed to bringing families the finest beans, rice, and grains from around the world. Our dedication to quality sourcing, traditional values, and innovative packaging ensures that every product that bears our name meets the highest standards of excellence.
              </p>
              <p className="text-body leading-relaxed mb-6">
                We understand that the foundation of great cooking starts with great ingredients. That's why we work directly with trusted growers and suppliers, maintaining relationships built on mutual respect and shared commitment to quality.
              </p>
              <Link to="/our-brand" className="text-link">
                Learn More About Our Story
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-dark-green mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Catalog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                Explore Our Complete Product Catalog
              </h2>
              <p className="text-lg text-body mb-6 leading-relaxed">
                Download our comprehensive retail catalog to discover our full range of premium beans, rice, and grains. Perfect for exploring all available products and package sizes and formats.
              </p>
              <ul className="text-body mb-8 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Complete product listings with descriptions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Available package sizes and formats
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Easy product browsing and comparison
                </li>
              </ul>
              <Button className="btn-success text-lg px-8 py-4 rounded-xl">
                <Download className="mr-2 h-5 w-5" />
                Download Our Retail Catalog
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl shadow-lg">
                <div className="w-full h-80 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Download className="h-10 w-10 text-white" />
                    </div>
                    <p className="text-dark-green font-semibold">Riverhead Foods</p>
                    <p className="text-muted text-sm">2024 Product Catalog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-dark-green">
                    Quick Answers
                  </h2>
                </div>
                <p className="text-lg text-muted mb-6">
                  Find answers to our most commonly asked questions about products, ordering, and quality.
                </p>
                <Link to="/faq" className="text-link text-lg">
                  View All FAQs
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Accordion type="single" collapsible className="space-y-4">
                {quickFaqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-white border-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-dark-green font-medium hover:text-primary text-sm px-6 py-4 hover:no-underline transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-body leading-relaxed px-6 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-green mb-4">
                Find Our Products Locally
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Locate Riverhead Foods products at retailers near you. Our store locator makes it easy to find your favorite beans, rice, and grains.
              </p>
              <Button asChild className="btn-outline-success rounded-xl">
                <Link to="/where-to-buy">
                  Find Stores Near You
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-dark-green mb-4">
                For Businesses & Partners
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Discover wholesale opportunities, private label solutions, and partnership benefits for retailers and foodservice operations.
              </p>
              <Button asChild className="btn-outline-success rounded-xl">
                <Link to="/for-your-business">
                  Explore Business Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
