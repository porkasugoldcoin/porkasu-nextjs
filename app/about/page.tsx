import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Award, 
  Heart, 
  Target,
  Users,
  Building2,
  Star,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: "About Us - Porkasu Premium Gold & Silver",
  description: "Learn about Porkasu's mission, vision, and values. India's leading brand in precious metal gifting and investment solutions with years of expertise and customer satisfaction.",
}

const values = [
  {
    icon: Shield,
    title: "Purity & Trust",
    description: "Every product meets the highest standards of purity and quality, backed by certifications you can trust."
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description: "Meticulous attention to detail in every coin and bar, creating products that stand the test of time."
  },
  {
    icon: Heart,
    title: "Value in Every Gram",
    description: "We ensure every gram delivers maximum value, making precious metal investment accessible to all."
  },
  {
    icon: Star,
    title: "Customer Delight",
    description: "Our commitment goes beyond transactions – we create experiences that bring joy and satisfaction."
  }
]

const impactStats = [
  { number: "150+", label: "Happy Customers" },
  { number: "30+", label: "Business Partners" },
  { number: "5+", label: "Years of Excellence" },
  { number: "100%", label: "Quality Assurance" }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-luxury">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
              About Porkasu
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating timeless value through precious metals, one coin at a time
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Porkasu is India&apos;s leading brand in precious metal gifting and investment solutions. 
              We specialize in creating products that transcend mere transactions, transforming 
              every purchase into a meaningful moment that carries both emotional and financial value.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of expertise in the precious metals industry, we&apos;ve built our reputation 
              on trust, quality, and exceptional customer service. Our commitment to excellence 
              has made us the preferred choice for individuals and businesses across India.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond gold and silver, we create memories. Every coin we craft, every bar we produce, 
              and every service we provide is designed to create lasting value that appreciates both 
              emotionally and financially over time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From personalized commemorative coins to corporate gifting solutions, from investment-grade 
              bars to festival special editions, we offer comprehensive precious metal solutions that 
              cater to every need and occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="text-center p-8">
              <CardHeader>
                <Target className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To make every gram of gold and silver more than a purchase—it becomes a memory of love, 
                  celebration, and value. We strive to create products that connect generations through 
                  the timeless appeal of precious metals.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="text-center p-8">
              <CardHeader>
                <Building2 className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be India&apos;s most trusted and loved name in precious metal gifting and investment, 
                  setting new standards in quality, service, and customer satisfaction while making 
                  precious metal ownership accessible to everyone.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="text-center p-8">
              <CardHeader>
                <Heart className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                <CardTitle className="text-2xl font-bold">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The principles that guide everything we do and every relationship we build. 
                  We believe in building lasting relationships through transparency, 
                  quality, and genuine care for our customers&apos; success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and every relationship we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-10 w-10 text-gold-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-copper">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-copper-100 mb-4">
              Our Impact
            </h2>
            <p className="text-lg text-copper-200 max-w-2xl mx-auto">
              Building trust through measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-copper-300">
                <div className="text-4xl font-bold text-copper-200 mb-2">{stat.number}</div>
                <div className="text-copper-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Backed by years of experience and deep knowledge in precious metals
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team consists of certified precious metals experts with 
                    extensive knowledge in gold and silver markets, quality standards, 
                    and investment strategies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous quality checks and comes with 
                    proper certifications, ensuring authenticity and purity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is always ready to assist with 
                    questions, guidance, and personalized service.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Precious metals expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-teal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-teal-100 mb-6">
            Ready to Start Your Precious Metal Journey?
          </h2>
          <p className="text-lg text-teal-200 mb-8 max-w-2xl mx-auto">
            Discover our premium collection of gold and silver products, 
            crafted with precision and backed by our commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 shadow-lg font-semibold" size="lg">
              <Link href="/products">View Products</Link>
            </Button>
            <Button asChild className="bg-white text-teal-700 hover:bg-teal-50 border-2 border-teal-600 shadow-lg font-semibold" size="lg">
              <Link href="/business-enquiry">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}