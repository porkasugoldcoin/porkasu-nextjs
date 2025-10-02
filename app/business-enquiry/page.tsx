import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BusinessEnquiryForm } from '@/components/business-enquiry-form'
import { 
  Phone, 
  Mail, 
  Clock,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Business Enquiry - Porkasu Premium Gold & Silver",
  description: "Get a quote for your precious metal requirements. Contact us for custom gold and silver products, bulk orders, and investment solutions.",
}

const benefits = [
  {
    icon: CheckCircle,
    title: "Free Consultation",
    description: "Expert advice on your precious metal requirements"
  },
  {
    icon: CheckCircle,
    title: "Competitive Pricing",
    description: "Best market rates with transparent pricing"
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all products"
  },
  {
    icon: CheckCircle,
    title: "Fast Delivery",
    description: "Quick turnaround times for all orders"
  }
]

export default function BusinessEnquiryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-precious">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
              Business Enquiry
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a personalized quote for your precious metal requirements. 
              Our experts are ready to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">Get Your Quote</CardTitle>
                    <CardDescription>
                      Fill out the form below and our team will get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BusinessEnquiryForm />
                  </CardContent>
                </Card>
              </div>

              {/* Benefits & Contact */}
              <div className="space-y-6">
                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <benefit.icon className="h-5 w-5 text-gold-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold">{benefit.title}</h4>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-gold-600" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 91501 34161</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-gold-600" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">contact@porkasu.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gold-600" />
                      <div>
                        <p className="font-semibold">Business Hours</p>
                        <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
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
            Our team is standing by to help you with all your precious metal needs. 
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <a href="tel:+919150134161">Call Now</a>
            </Button>
            <Button asChild variant="gold" size="lg">
              <a href="mailto:contact@porkasu.in">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}