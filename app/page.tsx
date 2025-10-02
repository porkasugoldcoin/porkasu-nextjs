import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Heart, 
  DollarSign, 
  Settings, 
  TrendingUp, 
  Award,
  Users,
  Building2,
  Gift,
  Cake,
  Target,
  Briefcase,
  Calendar,
  Star
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Porkasu - Premium Gold & Silver | Value in Every Gram, Memory in Every Coin",
  description: "Porkasu - India's most trusted name in precious metal gifting & investment. Premium 22K, 24K gold & silver coins and bars available from 100mg to 40g. Customized coins, corporate gifts, and investment solutions.",
}

const features = [
  {
    icon: Shield,
    title: "Trustworthy",
    description: "Certified purity and quality"
  },
  {
    icon: Heart,
    title: "Memorable",
    description: "Creates lasting memories"
  },
  {
    icon: DollarSign,
    title: "Affordable",
    description: "Premium quality at best prices"
  },
  {
    icon: Settings,
    title: "Customization",
    description: "Personalized engravings"
  },
  {
    icon: TrendingUp,
    title: "Simplified Investing",
    description: "Easy way to invest in gold"
  },
  {
    icon: Award,
    title: "Money Back Guarantee",
    description: "100% satisfaction guaranteed"
  }
]

const useCases = [
  {
    icon: Users,
    title: "Loyalty Programs",
    description: "Reward customer loyalty"
  },
  {
    icon: Gift,
    title: "Wedding Gifts",
    description: "Perfect for wedding celebrations"
  },
  {
    icon: Cake,
    title: "Birthday Gifts",
    description: "Memorable birthday presents"
  },
  {
    icon: TrendingUp,
    title: "Smart Investment",
    description: "Build wealth systematically"
  },
  {
    icon: Building2,
    title: "Employee Gifting",
    description: "Corporate recognition gifts"
  },
  {
    icon: Calendar,
    title: "Special Occasions",
    description: "Festivals and celebrations"
  }
]

const clients = [
  "Canon", "Soody Electronics", "Saravana Eyebarani", 
  "VDG Fashion", "JCOM", "Hello Ganesh"
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-luxury">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gradient leading-tight">
                  Value in Every Gram, Memory in Every Coin
                </h1>
                <p className="text-xl text-muted-foreground">
                  India&apos;s most trusted name in precious metal gifting & investment
                </p>
                <p className="text-lg font-medium text-gold-700">
                  Building Wealth with Every Coin
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="gold" size="xl" className="text-lg px-8 py-6">
                  <Link href="/business-enquiry">Send Enquiry</Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="text-lg px-8 py-6">
                  <Link href="/products">Explore Products</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://plus.unsplash.com/premium_photo-1679768606221-f66fc7993234?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Gold coins and jewelry"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Excellence Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Premium Yet Affordable Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Porkasu is a Premium yet Affordable brand specializing in the sale of high-quality gold and silver products.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-gold-600">24K, 22K</div>
                <p className="text-lg">Gold & Silver Coins and Bars</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-gold-600">100mg - 40g</div>
                <p className="text-lg">Available Weight Range</p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl font-bold text-gold-600">Premium</div>
                <p className="text-lg">Quality & Trust</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Porkasu Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Why Choose Porkasu?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the perfect blend of quality, trust, and value that makes us India&apos;s preferred choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm border-teal-200">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-teal rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-silver-700">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Make Your Gift Last Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Make Your Gift Last a Lifetime
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect for every occasion, creating memories that appreciate in value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.title} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-silver rounded-full flex items-center justify-center mb-4">
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-20 bg-gradient-navy">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Happy Clients
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
              {clients.map((client, index) => (
                <div key={client} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gold-200">
                  <p className="font-semibold text-gold-100">{client}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold-200">
                <div className="text-4xl font-bold text-gold-400 mb-2">150+</div>
                <p className="text-lg text-gold-100">Happy Clients</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold-200">
                <div className="text-4xl font-bold text-gold-400 mb-2">30+</div>
                <p className="text-lg text-gold-100">Business Clients</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold-200">
                <div className="text-4xl font-bold text-gold-400 mb-2">5+</div>
                <p className="text-lg text-gold-100">Years of Excellence</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gold-200">
                <div className="text-4xl font-bold text-gold-400 mb-2">100%</div>
                <p className="text-lg text-gold-100">Quality Assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Ready to Create Lasting Memories?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your journey with premium gold and silver coins today
            </p>
            <Button asChild variant="gold" size="xl" className="text-lg px-12 py-6">
              <Link href="/business-enquiry">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}