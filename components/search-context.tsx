"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"

export type PropertyType = "Any" | "Apartment" | "Villa" | "House" | "Loft" | "Cottage" | "Estate"

export interface SearchFilters {
  location: string
  propertyType: PropertyType
  bedrooms: string
  bathrooms: string
  priceRange: number
  isSearching: boolean
}

interface SearchContextType {
  filters: SearchFilters
  setFilters: React.Dispatch<React.SetStateAction<SearchFilters>>
  isSearchSubmitted: boolean
  setIsSearchSubmitted: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultFilters: SearchFilters = {
  location: "",
  propertyType: "Any",
  bedrooms: "any",
  bathrooms: "any",
  priceRange: 500000,
  isSearching: false,
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(defaultFilters)
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false)

  return (
    <SearchContext.Provider value={{ filters, setFilters, isSearchSubmitted, setIsSearchSubmitted }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider")
  }
  return context
}
