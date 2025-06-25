
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom artificial intelligence solutions tailored to your business needs, from machine learning models to intelligent automation systems.",
      features: ["Machine Learning Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Business Process Solutions",
      description: "Optimize and streamline your business processes with strategic consulting and implementation of efficient workflows.",
      features: ["Process Analysis", "Workflow Optimization", "Digital Transformation", "Change Management"],
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and complex workflows to improve efficiency, reduce errors, and free up your team for strategic work.",
      features: ["Robotic Process Automation", "Workflow Automation", "Integration Services", "Monitoring & Analytics"],
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help your business leverage technology for growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}></div>
              <CardHeader className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-4`}>
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
