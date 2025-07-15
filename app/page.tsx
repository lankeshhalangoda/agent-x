"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Bot,
  Zap,
  Globe,
  ArrowRight,
  Calendar,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  FileText,
  HardDrive,
  Sheet,
  Brain,
  Video,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  Slack,
  Trello,
  Figma,
  Chrome,
  Smartphone,
  Camera,
  CheckCircle,
  Users,
  Clock,
  TrendingUp,
  Shield,
  Workflow,
  Target,
  BarChart3,
  Settings,
  Code,
  Database,
  Cloud,
  Lock,
  Cpu,
  Network,
  Star,
  Quote,
  PlayCircle,
  Sun,
  Moon,
  Download,
  Phone,
  MapPin,
  Send,
  Building,
  Factory,
  Rocket,
  Calculator,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Media Automation",
      description: "Transform your social media presence with intelligent automation that works around the clock.",
      features: [
        "Automated content scheduling across 15+ platforms",
        "AI-powered hashtag optimization and trend analysis",
        "Smart engagement tracking and response automation",
        "Cross-platform analytics and performance insights",
        "Brand voice consistency with AI content generation",
        "Competitor analysis and market positioning",
        "Crisis management and reputation monitoring",
        "ROI tracking and conversion optimization",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Google Workspace Integration",
      description: "Seamlessly connect your entire Google ecosystem with intelligent workflow automation.",
      features: [
        "Automated document creation and template management",
        "Smart calendar scheduling with conflict resolution",
        "Email automation with personalized responses",
        "Real-time collaboration workflow optimization",
        "Data synchronization across Sheets and Drive",
        "Meeting transcription and action item extraction",
        "Project management integration with Tasks",
        "Advanced security and compliance monitoring",
      ],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to revolutionize your business operations.",
      features: [
        "Custom AI model training for your specific needs",
        "Natural language processing for customer support",
        "Predictive analytics for business forecasting",
        "Automated decision-making workflows",
        "Intelligent data extraction and processing",
        "Machine learning optimization algorithms",
        "Computer vision for document processing",
        "Voice recognition and automated transcription",
      ],
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Enterprise Workflow Engine",
      description: "Core automation platform that powers intelligent business processes at scale.",
      features: [
        "Visual workflow builder with drag-and-drop interface",
        "500+ pre-built automation templates",
        "Real-time process monitoring and analytics",
        "Advanced conditional logic and branching",
        "Multi-step approval workflows",
        "Custom webhook integrations",
        "Enterprise-grade security and compliance",
        "24/7 monitoring and alerting system",
      ],
    },
  ]

  const solutions = [
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "For Startups",
      description: "Scale fast with enterprise-grade automation without enterprise costs",
      features: [
        "Quick setup in under 30 minutes",
        "Pre-built templates for common startup workflows",
        "Affordable pricing that scales with growth",
        "Integration with popular startup tools",
        "24/7 support and onboarding assistance",
      ],
      pricing: "Starting at $99/month",
      savings: "Save 15+ hours/week",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "For Enterprise",
      description: "Transform complex operations with advanced AI automation",
      features: [
        "Custom enterprise integrations",
        "Advanced security and compliance",
        "Dedicated customer success manager",
        "Priority support and SLA guarantees",
        "Custom training and implementation",
      ],
      pricing: "Custom pricing",
      savings: "Reduce costs by 60%",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "For Agencies",
      description: "Manage multiple clients efficiently with white-label solutions",
      features: [
        "Multi-tenant architecture",
        "White-label deployment options",
        "Client reporting and analytics",
        "Bulk workflow management",
        "Agency-specific integrations",
      ],
      pricing: "Starting at $299/month",
      savings: "Manage 3x more clients",
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "For Manufacturing",
      description: "Optimize production and supply chain with intelligent automation",
      features: [
        "Production workflow automation",
        "Supply chain optimization",
        "Quality control processes",
        "Inventory management",
        "Predictive maintenance",
      ],
      pricing: "Custom pricing",
      savings: "Increase efficiency by 40%",
    },
  ]

  const useCases = [
    {
      title: "Customer Onboarding Automation",
      description: "Streamline new customer acquisition with intelligent workflows",
      scenario:
        "A SaaS company reduced customer onboarding time from 5 days to 2 hours using Agent X automation, improving customer satisfaction by 85%.",
      benefits: ["95% faster onboarding", "Zero manual errors", "24/7 availability", "Personalized experience"],
      industry: "SaaS & Technology",
    },
    {
      title: "Financial Process Automation",
      description: "Automate invoice processing, approvals, and financial reporting",
      scenario:
        "A Fortune 500 company automated their entire accounts payable process, processing 10,000+ invoices monthly with 99.9% accuracy.",
      benefits: ["70% cost reduction", "99.9% accuracy", "Real-time reporting", "Compliance automation"],
      industry: "Finance & Banking",
    },
    {
      title: "HR & Recruitment Automation",
      description: "Transform hiring processes with AI-powered candidate screening",
      scenario:
        "A global consulting firm reduced time-to-hire by 60% while improving candidate quality through automated screening and interview scheduling.",
      benefits: ["60% faster hiring", "Better candidate quality", "Reduced bias", "Automated scheduling"],
      industry: "Human Resources",
    },
    {
      title: "E-commerce Order Fulfillment",
      description: "End-to-end automation from order to delivery",
      scenario:
        "An e-commerce retailer automated their entire fulfillment process, handling 50,000+ orders daily with 99.5% accuracy and same-day shipping.",
      benefits: ["99.5% order accuracy", "Same-day processing", "Inventory optimization", "Customer notifications"],
      industry: "E-commerce & Retail",
    },
    {
      title: "Healthcare Patient Management",
      description: "Streamline patient care with intelligent workflow automation",
      scenario:
        "A healthcare network automated patient scheduling, reminders, and follow-ups, reducing no-shows by 40% and improving patient satisfaction.",
      benefits: ["40% fewer no-shows", "Automated reminders", "Better patient care", "Compliance tracking"],
      industry: "Healthcare",
    },
    {
      title: "Marketing Campaign Automation",
      description: "Multi-channel marketing campaigns with AI optimization",
      scenario:
        "A marketing agency increased campaign ROI by 250% using automated A/B testing, audience segmentation, and performance optimization.",
      benefits: ["250% ROI increase", "Automated A/B testing", "Smart segmentation", "Real-time optimization"],
      industry: "Marketing & Advertising",
    },
  ]

  const platformIcons = [
    { icon: <Facebook className="w-8 h-8" />, name: "Facebook" },
    { icon: <Instagram className="w-8 h-8" />, name: "Instagram" },
    { icon: <FileText className="w-8 h-8" />, name: "Google Docs" },
    { icon: <HardDrive className="w-8 h-8" />, name: "Google Drive" },
    { icon: <Sheet className="w-8 h-8" />, name: "Google Sheets" },
    { icon: <Calendar className="w-8 h-8" />, name: "Google Calendar" },
    { icon: <Brain className="w-8 h-8" />, name: "OpenAI" },
    { icon: <Mail className="w-8 h-8" />, name: "Gmail" },
    { icon: <MessageCircle className="w-8 h-8" />, name: "WhatsApp" },
    { icon: <Video className="w-8 h-8" />, name: "TikTok" },
    { icon: <Twitter className="w-8 h-8" />, name: "Twitter" },
    { icon: <Linkedin className="w-8 h-8" />, name: "LinkedIn" },
    { icon: <Youtube className="w-8 h-8" />, name: "YouTube" },
    { icon: <Github className="w-8 h-8" />, name: "GitHub" },
    { icon: <Slack className="w-8 h-8" />, name: "Slack" },
    { icon: <Trello className="w-8 h-8" />, name: "Trello" },
    { icon: <Figma className="w-8 h-8" />, name: "Figma" },
    { icon: <Chrome className="w-8 h-8" />, name: "Chrome" },
    { icon: <Smartphone className="w-8 h-8" />, name: "Mobile Apps" },
    { icon: <Camera className="w-8 h-8" />, name: "Media Tools" },
    { icon: <Zap className="w-8 h-8" />, name: "Automation" },
    { icon: <Bot className="w-8 h-8" />, name: "AI Bots" },
  ]

  const stats = [
    { number: "10,000+", label: "Workflows Automated", icon: <Workflow className="w-6 h-6" /> },
    { number: "500+", label: "Enterprise Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "AI Agent Monitoring", icon: <Clock className="w-6 h-6" /> },
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increase Productivity by 300%",
      description: "Our AI agents work 24/7 to automate repetitive tasks and optimize workflows.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reduce Operational Costs",
      description: "Cut manual labor costs by up to 70% while improving accuracy and speed.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Get instant insights into your automated processes with advanced reporting.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Integrations",
      description: "Connect any platform or service with our flexible API and integration framework.",
    },
  ]

  const techStack = [
    { icon: <Code className="w-8 h-8" />, name: "Advanced APIs", description: "RESTful & GraphQL" },
    { icon: <Database className="w-8 h-8" />, name: "Cloud Database", description: "Multi-region scaling" },
    { icon: <Cloud className="w-8 h-8" />, name: "Cloud Native", description: "AWS & Azure certified" },
    { icon: <Lock className="w-8 h-8" />, name: "Enterprise Security", description: "SOC 2 Type II" },
    { icon: <Cpu className="w-8 h-8" />, name: "AI Processing", description: "GPU-accelerated" },
    { icon: <Network className="w-8 h-8" />, name: "Edge Computing", description: "Global CDN" },
  ]

  const realTimeMetrics = [
    { label: "Active Workflows", value: "12,847", trend: "+15%" },
    { label: "API Calls/min", value: "45,231", trend: "+8%" },
    { label: "Data Processed", value: "2.4TB", trend: "+22%" },
    { label: "Response Time", value: "0.12s", trend: "-5%" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Inc.",
      content:
        "Agent X transformed our workflow automation. We've seen a 400% increase in productivity and saved over $2M annually.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Operations",
      company: "Global Dynamics",
      content:
        "The AI-powered automation is incredible. Our team can now focus on strategic work while Agent X handles the repetitive tasks.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Watson",
      role: "Founder & CEO",
      company: "StartupX",
      content:
        "As a startup, Agent X gave us enterprise-level automation capabilities without the enterprise cost. Game changer!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const resources = [
    {
      title: "AI Automation Playbook",
      description: "Complete guide to implementing AI automation in your business",
      type: "PDF Guide",
      pages: "45 pages",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "ROI Calculator Template",
      description: "Calculate the potential return on investment for automation projects",
      type: "Excel Template",
      pages: "Interactive",
      icon: <Calculator className="w-8 h-8" />,
    },
    {
      title: "Integration Checklist",
      description: "Step-by-step checklist for successful system integrations",
      type: "PDF Checklist",
      pages: "12 pages",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      title: "API Documentation",
      description: "Complete technical documentation for Agent X APIs",
      type: "Online Docs",
      pages: "Comprehensive",
      icon: <Code className="w-8 h-8" />,
    },
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Google, leading AI initiatives. PhD in Computer Science from Stanford.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Principal Engineer at Microsoft Azure. Expert in distributed systems and machine learning infrastructure.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Marcus Johnson",
      role: "VP of Product",
      bio: "Former Product Lead at Salesforce. 15+ years experience in enterprise software and automation platforms.",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning from MIT. Published researcher in NLP and computer vision with 50+ papers.",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 1,000 workflow executions/month",
        "5 active workflows",
        "Basic integrations (10+)",
        "Email support",
        "Standard templates",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 workflow executions/month",
        "Unlimited workflows",
        "Advanced integrations (50+)",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "API access",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large organizations",
      features: [
        "Unlimited workflow executions",
        "Custom integrations",
        "Dedicated success manager",
        "24/7 phone support",
        "Custom AI model training",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment",
      ],
      popular: false,
    },
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-card border-r border-border flex flex-col items-center py-8 z-50">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-background border border-primary/30 flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="Agent X Logo" width={40} height={40} className="object-contain" />
          </div>
        </div>

        <div className="flex flex-col space-y-4 mb-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center hover:bg-primary/30 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
          </button>
          <Link
            href="/privacy"
            className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-muted-foreground group-hover:bg-primary transition-colors duration-300"></div>
          </Link>
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
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Advanced Background Effects */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10"></div>

          {/* Animated Floating Elements */}
          <div
            className="absolute top-20 right-20 w-32 h-32 border border-primary/30 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div className="absolute bottom-20 left-40 w-24 h-24 border border-blue-500/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-purple-500/30 rounded-full animate-pulse"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>

          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="mb-8 animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
                <Bot className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-mono text-sm">NEXT-GEN AI AUTOMATION</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              AGENT X
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono animate-fade-in-up">
              INTELLIGENT WORKFLOW WITH AI AGENTS
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Transform your business processes with intelligent automation. Seamlessly integrate Meta Suite and Google
              Workspace with AI-powered workflow management that scales with your enterprise needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delayed">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                START FREE TRIAL
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 bg-transparent"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                WATCH DEMO
              </Button>
            </div>

            {/* Real-time Metrics Dashboard */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8 animate-fade-in-up-delayed">
              <h3 className="text-primary font-mono text-sm mb-4">REAL-TIME SYSTEM METRICS</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {realTimeMetrics.map((metric, index) => (
                  <div key={index} className="text-center animate-counter">
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
                    <div className="text-xs text-green-500">{metric.trend}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-110 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-2 flex justify-center group-hover:text-blue-500 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                OUR PRODUCTS
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive AI automation solutions designed to transform every aspect of your business operations
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all duration-500 group hover:scale-[1.02] animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                        <Button
                          variant="outline"
                          className="border-primary/50 text-primary hover:bg-primary/10 rounded-full bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold text-primary mb-4">Key Features:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-start space-x-3 group/feature hover:scale-105 transition-transform duration-200"
                            >
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover/feature:text-green-500 transition-colors duration-200" />
                              <span className="text-muted-foreground text-sm group-hover/feature:text-foreground transition-colors duration-200">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                SOLUTIONS BY INDUSTRY
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Tailored automation solutions designed for specific industries and business sizes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-primary mb-6 flex justify-center">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 text-center">{solution.title}</h3>
                    <p className="text-muted-foreground text-center mb-6">{solution.description}</p>

                    <div className="space-y-3 mb-6">
                      {solution.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-border pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-primary">{solution.pricing}</span>
                        <span className="text-sm text-green-500 font-medium">{solution.savings}</span>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-blue-600">Get Started</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Use Cases & Scenarios */}
        <section className="py-20 px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                ADVANCED USE CASES
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Real-world scenarios where Agent X delivers transformational results across industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{useCase.title}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                        {useCase.industry}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6">{useCase.description}</p>

                    <div className="bg-muted/50 rounded-lg p-4 mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Success Story:</h4>
                      <p className="text-sm text-muted-foreground italic">"{useCase.scenario}"</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {useCase.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                TRANSPARENT PRICING
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core automation features.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`relative bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 animate-fade-in-up ${
                    tier.popular
                      ? "border-primary/60 shadow-lg shadow-primary/20"
                      : "border-primary/20 hover:border-primary/40"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-4xl font-bold text-primary">{tier.price}</span>
                        <span className="text-muted-foreground ml-1">{tier.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{tier.description}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "bg-gradient-to-r from-primary to-blue-600"
                          : "bg-transparent border border-primary/50 text-primary hover:bg-primary/10"
                      }`}
                    >
                      {tier.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                All plans include 14-day free trial • No setup fees • Cancel anytime
              </p>
              <Button variant="outline" className="bg-transparent">
                <Calculator className="mr-2 w-4 h-4" />
                Calculate Your ROI
              </Button>
            </div>
          </div>
        </section>

        {/* Platform Integration Section */}
        <section className="py-20 px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                SEAMLESS PLATFORM INTEGRATION
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Connect and automate your workflow across multiple platforms with our intelligent AI solutions. Over
                200+ integrations available with enterprise-grade security.
              </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 mb-12">
              {platformIcons.map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 group hover:scale-110 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {platform.icon}
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">Need a custom integration?</p>
              <Button variant="outline" className="hover:scale-105 transition-all duration-300 bg-transparent">
                REQUEST INTEGRATION
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                FREE RESOURCES
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Download our comprehensive guides, templates, and tools to accelerate your automation journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">{resource.icon}</div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                      <span>{resource.type}</span>
                      <span>{resource.pages}</span>
                    </div>
                    <Button size="sm" className="w-full bg-gradient-to-r from-primary to-blue-600">
                      <Download className="mr-2 w-4 h-4" />
                      Download Free
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                ABOUT AGENT X
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Founded in 2023 by AI experts from Google, Microsoft, and Stanford, we're building the future of work
                where humans and AI collaborate seamlessly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We believe that every business should have access to enterprise-grade AI automation. Our mission is to
                  democratize intelligent workflow management, making it accessible, affordable, and incredibly powerful
                  for organizations of all sizes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over 50 AI specialists, data scientists, and automation engineers, we're building the future of
                  work where humans and AI collaborate seamlessly to achieve unprecedented productivity and innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="text-primary mb-3">{benefit.icon}</div>
                      <h4 className="text-foreground font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-8">Leadership Team</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6 text-center">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                      <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-20 px-8">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                TRUSTED BY INDUSTRY LEADERS
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Join thousands of companies that have transformed their operations with Agent X
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                GET IN TOUCH
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Ready to transform your business with AI automation? Our team is here to help you get started.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us about your automation needs..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary to-blue-600 py-3">
                      <Send className="mr-2 w-4 h-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 text-primary mr-3" />
                      <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                    </div>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM PST</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-primary mr-3" />
                      <h4 className="text-lg font-semibold text-foreground">Email</h4>
                    </div>
                    <p className="text-muted-foreground">hello@agentx.ai</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-primary mr-3" />
                      <h4 className="text-lg font-semibold text-foreground">Office</h4>
                    </div>
                    <p className="text-muted-foreground">123 Innovation Drive</p>
                    <p className="text-muted-foreground">San Francisco, CA 94105</p>
                  </CardContent>
                </Card>

                <div className="text-center pt-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Prefer to schedule a call?</h4>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Demo Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              READY TO TRANSFORM YOUR BUSINESS?
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Join thousands of companies already using Agent X to automate their workflows and boost productivity.
              Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-12 py-6 text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                START FREE TRIAL
                <Zap className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 bg-transparent"
              >
                CONTACT SALES
              </Button>
            </div>

            <p className="text-muted-foreground text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
