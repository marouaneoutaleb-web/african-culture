import { useState } from 'react';
import { X, MapPin, Camera, Users, Landmark, Sun, Cloud, Utensils, Music, ShoppingBag, Plane, Calendar, Globe2, DollarSign, Languages, Award, Heart, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
  city: {
    name: string;
    country: string;
    description: string;
    image: string;
    culturalHighlights: string[];
    bestTimeToVisit: string;
    countryInfo: {
      capital: string;
      language: string;
      currency: string;
      population: string;
    };
    galleries: string[];
    attractions: string[];
  };
}

export function CityDetailModal({ isOpen, onClose, onBook, city }: CityDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'attractions' | 'culture' | 'gallery'>('overview');

  if (!isOpen) return null;

  const experiences = [
    { icon: Utensils, label: 'Local Cuisine', color: 'orange' },
    { icon: Music, label: 'Live Music', color: 'purple' },
    { icon: ShoppingBag, label: 'Markets', color: 'blue' },
    { icon: Camera, label: 'Photography', color: 'green' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-200">
      <div className="flex items-center justify-center min-h-screen">
        {/* Backdrop overlay layer */}
        <div className="fixed inset-0 bg-black transition-opacity" onClick={onClose}></div>

        {/* Full screen modal card body */}
        <div className="relative bg-white w-screen h-screen min-h-screen transform transition-all overflow-y-auto flex flex-col">
           {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all shadow-lg hover:scale-110"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Hero Section with Parallax Effect */}
          <div className="relative h-96 overflow-hidden">
            <ImageWithFallback
              src={city.image}
              alt={`${city.name}, ${city.country}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            {/* Floating Stats */}
            <div className="absolute top-6 left-6 flex gap-3">
              <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9/5</span>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-xl px-4 py-2 border border-white/30">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-4 h-4" />
                  <span className="font-semibold">2.5k Travelers</span>
                </div>
              </div>
            </div>

            {/* City Title */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Featured Destination
                    </span>
                  </div>
                  <h2 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">{city.name}</h2>
                  <p className="text-2xl text-white/90 flex items-center gap-2 drop-shadow-md">
                    <MapPin className="w-6 h-6" />
                    {city.country}
                  </p>
                </div>
                <button
                  onClick={onBook}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center gap-2"
                >
                  <Plane className="w-5 h-5" />
                  Book Tour Now
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
            <div className="flex gap-2 p-2 max-w-4xl mx-auto">
              {[
                { id: 'overview', label: 'Overview', icon: Globe2 },
                { id: 'attractions', label: 'Attractions', icon: Landmark },
                { id: 'culture', label: 'Culture', icon: Users },
                { id: 'gallery', label: 'Gallery', icon: Camera }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-orange-600 shadow-md'
                      : 'text-gray-600 hover:bg-white/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="overflow-y-auto max-h-[50vh] p-8">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div>
                  <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    <Award className="w-8 h-8 text-orange-500" />
                    About {city.name}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{city.description}</p>
                </div>

                {/* Country Info Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
                    <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Capital</p>
                    <p className="font-bold text-gray-900">{city.countryInfo.capital}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
                    <Languages className="w-8 h-8 text-purple-600 mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Language</p>
                    <p className="font-bold text-gray-900 text-sm">{city.countryInfo.language.split(',')[0]}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200">
                    <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Currency</p>
                    <p className="font-bold text-gray-900 text-sm">{city.countryInfo.currency.split('(')[0]}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border border-orange-200">
                    <Users className="w-8 h-8 text-orange-600 mb-3" />
                    <p className="text-sm text-gray-600 mb-1">Population</p>
                    <p className="font-bold text-gray-900">{city.countryInfo.population}</p>
                  </div>
                </div>

                {/* Best Time to Visit */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Best Time to Visit</h4>
                      <p className="text-gray-700">{city.bestTimeToVisit}</p>
                      <p className="text-sm text-gray-600 mt-2">Perfect weather for exploring and cultural experiences</p>
                    </div>
                  </div>
                </div>

                {/* Experiences Grid */}
                <div>
                  <h4 className="font-bold text-xl mb-4">What to Experience</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {experiences.map((exp, index) => (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-200 hover:border-orange-500 p-5 rounded-xl text-center transition-all hover:shadow-lg cursor-pointer group"
                      >
                        <exp.icon className={`w-10 h-10 mx-auto mb-3 text-${exp.color}-500 group-hover:scale-110 transition-transform`} />
                        <p className="font-semibold text-gray-700">{exp.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Attractions Tab */}
            {activeTab === 'attractions' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Landmark className="w-8 h-8 text-orange-500" />
                  Top Attractions in {city.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {city.attractions.map((attraction, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-orange-500 p-5 rounded-xl transition-all hover:shadow-xl cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 group-hover:bg-orange-500 p-3 rounded-lg transition-colors">
                          <Landmark className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1 group-hover:text-orange-600 transition-colors">{attraction}</h4>
                          <p className="text-sm text-gray-600">Must-see destination</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Culture Tab */}
            {activeTab === 'culture' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-orange-500" />
                  Cultural Highlights
                </h3>
                <div className="space-y-4">
                  {city.culturalHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 p-6 rounded-xl hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-500 p-3 rounded-full text-white font-bold text-lg min-w-12 h-12 flex items-center justify-center">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg font-semibold text-gray-800">{highlight}</p>
                          <p className="text-sm text-gray-600 mt-1">Experience authentic local traditions and customs</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Camera className="w-8 h-8 text-orange-500" />
                  Photo Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {city.galleries.map((photo, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                    >
                      <ImageWithFallback
                        src={photo}
                        alt={`${city.name} gallery ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="font-semibold">{city.name} View {index + 1}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Bar */}
          <div className="border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">$899+</p>
                <p className="text-sm text-gray-600">Starting from</p>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <p className="text-sm text-gray-600">5-7 Day Tours</p>
                <p className="text-sm text-gray-600">Expert Local Guides</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="border-2 border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Close
              </button>
              <button
                onClick={onBook}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <Plane className="w-5 h-5" />
                Book Your Adventure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
