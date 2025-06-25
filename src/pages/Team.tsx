
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Adebayo Ogundimu",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former AI researcher at Google with 15+ years of experience in machine learning and business transformation. PhD in Computer Science from MIT.",
      specialties: ["AI Strategy", "Machine Learning", "Business Transformation"],
      achievements: [
        "Led AI initiatives that generated $50M+ in value",
        "Published 25+ research papers in top-tier journals",
        "Speaker at major AI conferences globally"
      ]
    },
    {
      name: "Funmi Adewale",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Senior software architect with expertise in scalable systems and automation. Former lead engineer at Microsoft Azure, specializing in enterprise solutions.",
      specialties: ["System Architecture", "Process Automation", "Cloud Solutions"],
      achievements: [
        "Architected systems serving 10M+ users",
        "Expert in enterprise automation platforms",
        "Certified in major cloud platforms (AWS, Azure, GCP)"
      ]
    },
    {
      name: "Kemi Olatunji",
      role: "Head of Business Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Business strategist with 12+ years helping companies optimize operations. Former McKinsey consultant with deep expertise in African markets.",
      specialties: ["Business Strategy", "Process Optimization", "Market Analysis"],
      achievements: [
        "Helped 100+ companies improve efficiency",
        "Generated $200M+ in cost savings for clients",
        "Expert in African business landscapes"
      ]
    },
    {
      name: "Tunde Bakare",
      role: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Machine learning engineer with expertise in computer vision and NLP. Former research scientist at DeepMind, specializing in practical AI applications.",
      specialties: ["Computer Vision", "NLP", "Deep Learning"],
      achievements: [
        "Developed AI models with 95%+ accuracy",
        "Patents in computer vision technology",
        "Contributor to major open-source AI projects"
      ]
    },
    {
      name: "Amara Chukwu",
      role: "Senior Process Consultant",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Process improvement specialist with Six Sigma Black Belt certification. Expert in manufacturing and service industry optimizations.",
      specialties: ["Six Sigma", "Lean Manufacturing", "Quality Management"],
      achievements: [
        "Led 50+ process improvement projects",
        "Achieved average 40% efficiency gains",
        "Certified Master Black Belt trainer"
      ]
    },
    {
      name: "Chinedu Okoro",
      role: "Automation Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "RPA expert with extensive experience in business process automation. Former automation lead at UiPath, specializing in enterprise implementations.",
      specialties: ["RPA Development", "Workflow Automation", "Integration"],
      achievements: [
        "Implemented 200+ automation solutions",
        "Certified in major RPA platforms",
        "Reduced manual work by 80% on average"
      ]
    }
  ];

  const advisors = [
    {
      name: "Prof. Nkem Okoye",
      role: "AI Research Advisor",
      company: "University of Lagos",
      expertise: "Machine Learning Research"
    },
    {
      name: "David Johnson",
      role: "Business Strategy Advisor",
      company: "Former McKinsey Partner",
      expertise: "Digital Transformation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our diverse team of experts combines deep technical knowledge with practical business experience to deliver transformative solutions for African businesses.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry veterans and thought leaders driving innovation in AI and business automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-600 font-semibold">
                    {member.role}
                  </CardDescription>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <LinkedinIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <TwitterIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MailIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Advisors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry experts and thought leaders who guide our strategic direction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{advisor.name}</CardTitle>
                  <CardDescription>{advisor.role}</CardDescription>
                  <p className="text-sm text-gray-600">{advisor.company}</p>
                  <Badge variant="secondary" className="w-fit mx-auto mt-2">
                    {advisor.expertise}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and relationships with clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🎯</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every project, delivering solutions that exceed expectations and drive real business value.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">We work closely with our clients as partners, ensuring solutions are tailored to their unique needs and challenges.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace cutting-edge technologies and creative approaches to solve complex business challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
            View Open Positions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
