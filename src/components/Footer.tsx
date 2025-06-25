
import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">QybrrLabs Africa</span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Transforming African businesses through innovative AI solutions, process automation, and strategic consulting.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-50 hover:bg-purple-50 rounded-full flex items-center justify-center cursor-pointer transition-colors group">
                <Instagram className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
              </div>
              <div className="w-10 h-10 bg-gray-50 hover:bg-purple-50 rounded-full flex items-center justify-center cursor-pointer transition-colors group">
                <Facebook className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
              </div>
              <div className="w-10 h-10 bg-gray-50 hover:bg-purple-50 rounded-full flex items-center justify-center cursor-pointer transition-colors group">
                <Twitter className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
              </div>
              <div className="w-10 h-10 bg-gray-50 hover:bg-purple-50 rounded-full flex items-center justify-center cursor-pointer transition-colors group">
                <Youtube className="h-5 w-5 text-gray-600 group-hover:text-purple-600" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">AI Solutions</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Business Process Solutions</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Process Automation</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Strategic Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/team" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Our Team</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Projects</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-600 font-medium">info@qybrrlabs.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-gray-600" />
                </div>
                <span className="text-gray-600 font-medium">Lagos, Nigeria</span>
              </div>
              <div className="text-sm text-gray-500 ml-11">
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 QybrrLabs Africa. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-purple-600 text-sm transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-purple-600 text-sm transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
