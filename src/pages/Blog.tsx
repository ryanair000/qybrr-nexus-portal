
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "AI Solutions", "Process Automation", "Business Insights", "Case Studies", "Industry Trends"];

  const blogPosts = [
    {
      title: "The Future of Business AI in Africa",
      category: "AI Solutions",
      excerpt: "Exploring how artificial intelligence is transforming African businesses and creating new opportunities for growth and innovation across various industries.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Adebayo Ogundimu",
      date: "December 15, 2024",
      readTime: "8 min read",
      tags: ["AI", "Africa", "Innovation", "Technology"]
    },
    {
      title: "Streamlining Operations with Smart Automation",
      category: "Process Automation",
      excerpt: "How businesses are reducing costs and improving efficiency through intelligent process automation. Real-world examples and implementation strategies.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Funmi Adewale",
      date: "December 10, 2024",
      readTime: "6 min read",
      tags: ["Automation", "Efficiency", "RPA", "Business Process"]
    },
    {
      title: "Success Story: 300% ROI with Process Automation",
      category: "Case Studies",
      excerpt: "How we helped a manufacturing company achieve remarkable results through strategic automation implementation and process optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Kemi Olatunji",
      date: "December 5, 2024",
      readTime: "10 min read",
      tags: ["Case Study", "ROI", "Manufacturing", "Success Story"]
    },
    {
      title: "Machine Learning for Predictive Analytics",
      category: "AI Solutions",
      excerpt: "Understanding how machine learning algorithms can predict business outcomes and help companies make data-driven decisions for better results.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Tunde Bakare",
      date: "November 28, 2024",
      readTime: "7 min read",
      tags: ["Machine Learning", "Predictive Analytics", "Data Science"]
    },
    {
      title: "Digital Transformation in African SMEs",
      category: "Business Insights",
      excerpt: "Analyzing the digital transformation journey of small and medium enterprises in Africa and the key success factors for implementation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Amara Chukwu",
      date: "November 20, 2024",
      readTime: "9 min read",
      tags: ["Digital Transformation", "SME", "Africa", "Strategy"]
    },
    {
      title: "The Rise of Robotic Process Automation",
      category: "Process Automation",
      excerpt: "Comprehensive guide to RPA implementation, benefits, challenges, and best practices for businesses looking to automate their operations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Chinedu Okoro",
      date: "November 15, 2024",
      readTime: "12 min read",
      tags: ["RPA", "Automation", "Implementation", "Best Practices"]
    },
    {
      title: "AI Ethics and Responsible Implementation",
      category: "Industry Trends",
      excerpt: "Discussing the importance of ethical AI development and implementation, focusing on fairness, transparency, and accountability in business applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Dr. Adebayo Ogundimu",
      date: "November 8, 2024",
      readTime: "11 min read",
      tags: ["AI Ethics", "Responsible AI", "Implementation", "Governance"]
    },
    {
      title: "Data-Driven Decision Making for African Businesses",
      category: "Business Insights",
      excerpt: "How African businesses can leverage data analytics to make informed decisions, improve performance, and gain competitive advantages in their markets.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Kemi Olatunji",
      date: "October 30, 2024",
      readTime: "8 min read",
      tags: ["Data Analytics", "Decision Making", "Business Intelligence"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">QybrrLabs Blog</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Insights, trends, and expert knowledge on AI solutions, business automation, and digital transformation in Africa.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden max-w-4xl mx-auto hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600">{featuredPost.category}</Badge>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
                
                <Button className="bg-purple-600 hover:bg-purple-700 w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-purple-600 hover:bg-purple-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for the latest insights on AI solutions, automation trends, and business transformation.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
            />
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
