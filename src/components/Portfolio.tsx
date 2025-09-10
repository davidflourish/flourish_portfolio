import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useRouter } from './Router';
import { Eye, Calendar, MapPin, Leaf, Award, Filter, ChevronRight } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { navigateTo } = useRouter();

  const filters = [
    { id: 'all', name: 'All Projects', count: 12 },
    { id: 'residential', name: 'Residential', count: 8 },
    { id: 'commercial', name: 'Commercial', count: 3 },
    { id: 'water-features', name: 'Water Features', count: 4 },
    { id: 'outdoor-living', name: 'Outdoor Living', count: 6 }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Zen Retreat',
      category: 'residential',
      tags: ['water-features', 'outdoor-living'],
      location: 'Beverly Hills, CA',
      year: '2023',
      area: '2.5 acres',
      budget: '$180,000',
      description: 'A tranquil modern landscape featuring Japanese-inspired design elements, infinity water features, and seamless indoor-outdoor living.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Best Residential Design 2023', 'Sustainability Award'],
      featured: true
    },
    {
      id: 2,
      title: 'Luxury Resort Entrance',
      category: 'commercial',
      tags: ['water-features'],
      location: 'Napa Valley, CA',
      year: '2023',
      area: '1.2 acres',
      budget: '$320,000',
      description: 'Grand entrance design for a luxury resort featuring dramatic water cascades, native plantings, and sophisticated lighting.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Commercial Excellence Award']
    },
    {
      id: 3,
      title: 'Hillside Mediterranean Villa',
      category: 'residential',
      tags: ['outdoor-living'],
      location: 'Malibu, CA',
      year: '2022',
      area: '3.8 acres',
      budget: '$275,000',
      description: 'Terraced landscape design maximizing ocean views with Mediterranean plants, outdoor kitchen, and infinity pool integration.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Hillside Design Innovation']
    },
    {
      id: 4,
      title: 'Sustainable Family Garden',
      category: 'residential',
      tags: ['water-features'],
      location: 'Palo Alto, CA',
      year: '2023',
      area: '0.8 acres',
      budget: '$95,000',
      description: 'Eco-friendly family landscape with edible gardens, rainwater harvesting, and natural play areas for children.',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Green Design Award 2023']
    },
    {
      id: 5,
      title: 'Urban Rooftop Oasis',
      category: 'commercial',
      tags: ['outdoor-living'],
      location: 'San Francisco, CA',
      year: '2022',
      area: '0.3 acres',
      budget: '$150,000',
      description: 'Transforming a corporate rooftop into a green oasis with seating areas, vertical gardens, and city views.',
      image: 'https://images.unsplash.com/photo-1416447935757-bd2f2e3a3e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Urban Innovation Award']
    },
    {
      id: 6,
      title: 'Coastal Contemporary Estate',
      category: 'residential',
      tags: ['water-features', 'outdoor-living'],
      location: 'Carmel, CA',
      year: '2023',
      area: '4.2 acres',
      budget: '$450,000',
      description: 'Oceanfront estate landscape designed to complement coastal architecture with native plants and stone features.',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beforeImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      awards: ['Coastal Design Excellence'],
      featured: true
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || project.tags.includes(activeFilter)
      );

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm25 0c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center bg-emerald-100 rounded-full px-6 py-3 text-emerald-700 mb-8">
            <Award className="w-5 h-5 mr-3" />
            <span className="font-semibold">Award-Winning Projects</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Landscapes That Tell 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Stories</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Each project represents a unique collaboration between our design expertise and our clients' dreams. 
            Explore our portfolio of transformative outdoor spaces.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-2 border border-gray-100">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                >
                  {filter.name}
                  <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                    activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${project.featured ? 'xl:col-span-2' : ''}`}
            >
              <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                <div className={`relative ${project.featured ? 'h-80' : 'h-64'} overflow-hidden`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Project Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    <Badge className="bg-white/90 text-gray-900 font-semibold">
                      {project.budget}
                    </Badge>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white hover:text-gray-900"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-4 text-sm text-gray-300 mb-2">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {project.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.year}
                          </div>
                        </div>
                        <h3 className="font-bold text-xl mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-200">{project.area}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Awards */}
                  {project.awards && project.awards.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Awards & Recognition
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.awards.map((award, awardIndex) => (
                          <Badge key={awardIndex} variant="outline" className="text-xs">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Leaf className="w-4 h-4 mr-1 text-emerald-500" />
                        {project.category}
                      </div>
                    </div>
                    {/* Removed the "View Details" button as requested */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Create Your Dream Landscape?</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss how we can transform your outdoor space into something extraordinary. 
              Every great landscape begins with a conversation.
            </p>
            <Button 
              size="lg" 
              onClick={() => navigateTo('contact')}
              className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4"
            >
              Start Your Project
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}