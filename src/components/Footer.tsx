import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Careers", href: "#careers" },
    { name: "News & Updates", href: "#news" },
  ],
  services: [
    { name: "Buy Property", href: "#buy" },
    { name: "Sell Property", href: "#sell" },
    { name: "Rent Property", href: "#rent" },
    { name: "Property Management", href: "#management" },
    { name: "Valuations", href: "#valuations" },
  ],
  locations: [
    { name: "Nairobi", href: "#nairobi" },
    { name: "Mombasa", href: "#mombasa" },
    { name: "Kisumu", href: "#kisumu" },
    { name: "Nakuru", href: "#nakuru" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mara <span className="text-[#D4A853]">Real Estate</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted partner in finding the perfect property in Kenya. 
              With years of experience and local expertise, we make your real estate dreams come true.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                📍 Nairobi CBD, Kenya
              </p>
              <p className="text-gray-300">
                📞 +254 700 123 456
              </p>
              <p className="text-gray-300">
                ✉️ info@mararealestate.co.ke
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A853] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A853] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Locations</h4>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#D4A853] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter for the latest property listings and market insights.
              </p>
              <div className="flex max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black border-0 rounded-r-none"
                />
                <Button className="bg-[#D4A853] hover:bg-[#D4A853]/90 text-black rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex lg:justify-end space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#D4A853]">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#D4A853]">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#D4A853]">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-[#D4A853]">
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 Mara Real Estate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}