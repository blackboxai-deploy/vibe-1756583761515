"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  isForSale: boolean;
  isFeatured?: boolean;
}

export default function PropertyCard({
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  type,
  image,
  isForSale,
  isFeatured = false,
}: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isFeatured && (
            <Badge className="bg-[#D4A853] text-black font-medium">
              Featured
            </Badge>
          )}
          <Badge 
            className={`font-medium ${
              isForSale 
                ? "bg-[#2D5016] text-white" 
                : "bg-[#4A90E2] text-white"
            }`}
          >
            {isForSale ? "For Sale" : "For Rent"}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
            ♡
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
              {title}
            </h3>
          </div>
          
          <p className="text-gray-600 text-sm flex items-center">
            📍 {location}
          </p>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="flex items-center">
              🛏️ {bedrooms} Beds
            </span>
            <span className="flex items-center">
              🚿 {bathrooms} Baths
            </span>
            <span className="flex items-center">
              📐 {area}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{type}</p>
              <p className="text-2xl font-bold text-[#2D5016]">
                {price}
              </p>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <Button 
              className="flex-1 bg-[#2D5016] hover:bg-[#2D5016]/90 text-white"
              size="sm"
            >
              View Details
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-[#2D5016] text-[#2D5016] hover:bg-[#2D5016] hover:text-white"
              size="sm"
            >
              Contact Agent
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}