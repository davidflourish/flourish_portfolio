import { motion } from 'motion/react';
import { Button } from './ui/button';
import { useRouter } from './Router';
import { 
  Code, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Heart,
  ArrowRight,
  Download,
  Coffee
} from 'lucide-react';

export function Footer() {
  const { navigateTo } = useRouter();

  const quickLinks = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Projects', page: 'portfolio' as const },
    { name: 'Contact', page: 'contact' as const }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/flourishdavid', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/AlaFlouris60926', label: 'Twitter' }
  ];

const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Ala_Flourish_Styled_CV.pdf';
  link.download = 'Ala_Flourish_Styled_CV.pdf';
  link.click();
};

  const techStack = [
    'React & Next.js',
    'TypeScript',
    'Node.js & Express',
    'Python & Django',
    'PostgreSQL & MongoDB',
    'AWS & Docker'
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-13.807-11.193-25-25-25s-25 11.193-25 25 11.193 25 25 25 25-11.193 25-25zm25 0c0 13.807 11.193 25 25 25s25-11.193 25-25-11.193-25-25-25-25 11.193-25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 sm:py-16 text-center border-b border-white/10"
        >
          <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto px-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I'm always excited to work on new projects and collaborate with innovative teams. 
              Whether you have a specific project in mind or just want to connect, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button 
                onClick={() => navigateTo('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 px-8 py-4 group"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-black backdrop-blur-sm px-8 py-4" onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Logo */}
              <div 
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => navigateTo('home')}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Flourish David</h2>
                  <p className="text-blue-400 font-medium">Full-Stack Developer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Final year Computer Science student at Achievers University with a passion for building 
                innovative digital solutions. Currently exploring the world of blockchain technology and 
                preparing for graduate studies while creating impactful SaaS applications.
              </p>

              <div className="space-y-3">
                <p className="text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  flourisholuwatimilehin@gmail.com
                </p>
                <p className="text-gray-300 flex items-center">
                  <Code className="w-4 h-4 mr-3 text-blue-400" />
                  Available for full-time opportunities
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-bold text-lg text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => navigateTo(link.page)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="font-bold text-lg text-white">Tech Stack</h4>
              <ul className="space-y-3">
                {techStack.map((tech) => (
                  <li key={tech} className="text-gray-300 flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h5 className="font-semibold text-blue-400 mb-3">Currently Learning</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                    Solidity
                  </span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                    Web3
                  </span>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-400/30">
                    DevOps
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 Flourish David. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Designed & Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Flourish David</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}