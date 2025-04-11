"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import type { Property } from "@/data/properties"
import Img3 from "../image/img3.jpg"
import Img4 from "../image/img4.jpg"
import Img5 from "../image/img5.jpg"
import Img6 from "../image/img6.jpg"


export default function PropertyGallery({ property }: { property: Property }) {
  // Generate multiple images for the gallery
  const images = [
    property.image,
    Img3,
    Img4,
    Img5,
    Img6
  ]

  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Image src={images[currentImage] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
            >
              <Expand className="h-5 w-5" />
              <span className="sr-only">View full size</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-[16/9]">
              <Image
                src={images[currentImage] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-[4/3] overflow-hidden rounded-md ${
              index === currentImage ? "ring-2 ring-primary ring-offset-2" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${property.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
