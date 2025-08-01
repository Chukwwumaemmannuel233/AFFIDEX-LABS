"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "PAAL AI",
      description: "Create Advanced AI Applications using Paal.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "Development", "AI"],
      category: ["All", "Web Design", "Development"],
    },
    {
      title: "MicroGPT",
      description: "Optimize and monetize your coding experience with a new AI Partner.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "Bot Development", "Smart Contracts"],
      category: ["All", "Web3 Design", "Bot Development", "Smart Contracts"],
    },
    {
      title: "Adrise AI",
      description: "First AI to replace marketing agencies",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["DApp Development", "Smart Contracts", "AI"],
      category: ["All", "DApp Development", "Smart Contracts"],
    },
    {
      title: "Vault AI",
      description: "AI super app built for Crypto-First solutions",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "DApp Development", "Smart Contracts"],
      category: ["All", "Web3 Design", "DApp Development", "Smart Contracts"],
    },
    {
      title: "Myra AI",
      description: "Next-gen AI for decentralized finance.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "DApp Development", "Smart Contracts"],
      category: ["All", "Web3 Design", "DApp Development", "Smart Contracts"],
    },
    {
      title: "KOL AI",
      description: "AI-powered tools for influencer marketing in Web3.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "Bot Development"],
      category: ["All", "Web3 Design", "Bot Development"],
    },
    {
      title: "Oxscans",
      description: "Advanced blockchain explorer for multiple chains.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Development", "Smart Contracts"],
      category: ["All", "Development", "Smart Contracts"],
    },
  ]

  const filters = [
    "All",
    "Web Design",
    "Development",
    "Web3 Design",
    "Bot Development",
    "Smart Contracts",
    "DApp Development",
  ]

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category.includes(activeFilter),
  )

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a004a] via-[#4a007a] to-[#6a00a0] text-white overflow-hidden">
      {/* Abstract background shapes - similar to homepage */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#8a2be2] rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#a020f0] rounded-full mix-blend-screen filter blur-[200px] opacity-40 animate-pulse-slow-reverse" />
      <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-[#c780ff] rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse-medium" />

      <main className="relative z-10 container mx-auto px-4 md:px-12 lg:px-24 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Portfolio</h1>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#8a2be2] to-[#a020f0] text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg"
                  : "border border-purple-500 text-white px-5 py-2.5 rounded-full bg-transparent hover:bg-white/10 transition-colors text-sm"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a002a] rounded-xl border border-purple-800 shadow-lg overflow-hidden group"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-1.5">{project.title}</h3>
                <p className="text-purple-200 text-sm md:text-base mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full border border-purple-600 text-purple-300 bg-purple-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium text-sm"
                >
                  View Project <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Custom CSS for animations (copied from homepage for consistency) */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        @keyframes pulse-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }

        @keyframes pulse-slow-reverse {
          0% {
            transform: scale(1.05);
            opacity: 0.4;
          }
          50% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }

        @keyframes pulse-medium {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 15s infinite ease-in-out;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 18s infinite ease-in-out;
        }
        .animate-pulse-medium {
          animation: pulse-medium 10s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
