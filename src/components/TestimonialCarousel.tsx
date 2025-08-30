"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  propertyType: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Wanjiku",
    location: "Kileleshwa, Nairobi",
    text: "Mara Real Estate helped me find my dream home in Kileleshwa. Their team was professional, knowledgeable about the local market, and made the entire buying process seamless. Highly recommended!",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b9ad7a5c-420a-472e-85a3-dd58a87b4509.png",
    propertyType: "3-Bedroom Apartment"
  },
  {
    id: "2",
    name: "James Mwangi",
    location: "Karen, Nairobi",
    text: "As a first-time property investor, I was nervous about the process. The Mara Real Estate team guided me every step of the way and helped me secure a fantastic commercial property. Excellent service!",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/acf9cf70-1727-4e85-8e7d-95849df7f8c4.png",
    propertyType: "Commercial Office"
  },
  {
    id: "3",
    name: "Grace Adhiambo",
    location: "Westlands, Nairobi",
    text: "I needed to sell my property quickly due to relocation. Mara Real Estate marketed it effectively and found a buyer within 6 weeks. Their expertise in the Nairobi market is outstanding.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2cf3fbc-0f9e-4e07-b562-55bd4b163be0.png",
    propertyType: "2-Bedroom Condo"
  },
  {
    id: "4",
    name: "David Kipchoge",
    location: "Runda, Nairobi",
    text: "The property management services from Mara Real Estate have been exceptional. They take care of everything while I'm abroad, and my rental income is always on time. Trustworthy partners.",
    rating: 5,
    avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/41727c9c-de50-4785-8292-990639665ce0.png",
    propertyType: "4-Bedroom Villa"
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardContent className="p-8">
          <div className="text-center">
            {/* Stars Rating */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-[#D4A853] text-xl">★</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed max-w-2xl mx-auto">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-xs text-[#4A90E2]">
                  Purchased: {testimonials[currentIndex].propertyType}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
        onClick={goToPrevious}
      >
        ‹
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
        onClick={goToNext}
      >
        ›
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex 
                ? "bg-[#2D5016]" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}