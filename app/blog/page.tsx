"use client"

import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding Smart Contracts: A Simple Guide for Beginners",
      author: "AFFIDEX LABS",
      date: "Apr 2",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "How to Create User-Friendly UI/UX for Decentralized Apps",
      author: "AFFIDEX LABS",
      date: "Mar 29",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "What is Web3? How does web3 work?",
      author: "AFFIDEX LABS",
      date: "Mar 29",
      readTime: "3 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "How to Use Generative AI in Web3 Development",
      author: "AFFIDEX LABS",
      date: "Mar 27",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "How to Build a Successful DApp: Step-by-Step Guide and Best Practices",
      author: "AFFIDEX LABS",
      date: "Mar 22",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
    {
      title: "8 steps to build and launch a web3 product in 30 Days",
      author: "AFFIDEX LABS",
      date: "Mar 18",
      readTime: "3 min read",
      image: "/placeholder.svg?height=200&width=300",
      link: "#",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a004a] via-[#4a007a] to-[#6a00a0] text-white overflow-hidden">
      {/* Abstract background shapes - similar to homepage */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#8a2be2] rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#a020f0] rounded-full mix-blend-screen filter blur-[200px] opacity-40 animate-pulse-slow-reverse" />
      <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-[#c780ff] rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse-medium" />

      <main className="relative z-10 container mx-auto px-4 md:px-12 lg:px-24 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">Blog</h1>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="block group">
              <div className="bg-[#1a002a] rounded-xl border border-purple-800 shadow-lg overflow-hidden h-full flex flex-col">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={600}
                  height={300}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 md:p-6 flex-grow flex flex-col">
                  <p className="text-xs text-purple-300 mb-1.5">{post.author}</p>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <div className="mt-auto text-xs text-purple-400">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
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
