"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Bath, Bed, Heart, MapPin, Maximize2, Search } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useSearch } from "@/components/search-context"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { allProperties } from "@/data/properties"

export default function FeaturedProperties() {
  const { filters, isSearchSubmitted, setIsSearchSubmitted } = useSearch()
  const [favorites, setFavorites] = useState<number[]>([])
  const [filteredProperties, setFilteredProperties] = useState(allProperties.slice(0, 6))
  const [isFiltering, setIsFiltering] = useState(false)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if (isSearchSubmitted) {
      setIsFiltering(true)

      // Simulate a brief loading state for animation
      setTimeout(() => {
        const filtered = allProperties
          .filter((property) => {
            // Filter by location (case insensitive)
            const locationMatch =
              !filters.location ||
              property.address.toLowerCase().includes(filters.location.toLowerCase()) ||
              property.title.toLowerCase().includes(filters.location.toLowerCase()) ||
              property.description.toLowerCase().includes(filters.location.toLowerCase())

            // Filter by property type
            const typeMatch = filters.propertyType === "Any" || property.type === filters.propertyType

            // Filter by bedrooms
            const bedroomsMatch = filters.bedrooms === "any" || property.bedrooms >= Number.parseInt(filters.bedrooms)

            // Filter by bathrooms
            const bathroomsMatch =
              filters.bathrooms === "any" || property.bathrooms >= Number.parseInt(filters.bathrooms)

            // Filter by price
            const priceMatch = property.price <= filters.priceRange

            return locationMatch && typeMatch && bedroomsMatch && bathroomsMatch && priceMatch
          })
          .slice(0, 6) // Limit to 6 properties for featured section

        setFilteredProperties(filtered)
        setNoResults(filtered.length === 0)
        setIsFiltering(false)
        setIsSearchSubmitted(false)
      }, 1000)
    }
  }, [filters, isSearchSubmitted, setIsSearchSubmitted])

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div id="featured-properties">
      {isFiltering && (
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg"
          >
            <Search className="h-5 w-5 animate-pulse text-primary" />
            <p className="text-primary font-medium">Searching for properties...</p>
          </motion.div>
        </div>
      )}

      {noResults && !isFiltering && (
        <Alert className="mb-8 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
          <Search className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <AlertTitle>No properties found</AlertTitle>
          <AlertDescription>
            We couldn't find any properties matching your search criteria. Try adjusting your filters.
          </AlertDescription>
        </Alert>
      )}

      <AnimatePresence mode="wait">
        {!isFiltering && (
          <motion.div
            key="property-grid"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                variants={item}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={property.image || "/placeholder.svg"}
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
                        <Badge className="bg-black/70 text-lg font-bold backdrop-blur-sm">
                          {formatPrice(property.price)}
                        </Badge>
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
                      <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>
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
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
