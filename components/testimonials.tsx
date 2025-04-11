"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "EstateEase made finding our dream home so simple. Their team was professional, responsive, and truly cared about our needs. We couldn't be happier with our new home!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Buyer",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "As a first-time homebuyer, I was nervous about the process. The EstateEase team guided me through every step, making it stress-free and enjoyable. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Investor",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "I've worked with many real estate companies, but EstateEase stands out. Their market knowledge and attention to detail helped me find the perfect investment properties.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Luxury Home Buyer",
    image: "/placeholder.svg?height=200&width=200",
    content:
      "The luxury home market requires expertise and discretion. EstateEase delivered both, along with exceptional service. They found us a property that exceeded our expectations.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">What Our Clients Say</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Don't just take our word for it. Hear from our satisfied clients about their experience with EstateEase.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[current].rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <blockquote className="mb-6 text-xl italic">"{testimonials[current].content}"</blockquote>

              <div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`h-2 w-8 rounded-full transition-all ${current === index ? "bg-primary" : "bg-muted"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-background shadow-md md:-left-12"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full border border-border bg-background shadow-md md:-right-12"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
