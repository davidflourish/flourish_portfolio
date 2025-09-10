import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, Code, Sparkles, Download, Mail, Linkedin, Twitter } from 'lucide-react';
import { useRouter } from './Router';

export function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { navigateTo } = useRouter();
  const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Ala_Flourish_Styled_CV.pdf';
  link.download = 'Ala_Flourish_Styled_CV.pdf';
  link.click();
};
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Check system preference for dark mode on mount
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    if (mediaQuery.matches) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, #1e293b, #7c3aed, #1e293b)",
              "linear-gradient(45deg, #7c3aed, #3b82f6, #7c3aed)",
              "linear-gradient(45deg, #3b82f6, #10b981, #3b82f6)",
              "linear-gradient(45deg, #10b981, #1e293b, #10b981)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-full h-full opacity-60"
        />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      {/* Dark/Light Mode Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        {isDarkMode ? <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> : <Code className="w-5 h-5 sm:w-6 sm:h-6" />}
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-20 sm:pt-24 pb-16">
        <div className="w-full text-center space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-400/30"
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
            <span className="text-xs sm:text-sm font-semibold text-blue-200">Available for Hire • Relocating for Master's</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white">
              <span className="block">Flourish David —</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 mt-1 sm:mt-2">
                Building Digital Experiences
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mt-1 sm:mt-2">
                that Solve Real Problems
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto px-4"
            >
              Full-Stack Engineer • SaaS Builder • Future-Ready Developer
              <br className="hidden sm:block" />
              <span className="text-blue-300">Final Year CS Student at Achievers University | Currently Mastering Solidity</span>
            </motion.p>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <Button 
              size="lg" 
              onClick={() => navigateTo('portfolio')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group"
            >
              <Code className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              See My Work
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto border-white/30 text-black hover:bg-white hover:text-gray-900 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Hire Me
            </Button>

            <Button 
              variant="ghost" 
              size="lg" 
              className="w-full sm:w-auto text-white hover:text-blue-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group" onClick={handleDownloadResume}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-4 sm:space-x-6 pt-6 sm:pt-8"
          >
            <motion.a
              href="https://linkedin.com/in/flourishdavid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com/AlaFlouris60926"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 lg:pt-12 max-w-4xl mx-auto px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-sm text-white">Projects Built</div>
              <div className="text-xs text-gray-300">Full-Stack Applications</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">Top 5</div>
              <div className="text-sm text-white">Competition Finalist</div>
              <div className="text-xs text-gray-300">National Recognition</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-sm text-white">Users Goal</div>
              <div className="text-xs text-gray-300">SaaS Dream</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 flex flex-col items-center space-y-2 z-20"
      >
        <span className="text-xs sm:text-sm font-medium">Scroll to Explore</span>
        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.div>
    </section>
  );
}