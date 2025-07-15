"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Bot, Shield, Database, Eye, Lock, Users, Globe, Mail, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"

export default function PrivacyPage() {
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
          </button>
          <Link
            href="/terms"
            className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300"></div>
          </Link>
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
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-mono text-sm">PRIVACY PROTOCOL</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              PRIVACY POLICY
            </h1>

            <p className="text-muted-foreground text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Bot className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Agent X ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our AI-powered workflow automation platform and related services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Personal Information</h3>
                  <p>
                    We collect information you provide directly, including name, email address, company information, and
                    account credentials for integrated platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Usage Data</h3>
                  <p>
                    We automatically collect information about your interactions with our platform, including workflow
                    configurations, automation patterns, and system performance metrics.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Integration Data</h3>
                  <p>
                    When you connect third-party platforms (Google Workspace, Meta Suite), we access only the data
                    necessary to provide our automation services.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide and maintain our AI-powered automation services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Process and execute automated workflows across integrated platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Improve our AI algorithms and service performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Communicate with you about service updates and support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Ensure platform security and prevent unauthorized access</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  <span>End-to-end encryption for all data transmissions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  <span>Secure cloud infrastructure with regular security audits</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  <span>Multi-factor authentication and access controls</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                  <span>Regular security monitoring and threat detection</span>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Data Sharing</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances: with your explicit consent, to comply with legal obligations, to
                protect our rights and safety, or with trusted service providers who assist in our operations under
                strict confidentiality agreements.
              </p>
            </section>

            {/* International Transfers */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">International Data Transfers</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that
                such transfers comply with applicable data protection laws and implement appropriate safeguards to
                protect your information.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Your Rights</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Access and review your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Object to or restrict processing of your information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data portability for your information</span>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: privacy@agentx.ai</p>
                <p>Address: Agent X Privacy Office</p>
                <p>Response Time: Within 30 days of receipt</p>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-card/50 border border-primary/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of
                our services after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
