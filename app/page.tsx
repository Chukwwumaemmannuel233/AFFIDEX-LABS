"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Lock,
  Lightbulb,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { ContactBookingModal } from "@/components/contact-booking-modal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<"contact" | "book">("book");
  const [selectedSuccessStory, setSelectedSuccessStory] = useState("PAAL AI");

  const openModal = (tab: "contact" | "book") => {
    setInitialTab(tab);
    setIsModalOpen(true);
  };

  const services = [
    "Smart Contracts",
    "Fullstack Websites",
    "Token Creation & Deploy",
    "Telegram Bots",
    "UI/UX Design",
    "DApp Development",
    "2D/3D Animation",
    "Web3 Consulting",
    "Blockchain Integration",
    "NFT Marketplaces",
  ];

  const featuredProjects = [
    {
      title: "PAAL AI",
      description: "Create Advanced AI Applications using Paal.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "Development"],
    },
    {
      title: "MicroGPT",
      description:
        "Optimize and monetize your coding experience with a new AI Partner.",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "Bot Development", "Smart Contracts"],
    },
    {
      title: "Adrise AI",
      description: "First AI to replace marketing agencies",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["DApp Development", "Smart Contracts"],
    },
    {
      title: "Vault AI",
      description: "AI super app built for Crypto-First solutions",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Web3 Design", "DApp Development", "Smart Contracts"],
    },
  ];

  const brands = [
    { name: "Paal AI", logo: "/placeholder.svg?height=40&width=100" },
    { name: "MicroGPT", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Adrise AI", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Vault AI", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Myra AI", logo: "/placeholder.svg?height=40&width=100" },
    { name: "Oxscans", logo: "/placeholder.svg?height=40&width=100" },
  ];

  const testimonials = [
    {
      quote: "Your work is awesome. We'll keep using your services",
      author: "David",
      title: "Founder, Paal AI",
      logo: "/placeholder.svg?height=30&width=80",
    },
    {
      quote:
        "Affidex Labs delivered beyond our expectations. Truly world-class!",
      author: "Sarah J.",
      title: "CEO, Blockchain Startup",
      logo: "/placeholder.svg?height=30&width=80",
    },
    {
      quote:
        "The team's expertise in Web3 development is unmatched. Highly recommend.",
      author: "Michael K.",
      title: "CTO, DeFi Protocol",
      logo: "/placeholder.svg?height=30&width=80",
    },
  ];

  const faqs = [
    {
      question: "What kind of Web3 projects do you specialize in?",
      answer:
        "We specialize in a wide range of Web3 projects including dApp development, smart contract auditing and deployment, NFT marketplaces, blockchain integrations, and custom Web3 solutions tailored to your needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on complexity and scope. A typical dApp or smart contract project can range from 4 weeks to several months. We provide a detailed timeline after the initial discovery call.",
    },
    {
      question: "Do you offer ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your product remains secure, up-to-date, and performs optimally. This includes bug fixes, security updates, and feature enhancements.",
    },
    {
      question: "What is your development process?",
      answer:
        "Our process typically involves discovery and planning, design and prototyping, agile development sprints, rigorous testing, deployment, and ongoing support. We maintain transparent communication throughout every stage.",
    },
  ];

  const successStoriesData = {
    "PAAL AI": {
      title: "PAAL AI",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Create Advanced AI Applications using Paal. There are no limits.",
      features: [
        { text: "V2 Website", checked: true },
        { text: "V3 Website", checked: true },
        {
          text: "Ecosystem Dashboard for AI Agents live tracking, real-time market data, PAAL integrations, incubations, etc",
          checked: true,
        },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "JS" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "TS" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "Ethereum" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "BSC" },
      ],
      tags: ["Web3 Design", "Development"],
    },
    MicroGPT: {
      title: "MicroGPT",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Optimize and monetize your coding experience with a new AI Partner.",
      features: [
        { text: "AI-powered code generation", checked: true },
        { text: "Secure smart contract integration", checked: true },
        { text: "Scalable backend infrastructure", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "Python" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "Solidity" },
      ],
      tags: ["Web3 Design", "Bot Development", "Smart Contracts"],
    },
    "Adrise AI": {
      title: "Adrise AI",
      image: "/placeholder.svg?height=400&width=600",
      description: "First AI to replace marketing agencies.",
      features: [
        { text: "Automated marketing campaigns", checked: true },
        { text: "AI-driven content creation", checked: true },
        { text: "Decentralized ad network", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "React" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "Node.js" },
      ],
      tags: ["DApp Development", "Smart Contracts", "AI"],
    },
    Oxscans: {
      title: "Oxscans",
      image: "/placeholder.svg?height=400&width=600",
      description: "Advanced blockchain explorer for multiple chains.",
      features: [
        { text: "Multi-chain support", checked: true },
        { text: "Real-time transaction tracking", checked: true },
        { text: "Comprehensive analytics dashboard", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "Go" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "PostgreSQL" },
      ],
      tags: ["Development", "Smart Contracts"],
    },
    "Vault AI": {
      title: "Vault AI",
      image: "/placeholder.svg?height=400&width=600",
      description: "AI super app built for Crypto-First solutions.",
      features: [
        { text: "Integrated crypto wallet", checked: true },
        { text: "AI-powered trading insights", checked: true },
        { text: "Decentralized asset management", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "Vue" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "Solana" },
      ],
      tags: ["Web3 Design", "DApp Development", "Smart Contracts"],
    },
    "Myra AI": {
      title: "Myra AI",
      image: "/placeholder.svg?height=400&width=600",
      description: "Next-gen AI for decentralized finance.",
      features: [
        { text: "DeFi protocol integration", checked: true },
        { text: "AI-driven yield optimization", checked: true },
        { text: "Cross-chain compatibility", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "Rust" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "Polkadot" },
      ],
      tags: ["Web3 Design", "DApp Development", "Smart Contracts"],
    },
    "KOL AI": {
      title: "Project One",
      image: "/placeholder.svg?height=200&width=300", // Changed from 400x600
      description: "AI-powered tools for influencer marketing in Web3.",
      features: [
        { text: "Influencer discovery platform", checked: true },
        { text: "Campaign management tools", checked: true },
        { text: "Performance analytics", checked: true },
      ],
      techStack: [
        { icon: "/placeholder.svg?height=24&width=24", alt: "Next.js" },
        { icon: "/placeholder.svg?height=24&width=24", alt: "GraphQL" },
      ],
      tags: ["Web3 Design", "Bot Development"],
    },
  };

  const currentStory =
    successStoriesData[selectedSuccessStory as keyof typeof successStoriesData];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#2a004a] via-[#4a007a] to-[#6a00a0] text-white overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#8a2be2] rounded-full mix-blend-screen filter blur-[150px] opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-[#a020f0] rounded-full mix-blend-screen filter blur-[200px] opacity-40 animate-pulse-slow-reverse" />
      <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-[#c780ff] rounded-full mix-blend-screen filter blur-[100px] opacity-60 animate-pulse-medium" />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-36 lg:py-48 animate-fade-in-slide-up">
        <div
          className="mb-5 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs md:text-sm font-medium text-white backdrop-blur-sm">
            Trusted by leading Web3 companies
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </span>
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight mb-5 animate-fade-in-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          World-class Web3 Design & Development trusted by visionary founders.
        </h1>
        <p
          className="text-base md:text-lg max-w-2xl text-purple-200 mb-8 animate-fade-in-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          We specialize in transforming visionary Web3 ideas into fully
          functional, secure, and awesome products.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-3 animate-fade-in-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button
            onClick={() => openModal("book")}
            className="px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all shadow-lg"
          >
            Book a call now
          </Button>
          <Button
            onClick={() => openModal("contact")}
            variant="outline"
            className="px-6 py-3 text-sm font-semibold rounded-full border-2 border-purple-500 bg-transparent text-white hover:bg-white/10 transition-colors"
          >
            Fill form (alternative)
          </Button>
        </div>
      </main>

      {/* Services/Tags Section */}
      <section
        id="services-section"
        className="relative z-10 py-6 md:py-8 lg:py-10 bg-black/30 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "1s" }}
      >
        <div className="overflow-x-hidden px-4 md:px-12 lg:px-24 pb-3">
          <div className="flex gap-3 w-max animate-scroll-left">
            {[...services, ...services].map((service, index) => (
              <Button
                key={index}
                variant="outline"
                className="rounded-full border border-purple-500 text-white px-4 py-2 text-xs md:text-sm hover:bg-white/10 transition-colors shrink-0 bg-transparent"
              >
                {service}
              </Button>
            ))}
            <Link href="/services" className="shrink-0">
              <Button
                variant="outline"
                className="rounded-full border border-purple-500 text-white px-4 py-2 text-xs md:text-sm hover:bg-white/10 transition-colors flex items-center gap-1.5 bg-transparent"
              >
                View all services <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Type Section */}
      <section
        className="relative z-10 py-16 md:py-24 bg-black/20 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              You're a new founder
            </h2>
            <ul className="space-y-2 text-purple-200 text-sm md:text-base">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Need to launch your first Web3 product?
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Want to build a strong foundation?
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Need to get investor's attention?
              </li>
            </ul>
          </div>
          <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              You're an existing founder
            </h2>
            <ul className="space-y-2 text-purple-200 text-sm md:text-base">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Need to scale your existing product?
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Want to create a token or smart contract?
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="h-4 w-4 text-purple-400 shrink-0 mt-1" />{" "}
                Looking for a reliable development partner?
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Full Scale Agency Section (Detailed Stuffs We Offer) */}
      <section
        className="relative z-10 py-16 md:py-24 bg-black/20 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Affidex Labs is a full-scale Web3 product & deployment agency.
          </h2>
          <p className="text-base md:text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            We provide end-to-end solutions for your Web3 venture.
          </p>
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-4">
            <div className="flex gap-6 animate-scroll-logos">
              {[
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "Web3 Design & UI/UX",
                  description:
                    "Crafting intuitive and engaging decentralized user experiences.",
                },
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "DApp Development",
                  description:
                    "Building robust and scalable decentralized applications.",
                },
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "Smart Contract Development & Auditing",
                  description:
                    "Secure and efficient smart contracts with rigorous audits.",
                },
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "Fullstack Websites & Backend Solutions",
                  description:
                    "Comprehensive web solutions integrated with blockchain.",
                },
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "2D/3D Animation & Metaverse Experiences",
                  description:
                    "Immersive visuals and interactive metaverse environments.",
                },
                {
                  icon: (
                    <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                  ),
                  title: "Token Creation & Deployment",
                  description:
                    "Expert guidance for launching your custom tokens.",
                },
              ]
                .concat([
                  // Duplicate for infinite scroll effect
                  {
                    icon: (
                      <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                    ),
                    title: "Web3 Design & UI/UX",
                    description:
                      "Crafting intuitive and engaging decentralized user experiences.",
                  },
                  {
                    icon: (
                      <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                    ),
                    title: "DApp Development",
                    description:
                      "Building robust and scalable decentralized applications.",
                  },
                  {
                    icon: (
                      <CheckCircle className="h-8 w-8 text-purple-400 mb-2" />
                    ),
                    title: "Smart Contract Development & Auditing",
                    description:
                      "Secure and efficient smart contracts with rigorous audits.",
                  },
                ])
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg text-center min-w-[280px] max-w-[350px] shrink-0"
                  >
                    {item.icon}
                    <h3 className="text-lg font-bold mb-1.5 text-wrap">
                      {item.title}
                    </h3>
                    <p className="text-purple-200 text-sm text-wrap">
                      {item.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brands We've Worked With */}
      <section
        className="relative z-10 py-12 md:py-16 bg-black/30 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "1.6s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Brands we've worked with
          </h2>
          <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
            <div className="flex items-center justify-center gap-8 md:gap-10 animate-scroll-logos">
              {brands.concat(brands).map(
                (
                  brand,
                  index // Duplicate for infinite scroll effect
                ) => (
                  <Image
                    key={index}
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={100}
                    height={40}
                    className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Choose Us Section */}
      <section
        className="relative z-10 py-16 md:py-24 bg-black/20 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Why founders choose us!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
              <CheckCircle className="h-10 w-10 text-purple-400 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold mb-1.5">
                Transparency
              </h3>
              <p className="text-purple-200 text-sm md:text-base">
                Our process ensures open communication and verifiable progress,
                keeping you in the loop every step.
              </p>
            </div>
            <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
              <Lock className="h-10 w-10 text-purple-400 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold mb-1.5">Security</h3>
              <p className="text-purple-200 text-sm md:text-base">
                We prioritize robust security, secure smart contracts, and best
                practices protect your assets and data.
              </p>
            </div>
            <div className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg flex flex-col items-center text-center">
              <Lightbulb className="h-10 w-10 text-purple-400 mb-3" />
              <h3 className="text-xl md:text-2xl font-bold mb-1.5">
                Super-fast delivery
              </h3>
              <p className="text-purple-200 text-sm md:text-base">
                Agile development and cutting-edge tools ensure rapid delivery,
                bringing your Web3 vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Success Stories Section (New Design) */}
      <section
        className="relative z-10 py-16 md:py-24 bg-black/30 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "2s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <p className="text-purple-300 text-sm mb-2">
            We don't just build products, we architect ecosystems.
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Our Success Stories.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.keys(successStoriesData).map((projectName) => (
              <Button
                key={projectName}
                variant={
                  selectedSuccessStory === projectName ? "default" : "outline"
                }
                onClick={() => setSelectedSuccessStory(projectName)}
                className={cn(
                  "px-4 py-2 rounded-full font-semibold text-sm",
                  selectedSuccessStory === projectName
                    ? "bg-gradient-to-r from-[#8a2be2] to-[#a020f0] text-white shadow-lg"
                    : "border border-purple-500 text-white bg-transparent hover:bg-white/10 transition-colors"
                )}
              >
                {projectName}
              </Button>
            ))}
          </div>

          {currentStory && (
            <div className="bg-[#1a002a] rounded-xl border border-purple-800 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 text-left">
              <div className="flex flex-col justify-between">
                <Image
                  src={currentStory.image || "/placeholder.svg"}
                  alt={currentStory.title}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover mb-4"
                />
                <p className="text-purple-200 text-sm md:text-base mb-4">
                  {currentStory.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentStory.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-full border border-purple-600 text-purple-300 bg-purple-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentStory.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {currentStory.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-purple-100 text-base"
                    >
                      {feature.checked && (
                        <CheckCircle className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <h4 className="text-lg font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-3">
                  {currentStory.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-purple-900/30 rounded-full px-3 py-1.5"
                    >
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.alt}
                        width={20}
                        height={20}
                        className="h-5 w-5"
                      />
                      <span className="text-sm text-purple-200">
                        {tech.alt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative z-10 py-16 md:py-24 bg-black/20 backdrop-blur-sm animate-fade-in-slide-up"
        style={{ animationDelay: "2.2s" }}
      >
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Loved by founders worldwide.
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
              <div className="flex gap-6 animate-scroll-testimonials">
                {testimonials.concat(testimonials).map(
                  (
                    testimonial,
                    index // Duplicate for infinite scroll
                  ) => (
                    <div
                      key={index}
                      className="bg-[#1a002a] p-6 rounded-xl border border-purple-800 shadow-lg min-w-[280px] max-w-[350px] shrink-0"
                    >
                      <Quote className="h-7 w-7 text-purple-400 mb-3" />
                      <p className="text-base text-purple-100 mb-5 text-wrap">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <Image
                          src={testimonial.logo || "/placeholder.svg"}
                          alt={`${testimonial.author} logo`}
                          width={50}
                          height={50}
                          className="rounded-full object-contain"
                        />
                        <div>
                          <p className="font-semibold text-white text-sm text-wrap">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-purple-300 text-wrap">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
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

      {/* FAQ Section */}
      <section className="relative z-10 py-16 md:py-24 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-12 lg:px-24 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Your Questions Answered.
          </h2>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto text-left"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true, amount: 0.3 }} // triggers when ~30% visible
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-b border-purple-800"
                >
                  <AccordionTrigger className="text-base md:text-lg text-white hover:no-underline hover:text-purple-300 transition-colors py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-200 text-sm pb-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section (New Design) */}
      <section
        className="relative z-10 py-20 md:py-32 bg-gradient-to-br from-[#2a004a] via-[#4a007a] to-[#6a00a0] text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url(/placeholder.svg?height=800&width=1600&query=abstract purple glowing background with circles)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight mx-auto mb-8 animate-fade-in-slide-up">
            Ready to build that awesome product?
          </h2>
          <Button
            onClick={() => openModal("book")}
            className="px-10 py-6 text-xl font-semibold rounded-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all shadow-lg animate-fade-in-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Book a call <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <ContactBookingModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        initialTab={initialTab}
      />
    </div>
  );
}
