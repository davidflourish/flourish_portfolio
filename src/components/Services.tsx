import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Droplets, Lightbulb, Hammer, TreePine, Flower, ArrowRight, Star } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Landscape Design & Installation',
      description: 'Custom outdoor spaces that blend luxury with natural beauty, featuring native plants and sustainable design principles.',
      features: ['3D Design Visualization', 'Native Plant Selection', 'Hardscape Integration', 'Seasonal Planning'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-emerald-500 to-teal-600',
      price: 'Starting at $15,000'
    },
    {
      icon: Droplets,
      title: 'Irrigation & Water Features',
      description: 'Smart irrigation systems and stunning water features that conserve resources while creating tranquil focal points.',
      features: ['Smart Irrigation Systems', 'Water Feature Design', 'Drainage Solutions', 'Water Conservation'],
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-blue-500 to-cyan-600',
      price: 'Starting at $8,000'
    },
    {
      icon: Lightbulb,
      title: 'Outdoor Lighting Design',
      description: 'Sophisticated lighting systems that extend outdoor living hours and showcase your landscape\'s beauty after dark.',
      features: ['LED Technology', 'Smart Controls', 'Security Integration', 'Accent Lighting'],
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-yellow-500 to-orange-600',
      price: 'Starting at $5,000'
    },
    {
      icon: Hammer,
      title: 'Hardscape Construction',
      description: 'Premium patios, walkways, and outdoor structures using the finest materials and expert craftsmanship.',
      features: ['Natural Stone Work', 'Custom Patios', 'Retaining Walls', 'Outdoor Kitchens'],
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-gray-600 to-slate-700',
      price: 'Starting at $12,000'
    },
    {
      icon: TreePine,
      title: 'Tree & Shrub Care',
      description: 'Professional arboriculture services to maintain the health and beauty of your existing and new plantings.',
      features: ['Tree Health Assessment', 'Pruning Services', 'Fertilization Program', 'Disease Management'],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-green-600 to-emerald-700',
      price: 'Starting at $500'
    },
    {
      icon: Flower,
      title: 'Seasonal Maintenance',
      description: 'Year-round maintenance programs that keep your landscape looking pristine through every season.',
      features: ['Seasonal Cleanups', 'Mulching Services', 'Fertilization', 'Pest Management'],
      image: 'https://images.unsplash.com/photo-1416447935757-bd2f2e3a3e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-pink-500 to-rose-600',
      price: 'Starting at $200/month'
    }
  ];

  const packages = [
    {
      name: 'Essential',
      price: '$25,000',
      description: 'Perfect for smaller spaces and budding gardeners',
      features: [
        'Basic landscape design',
        'Native plant installation',
        'Mulching and cleanup',
        '6-month maintenance',
        'Basic irrigation setup'
      ],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      name: 'Premium',
      price: '$65,000',
      description: 'Comprehensive landscape transformation',
      features: [
        'Complete landscape redesign',
        'Hardscape installation',
        'Smart irrigation system',
        'Outdoor lighting',
        'Water feature',
        '12-month maintenance',
        'Seasonal color program'
      ],
      color: 'from-blue-500 to-indigo-600',
      popular: true
    },
    {
      name: 'Luxury',
      price: '$150,000+',
      description: 'Ultimate outdoor living experience',
      features: [
        'Full property transformation',
        'Outdoor kitchen & living',
        'Pool & spa integration',
        'Complete automation',
        'Premium materials only',
        'Ongoing concierge service',
        'Warranty & guarantees'
      ],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
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
            <Leaf className="w-5 h-5 mr-3" />
            <span className="font-semibold">Premium Landscape Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Transforming Visions Into 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Reality</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From initial concept to ongoing care, our comprehensive services ensure your outdoor space 
            remains a source of joy and pride for years to come.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-white/90 text-gray-900 font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Service Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Complete Packages</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose from our carefully curated packages designed to deliver maximum impact 
              within your budget and timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 shadow-lg">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full border-0 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 ${
                  pkg.popular ? 'ring-2 ring-emerald-500 scale-105' : ''
                }`}>
                  <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                  
                  <CardContent className="p-8 space-y-8">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                        {pkg.price}
                      </div>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>

                    <div className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full ${
                        pkg.popular 
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white' 
                          : 'bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                      } transition-all duration-300`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}