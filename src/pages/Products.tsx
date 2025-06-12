
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, Download, X } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('name-asc');

  // Sample products data
  const allProducts = [
    {
      id: '1',
      name: 'Premium Black Beans',
      image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=220&fit=crop',
      category: 'Beans',
      description: 'Carefully selected black beans with rich flavor and perfect texture for any dish.',
      sizes: ['1 lb', '2 lb', '5 lb', '10 lb']
    },
    {
      id: '2',
      name: 'Jasmine Rice',
      image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=400&h=220&fit=crop',
      category: 'Rice',
      description: 'Aromatic jasmine rice with a delicate fragrance and fluffy texture.',
      sizes: ['2 lb', '5 lb', '10 lb', '25 lb']
    },
    {
      id: '3',
      name: 'Organic Quinoa',
      image: 'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=400&h=220&fit=crop',
      category: 'Grains',
      description: 'Certified organic quinoa packed with protein and essential amino acids.',
      sizes: ['1 lb', '2 lb', '5 lb']
    },
    {
      id: '4',
      name: 'Red Kidney Beans',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=220&fit=crop',
      category: 'Beans',
      description: 'Premium red kidney beans perfect for chili, soups, and hearty stews.',
      sizes: ['1 lb', '2 lb', '5 lb', '10 lb']
    },
    {
      id: '5',
      name: 'Basmati Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=220&fit=crop',
      category: 'Rice',
      description: 'Premium long-grain basmati rice with exceptional aroma and flavor.',
      sizes: ['2 lb', '5 lb', '10 lb', '20 lb']
    },
    {
      id: '6',
      name: 'Navy Beans',
      image: 'https://images.unsplash.com/photo-1623770310294-a7de8e9265a9?w=400&h=220&fit=crop',
      category: 'Beans',
      description: 'Classic navy beans ideal for baked beans and hearty soups.',
      sizes: ['1 lb', '2 lb', '5 lb']
    }
  ];

  const categories = ['Beans', 'Rice', 'Grains'];
  const packSizes = ['1 lb', '2 lb', '5 lb', '10 lb', '20 lb', '25 lb'];

  const filteredProducts = allProducts.filter((product) => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) {
      return false;
    }
    return true;
  });

  // Convert size to number for sorting
  const getSizeNumber = (size: string) => {
    return parseInt(size.replace(' lb', ''));
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      case 'category-asc':
        return a.category.localeCompare(b.category);
      case 'category-desc':
        return b.category.localeCompare(a.category);
      case 'size-asc':
        return Math.min(...a.sizes.map(getSizeNumber)) - Math.min(...b.sizes.map(getSizeNumber));
      case 'size-desc':
        return Math.max(...b.sizes.map(getSizeNumber)) - Math.max(...a.sizes.map(getSizeNumber));
      default:
        return 0;
    }
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSortBy('name-asc');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedSizes.length > 0;

  return (
    <Layout>
      <div className="bg-white">
        {/* Page Header */}
        <section className="py-12 section-bg-light">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-green mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Explore our complete selection of premium beans, rice, and grains, 
              each carefully sourced for exceptional quality and taste.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className="lg:w-64 flex-shrink-0">
                <div className="sticky top-4 space-y-6">
                  {/* Filter Controls */}
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-dark-green">Filters</h3>
                      {hasActiveFilters && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={clearFilters}
                          className="text-muted hover:text-primary"
                        >
                          <X className="h-4 w-4 mr-1" />
                          Clear
                        </Button>
                      )}
                    </div>
                    <Button 
                      onClick={clearFilters}
                      className="w-full btn-success"
                      disabled={!hasActiveFilters}
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  </div>

                  {/* Category Filter */}
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-dark-green mb-4">Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
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
                  </div>

                  {/* Pack Size Filter */}
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-dark-green mb-4">Pack Size</h3>
                    <div className="space-y-3">
                      {packSizes.map((size) => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox
                            id={`size-${size}`}
                            checked={selectedSizes.includes(size)}
                            onCheckedChange={(checked) => 
                              handleSizeChange(size, checked as boolean)
                            }
                          />
                          <label
                            htmlFor={`size-${size}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sort By */}
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-semibold text-dark-green mb-4">Sort By</h3>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                        <SelectItem value="category-asc">Category (A-Z)</SelectItem>
                        <SelectItem value="category-desc">Category (Z-A)</SelectItem>
                        <SelectItem value="size-asc">Size (Smallest)</SelectItem>
                        <SelectItem value="size-desc">Size (Largest)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Full Catalog Section */}
                  <div className="pt-4">
                    <h4 className="text-lg font-medium text-dark-green mb-3">Full Catalog</h4>
                    <p className="text-sm text-muted mb-4">
                      View all our products in one place.
                    </p>
                    <Button className="w-full btn-outline-success">
                      <Download className="h-4 w-4 mr-2" />
                      Download Catalog
                    </Button>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <main className="flex-1">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-6">
                  <p className="text-muted">
                    Showing {sortedProducts.length} products
                  </p>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Products Display */}
                <div className={
                  viewMode === 'grid' 
                    ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                    : 'space-y-4'
                }>
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="default" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Products;
