
import React from 'react';
import Layout from '@/components/Layout';

const Privacy = () => {
  return (
    <Layout>
      <div className="bg-white">
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted">Last updated: January 1, 2024</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8 text-body">
                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Information We Collect</h2>
                  <p>
                    At Riverhead Foods, we collect information you provide directly to us, such as when you 
                    create an account, make a purchase, subscribe to our newsletter, or contact us for support.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Communicate about products, services, and events</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Information Sharing</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy, please contact us at 
                    privacy@riverheadfoods.com or (555) 123-4567.
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

export default Privacy;
