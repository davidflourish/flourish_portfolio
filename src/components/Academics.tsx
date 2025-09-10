import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Users, Award, Calendar, Microscope, Globe, Beaker, Calculator, Computer, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Academics() {
  const programs = [
    {
      level: 'Nursery & Primary',
      age: 'Ages 3-11',
      description: 'Early childhood and foundational education with focus on literacy, numeracy, creativity, and social development in a nurturing environment.',
      features: ['Play-Based Learning', 'STEAM Program', 'Language Arts', 'Creative Arts'],
      color: 'from-blue-500 to-cyan-600',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      level: 'Junior Secondary',
      age: 'Ages 12-14',
      description: 'Comprehensive middle school education with strong emphasis on core subjects, critical thinking, and exploration of diverse interests.',
      features: ['Core Sciences', 'Technology Integration', 'Arts & Humanities', 'Leadership Skills'],
      color: 'from-green-500 to-teal-600',
      icon: Microscope,
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      level: 'Senior Secondary',
      age: 'Ages 15-18',
      description: 'Advanced high school program with specialized tracks preparing students for university admission and career readiness.',
      features: ['Science Track', 'Arts Track', 'Commercial Track', 'University Prep'],
      color: 'from-purple-500 to-pink-600',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: Calculator, color: 'bg-blue-500' },
    { name: 'Sciences', icon: Beaker, color: 'bg-green-500' },
    { name: 'English Language', icon: BookOpen, color: 'bg-purple-500' },
    { name: 'Computer Studies', icon: Computer, color: 'bg-orange-500' },
    { name: 'Social Studies', icon: Globe, color: 'bg-teal-500' },
    { name: 'Creative Arts', icon: Palette, color: 'bg-indigo-500' }
  ];

  const highlights = [
    {
      icon: BookOpen,
      title: 'Holistic Curriculum',
      description: 'Comprehensive education balancing academics, arts, and character development',
      stat: '100%'
    },
    {
      icon: Users,
      title: 'Small Classes',
      description: 'Maximum 20 students per class ensuring personalized attention',
      stat: '20:1'
    },
    {
      icon: Award,
      title: 'WAEC Results',
      description: '98% pass rate with 92% scoring 5 credits and above',
      stat: '98%'
    },
    {
      icon: Calendar,
      title: 'Extended Learning',
      description: 'After-school programs and academic enrichment activities',
      stat: '6 Days'
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-blue-100 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            <span className="font-medium">Academic Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Quality 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Education</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our rigorous academic programs integrate cutting-edge curriculum with innovative teaching methods, 
            preparing students for success in higher education and beyond.
          </p>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {programs.map((program, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={program.image}
                  alt={program.level}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30">{program.age}</Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{program.level}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Subjects</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum covers essential subjects across STEM, humanities, and arts, 
              ensuring well-rounded education for all students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="group">
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white group-hover:-translate-y-1">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className={`w-12 h-12 ${subject.color} rounded-xl flex items-center justify-center`}>
                      <subject.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{subject.name}</h4>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Academic Program?</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group-hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.stat}</div>
                    <h4 className="font-semibold text-gray-900 mb-3">{highlight.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">2024/2025 Academic Session</h3>
            <p className="text-gray-600 text-lg">Important dates and schedules for the current academic year</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-2">First Term</div>
                <div className="text-gray-600">September - December 2024</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-2">Second Term</div>
                <div className="text-gray-600">January - April 2025</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="font-bold text-gray-900 mb-2">Third Term</div>
                <div className="text-gray-600">May - July 2025</div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Our academic calendar includes holiday schedules, examination periods, and special events throughout the year.
            </p>
            <Badge className="bg-blue-600 text-white hover:bg-blue-700">
              Download Full Calendar
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}