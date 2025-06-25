
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Users, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsShowcase />
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">30+</div>
              <div className="text-lg text-gray-600">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">95%</div>
              <div className="text-lg text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends in AI and business automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">AI Solutions</Badge>
                <CardTitle className="text-xl">The Future of Business AI in Africa</CardTitle>
                <CardDescription>
                  Exploring how artificial intelligence is transforming African businesses and creating new opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 15, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Automation</Badge>
                <CardTitle className="text-xl">Streamlining Operations with Smart Automation</CardTitle>
                <CardDescription>
                  How businesses are reducing costs and improving efficiency through intelligent process automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 10, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">Case Study</Badge>
                <CardTitle className="text-xl">Success Story: 300% ROI with Process Automation</CardTitle>
                <CardDescription>
                  How we helped a manufacturing company achieve remarkable results through strategic automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Dec 5, 2024</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
