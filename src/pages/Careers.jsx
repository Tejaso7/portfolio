import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, Clock, Users, Briefcase, ArrowRight, Star, Target, Heart, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Careers = () => {
  const [hoveredJob, setHoveredJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      description: "Join our frontend team to build beautiful, performant user interfaces that millions of users love."
    },
    {
      id: 2,
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      description: "Design intuitive experiences that solve real problems for our growing user base."
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "New York, NY",
      type: "Full-time",
      experience: "4+ years",
      skills: ["AWS", "Kubernetes", "Docker", "Terraform"],
      description: "Scale our infrastructure to support millions of users with reliability and performance."
    },
    {
      id: 4,
      title: "Marketing Manager",
      department: "Marketing",
      location: "Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      skills: ["Growth Marketing", "Analytics", "Content Strategy", "SEO"],
      description: "Drive growth and build our brand presence across multiple channels and markets."
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Professional Growth",
      description: "Learning budget, conference attendance, and mentorship programs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, unlimited PTO, and remote work options"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Culture",
      description: "Collaborative environment with team events and company retreats"
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "99%", label: "Employee Satisfaction" },
    { number: "2019", label: "Founded" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-black text-white mt-[65px]">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-white/20 text-white hover:bg-white/10 transition-colors">
                  We're Hiring!
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                  Join Our
                  <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Amazing Team
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Build the future with us. We're looking for passionate individuals who want to make a real impact.
                </p>
              </div>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all transform hover:scale-105">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We believe in creating an environment where you can do your best work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto bg-black rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {benefit.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find your next opportunity and grow your career with us
              </p>
            </div>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <Card
                  key={job.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredJob(job.id)}
                  onMouseLeave={() => setHoveredJob(null)}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
                      <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                              {job.title}
                            </h3>
                            <Badge variant="outline" className="bg-black text-white border-black">
                              {job.department}
                            </Badge>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{job.description}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="lg:ml-8">
                        <Button
                          size="lg"
                          className={`bg-black text-white hover:bg-gray-800 transition-all transform ${hoveredJob === job.id ? 'scale-105' : ''
                            }`}
                        >
                          Apply Now
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                Ready to Join Us?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Don't see a perfect fit? We're always looking for exceptional talent.
                Send us your resume and let's start a conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-black hover:bg-gray-100 transition-all">
                Send Your Resume
              </Button>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 transition-all">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;