import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Code, Download, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useRouter } from './Router';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentPage, navigateTo } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', page: 'home' as const },
    { name: 'About', page: 'about' as const },
    { name: 'Projects', page: 'portfolio' as const },
    { name: 'Contact', page: 'contact' as const }
  ];

  const handleNavigation = (page: typeof navigationItems[0]['page']) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  const handleHireMe = () => {
    navigateTo('contact');
    setIsMenuOpen(false);
  };
 const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Ala_Flourish_Styled_CV.pdf';
  link.download = 'Ala_Flourish_Styled_CV.pdf';
  link.click();
}; 
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue-100/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            onClick={() => navigateTo('home')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-300">
                <Code className="w-7 h-7 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Flourish
              </h1>
              <p className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Full-Stack Dev
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative font-medium transition-all duration-300 group ${
                  currentPage === item.page
                    ? (isScrolled ? 'text-blue-600' : 'text-blue-300')
                    : (isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white')
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`} onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                onClick={handleHireMe}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-blue-100/50"
        >
          <div className="py-6 space-y-4">
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.page)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className={`block w-full text-left font-medium py-2 px-4 rounded-lg transition-colors ${
                  currentPage === item.page
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <div className="px-4 pt-4 space-y-3">
              <Button
                variant="outline"
                className="w-full justify-center border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button 
                onClick={handleHireMe}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" 
              >
                <Mail className="w-4 h-4 mr-2" />
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}