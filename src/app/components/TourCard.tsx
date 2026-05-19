import { Clock, DollarSign, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TourCardProps {
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: number;
  image: string;
  highlights: string[];
  onBook: () => void;
}

export function TourCard({ title, location, duration, price, rating, image, highlights, onBook }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {location}
        </div>
      </div>

      <div className="p-5">
        <h4 className="text-xl font-bold mb-2">{title}</h4>

        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">({rating}.0)</span>
        </div>

        <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            <span className="font-semibold text-orange-600">{price}</span>
          </div>
        </div>

        <div className="border-t pt-3">
          <p className="text-sm font-semibold mb-2">Tour Highlights:</p>
          <ul className="text-sm text-gray-600 space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index}>✓ {highlight}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={onBook}
          className="w-full mt-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded-lg transition-colors duration-200 font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
