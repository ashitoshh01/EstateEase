import Link from "next/link"
import { ArrowRight } from "lucide-react"
import FeaturedProperties from "@/components/featured-properties"
import HeroSection from "@/components/hero-section"
import Testimonials from "@/components/testimonials"
import Partners from "@/components/partners"
import SearchBar from "@/components/search-bar"
import { SearchProvider } from "@/components/search-context"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <SearchProvider>
        <section className="container mx-auto px-4 py-12 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Find Your Dream Home</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Search through thousands of listings to find the perfect home for you and your family.
            </p>
          </div>

          <SearchBar />
        </section>

        <section className="bg-muted py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Featured Properties</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Explore our handpicked selection of properties that might be perfect for you.
              </p>
            </div>

            <FeaturedProperties />

            <div className="mt-12 text-center">
              <Link
                href="/properties"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                View All Properties
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </SearchProvider>

      <Testimonials />

      <Partners />

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Ready to Find Your Dream Home?</h2>
          <p className="mx-auto mb-8 max-w-2xl opacity-90">
            Let us help you find the perfect property that meets all your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-background px-6 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-background/90"
            >
              Contact an Agent
            </Link>
            <Link
              href="/properties"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground bg-transparent px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground/10"
            >
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
