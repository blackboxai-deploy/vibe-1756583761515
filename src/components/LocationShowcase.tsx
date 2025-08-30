"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Location {
  name: string;
  description: string;
  image: string;
  avgPrice: string;
  propertyCount: number;
  highlights: string[];
  priceChange: string;
}

const locations: Location[] = [
  {
    name: "Westlands",
    description: "Prime commercial and residential hub with modern amenities, shopping centers, and excellent connectivity to the city center.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e4d37527-491f-4da5-a4ed-55c58325e535.png",
    avgPrice: "KES 15M",
    propertyCount: 180,
    highlights: ["Shopping Centers", "Business District", "Modern Infrastructure"],
    priceChange: "+12%"
  },
  {
    name: "Karen",
    description: "Upscale residential area known for large plots, luxury homes, and proximity to the Nairobi National Park with serene environment.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/49ce7789-5e1b-4d8c-904a-6f1c06bd324e.png",
    avgPrice: "KES 35M",
    propertyCount: 95,
    highlights: ["Luxury Homes", "Large Plots", "Nature Access"],
    priceChange: "+8%"
  },
  {
    name: "Kilimani",
    description: "Vibrant neighborhood popular with young professionals, featuring modern apartments, restaurants, and nightlife entertainment.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1fc763f-a712-4cea-932d-e247e865487a.png",
    avgPrice: "KES 12M",
    propertyCount: 245,
    highlights: ["Young Professional Hub", "Modern Apartments", "Active Nightlife"],
    priceChange: "+15%"
  },
  {
    name: "Runda",
    description: "Exclusive gated community offering privacy, security, and luxury living with well-maintained infrastructure and amenities.",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11dc535c-147b-4e40-ad84-5ce1c14f9a8d.png",
    avgPrice: "KES 55M",
    propertyCount: 67,
    highlights: ["Gated Community", "High Security", "Luxury Living"],
    priceChange: "+5%"
  },
];

export default function LocationShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {locations.map((location) => (
        <Card key={location.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="relative overflow-hidden">
            <img
              src={location.image}
              alt={`${location.name} area`}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4">
              <Badge className={`font-medium ${
                location.priceChange.startsWith('+') 
                  ? "bg-green-500 text-white" 
                  : "bg-red-500 text-white"
              }`}>
                {location.priceChange}
              </Badge>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <CardContent className="p-6">
            <div className="space-y-4">
              {/* Location Header */}
              <div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {location.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 py-3 border-t border-gray-100">
                <div>
                  <p className="text-sm text-gray-600">Avg. Price</p>
                  <p className="font-semibold text-[#2D5016]">{location.avgPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Properties</p>
                  <p className="font-semibold text-[#4A90E2]">{location.propertyCount}+</p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                <div className="flex flex-wrap gap-1">
                  {location.highlights.map((highlight) => (
                    <Badge 
                      key={highlight} 
                      variant="outline" 
                      className="text-xs border-[#D4A853] text-[#D4A853]"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button 
                className="w-full bg-[#2D5016] hover:bg-[#2D5016]/90 text-white mt-4"
                size="sm"
              >
                Explore {location.name}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}