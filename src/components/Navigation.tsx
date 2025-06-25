
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-gray-900">QybrrLabs Africa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
            <Link to="/projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</Link>
            <Link to="/team" className="text-gray-700 hover:text-purple-600 transition-colors">Team</Link>
            <Link to="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</Link>
            <Link to="/contact">
              <Button variant="default" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Get Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-purple-600 transition-colors">Projects</Link>
              <Link to="/team" className="text-gray-700 hover:text-purple-600 transition-colors">Team</Link>
              <Link to="/blog" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</Link>
              <Link to="/contact">
                <Button variant="default" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full">
                  Get Consultation
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
