
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  description?: string;
  sizes?: string[];
  featured?: boolean;
}

const ProductCard = ({ 
  id, 
  name, 
  image, 
  category, 
  description, 
  sizes, 
  featured = false 
}: ProductCardProps) => {
  const imageHeight = featured ? 'h-72' : 'h-56';
  
  return (
    <div className="product-card group">
      <Link to={`/products/${id}`} className="block">
        <div className={`${imageHeight} overflow-hidden rounded-t-lg`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-dark-green mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          {description && (
            <p className="text-muted text-sm mb-3 line-clamp-2">
              {description}
            </p>
          )}
          {sizes && sizes.length > 0 && (
            <p className="text-xs text-muted mb-4">
              Available in: {sizes.slice(0, 2).join(', ')}
              {sizes.length > 2 && ` +${sizes.length - 2} more`}
            </p>
          )}
          <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            View Details
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
