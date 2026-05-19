import { useState } from 'react';
import { CityCard } from './components/CityCard';
import { TourCard } from './components/TourCard';
import { CityDetailModal } from './components/CityDetailModal';
import { ProfilePage } from './components/ProfilePage';
import { BookingModal } from './components/BookingModal';
import { Compass, Globe, Heart, Map, User } from 'lucide-react';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [bookingModal, setBookingModal] = useState<{ isOpen: boolean; tourTitle?: string; cityName?: string }>({
    isOpen: false
  });

  const cities = [
    {
      name: "Marrakech",
      country: "Morocco",
      description: "A vibrant city where ancient medinas meet colorful souks, offering an immersive journey into North African culture.",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFyYWtlc2h8ZW58MHx8MHx8fDA%3D",
      culturalHighlights: [
        "Traditional souks and markets",
        "Jemaa el-Fnaa square with storytellers",
        "Berber cultural heritage"
      ],
      bestTimeToVisit: "March to May, September to November",
      countryInfo: {
        capital: "Rabat",
        language: "Arabic, Berber, French",
        currency: "Moroccan Dirham (MAD)",
        population: "37 million"
      },
      galleries: [
        "https://images.unsplash.com/photo-1771539091406-feccb76ec825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
        "https://images.unsplash.com/photo-1570289676648-8bc8ee1331c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
"https://images.unsplash.com/photo-1570133435536-7ececf000ef6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmFrZXNofGVufDB8fDB8fHww"      ],
      attractions: [
        "Bahia Palace",
        "Koutoubia Mosque",
        "Majorelle Garden",
        "Saadian Tombs",
        "Ben Youssef Madrasa",
        "Atlas Mountains"
      ]
    },
    {
      name: "Cape Town",
      country: "South Africa",
      description: "Where diverse cultures blend against the backdrop of Table Mountain, offering rich history and vibrant arts.",
      image: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      culturalHighlights: [
        "Bo-Kaap's colorful heritage",
        "Township culture and history",
        "Rich musical traditions"
      ],
      bestTimeToVisit: "November to March",
      countryInfo: {
        capital: "Pretoria (Executive), Cape Town (Legislative)",
        language: "11 official languages including English, Zulu, Xhosa",
        currency: "South African Rand (ZAR)",
        population: "60 million"
      },
      galleries: [
        "https://images.unsplash.com/photo-1474874055390-459bc92357f3?q=80&w=1281&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FwZSUyMHRvd258ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1570527141186-e391a3914c42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhcGUlMjB0b3dufGVufDB8fDB8fHww"
      ],
      attractions: [
        "Table Mountain",
        "Robben Island",
        "V&A Waterfront",
        "Bo-Kaap District",
        "Kirstenbosch Gardens",
        "Cape of Good Hope"
      ]
    },
    {
      name: "Zanzibar",
      country: "Tanzania",
      description: "An island paradise where Swahili culture thrives, blending Arab, Persian, and African influences.",
      image: "https://images.unsplash.com/photo-1607444807093-eefb769187da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8emFuemliYXJ8ZW58MHx8MHx8fDA%3D",
      culturalHighlights: [
        "Stone Town UNESCO site",
        "Spice plantations and trade history",
        "Swahili cultural festivals"
      ],
      bestTimeToVisit: "June to October",
      countryInfo: {
        capital: "Dodoma",
        language: "Swahili, English",
        currency: "Tanzanian Shilling (TZS)",
        population: "63 million"
      },
      galleries: [
        "https://images.unsplash.com/photo-1696299872422-0f72e707a037?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1746171130899-0bfbda5dc87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
"https://images.unsplash.com/photo-1672688920363-1837eed526f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8"      ],
      attractions: [
        "Stone Town",
        "Prison Island",
        "Spice Tours",
        "Jozani Forest",
        "Nungwi Beach",
        "Old Fort"
      ]
    },
    {
      name: "Antananarivo",
      country: "Madagascar",
      description: "Experience unique Malagasy culture in a city built on hills, with distinct traditions found nowhere else.",
      image: "https://plus.unsplash.com/premium_photo-1697730225889-8d7fccad86a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW50YW5hbmFyaXZvfGVufDB8fDB8fHww",
      culturalHighlights: [
        "Highland Malagasy traditions",
        "Unique handicrafts and textiles",
        "Local street food culture"
      ],
      bestTimeToVisit: "April to October",
      countryInfo: {
        capital: "Antananarivo",
        language: "Malagasy, French",
        currency: "Malagasy Ariary (MGA)",
        population: "29 million"
      },
      galleries: [
        "https://images.unsplash.com/photo-1766155673351-ee47ade87fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
        "https://images.unsplash.com/photo-1699622595987-9974344baed5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEFudGFuYW5hcml2b3xlbnwwfHwwfHx8MA%3D%3D",        
"https://images.unsplash.com/photo-1558694440-03ade9215d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkYWdhc2NhcnxlbnwwfHwwfHx8MA%3D%3D"      ],
      attractions: [
        "Rova of Antananarivo",
        "Avenue of the Baobabs",
        "Lemurs' Park",
        "Ambohimanga",
        "Analakely Market",
        "Tsimbazaza Zoo"
      ]
    },
    {
      name: "Accra",
      country: "Ghana",
      description: "Ghana's bustling capital celebrates West African heritage with vibrant markets, festivals, and historical sites.",
      image: "https://images.unsplash.com/photo-1630386226447-af0a955c1009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjcmF8ZW58MHx8MHx8fDA%3D",
      culturalHighlights: [
        "Vibrant festivals and celebrations",
        "Traditional Akan culture",
        "Historic slave trade sites"
      ],
      bestTimeToVisit: "November to March",
      countryInfo: {
        capital: "Accra",
        language: "English (official), Akan, Ewe, Ga",
        currency: "Ghanaian Cedi (GHS)",
        population: "33 million"
      },
      galleries: [
        "https://images.unsplash.com/photo-1589556045897-c444ffa0a6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFjY3JhfGVufDB8fDB8fHww",
         "https://images.unsplash.com/photo-1589133618187-2de779924903?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGFjY3JhfGVufDB8fDB8fHww",
"https://plus.unsplash.com/premium_photo-1677861403044-e13284c44cf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGFjY3JhfGVufDB8fDB8fHww"      ],
      attractions: [
        "Cape Coast Castle",
        "Elmina Castle",
        "Kakum National Park",
        "Labadi Beach",
        "Kwame Nkrumah Memorial",
        "Makola Market"
      ]
    },
    {
      name: "Essaouira",
      country: "Morocco",
      description: "A coastal gem where artists and musicians gather, showcasing Gnawa culture and traditional craftsmanship.",
      image: "https://plus.unsplash.com/premium_photo-1697730007162-3acd986a87f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXNzYW91aXJhfGVufDB8fDB8fHww",
      culturalHighlights: [
        "Gnawa music heritage",
        "Traditional woodwork and pottery",
        "Coastal fishing culture"
      ],
      bestTimeToVisit: "Year-round (mild climate)",
      countryInfo: {
        capital: "Rabat",
        language: "Arabic, Berber, French",
        currency: "Moroccan Dirham (MAD)",
        population: "37 million"
      },
      galleries: [
        "https://plus.unsplash.com/premium_photo-1699531223795-775fbf1cb44a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXNzYW91aXJhfGVufDB8fDB8fHww",
        "https://plus.unsplash.com/premium_photo-1701178885648-f5aa82458e90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGVzc2FvdWlyYXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1570289676648-8bc8ee1331c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
      ],
      attractions: [
        "Medina of Essaouira",
        "Skala de la Ville",
        "Essaouira Beach",
        "Gnaoua Festival Venue",
        "Port de Pêche",
        "Sidi Mohammed Ben Abdallah Museum"
      ]
    }
  ];

  const tours = [
    {
      title: "Marrakech Cultural Discovery",
      location: "Morocco",
      duration: "5 Days",
      price: "$899",
      rating: 5,
      image: "https://images.unsplash.com/photo-1771539091406-feccb76ec825?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      highlights: [
        "Guided medina and souk tours",
        "Traditional Moroccan cooking class",
        "Visit to local artisan workshops",
        "Sunset at Jemaa el-Fnaa square"
      ]
    },
    {
      title: "West African Heritage Trail",
      location: "Ghana",
      duration: "7 Days",
      price: "$1,299",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1661911767915-d85524fc1991?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdlc3QlMjBhZnJpY2F8ZW58MHx8MHx8fDA%3D",
      highlights: [
        "Elmina Castle and Cape Coast",
        "Traditional Ashanti villages",
        "Drum and dance workshops",
        "Local market experiences"
      ]
    },
    {
      title: "Zanzibar Spice & Culture Tour",
      location: "Tanzania",
      duration: "4 Days",
      price: "$749",
      rating: 5,
      image: "https://images.unsplash.com/photo-1746171130899-0bfbda5dc87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      highlights: [
        "Stone Town walking tours",
        "Spice plantation visits",
        "Swahili cooking experience",
        "Traditional dhow sailing"
      ]
    }
  ];

  if (showProfile) {
    return (
      <div>
        <nav className="bg-gradient-to-r from-orange-500 to-orange-600 py-4 shadow-lg">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <button
              onClick={() => setShowProfile(false)}
              className="flex items-center gap-2 text-white hover:text-orange-100 transition-colors"
            >
              <Globe className="w-8 h-8" />
              <span className="text-2xl font-bold">AfricaCulture</span>
            </button>
            <button
              onClick={() => setShowProfile(false)}
              className="text-white hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </nav>
        <ProfilePage />
      </div>
    );
  }

  const handleStartJourney = () => {
    const citiesSection = document.getElementById('cities');
    citiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlanTrip = () => {
    const toursSection = document.getElementById('tours');
    toursSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <CityDetailModal
        isOpen={selectedCity !== null}
        onClose={() => setSelectedCity(null)}
        onBook={() => {
          setBookingModal({
            isOpen: true,
            cityName: selectedCity?.name
          });
          setSelectedCity(null);
        }}
        city={selectedCity || cities[0]}
      />

      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false })}
        tourTitle={bookingModal.tourTitle}
        cityName={bookingModal.cityName}
      />

      {/* Hero Section */}
      <header className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1554226525-780cbb187456?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`
      }}>
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Globe className="w-8 h-8" />
            <span className="text-2xl font-bold">AfricaCulture</span>
          </div>
          <div className="hidden md:flex gap-8 text-white items-center">
            <a href="#cities" className="hover:text-orange-300 transition-colors">Cities</a>
            <a href="#tours" className="hover:text-orange-300 transition-colors">Tours</a>
            <a href="#about" className="hover:text-orange-300 transition-colors">About</a>
            <button
              onClick={() => setShowProfile(true)}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
              <User className="w-5 h-5" />
              Profile
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Discover Africa's Rich Cultures</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Explore vibrant cities, immerse yourself in ancient traditions, and experience the warmth of African hospitality
          </p>
          <button
            onClick={handleStartJourney}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center gap-2"
          >
            <Compass className="w-6 h-6" />
            Start Your Journey
          </button>
        </div>
      </header>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Map className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Authentic Experiences</h3>
            <p className="text-gray-600">Connect with local communities and experience genuine cultural traditions</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Local guides who share their knowledge and passion for their culture</p>
          </div>
          <div className="text-center p-6">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Diverse Destinations</h3>
            <p className="text-gray-600">From bustling markets to historic sites across the continent</p>
          </div>
        </div>
      </section>

      {/* Featured Cities Section */}
      <section id="cities" className="container mx-auto px-6 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Top Cities for Cultural Discovery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore these incredible destinations where ancient traditions meet modern life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <CityCard
              key={index}
              {...city}
              onExplore={() => setSelectedCity(city)}
            />
          ))}
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="tours" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Popular Cultural Tours</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Carefully curated experiences designed to immerse you in authentic African culture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              {...tour}
              onBook={() => setBookingModal({
                isOpen: true,
                tourTitle: tour.title
              })}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your African Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of African cultures
          </p>
          <button
            onClick={handlePlanTrip}
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
          >
            Plan Your Trip Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6" />
                <span className="text-xl font-bold">AfricaCulture</span>
              </div>
              <p className="text-gray-400">Connecting travelers with the heart of Africa</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Popular Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Morocco</li>
                <li>Ghana</li>
                <li>Tanzania</li>
                <li>South Africa</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Tours</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@africaculture.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 AfricaCulture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}