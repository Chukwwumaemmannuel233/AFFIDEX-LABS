import Link from "next/link"
import { Github, Send, Linkedin, X } from "lucide-react" // Added X icon

export function Footer() {
  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-sm py-10 md:py-12 lg:py-16 text-white text-sm">
      <div className="container mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        <div className="col-span-full lg:col-span-1">
          <div className="text-xl md:text-2xl font-bold tracking-tight mb-3">AFFIDEX LABS</div>
          <p className="text-purple-200 text-xs md:text-sm max-w-xs">
            World-class design & development trusted by visionary founders.
          </p>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-1.5 text-xs md:text-sm text-purple-200">
            <li>
              <Link href="/services#web3-design" className="hover:text-purple-300 transition-colors">
                Web3 Design
              </Link>
            </li>
            <li>
              <Link href="/services#fullstack-websites" className="hover:text-purple-300 transition-colors">
                Fullstack Websites
              </Link>
            </li>
            <li>
              <Link href="/services#dapp-development" className="hover:text-purple-300 transition-colors">
                DApp Development
              </Link>
            </li>
            <li>
              <Link href="/services#smart-contracts" className="hover:text-purple-300 transition-colors">
                Smart Contracts
              </Link>
            </li>
            <li>
              <Link href="/services#token-creation" className="hover:text-purple-300 transition-colors">
                Token Creation & Deploy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-1.5 text-xs md:text-sm text-purple-200">
            <li>
              <Link href="/portfolio" className="hover:text-purple-300 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-300 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-300 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/whitepaper" className="hover:text-purple-300 transition-colors">
                Whitepaper
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end lg:items-start">
          <h3 className="text-base md:text-lg font-semibold mb-3">Connect</h3>
          <div className="flex space-x-3">
            {" "}
            {/* Adjusted space-x */}
            <Link href="#" aria-label="GitHub" className="text-purple-200 hover:text-purple-400 transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Telegram" className="text-purple-200 hover:text-purple-400 transition-colors">
              <Send className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-purple-200 hover:text-purple-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              aria-label="X (formerly Twitter)"
              className="text-purple-200 hover:text-purple-400 transition-colors"
            >
              <X className="h-5 w-5" /> {/* Added X icon */}
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 lg:px-24 mt-6 pt-6 border-t border-purple-800 text-center text-xs md:text-sm text-purple-300">
        &copy; {new Date().getFullYear()} Affidex Labs. All rights reserved.
      </div>
    </footer>
  )
}
