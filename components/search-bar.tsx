"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { useSearch, type PropertyType } from "@/components/search-context"

export default function SearchBar() {
  const { filters, setFilters, setIsSearchSubmitted } = useSearch()
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState<PropertyType>("Any")
  const [bedrooms, setBedroomsValue] = useState("any")
  const [bathrooms, setBathroomsValue] = useState("any")
  const [priceRange, setPriceRange] = useState([500000])
  const [activeTab, setActiveTab] = useState("buy")

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const handleSearch = () => {
    setFilters({
      location,
      propertyType,
      bedrooms,
      bathrooms,
      priceRange: priceRange[0],
      isSearching: true,
    })
    setIsSearchSubmitted(true)

    // Scroll to the featured properties section
    const featuredSection = document.getElementById("featured-properties")
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className="mx-auto max-w-5xl rounded-xl border bg-card p-1 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Tabs defaultValue="buy" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input
                placeholder="City, neighborhood, or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <Select defaultValue="Any" onValueChange={(value) => setPropertyType(value as PropertyType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Loft">Loft</SelectItem>
                  <SelectItem value="Cottage">Cottage</SelectItem>
                  <SelectItem value="Estate">Estate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bedrooms</label>
              <Select value={bedrooms} onValueChange={setBedroomsValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bathrooms</label>
              <Select value={bathrooms} onValueChange={setBathroomsValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Price Range</label>
              <span className="text-sm font-medium">{formatPrice(priceRange[0])}</span>
            </div>
            <Slider
              defaultValue={[500000]}
              max={5000000}
              step={50000}
              value={priceRange}
              onValueChange={setPriceRange}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$5,000,000+</span>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full gap-2" onClick={handleSearch}>
              <Search className="h-4 w-4" />
              Search Properties
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="rent" className="p-4">
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Location</label>
              <Input
                placeholder="City, neighborhood, or address"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <Select defaultValue="Any" onValueChange={(value) => setPropertyType(value as PropertyType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any">Any</SelectItem>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Loft">Loft</SelectItem>
                  <SelectItem value="Cottage">Cottage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bedrooms</label>
              <Select value={bedrooms} onValueChange={setBedroomsValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Bathrooms</label>
              <Select value={bathrooms} onValueChange={setBathroomsValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Monthly Rent</label>
              <span className="text-sm font-medium">{formatPrice(priceRange[0] / 200)}/month</span>
            </div>
            <Slider
              defaultValue={[2500]}
              max={25000}
              step={100}
              value={[priceRange[0] / 200]}
              onValueChange={(value) => setPriceRange([value[0] * 200])}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>$0</span>
              <span>$25,000+/month</span>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full gap-2" onClick={handleSearch}>
              <Search className="h-4 w-4" />
              Search Rentals
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}
