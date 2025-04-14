"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useSearch, type PropertyType } from "@/components/search-context"
import { Badge } from "@/components/ui/badge"

export default function SearchProperties() {
  const { filters, setFilters, setIsSearchSubmitted } = useSearch()
  const [location, setLocation] = useState(filters.location || "")
  const [propertyType, setPropertyType] = useState<PropertyType>(filters.propertyType || "Any")
  const [bedrooms, setBedroomsValue] = useState(filters.bedrooms || "any")
  const [bathrooms, setBathroomsValue] = useState(filters.bathrooms || "any")
  const [priceRange, setPriceRange] = useState([filters.priceRange || 500000])
  const [minArea, setMinArea] = useState<string>("")
  const [maxArea, setMaxArea] = useState<string>("")
  const [keywords, setKeywords] = useState<string>("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  useEffect(() => {
    // Update active filters based on current selections
    const newActiveFilters: string[] = []

    if (location) newActiveFilters.push(`Location: ${location}`)
    if (propertyType !== "Any") newActiveFilters.push(`Type: ${propertyType}`)
    if (bedrooms !== "any") newActiveFilters.push(`${bedrooms}+ Beds`)
    if (bathrooms !== "any") newActiveFilters.push(`${bathrooms}+ Baths`)
    if (priceRange[0] !== 500000) newActiveFilters.push(`Max: ${formatPrice(priceRange[0])}`)
    if (minArea) newActiveFilters.push(`Min Area: ${minArea} ft²`)
    if (maxArea) newActiveFilters.push(`Max Area: ${maxArea} ft²`)
    if (keywords) newActiveFilters.push(`Keywords: ${keywords}`)

    setActiveFilters(newActiveFilters)
  }, [location, propertyType, bedrooms, bathrooms, priceRange, minArea, maxArea, keywords])

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
  }

  const clearFilters = () => {
    setLocation("")
    setPropertyType("Any")
    setBedroomsValue("any")
    setBathroomsValue("any")
    setPriceRange([500000])
    setMinArea("")
    setMaxArea("")
    setKeywords("")

    setFilters({
      location: "",
      propertyType: "Any",
      bedrooms: "any",
      bathrooms: "any",
      priceRange: 500000,
      isSearching: false,
    })
  }

  const removeFilter = (filter: string) => {
    if (filter.startsWith("Location:")) setLocation("")
    else if (filter.startsWith("Type:")) setPropertyType("Any")
    else if (filter.includes("Beds")) setBedroomsValue("any")
    else if (filter.includes("Baths")) setBathroomsValue("any")
    else if (filter.startsWith("Max:")) setPriceRange([500000])
    else if (filter.startsWith("Min Area:")) setMinArea("")
    else if (filter.startsWith("Max Area:")) setMaxArea("")
    else if (filter.startsWith("Keywords:")) setKeywords("")
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by location, property name, or description..."
              className="pl-10"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Advanced Filters</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Type</label>
                  <Select value={propertyType} onValueChange={(value) => setPropertyType(value as PropertyType)}>
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
                      <SelectItem value="Cabin">Cabin</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Brownstone">Brownstone</SelectItem>
                      <SelectItem value="Ranch">Ranch</SelectItem>
                      <SelectItem value="Bungalow">Bungalow</SelectItem>
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

                <div className="space-y-2">
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

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Min Area (ft²)</label>
                    <Input
                      type="number"
                      placeholder="Min"
                      value={minArea}
                      onChange={(e) => setMinArea(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Max Area (ft²)</label>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={maxArea}
                      onChange={(e) => setMaxArea(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Keywords</label>
                  <Input
                    placeholder="e.g. pool, garden, renovated"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Search for specific features or amenities in property descriptions
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1" onClick={handleSearch}>
                    Apply Filters
                  </Button>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <motion.div
          className="mt-4 flex flex-wrap gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="gap-1 pl-2">
              {filter}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 rounded-full p-0 hover:bg-muted"
                onClick={() => removeFilter(filter)}
              >
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {filter} filter</span>
              </Button>
            </Badge>
          ))}
          <Button variant="ghost" size="sm" className="h-6" onClick={clearFilters}>
            Clear all
          </Button>
        </motion.div>
      )}
    </div>
  )
}
