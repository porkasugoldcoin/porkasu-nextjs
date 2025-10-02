import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Gift, 
  Coins, 
  DollarSign, 
  Shield, 
  Award, 
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Services - Porkasu Premium Gold & Silver",
  description: "Discover our comprehensive range of precious metal services including custom coins, investment bars, gifting solutions, and expert consultation for all your gold and silver needs.",
}

const services = [
  {
    icon: Gift,
    title: "Custom Gifting Solutions",
    description: "Personalized gold and silver coins for weddings, anniversaries, and special occasions",
    features: ["Custom engraving", "Premium packaging", "Gift certificates", "Bulk orders"]
  },
  {
    icon: Coins,
    title: "Investment Products",
    description: "High-purity gold and silver bars and coins for investment portfolios",
    features: ["Certified purity", "Market rates", "Secure storage", "Easy liquidation"]
  },
  {
    icon: DollarSign,
    title: "Corporate Solutions",
    description: "Bulk precious metal products for corporate gifting and employee recognition",
    features: ["Volume discounts", "Custom branding", "Bulk delivery", "Corporate accounts"]
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Comprehensive testing and certification for all precious metal products",
    features: ["Purity testing", "Quality certificates", "Hallmark verification", "Insurance coverage"]
  },
  {
    icon: Award,
    title: "Expert Consultation",
    description: "Professional guidance on precious metal investments and market trends",
    features: ["Market analysis", "Investment advice", "Portfolio planning", "Risk assessment"]
  }
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Discuss your requirements and preferences with our experts"
  },
  {
    step: "02", 
    title: "Design",
    description: "Create custom designs and select the perfect products for your needs"
  },
  {
    step: "03",
    title: "Production",
    description: "Craft your precious metal products with precision and care"
  },
  {
    step: "04",
    title: "Delivery",
    description: "Secure packaging and timely delivery to your doorstep"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-precious">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive precious metal solutions for every need and occasion
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From custom gifting to investment solutions, we provide comprehensive 
              precious metal services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-gold-600 mb-4" />
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and customer-focused approach to delivering excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Quality Guarantee
              </h2>
              <p className="text-lg text-muted-foreground">
                We stand behind every product with our comprehensive quality guarantee, 
                ensuring you receive only the finest precious metals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certified Purity</h3>
                    <p className="text-muted-foreground">
                      All products come with proper certifications and purity guarantees
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      Meticulously crafted by skilled artisans with years of experience
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
                    <p className="text-muted-foreground">
                      100% satisfaction guarantee on all our products and services
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Quality assurance"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-success">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-emerald-800 mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-lg text-emerald-700 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your requirements and 
            discover how we can help you with your precious metal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg font-semibold" size="lg">
              <Link href="/business-enquiry">Get Quote</Link>
            </Button>
            <Button asChild className="bg-white text-emerald-700 hover:bg-emerald-50 border-2 border-emerald-600 shadow-lg font-semibold" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}