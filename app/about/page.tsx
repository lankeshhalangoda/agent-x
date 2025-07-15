import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Target,
  Globe,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { number: "2023", label: "Founded", icon: <Target className="w-6 h-6" /> },
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "500+", label: "Enterprise Clients", icon: <Globe className="w-6 h-6" /> },
    { number: "$50M+", label: "Cost Savings Generated", icon: <TrendingUp className="w-6 h-6" /> },
  ]

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We push the boundaries of what's possible with AI and automation, constantly exploring new technologies and methodologies.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Success",
      description:
        "Our customers' success is our success. We're committed to delivering measurable value and exceptional support.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Security",
      description:
        "We maintain the highest standards of security and privacy, ensuring your data and processes are always protected.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centric AI",
      description:
        "We believe AI should augment human capabilities, not replace them. Our solutions empower people to do their best work.",
    },
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at Google, leading AI initiatives. PhD in Computer Science from Stanford.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Principal Engineer at Microsoft Azure. Expert in distributed systems and machine learning infrastructure.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Marcus Johnson",
      role: "VP of Product",
      bio: "Former Product Lead at Salesforce. 15+ years experience in enterprise software and automation platforms.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      bio: "PhD in Machine Learning from MIT. Published researcher in NLP and computer vision with 50+ papers.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "VP of Sales",
      bio: "Former Enterprise Sales Director at Slack. Expert in scaling B2B SaaS companies from startup to IPO.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Head of Customer Success",
      bio: "Former Director of Customer Success at Zendesk. Passionate about driving customer value and satisfaction.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
      },
    },
  ]

  const timeline = [
    {
      year: "2023",
      title: "Company Founded",
      description: "Agent X was founded with the vision of democratizing AI automation for businesses of all sizes.",
    },
    {
      year: "2023 Q2",
      title: "First Product Launch",
      description: "Launched our AI Workflow Engine with 50+ initial customers and $2M in seed funding.",
    },
    {
      year: "2023 Q4",
      title: "Series A Funding",
      description: "Raised $15M Series A led by Andreessen Horowitz to accelerate product development and team growth.",
    },
    {
      year: "2024 Q1",
      title: "Enterprise Platform",
      description: "Launched Enterprise Integration Platform, securing partnerships with Fortune 500 companies.",
    },
    {
      year: "2024 Q2",
      title: "Global Expansion",
      description: "Expanded to European and Asian markets, establishing offices in London and Singapore.",
    },
    {
      year: "2024 Q3",
      title: "AI Breakthrough",
      description: "Achieved breakthrough in custom AI agent development, reducing training time by 90%.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              About Agent X
            </h1>
            <p className="text-xl text-muted-foregroun mb-12 max-w-4xl mx-auto leading-relaxed">
              We're on a mission to democratize AI automation, making enterprise-grade intelligent workflows accessible
              to businesses of all sizes. Founded by AI experts from Google, Microsoft, and Stanford, we're building the
              future of work where humans and AI collaborate seamlessly.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  To empower every business with intelligent automation that amplifies human potential. We believe that
                  AI should be a force multiplier for human creativity and strategic thinking, not a replacement for it.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  By making sophisticated AI automation accessible and affordable, we're helping organizations of all
                  sizes compete in the digital economy and focus on what matters most: innovation, growth, and serving
                  their customers.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  A world where every business process is intelligently automated, freeing humans to focus on
                  creativity, strategy, and meaningful work. We envision a future where AI agents handle routine tasks
                  seamlessly, allowing teams to achieve unprecedented levels of productivity and innovation.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We're building the infrastructure for this future, one automated workflow at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                These core values guide everything we do, from product development to customer relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Meet the experienced leaders driving Agent X's mission to democratize AI automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </Link>
                      )}
                      {member.social.github && (
                        <Link
                          href={member.social.github}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                From startup to industry leader - here's how we've grown and evolved
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-background rounded-full"></div>
                      </div>
                      <div className="ml-12">
                        <div className="flex items-center mb-2">
                          <span className="text-primary font-bold text-lg mr-4">{item.year}</span>
                          <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Join Our Mission
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to transform your business with AI automation or join our team of innovators, we'd
              love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600" asChild>
                <Link href="/careers">
                  View Open Positions
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
