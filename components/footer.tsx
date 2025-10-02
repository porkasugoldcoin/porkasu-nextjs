import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-gradient-precious border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gradient">Porkasu</h3>
                <p className="text-sm text-muted-foreground">Premium Gold & Silver</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Value in Every Gram, Memory in Every Coin. India's most trusted name in precious metal gifting & investment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                Services
              </Link>
              <Link href="/products" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                Products
              </Link>
              <Link href="/business-enquiry" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                Business Enquiry
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-gold-600 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>264/44 Srirengapalayam</p>
                  <p>Rajapalayam – 626117</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-600" />
                <a 
                  href="tel:+919150134161" 
                  className="text-sm text-muted-foreground hover:text-gold-600 transition-colors"
                >
                  +91 91501 34161
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-600" />
                <a 
                  href="mailto:contact@porkasu.in" 
                  className="text-sm text-muted-foreground hover:text-gold-600 transition-colors"
                >
                  contact@porkasu.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-4 w-4 text-gold-600" />
                <a 
                  href="https://instagram.com/porkasu_goldcoin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-gold-600 transition-colors"
                >
                  @porkasu_goldcoin
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Ready to Get Started?</h4>
            <p className="text-sm text-muted-foreground">
              Start your journey with premium gold and silver coins today.
            </p>
            <Button asChild variant="gold" className="w-full">
              <Link href="/business-enquiry">Send Enquiry</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-muted-foreground">
                © 2024 Porkasu. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions" className="text-sm text-muted-foreground hover:text-gold-600 transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Business Hours: Mon-Fri 9:00 AM - 6:00 PM, Sat 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
