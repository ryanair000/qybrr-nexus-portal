
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "AI Solutions & Machine Learning",
      description: "Harness the power of artificial intelligence to solve complex business problems and unlock new opportunities.",
      longDescription: "Our AI solutions are designed to transform how your business operates, from predictive analytics that forecast market trends to intelligent automation that handles complex decision-making processes.",
      features: [
        "Custom Machine Learning Models",
        "Predictive Analytics & Forecasting",
        "Natural Language Processing",
        "Computer Vision Applications",
        "Recommendation Systems",
        "Intelligent Document Processing"
      ],
      benefits: [
        "Reduce operational costs by up to 40%",
        "Improve decision-making accuracy",
        "Automate complex data analysis",
        "Enhance customer experiences"
      ],
      pricing: "Starting from $15,000",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      title: "Business Process Solutions",
      description: "Optimize your operations with strategic process analysis and implementation of efficient workflows.",
      longDescription: "We analyze your current business processes, identify bottlenecks and inefficiencies, then design and implement optimized workflows that improve productivity and reduce costs.",
      features: [
        "Process Analysis & Mapping",
        "Workflow Optimization",
        "Digital Transformation Strategy",
        "Change Management Support",
        "Performance Monitoring",
        "Compliance & Quality Assurance"
      ],
      benefits: [
        "Increase operational efficiency by 35%",
        "Reduce processing time significantly",
        "Improve quality and consistency",
        "Enable better scalability"
      ],
      pricing: "Starting from $10,000",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Process Automation & RPA",
      description: "Automate repetitive tasks and complex workflows to free up your team for strategic initiatives.",
      longDescription: "Our automation solutions eliminate manual, repetitive tasks through intelligent robotic process automation, workflow automation, and system integrations.",
      features: [
        "Robotic Process Automation (RPA)",
        "Workflow Automation",
        "System Integration & APIs",
        "Data Processing Automation",
        "Email & Communication Automation",
        "Monitoring & Analytics Dashboard"
      ],
      benefits: [
        "Save 20-40 hours per week per employee",
        "Reduce errors by 90%",
        "Improve processing speed by 300%",
        "24/7 automated operations"
      ],
      pricing: "Starting from $8,000",
      gradient: "from-purple-600 to-blue-600"
    }
  ];

  const addOnServices = [
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights",
      features: ["Custom Dashboards", "Real-time Analytics", "Data Visualization", "Reporting Automation"]
    },
    {
      title: "Cloud Migration & Infrastructure",
      description: "Modernize your IT infrastructure for scalability",
      features: ["Cloud Strategy", "Migration Planning", "Security Implementation", "Cost Optimization"]
    },
    {
      title: "Training & Support",
      description: "Ensure your team maximizes the value of new solutions",
      features: ["User Training", "Technical Documentation", "Ongoing Support", "Best Practices Consulting"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive AI solutions and business process optimization services designed to transform your operations and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge variant="secondary" className="mb-4">{`0${index + 1}`}</Badge>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{service.longDescription}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Benefits:</h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-700">
                          <ArrowRight className="h-4 w-4 text-purple-500 mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-purple-600">{service.pricing}</div>
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className="relative overflow-hidden h-96 border-0 shadow-xl">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <CardContent className="relative z-10 p-8 h-full flex flex-col justify-center text-white">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-lg opacity-90">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complement your core solutions with these additional services for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Let's discuss your specific needs and create a customized solution that delivers results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
