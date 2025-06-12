import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Star, Award, Leaf, Clock, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data
  const product = {
    id: '1',
    name: 'Premium Black Beans',
    category: 'Beans',
    description: 'Our Premium Black Beans are carefully selected from the finest harvests, offering exceptional flavor, texture, and nutritional value. Perfect for a wide variety of dishes from traditional Latin American cuisine to modern fusion recipes.',
    images: [
      'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1623770310294-a7de8e9265a9?w=600&h=600&fit=crop'
    ],
    availableSizes: ['1 lb', '2 lb', '5 lb', '10 lb'],
    features: [
      'Premium quality beans sourced from trusted growers',
      'Rich in protein, fiber, and essential minerals',
      'Perfect texture that holds up well in cooking',
      'Carefully cleaned and sorted for consistency',
      'No artificial additives or preservatives'
    ],
    nutritionalInfo: {
      servingSize: '1/4 cup dry (45g)',
      calories: 170,
      protein: '11g',
      carbohydrates: '30g',
      fiber: '11g',
      iron: '2.3mg'
    },
    cookingInstructions: [
      'Rinse beans and remove any debris',
      'Soak overnight in water (optional but recommended)',
      'Drain and rinse soaked beans',
      'Add to pot with 3 cups water per 1 cup beans',
      'Bring to boil, then simmer 60-90 minutes until tender',
      'Season as desired'
    ],
    certifications: ['Non-GMO', 'Gluten-Free', 'Kosher']
  };

  const relatedProducts = [
    {
      id: '4',
      name: 'Red Kidney Beans',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=220&fit=crop',
      category: 'Beans',
      description: 'Premium red kidney beans perfect for chili, soups, and hearty stews.',
      sizes: ['1 lb', '2 lb', '5 lb', '10 lb']
    },
    {
      id: '6',
      name: 'Navy Beans',
      image: 'https://images.unsplash.com/photo-1623770310294-a7de8e9265a9?w=400&h=220&fit=crop',
      category: 'Beans',
      description: 'Classic navy beans ideal for baked beans and hearty soups.',
      sizes: ['1 lb', '2 lb', '5 lb']
    },
    {
      id: '3',
      name: 'Organic Quinoa',
      image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=400&h=220&fit=crop',
      category: 'Grains',
      description: 'Certified organic quinoa packed with protein and essential amino acids.',
      sizes: ['1 lb', '2 lb', '5 lb']
    }
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Breadcrumb */}
        <section className="py-4 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span>/</span>
              <span className="text-body">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg border">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-dark-green mt-4 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-body leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-green mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Sizes */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-green mb-4">Available Retail Sizes</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {product.availableSizes.map((size) => (
                      <div
                        key={size}
                        className="aspect-square bg-primary/5 border-2 border-primary/20 rounded-lg flex items-center justify-center"
                      >
                        <span className="text-lg font-semibold text-dark-green">{size}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-xl font-semibold text-dark-green mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Full Description</TabsTrigger>
                <TabsTrigger value="nutrition">Nutritional Information</TabsTrigger>
                <TabsTrigger value="cooking">Preparation & Cooking</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-8">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-dark-green mb-4">Full Description</h3>
                  <div className="prose max-w-none text-body">
                    <p className="mb-4">
                      Our Premium Black Beans represent the finest quality available in the market today. 
                      Sourced from carefully selected farms known for their commitment to sustainable farming 
                      practices, these beans offer exceptional nutritional value and culinary versatility.
                    </p>
                    <p className="mb-4">
                      Black beans are an excellent source of plant-based protein, making them perfect for 
                      vegetarian and vegan diets. They're also rich in fiber, folate, potassium, and antioxidants, 
                      contributing to heart health and overall wellness.
                    </p>
                    <p>
                      Whether you're preparing traditional dishes like Cuban black beans and rice, hearty soups, 
                      modern grain bowls, or innovative fusion cuisine, these premium black beans deliver 
                      consistent results every time.
                    </p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="nutrition" className="mt-8">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-dark-green mb-4">Nutritional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Per Serving ({product.nutritionalInfo.servingSize})</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Calories</span>
                          <span className="font-medium">{product.nutritionalInfo.calories}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Protein</span>
                          <span className="font-medium">{product.nutritionalInfo.protein}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carbohydrates</span>
                          <span className="font-medium">{product.nutritionalInfo.carbohydrates}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiber</span>
                          <span className="font-medium">{product.nutritionalInfo.fiber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Iron</span>
                          <span className="font-medium">{product.nutritionalInfo.iron}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Health Benefits</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <Heart className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-sm">Supports heart health</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Leaf className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-sm">High in antioxidants</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-sm">Excellent protein source</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="cooking" className="mt-8">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-dark-green mb-4">Preparation & Cooking</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        Cooking Instructions
                      </h4>
                      <ol className="space-y-2 text-sm">
                        {product.cookingInstructions.map((instruction, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0">
                              {index + 1}
                            </span>
                            <span>{instruction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Cooking Tips</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Soaking reduces cooking time by 25-30%</li>
                        <li>• Add salt only after beans are tender</li>
                        <li>• Store cooked beans in refrigerator for up to 5 days</li>
                        <li>• Freeze cooked beans for up to 6 months</li>
                        <li>• One cup dry beans yields about 3 cups cooked</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="certifications" className="mt-8">
                <div className="bg-white rounded-lg p-8">
                  <h3 className="text-2xl font-semibold text-dark-green mb-4">Certifications & Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.certifications.map((cert, index) => (
                      <div key={index} className="text-center p-6 border rounded-lg">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="font-semibold text-dark-green">{cert}</h4>
                        <p className="text-sm text-muted mt-2">
                          Certified to meet the highest standards for quality and safety.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-dark-green mb-8 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProductDetail;
