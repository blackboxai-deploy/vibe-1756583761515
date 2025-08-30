"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import AgentCard from "@/components/AgentCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import LocationShowcase from "@/components/LocationShowcase";
import ContactForm from "@/components/ContactForm";

// Sample data for properties
const featuredProperties = [
  {
    id: "1",
    title: "Modern 3BR Apartment in Westlands",
    location: "Westlands, Nairobi",
    price: "KES 15,500,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    type: "Apartment",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6be617eb-ceea-416b-8aad-d1e42c8b185b.png",
    isForSale: true,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Luxury 4BR Villa in Karen",
    location: "Karen, Nairobi",
    price: "KES 45,000,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "350 sqm",
    type: "Villa",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a84befd7-e1a1-411f-a3bd-87333aa36ed4.png",
    isForSale: true,
    isFeatured: true,
  },
  {
    id: "3",
    title: "Commercial Office Space Kilimani",
    location: "Kilimani, Nairobi",
    price: "KES 180,000/month",
    bedrooms: 0,
    bathrooms: 2,
    area: "200 sqm",
    type: "Commercial",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/84625332-69c5-4a8c-86e5-4478637eff40.png",
    isForSale: false,
    isFeatured: false,
  },
  {
    id: "4",
    title: "Executive 2BR Penthouse Runda",
    location: "Runda, Nairobi",
    price: "KES 28,000,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "180 sqm",
    type: "Penthouse",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bc472115-a6d8-4866-8bfb-da948efa39fa.png",
    isForSale: true,
    isFeatured: true,
  },
];

// Sample agent data
const agents = [
  {
    name: "Grace Wanjiku",
    title: "Senior Property Consultant",
    experience: "8 Years",
    specialization: "Residential Properties",
    phone: "+254 701 234 567",
    email: "grace@mararealestate.co.ke",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ebb349f-3a67-4fb2-8645-bbd8414f84b7.png",
    languages: ["English", "Swahili", "Kikuyu"],
    rating: 4.9,
    propertiesSold: 150,
  },
  {
    name: "James Otieno",
    title: "Commercial Property Specialist",
    experience: "12 Years",
    specialization: "Commercial & Investment",
    phone: "+254 702 345 678",
    email: "james@mararealestate.co.ke",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3db7cf50-ddcd-4262-adcf-7604d85d01e8.png",
    languages: ["English", "Swahili", "Luo"],
    rating: 4.8,
    propertiesSold: 200,
  },
  {
    name: "Sarah Muthoni",
    title: "Luxury Properties Expert",
    experience: "10 Years",
    specialization: "High-End Residential",
    phone: "+254 703 456 789",
    email: "sarah@mararealestate.co.ke",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/488d49f7-8e2f-469e-915d-2d38d91d277b.png",
    languages: ["English", "Swahili"],
    rating: 5.0,
    propertiesSold: 180,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b58763f-63ec-4b5a-b43d-64d32b05c9f8.png"
            alt="Nairobi cityscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="text-[#D4A853] block">Home in Kenya</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-lg">
                Discover premium properties across Nairobi, Mombasa, and beyond. 
                Your trusted partner in real estate since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white">
                  Explore Properties
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  List Your Property
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#D4A853]">500+</p>
                  <p className="text-sm text-gray-300">Properties Sold</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#D4A853]">98%</p>
                  <p className="text-sm text-gray-300">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#D4A853]">12+</p>
                  <p className="text-sm text-gray-300">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Side - Search Form */}
            <div className="lg:ml-8">
              <SearchFilters />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties across Kenya's most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#2D5016] hover:bg-[#2D5016]/90 text-white">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Property Sales",
                description: "Expert guidance for buying and selling residential and commercial properties with market insights.",
                icon: "🏠",
                features: ["Market Analysis", "Price Negotiation", "Legal Support"]
              },
              {
                title: "Property Rentals",
                description: "Find your ideal rental property or maximize returns on your investment properties.",
                icon: "🔑",
                features: ["Tenant Screening", "Lease Management", "Market Rates"]
              },
              {
                title: "Property Management",
                description: "Complete property management services to maximize your investment returns.",
                icon: "📊",
                features: ["Maintenance", "Rent Collection", "Tenant Relations"]
              },
              {
                title: "Property Valuations",
                description: "Professional property valuations for investment, insurance, and legal purposes.",
                icon: "💰",
                features: ["Market Valuation", "Investment Analysis", "Certified Reports"]
              },
              {
                title: "Investment Consulting",
                description: "Strategic investment advice to help you build a profitable property portfolio.",
                icon: "📈",
                features: ["Portfolio Review", "ROI Analysis", "Market Trends"]
              },
              {
                title: "Legal Services",
                description: "Comprehensive legal support for all your real estate transactions and documentation.",
                icon: "⚖️",
                features: ["Title Verification", "Contract Review", "Due Diligence"]
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center justify-center text-sm text-[#4A90E2]">
                          ✓ {feature}
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prime Locations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Kenya's most desirable neighborhoods and discover your perfect location.
            </p>
          </div>

          <LocationShowcase />
        </div>
      </section>

      {/* Team Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are here to guide you through every step of your real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {agents.map((agent) => (
              <AgentCard key={agent.name} {...agent} />
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-[#4A90E2] hover:bg-[#4A90E2]/90 text-white">
              Meet All Our Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from satisfied clients who found their dream properties with us.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contact us today to begin your real estate journey. Our team is ready to help you find the perfect property.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2D5016]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have found their perfect homes through Mara Real Estate. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4A853] hover:bg-[#D4A853]/90 text-black">
              Browse Properties
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#2D5016]">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}