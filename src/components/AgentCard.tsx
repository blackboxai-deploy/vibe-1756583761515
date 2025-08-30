"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AgentCardProps {
  name: string;
  title: string;
  experience: string;
  specialization: string;
  phone: string;
  email: string;
  image: string;
  languages: string[];
  rating: number;
  propertiesSold: number;
}

export default function AgentCard({
  name,
  title,
  experience,
  specialization,
  phone,
  email,
  image,
  languages,
  rating,
  propertiesSold,
}: AgentCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          {/* Agent Photo */}
          <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Agent Info */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <p className="text-[#4A90E2] font-medium">{title}</p>
            <p className="text-gray-600 text-sm">{specialization}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#2D5016]">{propertiesSold}+</p>
              <p className="text-xs text-gray-600">Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#D4A853]">{rating}</p>
              <p className="text-xs text-gray-600">★ Rating</p>
            </div>
          </div>

          {/* Experience & Languages */}
          <div className="space-y-2">
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-xs">
                {experience} Experience
              </Badge>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {languages.map((lang) => (
                <Badge key={lang} variant="outline" className="text-xs">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
            <p className="flex items-center justify-center">
              📞 {phone}
            </p>
            <p className="flex items-center justify-center text-xs">
              ✉️ {email}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1 bg-[#2D5016] hover:bg-[#2D5016]/90 text-white"
            >
              Contact
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-[#4A90E2] text-[#4A90E2] hover:bg-[#4A90E2] hover:text-white"
            >
              View Profile
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}