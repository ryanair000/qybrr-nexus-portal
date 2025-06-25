
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Let's discuss how our AI solutions and automation services can help your business grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <CardTitle>Free Consultation</CardTitle>
              <CardDescription className="text-purple-100">
                Schedule a 30-minute discovery call to discuss your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/contact">
                <Button variant="secondary" className="w-full">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <CardTitle>Get a Quote</CardTitle>
              <CardDescription className="text-purple-100">
                Tell us about your project and receive a detailed proposal
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link to="/contact">
                <Button variant="secondary" className="w-full">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <CardTitle>Quick Response</CardTitle>
              <CardDescription className="text-purple-100">
                We respond to all inquiries within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" className="w-full" disabled>
                Guaranteed
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-purple-100 mb-6">
            Join 50+ businesses that have transformed their operations with QybrrLabs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Your Transformation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
