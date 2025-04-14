"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Find Your Dream Home",
      description: "Discover the perfect property that fits your lifestyle and budget.",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Premium Properties",
      description: "Explore our exclusive collection of luxury homes and estates.",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Expert Guidance",
      description: "Our experienced agents will help you every step of the way.",
    },
  ]

  useEffect(() => {
    // Auto-change slides every 2 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 2000)

    // Clear interval on component unmount
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 1.1,
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8 },
          }}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {slides[currentSlide].title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="mb-8 max-w-2xl text-lg md:text-xl">{slides[currentSlide].description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/properties">Browse Properties</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white/10"
          >
            <Link href="/contact">Contact an Agent</Link>
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${currentSlide === index ? "bg-white" : "bg-white/40"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
