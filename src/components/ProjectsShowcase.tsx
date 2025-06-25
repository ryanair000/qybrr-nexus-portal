
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "E-commerce Platform Automation",
      description: "Implemented AI-powered inventory management and automated customer service for a major retail chain, resulting in 40% reduction in operational costs.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["AI Solutions", "Automation", "E-commerce"],
      results: "40% cost reduction, 60% faster response time"
    },
    {
      title: "Manufacturing Process Optimization",
      description: "Developed predictive maintenance system and automated quality control processes, improving production efficiency by 35%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["Process Automation", "Predictive Analytics", "Manufacturing"],
      results: "35% efficiency increase, 50% fewer defects"
    },
    {
      title: "Healthcare Data Analytics",
      description: "Built comprehensive patient data analysis system with AI-driven insights for better treatment outcomes and resource allocation.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      tags: ["AI Solutions", "Healthcare", "Data Analytics"],
      results: "25% improved patient outcomes, 30% resource optimization"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="bg-purple-50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-purple-800 mb-1">Key Results:</h4>
                  <p className="text-sm text-purple-700">{project.results}</p>
                </div>
                <Button variant="outline" className="w-full group">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
