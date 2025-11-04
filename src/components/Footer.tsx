import { Building, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { MadeWithApplaa } from './made-with-applaa';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Agency Info */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="bg-amber-400 p-2 rounded-md">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary-foreground">
                Key Stone Estates
              </span>
            </a>
            <p className="text-sm text-gray-300">
              Your trusted partner in UK property. Whether buying, selling, or letting, we provide expert advice and exceptional service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-300 hover:text-amber-400 transition-colors">
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/properties" className="text-gray-300 hover:text-amber-400">Properties for Sale</a></li>
              <li><a href="/properties?type=rent" className="text-gray-300 hover:text-amber-400">Properties to Rent</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-amber-400">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-amber-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-amber-400">Request a Valuation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400">Mortgage Advice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400">Property Management</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white tracking-wider">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>123 High Street, London, W1 1AA</li>
              <li>Phone: 020 1234 5678</li>
              <li>Email: info@keystoneestates.co.uk</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Key Stone Estates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
        <MadeWithApplaa />
      </div>
    </footer>
  );
};