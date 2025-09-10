import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Leaf, Award, Users, Target, Heart, CheckCircle } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainable Excellence',
      description: 'Every design integrates native plants and eco-friendly practices that enhance both beauty and environmental health.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Award,
      title: 'Artisan Craftsmanship',
      description: 'Our master craftsmen bring decades of expertise to every project, ensuring exceptional quality and attention to detail.',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We collaborate closely with each client to understand their vision and create personalized outdoor experiences.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Combining traditional landscaping wisdom with cutting-edge techniques and sustainable technologies.',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const achievements = [
    { number: '25+', label: 'Years of Excellence', desc: 'Industry Leadership' },
    { number: '500+', label: 'Luxury Projects', desc: 'Completed Designs' },
    { number: '98%', label: 'Client Satisfaction', desc: '5-Star Reviews' },
    { number: '15', label: 'Design Awards', desc: 'National Recognition' }
  ];

  const certifications = [
    'Certified Landscape Professional (CLP)',
    'Sustainable Landscape Specialist',
    'Native Plant Society Certified',
    'Water-Wise Design Expert',
    'Organic Land Care Professional'
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Leaf className="w-5 h-5 mr-3" />
            <span className="font-semibold">Crafting Natural Masterpieces Since 1999</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Where Artistry Meets 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Nature</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over two decades, Jardin has been the trusted partner for discerning homeowners 
            who demand the extraordinary. We transform outdoor spaces into living works of art 
            that celebrate the harmony between luxury and nature.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-8">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To create extraordinary outdoor environments that inspire, restore, and connect 
                        people with the natural world. We believe every landscape should be a personal 
                        sanctuary that reflects the unique character and dreams of its owners.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Luxury doesn't mean compromising with nature—it means working in perfect 
                        harmony with it. Our designs celebrate the inherent beauty of natural 
                        systems while creating spaces of unparalleled elegance and functionality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Professional Certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                    <span className="text-emerald-100">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Luxury Garden Design"
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Sustainable Landscaping"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
              </div>
              <div className="space-y-6 pt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Garden Maintenance"
                    className="w-full h-72 object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                    alt="Outdoor Living Spaces"
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-emerald-500"
            >
              <div className="text-center">
                <Award className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">2023</div>
                <div className="text-sm text-gray-600">Design Award</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Card className="border-0 shadow-2xl bg-white hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-3">
                      {achievement.number}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{achievement.label}</h4>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              These principles guide every project, ensuring that each landscape we create 
              embodies excellence, sustainability, and timeless beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-emerald-500 to-teal-600"></div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4 text-lg">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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