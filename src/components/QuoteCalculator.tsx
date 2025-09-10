import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Slider } from './ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calculator, Home, Ruler, Leaf, Droplets, Lightbulb, Hammer, DollarSign, CheckCircle } from 'lucide-react';

export function QuoteCalculator() {
  const [projectType, setProjectType] = useState('');
  const [propertySize, setPropertySize] = useState([5000]);
  const [complexity, setComplexity] = useState('');
  const [features, setFeatures] = useState([]);
  const [timeline, setTimeline] = useState('');

  const projectTypes = [
    { id: 'new-installation', name: 'New Installation', multiplier: 1.0 },
    { id: 'renovation', name: 'Landscape Renovation', multiplier: 0.8 },
    { id: 'maintenance', name: 'Maintenance Program', multiplier: 0.3 },
    { id: 'hardscape', name: 'Hardscape Only', multiplier: 1.2 }
  ];

  const complexityLevels = [
    { id: 'basic', name: 'Basic', description: 'Simple plantings and basic features', multiplier: 1.0 },
    { id: 'moderate', name: 'Moderate', description: 'Mixed plantings with some hardscape', multiplier: 1.5 },
    { id: 'complex', name: 'Complex', description: 'Multiple zones with premium features', multiplier: 2.0 },
    { id: 'luxury', name: 'Luxury', description: 'High-end materials and custom features', multiplier: 3.0 }
  ];

  const availableFeatures = [
    { id: 'irrigation', name: 'Smart Irrigation System', icon: Droplets, cost: 8000 },
    { id: 'lighting', name: 'Landscape Lighting', icon: Lightbulb, cost: 5000 },
    { id: 'hardscape', name: 'Patios & Walkways', icon: Hammer, cost: 15000 },
    { id: 'water-feature', name: 'Water Features', icon: Droplets, cost: 12000 },
    { id: 'outdoor-kitchen', name: 'Outdoor Kitchen', icon: Home, cost: 25000 },
    { id: 'fire-feature', name: 'Fire Pit/Fireplace', icon: Lightbulb, cost: 8000 }
  ];

  const timelineOptions = [
    { id: 'rush', name: '2-4 weeks (Rush)', multiplier: 1.3 },
    { id: 'standard', name: '6-8 weeks (Standard)', multiplier: 1.0 },
    { id: 'flexible', name: '10+ weeks (Flexible)', multiplier: 0.9 }
  ];

  const calculateEstimate = () => {
    if (!projectType || !complexity) return { min: 0, max: 0 };

    const baseRate = 15; // Base rate per sq ft
    const sizeMultiplier = propertySize[0];
    
    const projectMultiplier = projectTypes.find(p => p.id === projectType)?.multiplier || 1;
    const complexityMultiplier = complexityLevels.find(c => c.id === complexity)?.multiplier || 1;
    const timelineMultiplier = timelineOptions.find(t => t.id === timeline)?.multiplier || 1;
    
    const featuresTotal = features.reduce((total, featureId) => {
      const feature = availableFeatures.find(f => f.id === featureId);
      return total + (feature?.cost || 0);
    }, 0);

    const baseCost = baseRate * sizeMultiplier * projectMultiplier * complexityMultiplier * timelineMultiplier;
    const totalCost = baseCost + featuresTotal;

    return {
      min: Math.round(totalCost * 0.8),
      max: Math.round(totalCost * 1.2)
    };
  };

  const toggleFeature = (featureId) => {
    setFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const estimate = calculateEstimate();
  const isComplete = projectType && complexity && timeline;

  return (
    <section id="quote-calculator" className="py-24 bg-gradient-to-br from-gray-50 via-white to-emerald-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='M30 30c0-8.284-6.716-15-15-15s-15 6.716-15 15 6.716 15 15 15 15-6.716 15-15zm15 0c0 8.284 6.716 15 15 15s15-6.716 15-15-6.716-15-15-15-15 6.716-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            <Calculator className="w-5 h-5 mr-3" />
            <span className="font-semibold">Instant Project Estimation</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Plan Your Investment 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"> Wisely</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Get an instant estimate for your landscape project. Our smart calculator considers 
            all factors to provide you with accurate, transparent pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="w-6 h-6 mr-3 text-emerald-600" />
                  Project Calculator
                </CardTitle>
                <p className="text-gray-600">
                  Tell us about your project to get an instant estimate
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Project Type */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-900">Project Type</label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Size */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-900">
                    Property Size: {propertySize[0].toLocaleString()} sq ft
                  </label>
                  <Slider
                    value={propertySize}
                    onValueChange={setPropertySize}
                    max={50000}
                    min={1000}
                    step={500}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1,000 sq ft</span>
                    <span>50,000+ sq ft</span>
                  </div>
                </div>

                {/* Complexity Level */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-900">Complexity Level</label>
                  <div className="grid grid-cols-1 gap-3">
                    {complexityLevels.map((level) => (
                      <div
                        key={level.id}
                        onClick={() => setComplexity(level.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          complexity === level.id
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-gray-900">{level.name}</h4>
                            <p className="text-sm text-gray-600">{level.description}</p>
                          </div>
                          {complexity === level.id && (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-900">Project Timeline</label>
                  <Select value={timeline} onValueChange={setTimeline}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Features */}
                <div className="space-y-4">
                  <label className="text-lg font-semibold text-gray-900">Additional Features</label>
                  <div className="grid grid-cols-1 gap-3">
                    {availableFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          features.includes(feature.id)
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <feature.icon className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-gray-900">{feature.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              +${feature.cost.toLocaleString()}
                            </span>
                            {features.includes(feature.id) && (
                              <CheckCircle className="w-5 h-5 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Estimate Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Estimate Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <DollarSign className="w-6 h-6 mr-3" />
                  Your Project Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {isComplete ? (
                  <>
                    <div className="text-center">
                      <div className="text-5xl font-bold mb-2">
                        ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                      </div>
                      <p className="text-emerald-100">
                        Estimated project investment range
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-emerald-500/30">
                      <h4 className="font-semibold text-lg">What's Included:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-300" />
                          <span className="text-emerald-100">Design consultation & planning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-300" />
                          <span className="text-emerald-100">Materials & labor</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-300" />
                          <span className="text-emerald-100">Project management</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-300" />
                          <span className="text-emerald-100">1-year plant guarantee</span>
                        </div>
                        {features.length > 0 && (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-emerald-300" />
                            <span className="text-emerald-100">
                              {features.length} premium feature{features.length > 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-6">
                      <Button 
                        size="lg" 
                        className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold"
                      >
                        Get Detailed Quote
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        Schedule Consultation
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Complete the form</h4>
                    <p className="text-emerald-100">
                      Fill out the project details to see your personalized estimate
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Why Choose Jardin */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-xl">Why Choose Jardin?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Pricing</h4>
                    <p className="text-gray-600 text-sm">No hidden costs or surprise charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Craftsmanship</h4>
                    <p className="text-gray-600 text-sm">25+ years of landscape excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Guarantee</h4>
                    <p className="text-gray-600 text-sm">Comprehensive warranty on all work</p>
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