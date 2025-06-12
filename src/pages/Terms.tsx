
import React from 'react';
import Layout from '@/components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="bg-white">
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
                Terms of Use
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
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Acceptance of Terms</h2>
                  <p>
                    By accessing and using the Riverhead Foods website, you accept and agree to be bound 
                    by the terms and provision of this agreement.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on Riverhead Foods' 
                    website for personal, non-commercial transitory viewing only.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Disclaimer</h2>
                  <p>
                    The materials on Riverhead Foods' website are provided on an 'as is' basis. 
                    Riverhead Foods makes no warranties, expressed or implied.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-dark-green mb-4">Contact Information</h2>
                  <p>
                    Questions about the Terms of Use should be sent to us at legal@riverheadfoods.com.
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

export default Terms;
