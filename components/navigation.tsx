"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Bot,
  Zap,
  Users,
  FileText,
  Briefcase,
  Phone,
  BookOpen,
  Code,
  TrendingUp,
} from "lucide-react"
import { useState, useEffect } from "react"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navigation = [
    {
      name: "Products",
      href: "/products",
      icon: <Bot className="w-4 h-4" />,
      dropdown: [
        { name: "AI Workflow Engine", href: "/products/workflow-engine", icon: <Zap className="w-4 h-4" /> },
        {
          name: "Social Media Automation",
          href: "/products/social-automation",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        { name: "Enterprise Integration", href: "/products/enterprise", icon: <Briefcase className="w-4 h-4" /> },
        { name: "Custom AI Agents", href: "/products/custom-agents", icon: <Bot className="w-4 h-4" /> },
      ],
    },
    {
      name: "Solutions",
      href: "/solutions",
      icon: <Briefcase className="w-4 h-4" />,
      dropdown: [
        { name: "For Startups", href: "/solutions/startups", icon: <Zap className="w-4 h-4" /> },
        { name: "For Enterprise", href: "/solutions/enterprise", icon: <Briefcase className="w-4 h-4" /> },
        { name: "For Agencies", href: "/solutions/agencies", icon: <Users className="w-4 h-4" /> },
        { name: "Custom Solutions", href: "/solutions/custom", icon: <Code className="w-4 h-4" /> },
      ],
    },
    { name: "Pricing", href: "/pricing", icon: <TrendingUp className="w-4 h-4" /> },
    {
      name: "Resources",
      href: "/resources",
      icon: <BookOpen className="w-4 h-4" />,
      dropdown: [
        { name: "Documentation", href: "/docs", icon: <FileText className="w-4 h-4" /> },
        { name: "Blog", href: "/blog", icon: <BookOpen className="w-4 h-4" /> },
        { name: "Case Studies", href: "/case-studies", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "API Reference", href: "/api", icon: <Code className="w-4 h-4" /> },
      ],
    },
    { name: "About", href: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <Phone className="w-4 h-4" /> },
  ]

  if (!mounted) return null

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-background border border-primary/30 flex items-center justify-center overflow-hidden group-hover:border-primary/60 transition-all duration-300">
              <Image src="/logo.png" alt="Agent X" width={32} height={32} className="object-contain" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
              Agent X
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors duration-200 group"
                        >
                          <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                            {dropdownItem.icon}
                          </div>
                          <span className="text-sm">{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transition-transform duration-200"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  {item.dropdown && (
                    <div className="ml-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-blue-500" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
