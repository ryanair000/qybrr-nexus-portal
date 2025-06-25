
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent"> AI Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            We deliver cutting-edge AI solutions, streamline business processes, and automate workflows 
            to help African businesses scale efficiently and compete globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 font-semibold px-8 py-3">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered Solutions</h3>
              <p className="text-purple-200">Leverage artificial intelligence to solve complex business challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Process Automation</h3>
              <p className="text-purple-200">Streamline operations and reduce manual work with smart automation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Business Growth</h3>
              <p className="text-purple-200">Scale your business efficiently with data-driven insights and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
