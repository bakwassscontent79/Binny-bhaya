import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, Shield, Phone, MapPin, Instagram, MessageCircle, Star, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "BenzoPlus Marble Care — Marble Crystalliser & Polishing Compound in NCR",
  description:
    "Professional marble & stone care products — crystalliser, polishers, and bonding kits. Fast results for contractors & homeowners in NCR.",
  keywords: "marble care, crystalliser, polishing compound, NCR, contractors, marble restoration",
  openGraph: {
    title: "BenzoPlus Marble Care — Professional Marble Restoration",
    description: "Trusted by contractors in NCR for marble crystallisation and polishing solutions.",
  },
}

export default function BenzoPlusMarbleCare() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-foreground text-primary-foreground py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 to-foreground/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/professional-marble-polishing-work-in-progress.jpg')`,
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
              Professional Grade
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              <span className="text-primary">BenzoPlus</span>
              <br />
              Marble Care
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-primary">Restore. Shine. Protect.</p>
            <p className="text-lg text-muted-foreground max-w-lg text-pretty">
              Marble crystalliser, polishing & bonding kits — trusted by contractors in NCR for professional results
              every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Request Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              > 
                WhatsApp Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/marble-care-products-professional-kit-display.jpg"
              alt="BenzoPlus Marble Care Products"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Contractors Choose BenzoPlus</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Professional-grade solutions designed for the demanding NCR market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">High-Performance Crystallization</h3>
                <p className="text-muted-foreground text-pretty">
                  Advanced formula creates a durable, mirror-like finish that lasts longer than traditional polishing
                  methods.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Easy-to-Apply • Fast Results</h3>
                <p className="text-muted-foreground text-pretty">
                  Simple 3-step process delivers professional results in minutes, not hours. Perfect for busy
                  contractors.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Safe for Marble & Granite</h3>
                <p className="text-muted-foreground text-pretty">
                  pH-balanced formula protects natural stone while delivering exceptional shine and protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">See the BenzoPlus Difference</h2>
            <p className="text-lg text-muted-foreground text-pretty">Real results from contractors across NCR</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/marble-floor-before-and-after-restoration-comparis.jpg"
                  alt="Marble Floor Restoration"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg">Marble Floor Restoration</h4>
                <p className="text-muted-foreground">Gurgaon Office Complex</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/granite-countertop-polishing-before-after.jpg"
                  alt="Granite Countertop Polishing"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg">Granite Countertop Polish</h4>
                <p className="text-muted-foreground">Delhi Residential Project</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/marble-staircase-restoration-professional.jpg"
                  alt="Marble Staircase Restoration"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-lg">Staircase Crystallization</h4>
                <p className="text-muted-foreground">Noida Shopping Mall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Simple 3-Step Process</h2>
            <p className="text-lg text-muted-foreground text-pretty">Professional results in minutes, not hours</p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                1
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Clean Surface</h3>
                <p className="text-muted-foreground text-pretty">
                  Remove dirt, grime, and old polish from the marble surface using standard cleaning methods.
                </p>
              </div>
              <div className="w-32 h-32">
                <img src="/cleaning-marble-surface-icon.jpg" alt="Clean Surface" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                2
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Apply BenzoPlus</h3>
                <p className="text-muted-foreground text-pretty">
                  Apply BenzoPlus crystalliser evenly across the surface using the provided applicator pad.
                </p>
              </div>
              <div className="w-32 h-32">
                <img src="/applying-marble-polish-product-icon.jpg" alt="Apply Product" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold">
                3
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Buff to Shine</h3>
                <p className="text-muted-foreground text-pretty">
                  Buff the surface with a clean cloth or machine polisher to reveal the brilliant, mirror-like finish.
                </p>
              </div>
              <div className="w-32 h-32">
                <img src="/buffing-marble-to-shine-icon.jpg" alt="Buff to Shine" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Choose Your Kit</h2>
            <p className="text-lg text-muted-foreground text-pretty">Professional solutions for every project size</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Starter Kit</h3>
                  <p className="text-muted-foreground mb-4">Perfect for small projects</p>
                  <div className="text-3xl font-bold text-primary mb-4">₹2,499</div>
                  <Badge variant="secondary" className="mb-4">
                    Small Jar + Tools
                  </Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>500ml BenzoPlus Crystalliser</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Application Pads (5 pcs)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Buffing Cloth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Usage Instructions</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Order Starter Kit</Button>
              </CardContent>
            </Card>
            <Card className="p-8 hover:shadow-lg transition-shadow border-primary">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <Badge className="bg-primary text-primary-foreground mb-2">Most Popular</Badge>
                  <h3 className="text-2xl font-bold mb-2">Pro Kit</h3>
                  <p className="text-muted-foreground mb-4">Complete professional solution</p>
                  <div className="text-3xl font-bold text-primary mb-4">₹4,999</div>
                  <Badge variant="secondary" className="mb-4">
                    Combo Pack
                  </Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>1L BenzoPlus Crystalliser</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>500ml Bonding Agent</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Professional Applicator Set</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Microfiber Cloths (10 pcs)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Free Phone Support</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">Order Pro Kit</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Bulk & Dealer Pricing Available</h4>
            <p className="text-muted-foreground mb-4">
              Special rates for contractors, marble shops, and interior designers
            </p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Contact for Bulk Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Trusted by NCR Professionals</h2>
            <p className="text-lg text-muted-foreground text-pretty">What contractors are saying about BenzoPlus</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-pretty">
                  "BenzoPlus has transformed our marble restoration business. The results are consistently excellent,
                  and our clients are always impressed with the mirror-like finish."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">RK</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rajesh Kumar</div>
                    <div className="text-sm text-muted-foreground">Kumar Marble Works, Gurgaon</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-pretty">
                  "Easy to use, fast results, and the shine lasts for months. We've switched all our projects to
                  BenzoPlus. Highly recommended for professional contractors."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-primary">AS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Amit Sharma</div>
                    <div className="text-sm text-muted-foreground">Elite Interiors, Delhi</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Get Started Today</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Contact us for product demos, bulk pricing, or technical support
            </p>
          </div>
          <Card className="p-8">
            <CardContent className="space-y-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input placeholder="Your full name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone/WhatsApp *</label>
                    <Input placeholder="+91 9876543210" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location (NCR) *</label>
                  <Input placeholder="Delhi, Gurgaon, Noida, Faridabad, etc." required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Tell us about your project, bulk requirements, or any questions..." rows={4} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90">Send Message</Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp Direct
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">BenzoPlus Marble Care</h3>
              <p className="text-muted-foreground mb-4 text-pretty">
                Professional marble and stone care solutions trusted by contractors across NCR.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>NCR Region, Delhi-Gurgaon-Noida</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 98116 66072</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span>WhatsApp: +91 98116 66072</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Product Features
                  </a>
                </div>
                <div>
                  <a href="#gallery" className="hover:text-primary transition-colors">
                    Before & After
                  </a>
                </div>
                <div>
                  <a href="#pricing" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </div>
                <div>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-muted pt-8 text-center text-sm text-muted-foreground">
            <p className="mb-2">
              <strong>For professional use. Read instructions carefully before application.</strong>
            </p>
            <p>&copy; 2024 BenzoPlus Marble Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
