import Link from "next/link"
import { Bot, Shield, Database, Eye, Lock, Users, Globe, Mail } from "lucide-react"

export default function PrivacyPage() {
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
            className="w-12 h-12 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-gray-400 group-hover:bg-cyan-400 transition-colors duration-300"></div>
          </Link>
          <Link
            href="/privacy"
            className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 group"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform duration-300"></div>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-20">
        <div className="container mx-auto px-8 py-16 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">PRIVACY PROTOCOL</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              PRIVACY POLICY
            </h1>

            <p className="text-gray-400 text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Bot className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Introduction</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Agent X ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our AI-powered workflow automation platform and related services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Database className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Personal Information</h3>
                  <p>
                    We collect information you provide directly, including name, email address, company information, and
                    account credentials for integrated platforms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Usage Data</h3>
                  <p>
                    We automatically collect information about your interactions with our platform, including workflow
                    configurations, automation patterns, and system performance metrics.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Integration Data</h3>
                  <p>
                    When you connect third-party platforms (Google Workspace, Meta Suite), we access only the data
                    necessary to provide our automation services.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide and maintain our AI-powered automation services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Process and execute automated workflows across integrated platforms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Improve our AI algorithms and service performance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Communicate with you about service updates and support</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Ensure platform security and prevent unauthorized access</span>
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Data Security</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3"></div>
                  <span>End-to-end encryption for all data transmissions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Secure cloud infrastructure with regular security audits</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Multi-factor authentication and access controls</span>
                </li>
                <li className="flex items-center">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Regular security monitoring and threat detection</span>
                </li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances: with your explicit consent, to comply with legal obligations, to
                protect our rights and safety, or with trusted service providers who assist in our operations under
                strict confidentiality agreements.
              </p>
            </section>

            {/* International Transfers */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">International Data Transfers</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure that
                such transfers comply with applicable data protection laws and implement appropriate safeguards to
                protect your information.
              </p>
            </section>

            {/* Your Rights */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Access and review your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Object to or restrict processing of your information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Data portability for your information</span>
                </li>
              </ul>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p>Email: privacy@agentx.ai</p>
                <p>Address: Agent X Privacy Office</p>
                <p>Response Time: Within 30 days of receipt</p>
              </div>
            </section>

            {/* Updates */}
            <section className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
              <p className="text-gray-300 leading-relaxed">
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
