import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Users, Verified, Play } from 'lucide-react';

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Chen',
      location: 'Beverly Hills, CA',
      project: 'Complete Backyard Transformation',
      investment: '$185,000',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616c51c6e5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Jardin transformed our boring backyard into an absolute paradise. The attention to detail and quality of work exceeded all our expectations. Our outdoor space is now the heart of our home.',
      projectImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      verified: true
    },
    {
      id: 2,
      name: 'David Rodriguez',
      location: 'Malibu, CA',
      project: 'Hillside Landscape Design',
      investment: '$275,000',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'Working with Jardin was an incredible experience from start to finish. They turned our challenging hillside lot into a stunning showcase that our neighbors constantly admire.',
      projectImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'Jennifer Park',
      location: 'Palo Alto, CA',
      project: 'Sustainable Family Garden',
      investment: '$95,000',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'As environmentally conscious homeowners, we loved how Jardin created a beautiful, sustainable landscape that our kids love playing in. The edible garden is a huge hit with the whole family.',
      projectImage: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      verified: true
    },
    {
      id: 4,
      name: 'Robert & Lisa Thompson',
      location: 'Carmel, CA',
      project: 'Coastal Estate Landscaping',
      investment: '$450,000',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      quote: 'The team at Jardin understood our vision perfectly and delivered beyond our wildest dreams. Our coastal property now seamlessly blends with the natural environment while maintaining luxury appeal.',
      projectImage: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
      verified: true
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Star },
    { number: '15', label: 'Design Awards', icon: Award },
    { number: '25+', label: 'Years Experience', icon: Verified }
  ];

  const awards = [
    {
      year: '2023',
      title: 'Landscape Design Excellence Award',
      organization: 'National Association of Landscape Professionals',
      image: 'https://images.unsplash.com/photo-1567452278091-e24af9c1ba27?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      year: '2023',
      title: 'Sustainable Landscape Innovation',
      organization: 'California Landscape Contractors Association',
      image: 'https://images.unsplash.com/photo-1567452278091-e24af9c1ba27?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      year: '2022',
      title: 'Best Residential Project',
      organization: 'Landscape Architecture Awards',
      image: 'https://images.unsplash.com/photo-1567452278091-e24af9c1ba27?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-100 to-transparent rounded-full transform -translate-x-1/2 translate-y-1/2"></div>

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
            <Star className="w-5 h-5 mr-3" />
            <span className="font-semibold">Client Success Stories</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Transformations That 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Inspire</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Hear from our clients who've experienced 
            the Jardin difference in their own outdoor spaces.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <CardContent className="p-12 space-y-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  {currentTest.verified && (
                    <Badge className="bg-emerald-100 text-emerald-700">
                      <Verified className="w-3 h-3 mr-1" />
                      Verified Client
                    </Badge>
                  )}
                </div>

                <div className="relative">
                  <Quote className="w-12 h-12 text-emerald-200 absolute -top-4 -left-2" />
                  <blockquote className="text-2xl text-gray-900 leading-relaxed pl-8">
                    {currentTest.quote}
                  </blockquote>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={currentTest.image}
                      alt={currentTest.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{currentTest.name}</h4>
                    <p className="text-gray-600">{currentTest.location}</p>
                    <p className="text-sm text-emerald-600 font-medium">{currentTest.project}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Project Investment</p>
                    <p className="font-semibold text-xl text-gray-900">{currentTest.investment}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video Tour
                  </Button>
                  <Button variant="outline">
                    View Full Project
                  </Button>
                </div>
              </CardContent>

              {/* Project Image */}
              <div className="relative h-96 lg:h-auto">
                <ImageWithFallback
                  src={currentTest.projectImage}
                  alt={`${currentTest.name} project`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {currentTest.featured && (
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                      <Award className="w-3 h-3 mr-1" />
                      Featured Project
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Client Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-2">
                      {stat.number}
                    </div>
                    <h4 className="font-semibold text-gray-900">{stat.label}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">More Success Stories</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every project tells a unique story of transformation and satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      {testimonial.verified && (
                        <Verified className="w-4 h-4 text-emerald-500" />
                      )}
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500">{testimonial.project}</p>
                      <p className="font-semibold text-emerald-600">{testimonial.investment}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Awards & Recognition</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our commitment to excellence has been recognized by industry leaders and organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">{award.year}</div>
                      <h4 className="font-bold text-gray-900 mb-3">{award.title}</h4>
                      <p className="text-gray-600 text-sm">{award.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-12 text-white">
              <h4 className="text-3xl font-bold mb-4">Join Our Success Stories</h4>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Ready to create your own landscape transformation story? Let's discuss how we can 
                make your outdoor dreams a reality.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Start Your Project Today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}