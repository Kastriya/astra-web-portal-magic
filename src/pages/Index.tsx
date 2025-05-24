import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Rocket, Zap, Shield, Globe, Star, ArrowRight, Menu, X, Trophy, Users, Calendar, Code } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const teamMembers = [
    {
      name: "AVSC",
      role: "Founder",
      specialty: "Strategy & Electronics",
      image: "/placeholder.svg"
    },
    {
      name: "Himanshu",
      role: "HOD of Hacking (C Kastariya Verna)",
      specialty: "Hacking & Design",
      image: "/placeholder.svg"
    }
  ];

  const events = [
    {
      title: "CyberStorm CTF Mumbai",
      date: "2024",
      result: "Participated",
      description: "India's Largest CTF - Showcased our cybersecurity skills and strategic thinking."
    },
    {
      title: "Technoxian Robo Race",
      date: "2024", 
      result: "RC Car Challenge",
      description: "Competed with our custom-built brushless motor RC car in this prestigious robotics competition."
    }
  ];

  const projects = [
    {
      title: "CyberStorm Participation Project",
      category: "Cybersecurity",
      description: "Comprehensive CTF preparation including tools development, OSINT techniques, and strategic methodologies.",
      tech: ["OSINT", "CTF Tools", "Strategy", "Cybersecurity"]
    },
    {
      title: "RC Car Project",
      category: "Robotics",
      description: "Brushless motor setup under ₹6000 with gear-driven design, specifically built for Technoxian competition.",
      tech: ["Brushless Motors", "Gear Systems", "Electronics", "Mechanical Design"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Star className="h-10 w-10 text-purple-400" />
                <div className="absolute inset-0 h-10 w-10 text-purple-400 animate-pulse opacity-50">
                  <Star className="h-10 w-10" />
                </div>
              </div>
              <div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  ASTRA
                </span>
                <div className="text-xs text-gray-400 tracking-widest">INNOVATION • DISCIPLINE • AMBITION</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Team', 'Events', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-purple-400 transition-all duration-300 relative group"
                >
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-purple-500/20">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/60 backdrop-blur-md">
                {['Home', 'About', 'Team', 'Events', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="relative inline-block">
                <Star className="h-24 w-24 text-purple-400 mx-auto mb-6" />
                <div className="absolute inset-0 h-24 w-24 text-purple-400 animate-ping opacity-20">
                  <Star className="h-24 w-24" />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  ASTRA
                </span>
              </h1>
              <div className="text-lg md:text-xl text-gray-400 tracking-widest mb-8">
                INNOVATION • DISCIPLINE • AMBITION
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                <span className="text-purple-400">Born to Lead,</span>
                <br />
                <span className="text-blue-400">Trained to Win</span>
              </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl -z-10"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are the next generation of innovators, engineers, and leaders. 
              Through cutting-edge technology and relentless ambition, we shape the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg border border-purple-500/50 shadow-lg shadow-purple-500/25"
                onClick={() => scrollToSection('about')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore Our Mission
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-10 py-4 text-lg"
                onClick={() => scrollToSection('projects')}
              >
                <Code className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About ASTRA
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Rocket className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-2xl text-white">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg">
                  ASTRA is a youth-led, mission-driven team formed to conquer tech, robotics, and cybersecurity challenges across India and beyond.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-2xl text-white">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg">
                  To become the premier competitive tech organization, known for excellence in 
                  robotics, AI, and cybersecurity, inspiring innovation across industries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border-cyan-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-cyan-400 mb-4" />
                <CardTitle className="text-2xl text-white">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-lg">
                  Innovation drives us, discipline guides us, and ambition propels us. We believe in 
                  collaborative excellence, ethical technology, and continuous learning.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Himanshu's Details */}
          <div className="mt-16">
            <Card className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">HOD Spotlight</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Himanshu (C Kastariya Verna)</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our Head of Hacking brings diverse expertise in coding, hacking, and ethical cybersecurity. 
                    Beyond tech, Himanshu excels in cricket, graphic design, and chess. He finds balance through 
                    meditation, prayer, fitness, and wisdom from sacred texts including the Bhagavad Gita, 
                    Chanakya Neeti, and Quran.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the brilliant minds behind ASTRA's innovations and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover bg-gray-800"
                      />
                    </div>
                    <div className="absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:scale-110 transition-transform duration-300"></div>
                  </div>
                  <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Events & Competitions
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our track record of excellence in competitive technology events.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/60 to-blue-900/20 border-blue-500/30 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Trophy className="h-8 w-8 text-yellow-400" />
                    <span className="text-sm text-blue-400 font-semibold">{event.date}</span>
                  </div>
                  <CardTitle className="text-white text-xl">{event.title}</CardTitle>
                  <div className="text-lg font-bold text-yellow-400">{event.result}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {event.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Projects & Innovations
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge projects that showcase our technical expertise and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900/60 to-purple-900/20 border-purple-500/20 backdrop-blur-sm hover:scale-102 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Code className="h-8 w-8 text-purple-400" />
                    <span className="text-sm text-purple-400 font-semibold bg-purple-500/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-2 py-1 rounded border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join the Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              Ready to push the boundaries of technology? Connect with ASTRA today.
            </p>
          </div>
          
          <Card className="bg-gradient-to-br from-gray-900/60 to-purple-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Your name"
                      className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us about your goals, skills, or how you'd like to collaborate..."
                    rows={4}
                    className="bg-black/50 border-purple-500/30 text-white placeholder:text-gray-500 focus:border-purple-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border border-purple-500/50 shadow-lg shadow-purple-500/25"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Launch Your Journey
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="h-8 w-8 text-purple-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ASTRA
            </span>
          </div>
          <div className="text-sm text-gray-400 tracking-widest mb-4">
            INNOVATION • DISCIPLINE • AMBITION
          </div>
          <p className="text-gray-400 mb-4">
            Shaping the future through technology, one innovation at a time.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 ASTRA. Born to Lead, Trained to Win.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
