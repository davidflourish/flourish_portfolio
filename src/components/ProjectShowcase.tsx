import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Database, 
  Shield, 
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  CreditCard,
  GraduationCap,
  Heart,
  ShoppingCart,
  BarChart3,
  Utensils,
  AlertCircle,
  Eye
} from 'lucide-react';

export function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'FinFlow Banking System',
      category: 'FinTech Application',
      description: 'Complete banking management system with real-time transactions, account management, and financial analytics dashboard.',
      problem: 'Traditional banking systems lack modern user interfaces and real-time transaction processing capabilities.',
      solution: 'Developed a comprehensive banking system with intuitive UI, instant transfers, and advanced security measures.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Stripe API', 'Chart.js'],
      results: ['500+ test accounts created', 'Real-time transaction processing', 'Bank-grade security implementation'],
      image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcxMTYwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/finflow-banking',
      features: ['Account Management', 'Real-time Transfers', 'Transaction History', 'Financial Analytics'],
      icon: CreditCard,
      color: 'from-blue-500 to-cyan-500',
      status: 'Database currently under maintenance - Interface viewable',
      statusType: 'maintenance'
    },
    {
      id: 2,
      title: 'EduMaster LMS',
      category: 'Educational Platform',
      description: 'Learning Management System for universities with course management, student enrollment, and grade tracking.',
      problem: 'Universities needed a centralized system for course management and student-teacher interaction.',
      solution: 'Built a comprehensive LMS with course creation tools, assignment management, and progress tracking.',
      techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis', 'WebSocket', 'AWS S3'],
      results: ['1000+ students enrolled', '50+ courses hosted', 'Used by 3 institutions'],
      image: 'https://images.unsplash.com/photo-1695370992939-be4eb6fddf35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW0lMjBlZHVjYXRpb258ZW58MXx8fHwxNzU3MTE2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/edumaster-lms',
      features: ['Course Management', 'Student Portal', 'Grade Tracking', 'Assignment System'],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500',
      status: 'Demo available - Full functionality in development',
      statusType: 'demo'
    },
    {
      id: 3,
      title: 'CareSync Hospital System',
      category: 'Healthcare Management',
      description: 'Hospital management system with patient records, appointment scheduling, and medical inventory tracking.',
      problem: 'Hospitals struggle with paper-based records and inefficient patient management systems.',
      solution: 'Created a digital healthcare platform with electronic health records and automated scheduling.',
      techStack: ['Next.js', 'TypeScript', 'MySQL', 'Prisma', 'NextAuth', 'Tailwind CSS'],
      results: ['200+ patient records managed', 'HIPAA compliant design', 'Used by local clinic'],
      image: 'https://images.unsplash.com/photo-1518235461080-01779c3c1167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzU3MTE2MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/caresync-hospital',
      features: ['Patient Records', 'Appointment Booking', 'Medical Inventory', 'Doctor Dashboard'],
      icon: Heart,
      color: 'from-green-500 to-teal-500',
      status: 'Interface accessible - Backend under review',
      statusType: 'review'
    },
    {
      id: 4,
      title: 'ShopSphere E-commerce',
      category: 'E-commerce Platform',
      description: 'Multi-vendor e-commerce platform with payment integration, inventory management, and order tracking.',
      problem: 'Small businesses needed an affordable platform to sell online with professional features.',
      solution: 'Developed a scalable e-commerce solution with multi-vendor support and integrated payment systems.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Cloudinary', 'Socket.io'],
      results: ['100+ products listed', '50+ vendors onboarded', '$10k+ in test transactions'],
      image: 'https://images.unsplash.com/photo-1644984875410-e11486d2b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMHNob3BwaW5nfGVufDF8fHx8MTc1NzExNjEwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/shopsphere-ecommerce',
      features: ['Multi-vendor Support', 'Payment Processing', 'Order Tracking', 'Inventory Management'],
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      status: 'Live demo available - Payment system disabled',
      statusType: 'demo'
    },
    {
      id: 5,
      title: 'SocialMetrics Analytics',
      category: 'Analytics Platform',
      description: 'Social media analytics dashboard with engagement tracking, content performance metrics, and competitor analysis.',
      problem: 'Businesses needed comprehensive social media analytics to optimize their digital marketing strategies.',
      solution: 'Built an analytics platform that aggregates data from multiple social platforms with actionable insights.',
      techStack: ['Angular', 'Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Chart.js', 'Social Media APIs'],
      results: ['500+ accounts analyzed', '10+ social platforms integrated', 'Used by marketing agencies'],
      image: 'https://images.unsplash.com/photo-1676276375742-9e3d10e39d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTcxMTYxMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/socialmetrics-analytics',
      features: ['Multi-platform Analytics', 'Engagement Tracking', 'Competitor Analysis', 'Performance Reports'],
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      status: 'API integrations under review - Charts viewable',
      statusType: 'review'
    },
    {
      id: 6,
      title: 'FoodieExpress Delivery',
      category: 'Food Delivery App',
      description: 'Food delivery application with restaurant management, real-time order tracking, and delivery optimization.',
      problem: 'Local restaurants needed a cost-effective delivery platform to compete with major food delivery services.',
      solution: 'Created a localized food delivery app with lower commission rates and better restaurant support.',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Google Maps API', 'Payment Gateway'],
      results: ['25+ restaurants partnered', '500+ orders processed', 'Real-time delivery tracking'],
      image: 'https://images.unsplash.com/photo-1560125738-21281f9d9b27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMGRlbGl2ZXJ5JTIwYXBwfGVufDF8fHx8MTc1NzExNjExMHww&ixlib=rb-4.1.0&q=80&w=1080',
      demoUrl: '#',
      githubUrl: 'https://github.com/flourishdavid/foodieexpress-delivery',
      features: ['Restaurant Dashboard', 'Real-time Tracking', 'Payment Integration', 'Delivery Optimization'],
      icon: Utensils,
      color: 'from-yellow-500 to-orange-500',
      status: 'Mobile app interface available - GPS features limited',
      statusType: 'limited'
    }
  ];

  const currentProject = projects[activeProject];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Case studies of real-world applications I've built from concept to deployment
          </p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {projects.map((project, index) => (
            <Button
              key={project.id}
              variant={activeProject === index ? "default" : "outline"}
              onClick={() => setActiveProject(index)}
              className={`transition-all duration-300 ${
                activeProject === index 
                  ? `bg-gradient-to-r ${project.color} text-white` 
                  : ''
              }`}
            >
              <project.icon className="w-4 h-4 mr-2" />
              {project.title}
            </Button>
          ))}
        </motion.div>

        {/* Main Project Display */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Project Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative">
              <ImageWithFallback
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                    <Eye className="w-5 h-5 mr-2" />
                    {currentProject.statusType === 'maintenance' ? 'View Interface' :
                     currentProject.statusType === 'demo' ? 'Try Demo' :
                     currentProject.statusType === 'review' ? 'Preview App' :
                     'View Demo'}
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={`bg-gradient-to-r ${currentProject.color} text-white`}>
                  {currentProject.category}
                </Badge>
                {/* Status Badge */}
                <Badge 
                  variant="outline" 
                  className={`${
                    currentProject.statusType === 'maintenance' ? 'border-yellow-500 text-yellow-600' :
                    currentProject.statusType === 'demo' ? 'border-blue-500 text-blue-600' :
                    currentProject.statusType === 'review' ? 'border-orange-500 text-orange-600' :
                    'border-purple-500 text-purple-600'
                  }`}
                >
                  <AlertCircle className="w-3 h-3 mr-1" />
                  {currentProject.statusType === 'maintenance' ? 'Under Maintenance' :
                   currentProject.statusType === 'demo' ? 'Demo Mode' :
                   currentProject.statusType === 'review' ? 'Under Review' :
                   'Limited Access'}
                </Badge>
              </div>
              <h3 className="text-3xl font-bold mb-4">{currentProject.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">
                {currentProject.description}
              </p>
              {/* Status Description */}
              <div className={`p-3 rounded-lg border-l-4 ${
                currentProject.statusType === 'maintenance' ? 'bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20' :
                currentProject.statusType === 'demo' ? 'bg-blue-50 border-blue-500 dark:bg-blue-900/20' :
                currentProject.statusType === 'review' ? 'bg-orange-50 border-orange-500 dark:bg-orange-900/20' :
                'bg-purple-50 border-purple-500 dark:bg-purple-900/20'
              }`}>
                <p className={`text-sm ${
                  currentProject.statusType === 'maintenance' ? 'text-yellow-800 dark:text-yellow-300' :
                  currentProject.statusType === 'demo' ? 'text-blue-800 dark:text-blue-300' :
                  currentProject.statusType === 'review' ? 'text-orange-800 dark:text-orange-300' :
                  'text-purple-800 dark:text-purple-300'
                }`}>
                  {currentProject.status}
                </p>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-600 dark:text-red-400">Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{currentProject.problem}</p>
                </CardContent>
              </Card>
              <Card className="border-green-200 dark:border-green-800">
                <CardHeader>
                  <CardTitle className="text-green-600 dark:text-green-400">Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{currentProject.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-3">Key Features</h4>
              <div className="grid grid-cols-2 gap-2">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="font-semibold mb-3">Results & Impact</h4>
              <div className="space-y-2">
                {currentProject.results.map((result, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button size="lg" className={`bg-gradient-to-r ${currentProject.color} hover:opacity-90`}>
                <Eye className="w-5 h-5 mr-2" />
                {currentProject.statusType === 'maintenance' ? 'View Interface' :
                 currentProject.statusType === 'demo' ? 'Try Demo' :
                 currentProject.statusType === 'review' ? 'Preview App' :
                 'View Limited Demo'}
              </Button>
              <Button size="lg" variant="outline">
                <Github className="w-5 h-5 mr-2" />
                View Code
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          <Card className="text-center">
            <CardHeader>
              <Code className="w-8 h-8 mx-auto text-blue-500" />
              <CardTitle>10+</CardTitle>
              <CardDescription>Major Projects</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Users className="w-8 h-8 mx-auto text-green-500" />
              <CardTitle>2400+</CardTitle>
              <CardDescription>Users Impacted</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Database className="w-8 h-8 mx-auto text-purple-500" />
              <CardTitle>6</CardTitle>
              <CardDescription>Live Applications</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="w-8 h-8 mx-auto text-orange-500" />
              <CardTitle>3</CardTitle>
              <CardDescription>Industry Sectors</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}