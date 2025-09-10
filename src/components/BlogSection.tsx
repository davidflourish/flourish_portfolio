import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Clock, 
  ArrowRight, 
  BookOpen, 
  Coffee, 
  Code, 
  Lightbulb,
  TrendingUp,
  MessageCircle,
  Heart,
  Share2
} from 'lucide-react';

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building My First SaaS: Lessons from TaskFlow',
      excerpt: 'The journey from idea to 500+ users taught me more about product development than any course could.',
      content: 'When I started building TaskFlow, I thought the hardest part would be the code. I was wrong...',
      author: 'Flourish David',
      publishDate: '2024-01-15',
      readTime: '8 min read',
      category: 'SaaS Development',
      tags: ['SaaS', 'Product Development', 'Startup Journey'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 42,
      comments: 15,
      featured: true
    },
    {
      id: 2,
      title: 'Why I\'m Learning Solidity as a Web2 Developer',
      excerpt: 'The future is multi-chain, and Web2 developers need to start preparing for the shift.',
      content: 'Six months ago, I decided to dive into blockchain development. Here\'s what I\'ve learned...',
      author: 'Flourish David',
      publishDate: '2024-01-08',
      readTime: '5 min read',
      category: 'Web3 Development',
      tags: ['Blockchain', 'Solidity', 'Career Development'],
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 38,
      comments: 12
    },
    {
      id: 3,
      title: 'From Student to Competition Finalist: My Story',
      excerpt: 'How participating in programming competitions changed my perspective on problem-solving.',
      content: 'Making it to the Top 5 in a national competition wasn\'t just about coding skills...',
      author: 'Flourish David',
      publishDate: '2023-12-22',
      readTime: '6 min read',
      category: 'Personal Growth',
      tags: ['Competition', 'Student Life', 'Achievement'],
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 67,
      comments: 23
    },
    {
      id: 4,
      title: 'The Tech Stack Behind My Success',
      excerpt: 'A deep dive into the tools and technologies that power my development workflow.',
      content: 'After three years of building projects, I\'ve settled on a tech stack that works...',
      author: 'Flourish David',
      publishDate: '2023-12-15',
      readTime: '7 min read',
      category: 'Technical',
      tags: ['Tech Stack', 'Development', 'Tools'],
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 51,
      comments: 18
    },
    {
      id: 5,
      title: 'Planning My Master\'s Journey Abroad',
      excerpt: 'Why I\'m taking the leap to study abroad and how I\'m preparing for the transition.',
      content: 'The decision to pursue a Master\'s degree abroad wasn\'t easy, but here\'s why I\'m doing it...',
      author: 'Flourish David',
      publishDate: '2023-12-01',
      readTime: '4 min read',
      category: 'Life Update',
      tags: ['Education', 'Career Planning', 'International Study'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 29,
      comments: 8
    },
    {
      id: 6,
      title: 'Mistakes I Made Building My E-commerce Platform',
      excerpt: 'EventHub taught me that building an e-commerce platform is harder than it looks.',
      content: 'Payment integrations, security, and user experience - here are the mistakes I made...',
      author: 'Flourish David',
      publishDate: '2023-11-20',
      readTime: '9 min read',
      category: 'Technical',
      tags: ['E-commerce', 'Mistakes', 'Learning'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      likes: 76,
      comments: 31
    }
  ];

  const categories = [
    { name: 'All Posts', count: blogPosts.length },
    { name: 'SaaS Development', count: 1 },
    { name: 'Web3 Development', count: 1 },
    { name: 'Technical', count: 2 },
    { name: 'Personal Growth', count: 1 },
    { name: 'Life Update', count: 1 }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
              Build in Public
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing my journey, lessons learned, and thoughts on development, entrepreneurship, and life as a student
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={index === 0 ? "default" : "outline"}
              className={index === 0 ? "bg-gradient-to-r from-pink-600 to-red-600 text-white" : ""}
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Card className="overflow-hidden border-none shadow-2xl bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-pink-600 text-white">Featured</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">{post.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <Button size="lg" className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Read Full Post
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}

        {/* Recent Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.filter(post => !post.featured).slice(0, 6).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge>{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-pink-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="ghost" size="sm" className="group-hover:text-pink-600">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </button>
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-pink-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-950/20 dark:to-red-950/20 rounded-3xl p-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Coffee className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Get notified when I publish new posts about development, entrepreneurship, and my journey as a CS student.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-full border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 px-8 rounded-full">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}