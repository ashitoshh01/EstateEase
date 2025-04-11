import { SearchProvider } from "@/components/search-context"
import AllProperties from "@/components/all-properties"
import SearchBar from "@/components/search-bar"

export const metadata = {
  title: "All Properties - EstateEase",
  description: "Browse our complete collection of properties available for sale and rent.",
}

export default function PropertiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Browse All Properties</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore our complete collection of properties and find your perfect match.
            </p>
          </div>

          <SearchProvider>
            <SearchBar />
            <div className="mt-12">
              <AllProperties />
            </div>
          </SearchProvider>
        </div>
      </section>
    </main>
  )
}
