"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactBookingModal } from "@/components/contact-booking-modal"
import { cn } from "@/lib/utils"

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [initialTab, setInitialTab] = useState<"contact" | "book">("book")
  const [scrolled, setScrolled] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const openModal = (tab: "contact" | "book") => {
    setInitialTab(tab)
    setIsModalOpen(true)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 p-4 md:px-12 lg:px-24 transition-all duration-300",
        "bg-gradient-to-b from-[#2a004a]/80 to-transparent backdrop-blur-sm",
        scrolled ? "py-3" : "py-6",
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-white">
          AFFIDEX LABS
        </Link>
        <nav
          className={cn(
            "hidden md:flex items-center text-white transition-all duration-300",
            scrolled ? "justify-end space-x-6" : "justify-center space-x-8",
          )}
        >
          <Link href="/" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            Home
          </Link>
          <Link href="/#services-section" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            Blog
          </Link>
          <Link href="/about" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            About Us
          </Link>
          <Link href="/whitepaper" className="hover:text-purple-300 transition-colors text-sm md:text-base">
            Whitepaper
          </Link>
          <Button
            onClick={() => openModal("book")}
            className={cn(
              "px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all shadow-lg",
              scrolled ? "opacity-0 w-0 p-0 overflow-hidden" : "opacity-100 w-auto", // Disappear on scroll
            )}
          >
            Book a call now
          </Button>
        </nav>
        <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1a002a] border-l border-purple-800 text-white">
            <div className="flex flex-col gap-6 pt-8">
              <Link
                href="/"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#services-section"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/whitepaper"
                onClick={() => setIsMobileNavOpen(false)}
                className="text-lg font-medium hover:text-purple-300 transition-colors"
              >
                Whitepaper
              </Link>
              <Button
                onClick={() => {
                  openModal("book")
                  setIsMobileNavOpen(false)
                }}
                className="w-full px-6 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all shadow-lg"
              >
                Book a call now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <ContactBookingModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} initialTab={initialTab} />
    </header>
  )
}
