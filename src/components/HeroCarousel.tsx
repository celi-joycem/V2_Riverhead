
import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=600&fit=crop',
      title: '',
      description: '',
      ctaText: '',
      ctaLink: '/products?category=beans',
      hasButton: false
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=1200&h=600&fit=crop',
      title: '',
      description: '',
      ctaText: '',
      ctaLink: '/products?category=rice',
      hasButton: false
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=1200&h=600&fit=crop',
      title: '',
      description: '',
      ctaText: '',
      ctaLink: '/products?category=grains',
      hasButton: false
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=1200&h=600&fit=crop',
      title: 'Pantry Essentials, Elevated.',
      description: 'Riverhead offers a comprehensive array of premium beans, rice, and essential grains. Every item is meticulously chosen from the finest sources, bringing trusted quality and exceptional taste to your everyday cooking and special family gatherings.',
      ctaText: 'Explore All Products',
      ctaLink: '/products',
      hasButton: true
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=1200&h=600&fit=crop',
      title: 'Discover Our Finest Beans.',
      description: "Riverhead's premium beans are selected from the best harvests for exceptional taste and texture in every dish.",
      ctaText: 'See Our Bean Selection',
      ctaLink: '/products?category=beans',
      hasButton: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Link to={slide.ctaLink} className="block h-full">
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              {slide.hasButton && (
                <div className="absolute inset-0 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-white animate-fade-in">
                      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
                        {slide.description}
                      </p>
                      <Button 
                        asChild 
                        size="lg" 
                        className="btn-success text-lg px-8 py-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link to={slide.ctaLink}>
                          {slide.ctaText}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
