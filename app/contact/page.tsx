import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Building2,
  Users,
  Award,
  Shield
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Contact Us - Porkasu Premium Gold & Silver",
  description: "Get in touch with Porkasu for all your precious metal needs. Visit our office in Chennai or contact us via phone, email, or online form.",
}

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+91 91501 34161",
    action: "tel:+919150134161"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your requirements",
    value: "contact@porkasu.in",
    action: "mailto:contact@porkasu.in"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come to our office",
    value: "Chennai, Tamil Nadu",
    action: "#"
  }
]

const businessHours = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" }
]

const officeBenefits = [
  {
    icon: Building2,
    title: "Professional Environment",
    description: "Modern office space with comfortable consultation areas"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Knowledgeable staff ready to assist with your needs"
  },
  {
    icon: Award,
    title: "Quality Products",
    description: "View and examine our products in person"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Safe and secure environment for all transactions"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-precious">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our experts for all your precious metal needs. 
              We're here to help you make the right investment decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your preferred way to contact us. Our team is ready to assist you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                  <CardTitle className="text-xl font-bold">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-4">{method.value}</p>
                  <Button asChild className="w-full">
                    <a href={method.action}>
                      {method.title === "Phone" ? "Call Now" : 
                       method.title === "Email" ? "Send Email" : "Get Directions"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Chennai, our office provides a professional 
                environment where you can discuss your requirements and view our products.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
                    <div className="space-y-1">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="text-muted-foreground">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Office location"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Why Visit Our Office?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of personalized service and expert guidance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <benefit.icon className="h-10 w-10 text-gold-600 mx-auto mb-4" />
                  <CardTitle className="text-lg font-bold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-precious">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how we can 
            help you with your precious metal investment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/business-enquiry">Get Quote</Link>
            </Button>
            <Button asChild variant="gold" size="lg">
              <a href="tel:+919150134161">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}