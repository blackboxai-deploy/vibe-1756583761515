"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export default function SearchFilters() {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
    bedrooms: "",
    listingType: "sale"
  });

  const locations = [
    "Nairobi CBD", "Westlands", "Karen", "Kilimani", "Kileleshwa", 
    "Runda", "Muthaiga", "Lavington", "Mombasa", "Kisumu"
  ];

  const propertyTypes = [
    "Apartment", "House", "Townhouse", "Villa", "Land", "Commercial", "Office Space"
  ];

  const priceRanges = [
    "Under 5M", "5M - 10M", "10M - 20M", "20M - 50M", "50M - 100M", "Above 100M"
  ];

  const bedroomOptions = ["1", "2", "3", "4", "5+"];

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Listing Type Tabs */}
          <div className="flex rounded-lg bg-gray-100 p-1">
            <button
              className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${
                searchData.listingType === "sale"
                  ? "bg-[#2D5016] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setSearchData({...searchData, listingType: "sale"})}
            >
              Buy Property
            </button>
            <button
              className={`flex-1 rounded-md py-2 px-4 text-sm font-medium transition-colors ${
                searchData.listingType === "rent"
                  ? "bg-[#2D5016] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setSearchData({...searchData, listingType: "rent"})}
            >
              Rent Property
            </button>
          </div>

          {/* Search Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Select value={searchData.location} onValueChange={(value) => 
                setSearchData({...searchData, location: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Choose location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Property Type
              </label>
              <Select value={searchData.propertyType} onValueChange={(value) => 
                setSearchData({...searchData, propertyType: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Any type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range (KES)
              </label>
              <Select value={searchData.priceRange} onValueChange={(value) => 
                setSearchData({...searchData, priceRange: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Any price" />
                </SelectTrigger>
                <SelectContent>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bedrooms
              </label>
              <Select value={searchData.bedrooms} onValueChange={(value) => 
                setSearchData({...searchData, bedrooms: value})
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  {bedroomOptions.map((beds) => (
                    <SelectItem key={beds} value={beds}>
                      {beds} {beds === "1" ? "Bedroom" : "Bedrooms"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button 
                className="w-full bg-[#2D5016] hover:bg-[#2D5016]/90 text-white"
                size="default"
              >
                🔍 Search Properties
              </Button>
            </div>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="text-center">
            <Button variant="ghost" className="text-[#4A90E2] hover:text-[#4A90E2]/80">
              Advanced Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}