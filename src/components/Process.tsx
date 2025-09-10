import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, PenTool, Hammer, Leaf, Calendar, Users, CheckCircle, ArrowRight } from 'lucide-react';

export function Process() {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Discovery & Consultation',
      duration: '1-2 weeks',
      description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and property requirements.',
      details: [
        'Site analysis and assessment',
        'Lifestyle and needs discussion',
        'Budget and timeline planning',
        'Soil and drainage evaluation',
        'Climate and exposure study'
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: 2,
      icon: PenTool,
      title: 'Design Development',
      duration: '2-4 weeks',
      description: 'Our design team creates detailed plans and 3D visualizations to bring your vision to life.',
      details: [
        '3D design visualization',
        'Plant selection and placement',
        'Hardscape material choices',
        'Lighting and irrigation planning',
        'Detailed construction drawings'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      step: 3,
      icon: Hammer,
      title: 'Installation & Construction',
      duration: '3-8 weeks',
      description: 'Our skilled craftsmen execute the design with precision, using only the finest materials and techniques.',
      details: [
        'Site preparation and grading',
        'Hardscape installation',
        'Irrigation system setup',
        'Plant installation and placement',
        'Lighting and final details'
      ],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-orange-500 to-red-600'
    },
    {
      step: 4,
      icon: Leaf,
      title: 'Care & Maintenance',
      duration: 'Ongoing',
      description: 'We provide comprehensive maintenance services to ensure your landscape thrives for years to come.',
      details: [
        'Seasonal maintenance programs',
        'Plant health monitoring',
        'Irrigation system maintenance',
        'Fertilization and pest control',
        'Design updates and enhancements'
      ],
      image: 'https://images.unsplash.com/photo-1416447935757-bd2f2e3a3e90?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const timeline = [
    { phase: 'Initial Consultation', time: 'Week 1', status: 'completed' },
    { phase: 'Site Analysis', time: 'Week 2', status: 'completed' },
    { phase: 'Concept Design', time: 'Week 3-4', status: 'current' },
    { phase: 'Design Refinement', time: 'Week 5-6', status: 'upcoming' },
    { phase: 'Material Selection', time: 'Week 7', status: 'upcoming' },
    { phase: 'Construction Begin', time: 'Week 8', status: 'upcoming' },
    { phase: 'Installation Complete', time: 'Week 12-16', status: 'upcoming' },
    { phase: 'Final Walkthrough', time: 'Week 17', status: 'upcoming' }
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: '1-Year Plant Guarantee',
      description: 'All plants are guaranteed for one full year from installation date.'
    },
    {
      icon: Users,
      title: 'Licensed & Insured',
      description: 'Fully licensed contractors with comprehensive insurance coverage.'
    },
    {
      icon: Calendar,
      title: 'Timely Completion',
      description: 'Projects completed on time with clear milestone tracking.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-transparent rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-teal-100 to-transparent rounded-full transform translate-x-1/2 translate-y-1/2"></div>

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
            <Calendar className="w-5 h-5 mr-3" />
            <span className="font-semibold">Our Proven Process</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            From Vision to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Reality</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our systematic approach ensures every project is delivered with precision, artistry, and attention to detail. 
            Here's how we bring your landscape dreams to life.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16 mb-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-gray-900">Step {step.step}</span>
                      <Badge className="bg-emerald-100 text-emerald-700">
                        {step.duration}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-lg">What's Included:</h4>
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: detailIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex items-center space-x-3 text-emerald-600">
                    <span className="font-medium">Next Step</span>
                    <ArrowRight className="w-5 h-5" />
                    <span className="text-gray-600">{steps[index + 1].title}</span>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-96 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-20`}></div>
                  
                  {/* Step Number Overlay */}
                  <div className="absolute top-6 right-6">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                      <span className="text-2xl font-bold text-gray-900">{step.step}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Sample Project Timeline</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Every project is unique, but here's a typical timeline for a comprehensive landscape transformation.
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.phase}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-6"
                  >
                    <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                      item.status === 'completed' 
                        ? 'bg-emerald-500' 
                        : item.status === 'current'
                        ? 'bg-blue-500 ring-4 ring-blue-200'
                        : 'bg-gray-300'
                    }`}></div>
                    
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className={`font-semibold ${
                          item.status === 'current' ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {item.phase}
                        </h4>
                      </div>
                      <div className="text-gray-600">
                        {item.time}
                      </div>
                    </div>

                    {item.status === 'current' && (
                      <Badge className="bg-blue-100 text-blue-700">
                        In Progress
                      </Badge>
                    )}
                    {item.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Guarantees & Assurances */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to Excellence</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We stand behind our work with comprehensive guarantees and professional standards 
              that give you complete confidence in your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto">
                      <guarantee.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xl mb-3">{guarantee.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{guarantee.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-12 text-white">
              <h4 className="text-3xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg">
                Schedule your complimentary consultation today and take the first step toward 
                transforming your outdoor space into something extraordinary.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}