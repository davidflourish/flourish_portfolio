import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, FileText, Calendar, DollarSign, Phone, Users, Award, Clock } from 'lucide-react';

export function Admissions() {
  const steps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete online application form with required documents and academic records',
      icon: FileText,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      step: 2,
      title: 'Assessment & Interview',
      description: 'Academic assessment, aptitude test, and family interview with admissions committee',
      icon: Users,
      color: 'from-green-500 to-teal-600'
    },
    {
      step: 3,
      title: 'Review Process',
      description: 'Comprehensive evaluation of academic performance, potential, and character assessment',
      icon: Award,
      color: 'from-purple-500 to-pink-600'
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Accept admission offer, complete enrollment documentation, and fee payment',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const requirements = [
    'Completed admission application form',
    'Birth certificate or age declaration',
    'Recent passport photographs (4 copies)',
    'Previous school report cards (2 years)',
    'Transfer certificate (if applicable)',
    'Medical report and immunization records',
    'Parent/Guardian identification documents',
    'Entrance examination fee receipt',
    'Letter of recommendation from previous school'
  ];

  const fees = [
    { level: 'Nursery', registration: '₦25,000', tuition: '₦650,000', development: '₦40,000', total: '₦715,000' },
    { level: 'Primary', registration: '₦30,000', tuition: '₦750,000', development: '₦50,000', total: '₦830,000' },
    { level: 'JSS', registration: '₦35,000', tuition: '₦900,000', development: '₦60,000', total: '₦995,000' },
    { level: 'SSS', registration: '₦40,000', tuition: '₦1,100,000', development: '₦70,000', total: '₦1,210,000' }
  ];

  const scholarships = [
    {
      name: 'Academic Excellence',
      description: 'For students with outstanding academic performance',
      discount: '40%',
      color: 'from-blue-500 to-purple-600'
    },
    {
      name: 'STEM Innovation',
      description: 'For students showing exceptional aptitude in Science, Technology, Engineering, and Mathematics',
      discount: '35%',
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Need-Based Aid',
      description: 'For deserving students from economically disadvantaged families',
      discount: '30%',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-16-16v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 text-blue-700 mb-6">
            <Users className="w-4 h-4 mr-2" />
            <span className="font-medium">Join Our Academic Community</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Begin Your Child's Journey to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our comprehensive admissions process ensures we find students who will thrive in our 
            academic environment and contribute positively to our school community.
          </p>
        </div>

        {/* Application Process */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our admission process is designed to identify students who align with our values 
              and academic standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full hover:shadow-xl transition-all duration-500 border-0 bg-white group-hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-3">Step {step.step}</div>
                    <h4 className="font-semibold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-200 to-purple-300 transform -translate-y-0.5 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Requirements */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span>Admission Requirements</span>
              </CardTitle>
              <p className="text-gray-600">
                Please ensure all documents are ready before submitting your application:
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Dates */}
          <Card className="border-0 shadow-lg bg-white">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center space-x-3 text-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span>Important Dates 2025</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div>
                    <div className="font-semibold text-gray-900">Application Opens</div>
                    <div className="text-sm text-gray-600">Online portal activation</div>
                  </div>
                  <Badge className="bg-blue-600 text-white">January 15</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-100">
                  <div>
                    <div className="font-semibold text-gray-900">Application Deadline</div>
                    <div className="text-sm text-gray-600">Final submission date</div>
                  </div>
                  <Badge className="bg-orange-600 text-white">May 30</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-100">
                  <div>
                    <div className="font-semibold text-gray-900">Assessment Period</div>
                    <div className="text-sm text-gray-600">Tests & interviews</div>
                  </div>
                  <Badge className="bg-green-600 text-white">June 15-25</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <div>
                    <div className="font-semibold text-gray-900">Results Release</div>
                    <div className="text-sm text-gray-600">Admission decisions</div>
                  </div>
                  <Badge className="bg-purple-600 text-white">July 5</Badge>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
                  <div>
                    <div className="font-semibold text-gray-900">Session Begins</div>
                    <div className="text-sm text-gray-600">New academic year</div>
                  </div>
                  <Badge className="bg-teal-600 text-white">September 2</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scholarship Programs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Scholarship Programs</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We believe in making quality education accessible to deserving students through 
              our comprehensive scholarship programs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${scholarship.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{scholarship.discount}</div>
                  <h4 className="font-bold text-gray-900 mb-3">{scholarship.name}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{scholarship.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure 2024/2025</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent and competitive fee structure for quality education
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Level</th>
                      <th className="px-6 py-4 text-left font-semibold">Registration</th>
                      <th className="px-6 py-4 text-left font-semibold">Annual Tuition</th>
                      <th className="px-6 py-4 text-left font-semibold">Development</th>
                      <th className="px-6 py-4 text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {fees.map((fee, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{fee.level}</td>
                        <td className="px-6 py-4 text-gray-600">{fee.registration}</td>
                        <td className="px-6 py-4 text-gray-600">{fee.tuition}</td>
                        <td className="px-6 py-4 text-gray-600">{fee.development}</td>
                        <td className="px-6 py-4 font-bold text-blue-600">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 mb-4">
              * Fees include learning materials, laboratory access, and extracurricular activities.
            </p>
            <p className="text-gray-500">
              * Flexible payment plans available. Contact admissions office for details.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Academic Community?</h3>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg">
            Start your child's journey in an environment where academic excellence meets character development. 
            Our admissions team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
              <FileText className="w-5 h-5 mr-2" />
              Start Application
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Campus Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}