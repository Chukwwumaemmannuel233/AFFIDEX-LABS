"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Quote, CheckCircle, Lock, Lightbulb, ChevronLeft, ChevronRight, Linkedin, X } from "lucide-react" // Added Linkedin and X icons
import Image from "next/image"

export default function AboutUsPage() {
  const testimonials = [
    {
      quote: "Your work is awesome. We'll keep using your services",
      author: "David",
      title: "Founder, Paal AI",
      logo: "/placeholder.svg?height=30&width=80",
    },
    {
      quote: "Affidex Labs delivered beyond our expectations. Truly world-class!",
      author: "Sarah J.",
      title: "CEO, Blockchain Startup",
      logo: "/placeholder.svg?height=30&width=80",
    },
    {
      quote: "The team's expertise in Web3 development is unmatched. Highly recommend.",
      author: "Michael K.",
      title: "CTO, DeFi Protocol",
      logo: "/placeholder.svg?height=30&width=80",
    },
  ]

  const teamMembers = [
    {
      name: "Emmanuel",
      title: "Founder & CEO",
      description:
        "Emmanuel is the visionary behind Affidex Labs, leading the company with a passion for innovation and a commitment to empowering others through technology.",
      image: "/placeholder.svg?height=150&width=150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sarah Lee",
      title: "Lead Designer",
      description: "Sarah brings creative UI/UX solutions to life with user-focused design strategies.",
      image: "/placeholder.svg?height=150&width=150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Michael Chen",
      title: "Head of Development",
      description: "Michael leads the dev team with full-stack expertise and a passion for clean, scalable code.",
      image: "/placeholder.svg?height=150&width=150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Amina Yusuf",
      title: "Marketing Strategist",
      description: "Amina ensures our projects reach the right audience with powerful digital campaigns.",
      image: "/placeholder.svg?height=150&width=150",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Okoro",
      title: "Cloud Architect",
      description: "David manages cloud infrastructure and DevOps for seamless scalability and security.",
      image: "/placeholder.svg?height=150&width=150",
      linkedin: "#",
      twitter: "#",
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a004a] via-[#4a007a] to-[#6a00a0] text-white overflow-hidden">
      {/* Abstract background shapes - similar to homepage */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#8a2be2] rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#a020f0] rounded-full mix-blend-screen filter blur-[200px] opacity-40 animate-pulse-slow-reverse" />
      <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-[#c780ff] rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse-medium" />

      <main className="relative z-10 container mx-auto px-4 md:px-12 lg:px-24 py-20 md:py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">About Us</h1>

        {/* Quote Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Quote className="h-14 w-14 text-purple-400 mx-auto mb-5" />
          <p className="text-2xl md:text-3xl font-semibold text-purple-100 leading-snug">
            Pioneering decentralized innovation through design and technology.
          </p>
        </div>

        {/* Our Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Our Story</h2>
            <p className="text-base text-purple-200 leading-relaxed mb-3">
              At Affidex Labs, we're a team of designers and developers passionate about the decentralized future. What
              began as a small team united by a shared belief—the next generation of the internet—has evolved into an
              international agency pushing the boundaries of what's possible.
            </p>
            <p className="text-base text-purple-200 leading-relaxed">
              Today, we partner with visionary founders and enterprises to turn bold ideas into reality—delivering
              scalable, and user-centric solutions that redefine industries.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/placeholder.svg?height=250&width=250"
              alt="Affidex Labs Logo Abstract"
              width={250}
              height={250}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Value Proposition Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
            <CheckCircle className="h-10 w-10 text-purple-400 mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1.5">Transparency</h3>
            <p className="text-purple-200 text-sm md:text-base">
              Our process ensures open communication and verifiable progress, keeping you in the loop every step.
            </p>
          </div>
          <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
            <Lock className="h-10 w-10 text-purple-400 mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1.5">Security</h3>
            <p className="text-purple-200 text-sm md:text-base">
              We prioritize robust security, secure smart contracts, and best practices protect your assets and data.
            </p>
          </div>
          <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
            <Lightbulb className="h-10 w-10 text-purple-400 mb-3" />
            <h3 className="text-xl md:text-2xl font-bold mb-1.5">Creativity</h3>
            <p className="text-purple-200 text-sm md:text-base">
              Innovative design, cutting-edge development, and out-of-the-box thinking bring your Web3 vision to life.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center mb-16">
          <div>
            <p className="text-5xl md:text-6xl font-extrabold text-purple-400">70+</p>
            <p className="text-lg text-purple-100">Projects Delivered</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-extrabold text-purple-400">35+</p>
            <p className="text-lg text-purple-100">Tokens Launched</p>
          </div>
          <div>
            <p className="text-5xl md:text-6xl font-extrabold text-purple-400">10+</p>
            <p className="text-lg text-purple-100">Blockchain Solutions Implemented</p>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-16 md:py-24 bg-black/20 backdrop-blur-sm rounded-xl mb-16">
          <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 gap-12">
              {/* Emmanuel - Founder & CEO */}
              <div className="flex flex-col items-center text-center max-w-xl mx-auto">
                <Image
                  src={teamMembers[0].image || "/placeholder.svg"}
                  alt={teamMembers[0].name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 border-4 border-purple-700 shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{teamMembers[0].name}</h3>
                <p className="text-purple-300 text-base mb-3">{teamMembers[0].title}</p>
                <p className="text-purple-200 text-sm md:text-base max-w-md mb-4">{teamMembers[0].description}</p>
                <div className="flex space-x-4">
                  <Link
                    href={teamMembers[0].linkedin}
                    aria-label="LinkedIn"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href={teamMembers[0].twitter}
                    aria-label="X (formerly Twitter)"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </Link>
                </div>
              </div>

              {/* Other Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8">
                {teamMembers.slice(1, 4).map((member, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover mb-4 border-4 border-purple-700 shadow-lg"
                    />
                    <h3 className="text-xl md:text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-300 text-sm mb-3">{member.title}</p>
                    <p className="text-purple-200 text-xs md:text-sm max-w-xs mb-4">{member.description}</p>
                    <div className="flex space-x-3">
                      <Link
                        href={member.linkedin}
                        aria-label="LinkedIn"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href={member.twitter}
                        aria-label="X (formerly Twitter)"
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* David Okoro - Cloud Architect */}
              <div className="flex flex-col items-center text-center max-w-xl mx-auto mt-8">
                <Image
                  src={teamMembers[4].image || "/placeholder.svg"}
                  alt={teamMembers[4].name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover mb-4 border-4 border-purple-700 shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{teamMembers[4].name}</h3>
                <p className="text-purple-300 text-base mb-3">{teamMembers[4].title}</p>
                <p className="text-purple-200 text-sm md:text-base max-w-md mb-4">{teamMembers[4].description}</p>
                <div className="flex space-x-4">
                  <Link
                    href={teamMembers[4].linkedin}
                    aria-label="LinkedIn"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href={teamMembers[4].twitter}
                    aria-label="X (formerly Twitter)"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (reused from homepage) */}
        <section
          className="relative z-10 py-16 md:py-24 bg-black/20 backdrop-blur-sm animate-fade-in-slide-up"
          style={{ animationDelay: "2.2s" }}
        >
          <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Loved by founders worldwide.</h2>
            <div className="relative">
              <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
                <div className="flex gap-6 animate-scroll-testimonials">
                  {testimonials.concat(testimonials).map(
                    (
                      testimonial,
                      index, // Duplicate for infinite scroll
                    ) => (
                      <div
                        key={index}
                        className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg min-w-[280px] max-w-[350px] shrink-0"
                      >
                        <Quote className="h-7 w-7 text-purple-400 mb-3" />
                        <p className="text-base text-purple-100 mb-5 text-wrap">"{testimonial.quote}"</p>
                        <div className="flex items-center justify-center gap-3">
                          <Image
                            src={testimonial.logo || "/placeholder.svg"}
                            alt={`${testimonial.author} logo`}
                            width={50}
                            height={50}
                            className="rounded-full object-contain"
                          />
                          <div>
                            <p className="font-semibold text-white text-sm text-wrap">{testimonial.author}</p>
                            <p className="text-xs text-purple-300 text-wrap">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
              {/* Navigation arrows (optional, can be implemented with state for actual carousel) */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1.5 hidden md:flex"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-1.5 hidden md:flex"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </section>
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

        @keyframes scroll-testimonials {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Scrolls half the width of duplicated content */
          }
        }

        .animate-scroll-testimonials {
          animation: scroll-testimonials 40s linear infinite;
        }
      `}</style>
    </div>
  )
}
