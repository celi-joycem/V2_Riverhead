import React from 'react';
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      id: '1',
      question: 'What makes Riverhead Foods products different from other brands?',
      answer: 'Riverhead Foods has been committed to quality for over 60 years. We carefully source our products from trusted growers, conduct rigorous quality testing, and maintain consistent standards. Our products are free from artificial additives and preservatives, ensuring you get natural, wholesome ingredients for your family.'
    },
    {
      id: '2',
      question: 'Where can I buy Riverhead Foods products?',
      answer: 'Our products are available at major grocery chains, health food stores, and specialty retailers across the country. Use our store locator on the "Where to Buy" page to find retailers near you. We\'re also working to expand our distribution network continuously.'
    },
    {
      id: '3',
      question: 'Do you offer organic options?',
      answer: 'Yes! We offer a selection of certified organic products, including organic quinoa, organic brown rice, and organic beans. Look for the "Organic" label on our packaging or check our product listings online for our complete organic range.'
    },
    {
      id: '4',
      question: 'How should I store Riverhead Foods products?',
      answer: 'Store our products in a cool, dry place away from direct sunlight. Once opened, transfer contents to airtight containers to maintain freshness. Properly stored, our products typically maintain quality for 2-3 years from the manufacture date printed on the package.'
    },
    {
      id: '5',
      question: 'Are your products gluten-free?',
      answer: 'Most of our beans, rice, and many grain products are naturally gluten-free. However, we recommend checking individual product labels for specific gluten-free certifications, as processing facilities may vary. Products with gluten-free certification are clearly marked on our packaging.'
    },
    {
      id: '6',
      question: 'Do you offer bulk or wholesale purchasing?',
      answer: 'Yes! We offer wholesale purchasing for retailers, foodservice operations, and bulk buyers. Visit our "For Your Business" page to learn about wholesale pricing, minimum orders, and how to become a wholesale partner. Our team is ready to work with you on custom solutions.'
    },
    {
      id: '7',
      question: 'What is your return/satisfaction policy?',
      answer: 'We stand behind the quality of our products 100%. If you\'re not completely satisfied with any Riverhead Foods product, contact us with your purchase details and we\'ll work to make it right. Your satisfaction is our top priority.'
    },
    {
      id: '8',
      question: 'Do you offer private label services?',
      answer: 'Absolutely! We provide comprehensive private label services including sourcing, custom packaging, and distribution. Our experienced team can help you develop your own brand of premium beans, rice, and grains. Visit our Private Label page or contact us for more information.'
    },
    {
      id: '9',
      question: 'How can I get nutritional information for your products?',
      answer: 'Detailed nutritional information is available on each product page on our website. You can also find nutrition facts on our product packaging. For specific dietary questions or allergen information, please contact our customer service team.'
    },
    {
      id: '10',
      question: 'Do you ship directly to consumers?',
      answer: 'Currently, we focus on retail distribution through our network of store partners. Use our store locator to find Riverhead Foods products near you. For special circumstances or bulk orders, please contact our customer service team to discuss options.'
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Page Header */}
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-muted">
                Find answers to common questions about Riverhead Foods products, 
                ordering, and services. Can't find what you're looking for? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem 
                    key={faq.id} 
                    value={faq.id}
                    className="bg-white border rounded-xl px-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AccordionTrigger className="text-left text-dark-green font-medium hover:text-primary text-sm transition-colors duration-200 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-body leading-relaxed pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              {/* Contact Section */}
              <div className="mt-12 p-8 section-bg-light rounded-xl text-center">
                <h3 className="text-2xl font-semibold text-dark-green mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-body mb-6">
                  Our customer service team is here to help with any questions about our products, 
                  ordering, or services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="btn-success rounded-xl"
                  >
                    Contact Us
                  </Link>
                  <a 
                    href="tel:5551234567"
                    className="btn-outline-success rounded-xl"
                  >
                    Call (555) 123-4567
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

export default FAQ;
