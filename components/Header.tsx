"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    if (pathname === "/") {
      // If we're on the home page, use smooth scrolling
      const targetId = href.replace("/#", "")
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(href)
    }
  }

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "")
      const element = document.getElementById(targetId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 0)
      }
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-xl font-bold">
              AK
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation(item.href)
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </motion.ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-primary"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden"
            >
              <ul className="py-4 px-6 space-y-2">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      className="block py-2 text-base font-medium rounded-md hover:bg-muted hover:text-primary transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavigation(item.href)
                        toggleMenu()
                      }}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

