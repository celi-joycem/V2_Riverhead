
import React from 'react';
import { ArrowRight, Heart, Award, Users, Leaf } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OurBrand = () => {
  const values = [
    {
      icon: Award,
      title: 'Clarity in Quality',
      description: 'We are transparent about the quality of our products, ensuring you get the best.'
    },
    {
      icon: Heart,
      title: 'Fair Price',
      description: 'Offering premium products at competitive and just prices.'
    },
    {
      icon: Users,
      title: 'Reliable Service',
      description: 'Committed to consistent and dependable service for all our partners.'
    },
    {
      icon: Leaf,
      title: 'Tradition & Expertise',
      description: 'Leveraging generations of experience to bring you the best.'
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="relative py-20 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-dark-green mb-6">
                Our Brand: A Legacy of Quality
              </h1>
              <p className="text-xl text-body leading-relaxed mb-8">
                Since the 1960s, Riverhead Foods has been a trusted name in premium beans, rice, and grains. 
                Our commitment to quality, tradition, and expertise has made us a cornerstone of 
                kitchens everywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-success">
                  <Link to="/products">
                    Explore Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild className="btn-outline-success">
                  <Link to="/for-your-business">
                    Business Partnerships
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-body leading-relaxed">
                  <p>
                    Founded in the 1960s by Bernie Levine, our company began as a humble food brokerage firm 
                    with a specialization in rice and beans. Bernie's dedication to quality and fair dealing 
                    laid the groundwork for what would become a multi-generational family business.
                  </p>
                  <p>
                    In the 1990s, his sons-in-law joined the company, bringing new energy and expanding our horizons. 
                    The family tradition continued when Bernie's grandson came aboard in 2006, infusing three 
                    generations of passion and expertise into the business.
                  </p>
                  <p>
                    Recognizing the need for a consistent, high-quality brand that consumers could trust, 
                    Metro Commodities, Inc. was incorporated in 2009. Soon after, we proudly launched Riverhead – 
                    a brand dedicated to controlling the selection, packaging, and distribution of the finest 
                    legumes, rice, and grains.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop"
                  alt="Riverhead Foods heritage"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-4xl font-bold text-primary">60+</p>
                  <p className="text-sm text-muted">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-dark-green mb-4">Our Mission</h3>
                  <p className="text-body leading-relaxed">
                    To represent quality, consistency, and competitiveness in the market of legumes, rice, and grains 
                    for your home. We strive to be the brand you trust for nutritious and delicious pantry staples.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-dark-green mb-4">Our Vision</h3>
                  <p className="text-body leading-relaxed">
                    To be the most trusted family brand that brings wholesome, high-quality pantry essentials to 
                    families everywhere, enriching meals and fostering traditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                The principles that guide everything we do, from sourcing to customer service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-dark-green mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Sourcing */}
        <section className="py-16 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
                  alt="Quality sourcing"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm">Quality Guaranteed</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                  Sourced with Care, Packed with Pride
                </h2>
                <div className="space-y-6 text-body leading-relaxed">
                  <p>
                    We prioritize sourcing our products domestically from farms across the United States and Canada. 
                    This focus allows us to maintain strict quality control, ensure freshness, and support local 
                    agricultural communities.
                  </p>
                  <p>
                    While North American sourcing is our preference, some specialty products are sourced from their 
                    native regions to guarantee authenticity and the highest quality. Every Riverhead product undergoes 
                    rigorous selection.
                  </p>
                  <p>
                    Our quality team maintains personal relationships with growers and suppliers, ensuring that our 
                    standards are met every step of the way from farm to your table.
                  </p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted">Partner Farms</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <p className="text-2xl font-bold text-primary">2</p>
                    <p className="text-sm text-muted">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Riverhead Promise */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
                The Riverhead Promise
              </h2>
              <p className="text-xl text-body leading-relaxed mb-8">
                Our family tradition and deep-rooted expertise in selecting and handling grains and legumes 
                guarantees that every Riverhead product you bring into your home is of high quality, offering 
                exceptional taste and value for your family's meals. We are committed to being your trusted 
                source for pantry staples.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 border rounded-lg">
                  <h4 className="font-semibold text-dark-green mb-2">Quality Guarantee</h4>
                  <p className="text-sm text-muted">Every product meets our exacting standards or we'll make it right.</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h4 className="font-semibold text-dark-green mb-2">Consistent Supply</h4>
                  <p className="text-sm text-muted">Reliable availability of your favorite products year-round.</p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h4 className="font-semibold text-dark-green mb-2">Expert Support</h4>
                  <p className="text-sm text-muted">Our team is here to help with product questions and culinary advice.</p>
                </div>
              </div>
              <Button asChild className="btn-success text-lg px-8 py-4">
                <Link to="/products">
                  Experience Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OurBrand;
