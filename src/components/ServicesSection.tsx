
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Workflow, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Custom artificial intelligence solutions tailored to your business needs, from machine learning models to intelligent automation systems.",
      features: ["Machine Learning Models", "Predictive Analytics", "Natural Language Processing", "Computer Vision"],
      icon: Bot,
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Business Process Solutions",
      description: "Optimize and streamline your business processes with strategic consulting and implementation of efficient workflows.",
      features: ["Process Analysis", "Workflow Optimization", "Digital Transformation", "Change Management"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and complex workflows to improve efficiency, reduce errors, and free up your team for strategic work.",
      features: ["Robotic Process Automation", "Workflow Automation", "Integration Services", "Monitoring & Analytics"],
      icon: Workflow,
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
            Solutions that drive
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive solutions to help your business leverage technology for growth and efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500`}></div>
                <CardHeader className="relative z-10 pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-slate-900 font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-slate-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 h-14 text-lg rounded-xl shadow-xl">
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
