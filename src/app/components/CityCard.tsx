import { MapPin, Users, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CityCardProps {
  name: string;
  country: string;
  description: string;
  image: string;
  culturalHighlights: string[];
  bestTimeToVisit: string;
  onExplore: () => void;
}

export function CityCard({ name, country, description, image, culturalHighlights, bestTimeToVisit, onExplore }: CityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={`${name}, ${country}`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium">{country}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <Users className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm mb-1">Cultural Highlights:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {culturalHighlights.map((highlight, index) => (
                  <li key={index}>• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-500" />
            <div>
              <p className="font-semibold text-sm">Best Time to Visit:</p>
              <p className="text-sm text-gray-600">{bestTimeToVisit}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onExplore}
          className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
        >
          Explore Tours
        </button>
      </div>
    </div>
  );
}
