"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    preferredContact: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
      preferredContact: "email"
    });
    
    setIsSubmitting(false);
    alert("Thank you! We'll get back to you within 24 hours.");
  };

  const inquiryTypes = [
    "Buy Property",
    "Sell Property", 
    "Rent Property",
    "Property Management",
    "Property Valuation",
    "Investment Consultation",
    "General Inquiry"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Information */}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Ready to find your dream property or need expert real estate advice? 
            Our experienced team is here to help you every step of the way.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#2D5016] rounded-lg flex items-center justify-center">
              <span className="text-white">📍</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Visit Our Office</p>
              <p className="text-gray-600">Nairobi CBD, Kenya</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#4A90E2] rounded-lg flex items-center justify-center">
              <span className="text-white">📞</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Call Us</p>
              <p className="text-gray-600">+254 700 123 456</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#D4A853] rounded-lg flex items-center justify-center">
              <span className="text-black">✉️</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Email Us</p>
              <p className="text-gray-600">info@mararealestate.co.ke</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white">💬</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">WhatsApp</p>
              <p className="text-gray-600">+254 700 123 456</p>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-2">Operating Hours</h4>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span>8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 2:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-gray-900">Send us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name *
                </label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name *
                </label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+254 700 123 456"
                />
              </div>
            </div>

            {/* Inquiry Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How can we help you? *
              </label>
              <Select value={formData.inquiryType} onValueChange={(value) => 
                handleInputChange("inquiryType", value)
              }>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                placeholder="Tell us about your property needs or questions..."
                rows={4}
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <Select value={formData.preferredContact} onValueChange={(value) => 
                handleInputChange("preferredContact", value)
              }>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full bg-[#2D5016] hover:bg-[#2D5016]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              We'll respond within 24 hours during business days.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}