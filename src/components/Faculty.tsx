import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, BookOpen, Building, Users, Star, Beaker } from 'lucide-react';

export function Faculty() {
  const leadership = [
    {
      name: 'Dr. Amina Hassan',
      position: 'Principal',
      qualification: 'Ph.D. Educational Leadership, University of Ibadan',
      experience: '20+ years',
      specialties: ['Educational Leadership', 'Curriculum Development', 'School Administration'],
      image: 'https://images.unsplash.com/photo-1494790108755-2616c51c6e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Author of educational excellence publications'
    },
    {
      name: 'Mr. Ibrahim Suleiman',
      position: 'Vice Principal (Academics)',
      qualification: 'M.Ed. Mathematics, University of Lagos',
      experience: '18+ years',
      specialties: ['Mathematics', 'Sciences', 'Academic Administration'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Best Mathematics Teacher Award 2023'
    },
    {
      name: 'Mrs. Fatima Hassan',
      position: 'Head of Primary Section',
      qualification: 'B.Ed. Early Childhood, Ahmadu Bello University',
      experience: '12+ years',
      specialties: ['Early Childhood Education', 'Learning Development', 'Character Building'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Pioneer of integrated curriculum design'
    },
    {
      name: 'Dr. Umar Abdulrazaq',
      position: 'Head of Sciences',
      qualification: 'Ph.D. Chemistry, University of Ilorin',
      experience: '16+ years',
      specialties: ['Chemistry', 'Physics', 'Research Methods'],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Published researcher in science education'
    },
    {
      name: 'Mrs. Khadijah Yusuf',
      position: 'Head of Languages',
      qualification: 'M.A. English Literature, University of Ibadan',
      experience: '14+ years',
      specialties: ['English Literature', 'Creative Writing', 'Language Development'],
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Award-winning language program developer'
    },
    {
      name: 'Mr. Ahmed Olumide',
      position: 'Head of Technology',
      qualification: 'M.Sc. Computer Science, University of Jos',
      experience: '10+ years',
      specialties: ['Computer Science', 'Digital Learning', 'Innovation'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      achievements: 'Digital transformation leader'
    }
  ];

  const departments = [
    {
      name: 'Sciences',
      teachers: 15,
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      icon: Beaker,
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Languages & Arts',
      teachers: 12,
      subjects: ['English', 'Literature', 'French', 'Creative Writing', 'Drama'],
      icon: BookOpen,
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Social Studies',
      teachers: 8,
      subjects: ['History', 'Geography', 'Government', 'Economics', 'Civic Education'],
      icon: GraduationCap,
      color: 'from-orange-500 to-red-600'
    },
    {
      name: 'Technology & Innovation',
      teachers: 6,
      subjects: ['Computer Studies', 'ICT', 'Robotics', 'Digital Design'],
      icon: Building,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    {
      icon: GraduationCap,
      number: '75+',
      label: 'Qualified Teachers',
      description: 'All hold minimum B.A./B.Ed. degrees'
    },
    {
      icon: Award,
      number: '90%',
      label: 'Advanced Degrees',
      description: 'Masters and PhD holders'
    },
    {
      icon: Users,
      number: '15:1',
      label: 'Student-Teacher Ratio',
      description: 'Ensuring personalized attention'
    },
    {
      icon: BookOpen,
      number: '25+',
      label: 'Years Experience',
      description: 'Average faculty experience'
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-100 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="font-medium">Our Expert Educators</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dedicated Faculty &amp; 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Academic Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our distinguished faculty combines advanced academic qualifications with innovative teaching methods, 
            ensuring students receive world-class education and mentorship.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our experienced leadership team combines academic excellence with innovative educational approaches, 
              guiding our institution toward continuous improvement and student success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-white transform hover:-translate-y-2">
                <div className="relative">
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium">{member.achievements}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    <div className="text-sm text-gray-600 space-y-1 mb-4">
                      <p className="leading-relaxed">{member.qualification}</p>
                      <p className="font-medium text-gray-700">{member.experience} experience</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-3">Areas of Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Academic Departments</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our faculty is organized into specialized departments, each led by experienced educators 
              committed to excellence in their respective fields.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{dept.name}</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{dept.teachers}</div>
                  <p className="text-sm text-gray-600 mb-4">Teachers</p>
                  <div className="space-y-2">
                    {dept.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-xs mx-1">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Development */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Commitment to Excellence</h3>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg">
              Our faculty regularly participates in professional development programs, educational 
              conferences, and training workshops to stay current with best practices in modern education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Continuous Learning</h4>
                  <p className="text-sm text-gray-600">Regular educational workshops and professional training</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Research &amp; Innovation</h4>
                  <p className="text-sm text-gray-600">Active participation in educational research</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Development</h4>
                  <p className="text-sm text-gray-600">Continuous skill enhancement and knowledge growth</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Collaborative Teaching</h4>
                  <p className="text-sm text-gray-600">Team-based approach to integrated education</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}