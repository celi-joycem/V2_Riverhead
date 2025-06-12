
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Sitemap = () => {
  const sitePages = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Our Brand', path: '/our-brand' },
        { name: 'Where to Buy', path: '/where-to-buy' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Business Services',
      links: [
        { name: 'For Your Business', path: '/for-your-business' },
        { name: 'Private Label', path: '/private-label' }
      ]
    },
    {
      title: 'Support & Information',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'Sitemap', path: '/sitemap' }
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Sitemap
              </h1>
              <p className="text-lg text-muted">
                Find all pages and sections of the Riverhead Foods website organized by category.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sitePages.map((section, index) => (
                  <div key={index} className="bg-white border rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-dark-green mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Sitemap;
