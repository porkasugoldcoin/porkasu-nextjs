import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Coins, 
  Settings, 
  BarChart3, 
  Shield, 
  Award, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Products - Porkasu Premium Gold & Silver",
  description: "Explore our premium collection of gold and silver products including coins, bars, and custom designs. Certified purity, expert craftsmanship, and competitive prices.",
}

const goldProducts = [
  {
    name: "Gold Coins",
    description: "Pure gold coins in various weights and designs",
    features: ["24K purity", "Multiple weights", "Custom designs", "Certified quality"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Gold Bars",
    description: "Investment-grade gold bars for portfolio diversification",
    features: ["High purity", "Easy storage", "Market rates", "Quick liquidation"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Custom Gold",
    description: "Personalized gold products for special occasions",
    features: ["Custom engraving", "Unique designs", "Gift packaging", "Memorable keepsakes"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
]

const silverProducts = [
  {
    name: "Silver Coins",
    description: "Pure silver coins with intricate designs and patterns",
    features: ["99.9% purity", "Beautiful designs", "Collectible value", "Affordable prices"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Silver Bars",
    description: "Investment silver bars for long-term wealth building",
    features: ["High purity", "Low premiums", "Easy storage", "Liquidity"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Custom Silver",
    description: "Personalized silver products for gifts and collections",
    features: ["Custom designs", "Engraving options", "Gift packaging", "Unique pieces"],
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
]

const weightOptions = [
  { weight: "1g", description: "Perfect for gifts and small investments" },
  { weight: "5g", description: "Popular choice for special occasions" },
  { weight: "10g", description: "Ideal for medium-term investments" },
  { weight: "50g", description: "Significant investment value" },
  { weight: "100g+", description: "Large investment and portfolio diversification" }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-precious">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-gradient">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium gold and silver products crafted with precision and backed by quality guarantees
            </p>
          </div>
        </div>
      </section>

      {/* Gold Collection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Gold Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pure gold products for investment and gifting, available in various weights and designs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goldProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/business-enquiry">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Silver Collection */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Silver Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              High-quality silver products for investment and collection, offering excellent value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {silverProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold-600 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/business-enquiry">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weight Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gradient mb-4">
              Available Weights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from a wide range of weights to suit your investment goals and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {weightOptions.map((option, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gold-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {option.weight}
                </div>
                <h3 className="text-lg font-semibold mb-2">{option.weight}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gradient">
                Quality Assurance
              </h2>
              <p className="text-lg text-muted-foreground">
                Every product undergoes rigorous testing and comes with comprehensive 
                quality guarantees to ensure your complete satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certified Purity</h3>
                    <p className="text-muted-foreground">
                      All products come with proper purity certificates and hallmarks
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Craftsmanship</h3>
                    <p className="text-muted-foreground">
                      Meticulously crafted by skilled artisans with attention to detail
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-gold-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Satisfaction Guarantee</h3>
                    <p className="text-muted-foreground">
                      100% satisfaction guarantee on all our products
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
      <section className="py-20 bg-gradient-gold">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gold-100 mb-6">
            Ready to Invest in Precious Metals?
          </h2>
          <p className="text-lg text-gold-200 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your requirements and 
            find the perfect products for your investment or gifting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gold-600 text-white hover:bg-gold-700 shadow-lg font-semibold" size="lg">
              <Link href="/business-enquiry">Get Quote</Link>
            </Button>
            <Button asChild className="bg-white text-gold-700 hover:bg-gold-50 border-2 border-gold-600 shadow-lg font-semibold" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}