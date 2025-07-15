"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Bot,
  Shield,
  FileText,
  Scale,
  AlertTriangle,
  Users,
  Globe,
  Mail,
  Clock,
  CheckCircle,
  Sun,
  Moon,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function TermsPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-card border-r border-border flex flex-col items-center py-8 z-50">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="Agent X Logo" width={40} height={40} className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <Link
            href="/"
            className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300"></div>
          </Link>
          <Link
            href="/privacy"
            className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300"></div>
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </nav>

      {/* Main Content */}
      <main className="ml-20">
        <div className="container mx-auto px-8 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6">
              <Scale className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm">LEGAL FRAMEWORK</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              TERMS OF SERVICE
            </h1>

            <p className="text-muted-foreground text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Bot className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Agreement to Terms</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or
                "your") and Agent X, Inc. ("Agent X," "we," "us," or "our") regarding your use of our AI-powered
                workflow automation platform and related services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </section>

            {/* Service Description */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Agent X provides an AI-powered workflow automation platform that enables users to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Automate social media management across multiple platforms</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Integrate and automate Google Workspace applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Deploy custom AI agents for business process automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Access real-time analytics and performance insights</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span>Utilize enterprise-grade security and compliance features</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* User Accounts and Registration */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">User Accounts and Registration</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Account Creation</h3>
                  <p>
                    To access our services, you must create an account by providing accurate, current, and complete
                    information. You are responsible for maintaining the confidentiality of your account credentials and
                    for all activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Eligibility Requirements</h3>
                  <p>
                    You must be at least 18 years old and have the legal capacity to enter into contracts. If you are
                    registering on behalf of an organization, you represent that you have the authority to bind that
                    organization to these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Account Security</h3>
                  <p>
                    You must immediately notify us of any unauthorized use of your account or any other breach of
                    security. We are not liable for any loss or damage arising from your failure to comply with these
                    security obligations.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use Policy */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Acceptable Use Policy</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You may
                  not:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Use the service for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Attempt to gain unauthorized access to our systems or networks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Interfere with or disrupt the service or servers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Use the service to transmit spam, malware, or harmful content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Reverse engineer, decompile, or attempt to extract source code</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Violate any applicable laws, regulations, or third-party rights</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Subscription and Payment Terms */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Subscription and Payment Terms</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Subscription Plans</h3>
                  <p>
                    Agent X offers various subscription plans with different features and usage limits. Your
                    subscription will automatically renew at the end of each billing period unless cancelled in
                    accordance with these Terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Payment Processing</h3>
                  <p>
                    All fees are charged in advance and are non-refundable except as expressly stated in these Terms.
                    You authorize us to charge your designated payment method for all applicable fees.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Free Trial</h3>
                  <p>
                    We may offer a free trial period for new users. At the end of the trial period, your subscription
                    will automatically convert to a paid plan unless you cancel before the trial expires.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Price Changes</h3>
                  <p>
                    We reserve the right to modify our pricing at any time. We will provide at least 30 days' notice of
                    any price increases for existing subscribers.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property Rights */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Intellectual Property Rights</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Our Intellectual Property</h3>
                  <p>
                    The Agent X platform, including all software, algorithms, designs, text, graphics, and other
                    content, is owned by Agent X and is protected by copyright, trademark, and other intellectual
                    property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Your Content</h3>
                  <p>
                    You retain ownership of any content you upload or create using our services. By using our services,
                    you grant us a limited license to use, store, and process your content solely to provide our
                    services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">License to Use</h3>
                  <p>
                    Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access
                    and use our services for your internal business purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Protection and Privacy */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Data Protection and Privacy</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Our collection, use, and protection of your personal information is
                governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our
                services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </section>

            {/* Service Availability and Support */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Service Availability and Support</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Service Level Agreement</h3>
                  <p>
                    We strive to maintain 99.9% uptime for our services. However, we do not guarantee uninterrupted
                    access and may perform maintenance that temporarily affects service availability.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Customer Support</h3>
                  <p>
                    We provide customer support through various channels including email, chat, and phone. Support
                    availability and response times may vary based on your subscription plan.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Service Modifications</h3>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time with
                    reasonable notice to users.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGENT X SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                  SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR
                  USE, ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF OUR SERVICES.
                </p>
                <p className="leading-relaxed">
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF OUR
                  SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Termination</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Termination by You</h3>
                  <p>
                    You may terminate your account at any time by following the cancellation process in your account
                    settings or by contacting our support team.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Termination by Us</h3>
                  <p>
                    We may terminate or suspend your account immediately if you violate these Terms or engage in conduct
                    that we determine is harmful to our services or other users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Effect of Termination</h3>
                  <p>
                    Upon termination, your right to use our services will cease immediately. We may delete your account
                    and data in accordance with our data retention policies.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Scale className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Governing Law and Dispute Resolution</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                  without regard to its conflict of law provisions.
                </p>
                <p className="leading-relaxed">
                  Any disputes arising out of or relating to these Terms or the use of our services shall be resolved
                  through binding arbitration in accordance with the Commercial Arbitration Rules of the American
                  Arbitration Association.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: legal@agentx.ai</p>
                <p>Address: Agent X Legal Department</p>
                <p>Phone: 1-800-AGENT-X</p>
                <p>Response Time: Within 5 business days</p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                email or through our platform at least 30 days before the changes take effect. Your continued use of our
                services after the changes take effect constitutes acceptance of the modified Terms.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
