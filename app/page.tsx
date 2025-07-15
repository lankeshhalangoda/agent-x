import Link from "next/link"
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
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Social Media Automation",
      description:
        "Streamline your social presence across all platforms with intelligent posting, engagement tracking, and content optimization.",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Google Workspace Integration",
      description:
        "Seamlessly connect your Google ecosystem with automated workflows for docs, sheets, calendar, and drive management.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description:
        "Leverage cutting-edge artificial intelligence to optimize your business processes and decision-making workflows.",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-20 bg-gray-900 border-r border-cyan-500/30 flex flex-col items-center py-8 z-50">
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300"></div>
          </Link>
          <Link
            href="/privacy"
            className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-cyan-400 transition-colors duration-300"></div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-40 w-24 h-24 border border-blue-500/30 rounded-full animate-pulse delay-1000"></div>

          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                <Bot className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-sm">AGENT X PROTOCOL</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AGENT X
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">INTELLIGENT WORKFLOW WITH AI AGENTS</p>

            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business processes with intelligent automation. Seamlessly integrate Meta Suite and Google
              Workspace with AI-powered workflow management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full border-0 shadow-lg shadow-cyan-500/25">
                GET STARTED
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                SCHEDULE DEMO
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-8 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                CORE SYSTEMS
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Advanced AI-driven solutions designed to revolutionize your digital workflow ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integration Section */}
        <section className="py-20 px-8 bg-gray-900/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                SEAMLESS PLATFORM INTEGRATION
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Connect and automate your workflow across multiple platforms with our intelligent AI solutions
              </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {platformIcons.map((platform, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 hover:bg-gray-800/80 transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                    {platform.icon}
                  </div>
                  <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-center">
                    {platform.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              START AUTOMATING TODAY
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Join the future of intelligent workflow automation. Deploy AI agents that work 24/7 to optimize your
              business processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-lg font-semibold rounded-full border-0 shadow-lg shadow-cyan-500/25">
                DEPLOY AGENTS
                <Zap className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-12 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                VIEW DOCUMENTATION
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
