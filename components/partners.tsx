"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Partners() {
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Partner 2", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Partner 3", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Partner 4", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Partner 5", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Partner 6", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold">Our Trusted Partners</h2>
          <p className="text-muted-foreground">
            We work with the best in the industry to provide you with exceptional service.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-16 w-32 grayscale transition-all duration-300 hover:grayscale-0">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
