import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bot, Globe, Workflow, CheckCircle, ArrowRight, Star, TrendingUp, Database } from "lucide-react"
import Link from "next/link"

export default function ProductsPage() {
  const products = [
    {
      id: "workflow-engine",
      name: "AI Workflow Engine",
      description: "The core automation platform that powers intelligent business processes",
      icon: <Workflow className="w-12 h-12" />,
      price: "Starting at $99/month",
      features: [
        "Visual workflow builder with drag-and-drop interface",
        "500+ pre-built automation templates",
        "Real-time process monitoring and analytics",
        "Advanced conditional logic and branching",
        "Multi-step approval workflows",
        "Custom webhook integrations",
        "Enterprise-grade security and compliance",
        "24/7 monitoring and alerting",
      ],
      benefits: [
        "Reduce manual work by 80%",
        "Improve process accuracy by 95%",
        "Scale operations without hiring",
        "Real-time visibility into all processes",
      ],
      useCases: [
        "Customer onboarding automation",
        "Invoice processing and approval",
        "Employee offboarding workflows",
        "Data synchronization between systems",
      ],
    },
    {
      id: "social-automation",
      name: "Social Media Automation Suite",
      description: "Comprehensive social media management powered by AI",
      icon: <Globe className="w-12 h-12" />,
      price: "Starting at $149/month",
      features: [
        "AI-powered content generation and optimization",
        "Multi-platform scheduling (15+ platforms)",
        "Automated engagement and response management",
        "Advanced analytics and performance tracking",
        "Competitor analysis and benchmarking",
        "Brand voice consistency across platforms",
        "Crisis management and reputation monitoring",
        "ROI tracking and conversion attribution",
      ],
      benefits: [
        "Increase engagement by 300%",
        "Save 20+ hours per week",
        "Maintain consistent brand voice",
        "Optimize posting times automatically",
      ],
      useCases: [
        "Multi-brand social media management",
        "Influencer campaign automation",
        "Customer service on social platforms",
        "Social commerce optimization",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Integration Platform",
      description: "Connect and automate your entire enterprise ecosystem",
      icon: <Database className="w-12 h-12" />,
      price: "Custom pricing",
      features: [
        "200+ enterprise system integrations",
        "Custom API development and maintenance",
        "Advanced data transformation and mapping",
        "Enterprise-grade security and compliance",
        "Dedicated customer success manager",
        "Priority support and SLA guarantees",
        "Custom training and onboarding",
        "Advanced reporting and analytics",
      ],
      benefits: [
        "Eliminate data silos completely",
        "Reduce integration costs by 60%",
        "Accelerate digital transformation",
        "Ensure data consistency across systems",
      ],
      useCases: [
        "ERP and CRM synchronization",
        "Financial system automation",
        "HR and payroll integration",
        "Supply chain optimization",
      ],
    },
    {
      id: "custom-agents",
      name: "Custom AI Agents",
      description: "Bespoke AI agents tailored to your specific business needs",
      icon: <Bot className="w-12 h-12" />,
      price: "Starting at $299/month",
      features: [
        "Custom AI model training and deployment",
        "Natural language processing capabilities",
        "Computer vision and document processing",
        "Predictive analytics and forecasting",
        "Voice recognition and synthesis",
        "Custom integration development",
        "Continuous learning and optimization",
        "White-label deployment options",
      ],
      benefits: [
        "Solve unique business challenges",
        "Gain competitive advantage",
        "Automate complex decision-making",
        "Scale expertise across organization",
      ],
      useCases: [
        "Intelligent document processing",
        "Automated quality control",
        "Personalized customer experiences",
        "Predictive maintenance systems",
      ],
    },
  ]

  const comparisonFeatures = [
    "Visual Workflow Builder",
    "Pre-built Templates",
    "Real-time Monitoring",
    "API Integrations",
    "Advanced Analytics",
    "Enterprise Security",
    "24/7 Support",
    "Custom Development",
    "AI-Powered Insights",
    "Multi-platform Support",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Comprehensive AI automation solutions designed to transform every aspect of your business operations
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600" asChild>
                <Link href="/demo">
                  Try All Products Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid gap-12">
              {products.map((product, index) => (
                <Card
                  key={product.id}
                  className={`overflow-hidden ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} lg:flex bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300`}
                >
                  <div className="lg:w-1/2 p-8">
                    <div className="flex items-center mb-6">
                      <div className="text-primary mr-4">{product.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-foreground">{product.name}</h3>
                        <p className="text-primary font-semibold">{product.price}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-gradient-to-r from-primary to-blue-600" asChild>
                        <Link href={`/products/${product.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href="/demo">Try Free</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="lg:w-1/2 p-8 bg-muted/30">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Features & Capabilities:</h4>
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-3">Common Use Cases:</h4>
                    <div className="space-y-2">
                      {product.useCases.map((useCase, i) => (
                        <div key={i} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Product Comparison
              </h2>
              <p className="text-muted-foreground text-lg">
                Compare features across our product suite to find the perfect fit
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-card rounded-lg overflow-hidden">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    {products.map((product) => (
                      <th key={product.id} className="text-center p-4 font-semibold min-w-[150px]">
                        {product.name.split(" ")[0]} {product.name.split(" ")[1]}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={feature} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                      <td className="p-4 font-medium">{feature}</td>
                      {products.map((product) => (
                        <td key={product.id} className="text-center p-4">
                          <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Choose the perfect combination of products for your business needs, or let our experts help you decide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600" asChild>
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
