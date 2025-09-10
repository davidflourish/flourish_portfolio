import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  MapPin, 
  Calendar, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  Phone,
  Clock,
  Globe,
  Download,
  MessageCircle,
  Coffee
} from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

   const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Ala_Flourish_Styled_CV.pdf';
    link.download = 'Ala_Flourish_Styled_CV.pdf';
    link.click();
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'flourisholuwatimilehin@gmail.com',
      action: 'Send Email',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a 30-minute chat',
      action: 'Schedule Now',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: '+234 703 391 7378',
      action: 'Chat Now',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: Coffee,
      title: 'Coffee Chat',
      description: 'Virtual coffee meeting',
      action: 'Grab Coffee',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', url: 'https://linkedin.com/in/flourishdavid', username: 'Flourish David' },
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com/AlaFlouris60926', username: '@AlaFlouris60926' }
  ];

  const availability = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM WAT', available: true },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM WAT', available: true },
    { day: 'Sunday', time: 'Emergency only', available: false }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to build something amazing? I'm available for freelance projects, full-time opportunities, and collaboration.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4 sm:mt-6 px-4">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Clock className="w-4 h-4 mr-2" />
              Available Now
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              <Globe className="w-4 h-4 mr-2" />
              Remote Ready
            </Badge>
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              <MapPin className="w-4 h-4 mr-2" />
              Relocating for Master's
            </Badge>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
                <CardDescription>
                  Tell me about your project or just say hello!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, timeline, and budget..."
                      className="h-32"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center`}>
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{method.title}</h4>
                          <p className="text-sm text-muted-foreground">{method.description}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Nigeria</div>
                    <div className="text-sm text-muted-foreground">UTC+1</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Remote Work</div>
                    <div className="text-sm text-muted-foreground">Available worldwide</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-sm text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card>
              <CardHeader>
                <CardTitle>Availability</CardTitle>
                <CardDescription>When you can reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {availability.map((slot, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm">{slot.day}</div>
                      <div className="text-xs text-muted-foreground">{slot.time}</div>
                    </div>
                    <Badge variant={slot.available ? "default" : "secondary"}>
                      {slot.available ? "Available" : "Limited"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
                <CardDescription>Follow me on social media</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium text-sm">{social.name}</div>
                      <div className="text-xs text-muted-foreground">{social.username}</div>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Resume Download */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Download Resume</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get my complete professional profile
                    </p>
                    <Button variant="outline" className="w-full" onClick={handleDownloadResume}>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div> 
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}