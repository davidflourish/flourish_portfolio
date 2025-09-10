import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Shield,
  Zap,
  Globe,
  BookOpen,
  Cpu
} from 'lucide-react';

export function ModernSkills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '3+ years', projects: 'TaskFlow SaaS, Portfolio Sites' },
        { name: 'TypeScript', level: 88, experience: '2+ years', projects: 'Type-safe applications' },
        { name: 'Tailwind CSS', level: 92, experience: '2+ years', projects: 'Modern UI designs' },
        { name: 'Vue.js', level: 85, experience: '1+ years', projects: 'EventHub Marketplace' },
        { name: 'Framer Motion', level: 80, experience: '1+ years', projects: 'Animated interfaces' }
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Node.js', level: 90, experience: '3+ years', projects: 'SecureAuth API, Multiple APIs' },
        { name: 'Python/Django', level: 85, experience: '2+ years', projects: 'EventHub Backend' },
        { name: 'PostgreSQL', level: 88, experience: '2+ years', projects: 'Data modeling expert' },
        { name: 'MongoDB', level: 80, experience: '1+ years', projects: 'CryptoTracker Pro' },
        { name: 'Redis', level: 75, experience: '1+ years', projects: 'Caching & sessions' }
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 82, experience: '2+ years', projects: 'EventHub deployment' },
        { name: 'Docker', level: 85, experience: '2+ years', projects: 'Container orchestration' },
        { name: 'Supabase', level: 90, experience: '1+ years', projects: 'TaskFlow SaaS backend' },
        { name: 'Vercel', level: 88, experience: '2+ years', projects: 'Frontend deployments' },
        { name: 'Git/GitHub', level: 95, experience: '3+ years', projects: 'Version control master' }
      ]
    },
    {
      title: 'Learning Now',
      icon: BookOpen,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Solidity', level: 70, experience: '6+ months', projects: 'CryptoTracker Pro' },
        { name: 'Web3.js', level: 65, experience: '6+ months', projects: 'Blockchain interactions' },
        { name: 'Rust', level: 45, experience: '3+ months', projects: 'Learning systems programming' },
        { name: 'GraphQL', level: 60, experience: '4+ months', projects: 'API optimization' },
        { name: 'Go', level: 40, experience: '2+ months', projects: 'Backend exploration' }
      ]
    }
  ];

  // const certifications = [
  //   { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2024' },
  //   { name: 'Meta Frontend Developer', issuer: 'Meta', year: '2023' },
  //   { name: 'Google Cloud Digital Leader', issuer: 'Google', year: '2024' },
  //   { name: 'MongoDB Developer', issuer: 'MongoDB', year: '2023' }
  // ];

  const tools = [
    { name: 'VS Code', icon: '🔧' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Postman', icon: '📡' },
    { name: 'Linear', icon: '📋' },
    { name: 'Notion', icon: '📝' },
    { name: 'Slack', icon: '💬' }
  ];

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
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <CardDescription>
                        {category.skills.length} technologies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.experience}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        Used in: {skill.projects}
                      </p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Favorite Tools */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Daily Tools</CardTitle>
                    <CardDescription>My development arsenal</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="text-2xl">{tool.icon}</span>
                      <span className="font-medium">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>Certifications</CardTitle>
                    <CardDescription>Professional credentials</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/50"
                  >
                    <div>
                      <div className="font-medium">{cert.name}</div>
                      <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    </div>
                    <Badge>{cert.year}</Badge>
                  </motion.div>
                ))}
              </CardContent>
            </Card> */}
          </motion.div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-3xl p-12"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Continuous Learner</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technology evolves fast, and so do I. Currently diving deep into Web3, blockchain development, 
            and systems programming while building real-world applications that solve actual problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}