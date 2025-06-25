
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI Solutions", "Process Automation", "Business Process Solutions"];

  const projects = [
    {
      title: "E-commerce Platform AI Optimization",
      category: "AI Solutions",
      client: "Major African Retail Chain",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Implemented comprehensive AI-powered inventory management system with predictive analytics for demand forecasting and automated customer service chatbot.",
      challenge: "The client was experiencing significant inventory waste, stockouts, and overwhelmed customer service during peak seasons, resulting in lost sales and poor customer satisfaction.",
      solution: "We developed a machine learning model for demand prediction, implemented automated inventory management, and created an AI chatbot for customer service automation.",
      results: [
        "40% reduction in operational costs",
        "60% faster customer service response time",
        "25% increase in customer satisfaction",
        "30% reduction in inventory waste"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "React", "Node.js"],
      timeline: "6 months",
      budget: "$75,000"
    },
    {
      title: "Manufacturing Process Automation",
      category: "Process Automation",
      client: "Industrial Manufacturing Company",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Developed predictive maintenance system and automated quality control processes using IoT sensors and machine learning algorithms.",
      challenge: "High equipment downtime, inconsistent product quality, and manual quality control processes were impacting production efficiency and profitability.",
      solution: "Implemented IoT sensors for real-time monitoring, built predictive maintenance algorithms, and automated quality control with computer vision systems.",
      results: [
        "35% improvement in production efficiency",
        "50% reduction in product defects",
        "60% decrease in unplanned downtime",
        "20% reduction in maintenance costs"
      ],
      technologies: ["Python", "IoT Sensors", "Computer Vision", "Azure", "Power BI"],
      timeline: "8 months",
      budget: "$120,000"
    },
    {
      title: "Healthcare Data Analytics Platform",
      category: "AI Solutions",
      client: "Private Hospital Network",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Built comprehensive patient data analysis system with AI-driven insights for better treatment outcomes and resource allocation optimization.",
      challenge: "Fragmented patient data across multiple systems made it difficult to get comprehensive insights, leading to suboptimal treatment decisions and resource allocation.",
      solution: "Created a unified data platform with AI-powered analytics, predictive modeling for patient outcomes, and automated reporting dashboards.",
      results: [
        "25% improvement in patient outcomes",
        "30% better resource utilization",
        "40% reduction in administrative time",
        "15% increase in operational efficiency"
      ],
      technologies: ["Python", "Apache Spark", "Tableau", "AWS", "HIPAA Compliance"],
      timeline: "10 months",
      budget: "$150,000"
    },
    {
      title: "Financial Services Process Optimization",
      category: "Business Process Solutions",
      client: "Regional Bank",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Streamlined loan approval processes and implemented automated compliance monitoring to improve efficiency and reduce risk.",
      challenge: "Manual loan processing was taking weeks, compliance monitoring was inconsistent, and customer wait times were unacceptable in a competitive market.",
      solution: "Redesigned the entire loan approval workflow, implemented automated compliance checks, and created a customer portal for real-time status updates.",
      results: [
        "70% reduction in loan processing time",
        "90% improvement in compliance accuracy",
        "50% increase in customer satisfaction",
        "25% reduction in operational costs"
      ],
      technologies: ["Workflow Automation", "Compliance Tools", "Customer Portal", "Integration APIs"],
      timeline: "5 months",
      budget: "$85,000"
    },
    {
      title: "Supply Chain Automation Platform",
      category: "Process Automation",
      client: "Logistics Company",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Automated end-to-end supply chain processes including order management, inventory tracking, and delivery optimization using AI and RPA.",
      challenge: "Complex supply chain with multiple vendors, manual tracking processes, and inefficient route planning was causing delays and increased costs.",
      solution: "Built an integrated platform with automated order processing, real-time inventory tracking, AI-powered route optimization, and vendor management system.",
      results: [
        "45% reduction in delivery times",
        "35% decrease in logistics costs",
        "80% improvement in inventory accuracy",
        "60% reduction in manual processing"
      ],
      technologies: ["RPA", "AI Route Optimization", "Real-time Tracking", "Vendor APIs"],
      timeline: "7 months",
      budget: "$95,000"
    },
    {
      title: "HR Process Digital Transformation",
      category: "Business Process Solutions",
      client: "Multi-national Corporation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Digitized and optimized HR processes including recruitment, onboarding, performance management, and employee self-service portals.",
      challenge: "Manual HR processes were time-consuming, inconsistent across regions, and providing poor employee experience with limited self-service options.",
      solution: "Implemented digital HR platform with automated workflows, self-service portals, performance tracking systems, and standardized processes across all regions.",
      results: [
        "60% reduction in HR processing time",
        "80% improvement in employee satisfaction",
        "50% decrease in paperwork",
        "40% improvement in compliance tracking"
      ],
      technologies: ["HR Platform", "Workflow Automation", "Employee Portal", "Analytics Dashboard"],
      timeline: "6 months",
      budget: "$110,000"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Discover how we've helped businesses across Africa transform their operations, reduce costs, and achieve remarkable growth through AI solutions and process automation.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Filter by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600">{project.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">
                    {project.client}
                  </CardDescription>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-600">{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Solution:</h4>
                    <p className="text-sm text-gray-600">{project.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Timeline:</span>
                      <p className="text-gray-600">{project.timeline}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Investment:</span>
                      <p className="text-gray-600">{project.budget}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Similar Project?
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent results across all our projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-lg text-gray-600">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">$50M+</div>
              <div className="text-lg text-gray-600">Cost Savings Generated</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">95%</div>
              <div className="text-lg text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">300%</div>
              <div className="text-lg text-gray-600">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your business with AI solutions and process automation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
