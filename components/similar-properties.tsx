"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Heart, MapPin, Maximize2 } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { allProperties } from "@/data/properties"
import Img from "../image/img9.jpg"


export default function SimilarProperties({
  currentPropertyId,
  propertyType,
}: {
  currentPropertyId: number
  propertyType: string
}) {
  const [favorites, setFavorites] = useState<number[]>([])

  // Filter similar properties (same type, excluding current property)
  const similarProperties = allProperties
    .filter((p) => p.id !== currentPropertyId && p.type === propertyType)
    .slice(0, 3)

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {similarProperties.map((property) => (
        <Card key={property.id} className="group overflow-hidden transition-all hover:shadow-lg">
          <CardHeader className="p-0">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image || Img}
                  alt={property.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute left-4 top-4 flex gap-2">
                <Badge className="bg-primary">{property.type}</Badge>
                {property.featured && <Badge className="bg-amber-500">Featured</Badge>}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 h-8 w-8 rounded-full bg-white/80 text-rose-500 backdrop-blur-sm transition-all hover:bg-white"
                onClick={() => toggleFavorite(property.id)}
              >
                <Heart className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-current" : ""}`} />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/70 text-lg font-bold backdrop-blur-sm">{formatPrice(property.price)}</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-2">
              <h3 className="line-clamp-1 text-xl font-bold">{property.title}</h3>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="line-clamp-1 text-sm">{property.address}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t p-4">
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bedrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.bathrooms}</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{property.area} ft²</span>
              </div>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href={`/properties/${property.id}`}>View</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
