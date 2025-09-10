import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { 
  GraduationCap, 
  Trophy, 
  Code, 
  Sparkles, 
  MapPin, 
  Calendar,
  User,
  Coffee,
  Target,
  Globe,
  Send,
  MessageCircle,
  Clock
} from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function InteractiveAbout() {
  const [activeCard, setActiveCard] = useState(0);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{message: string; isUser: boolean; timestamp: Date}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scheduleName, setScheduleName] = useState('');
  const [scheduleEmail, setScheduleEmail] = useState('');
  const [scheduleMessage, setScheduleMessage] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleTime, setScheduleTime] = useState('');

  const timelineEvents = [
    {
      year: '2020',
      title: 'Started CS Journey',
      description: 'Began Computer Science degree at Achievers University',
      icon: GraduationCap,
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2022',
      title: 'First Projects',
      description: 'Built first full-stack applications and discovered passion for problem-solving',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: '2023',
      title: 'Competition Finalist',
      description: 'Reached Top 5 in national programming competition',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2024',
      title: 'SaaS Focus',
      description: 'Shifted focus to building scalable SaaS applications',
      icon: Target,
      color: 'from-green-500 to-teal-500'
    },
    {
      year: '2025',
      title: 'Master\'s Journey',
      description: 'Planning to relocate for Master\'s degree and new opportunities',
      icon: Globe,
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const funFacts = [
    {
      icon: GraduationCap,
      title: 'Final Year CS Student',
      description: 'Achievers University',
      fact: 'Specializing in Software Engineering'
    },
    {
      icon: Trophy,
      title: 'Competition Finalist',
      description: 'National Recognition',
      fact: 'Top 5 out of 1000+ participants'
    },
    {
      icon: Code,
      title: 'Currently Learning',
      description: 'Blockchain Development',
      fact: 'Mastering Solidity for Web3'
    },
    {
      icon: Coffee,
      title: 'Coffee Enthusiast',
      description: 'Fuel for coding',
      fact: '3+ cups per day'
    },
    {
      icon: Target,
      title: 'SaaS Dream',
      description: 'Building for scale',
      fact: 'Goal: 1M+ users'
    },
    {
      icon: MapPin,
      title: 'Ready to Relocate',
      description: 'Master\'s Journey',
      fact: 'Seeking new opportunities'
    }
  ];

  const handleChatSubmit = async () => {
    if (!chatMessage.trim()) return;
    
    setIsLoading(true);
    const userMessage = chatMessage;
    setChatMessage('');
    
    // Add user message to chat
    setChatHistory(prev => [...prev, { message: userMessage, isUser: true, timestamp: new Date() }]);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-737333e2/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ message: userMessage })
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      setChatHistory(prev => [...prev, { message: data.response, isUser: false, timestamp: new Date() }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatHistory(prev => [...prev, { 
        message: "Sorry, I'm having trouble responding right now. Please try again later!", 
        isUser: false, 
        timestamp: new Date() 
      }]);
      toast.error('Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const handleScheduleSubmit = async () => {
    if (!scheduleName || !scheduleEmail || !scheduleDate || !scheduleTime) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-737333e2/schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          name: scheduleName,
          email: scheduleEmail,
          message: scheduleMessage,
          date: scheduleDate,
          time: scheduleTime
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to schedule call');
      }
      
      toast.success('Call scheduled successfully! I\'ll get back to you soon.');
      setScheduleName('');
      setScheduleEmail('');
      setScheduleMessage('');
      setScheduleDate('');
      setScheduleTime('');
    } catch (error) {
      console.error('Schedule error:', error);
      toast.error('Failed to schedule call');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              My Journey
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From curious student to competition finalist, building the future one project at a time
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-12">Timeline</h3>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center`}>
                              <event.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{event.title}</CardTitle>
                              <Badge variant="secondary">{event.year}</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${event.color} border-4 border-background`}></div>
                    </div>
                    
                    <div className="w-5/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="block md:hidden">
              <div className="space-y-6">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center flex-shrink-0`}>
                        <event.icon className="w-6 h-6 text-white" />
                      </div>
                      <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-base sm:text-lg">{event.title}</CardTitle>
                            <Badge variant="secondary" className="text-xs">{event.year}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">Fun Facts About Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onMouseEnter={() => setActiveCard(index)}
                className="cursor-pointer"
              >
                <Card className={`h-full transition-all duration-300 ${
                  activeCard === index ? 'shadow-xl border-blue-500/50' : ''
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <fact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{fact.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{fact.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{fact.fact}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Avatar Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Meet Flourish</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm Flourish, a final-year Computer Science student passionate about building solutions that matter. 
            I've won competitions, experimented with SaaS ideas, and I'm preparing for bigger challenges after graduation. 
            Whether you're looking for a collaborator or someone who thinks outside the box, let's connect and create something amazing together. 
            The future is what we build today, and I'm ready to shape it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat with AI Me
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Chat with AI Flourish</DialogTitle>
                  <DialogDescription>
                    Have a conversation with an AI version of Flourish. Ask about projects, skills, experience, or anything you'd like to know!
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="max-h-60 overflow-y-auto space-y-2 p-4 border rounded-lg">
                    {chatHistory.length === 0 ? (
                      <p className="text-muted-foreground text-center">
                        Hi! I'm AI Flourish. Ask me anything about my projects, skills, or journey!
                      </p>
                    ) : (
                      chatHistory.map((chat, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded-lg ${
                            chat.isUser
                              ? 'bg-blue-500 text-white ml-auto max-w-[80%]'
                              : 'bg-gray-100 dark:bg-gray-800 max-w-[80%]'
                          }`}
                        >
                          <p className="text-sm">{chat.message}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me anything..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                      disabled={isLoading}
                    />
                    <Button onClick={handleChatSubmit} disabled={isLoading || !chatMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Clock className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule a Call with Flourish</DialogTitle>
                  <DialogDescription>
                    Book a time to have a direct conversation with Flourish. Fill in your details and preferred time to schedule a call.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={scheduleName}
                        onChange={(e) => setScheduleName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={scheduleEmail}
                        onChange={(e) => setScheduleEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Preferred Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={scheduleDate}
                        onChange={(e) => setScheduleDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Input
                        id="time"
                        type="time"
                        value={scheduleTime}
                        onChange={(e) => setScheduleTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="What would you like to discuss?"
                      value={scheduleMessage}
                      onChange={(e) => setScheduleMessage(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleScheduleSubmit} 
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? 'Scheduling...' : 'Schedule Call'}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}