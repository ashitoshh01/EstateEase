import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Blog - EstateEase",
  description: "Read our latest articles and insights about real estate, home buying, and property investment.",
}

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for First-Time Home Buyers",
    excerpt:
      "Buying your first home can be overwhelming. Here are 10 essential tips to help you navigate the process with confidence.",
    image: "/placeholder.svg?height=600&width=800",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Buying",
    tags: ["First-Time Buyers", "Home Buying", "Mortgage"],
  },
  {
    id: 2,
    title: "How to Stage Your Home for a Quick Sale",
    excerpt:
      "Learn professional staging techniques that can help you sell your home faster and potentially increase its value.",
    image: "/placeholder.svg?height=600&width=800",
    date: "July 3, 2023",
    author: "Michael Chen",
    readTime: "6 min read",
    category: "Selling",
    tags: ["Home Staging", "Selling Tips", "Real Estate"],
  },
  {
    id: 3,
    title: "Understanding Property Taxes: A Comprehensive Guide",
    excerpt:
      "Property taxes can be confusing. This guide breaks down everything you need to know about how they work and how they affect your homeownership.",
    image: "/placeholder.svg?height=600&width=800",
    date: "August 12, 2023",
    author: "Emily Rodriguez",
    readTime: "10 min read",
    category: "Finance",
    tags: ["Property Taxes", "Homeownership", "Finance"],
  },
  {
    id: 4,
    title: "The Rise of Smart Homes: Features Buyers Want",
    excerpt:
      "Smart home technology is becoming increasingly important to buyers. Discover which features are most in-demand and how they can increase your home's value.",
    image: "/placeholder.svg?height=600&width=800",
    date: "September 5, 2023",
    author: "David Thompson",
    readTime: "7 min read",
    category: "Technology",
    tags: ["Smart Homes", "Technology", "Home Value"],
  },
  {
    id: 5,
    title: "Investing in Rental Properties: A Beginner's Guide",
    excerpt:
      "Interested in real estate investment? This guide covers the basics of buying and managing rental properties for long-term wealth building.",
    image: "/placeholder.svg?height=600&width=800",
    date: "October 20, 2023",
    author: "Jessica Williams",
    readTime: "12 min read",
    category: "Investment",
    tags: ["Real Estate Investment", "Rental Properties", "Passive Income"],
  },
  {
    id: 6,
    title: "2023 Real Estate Market Trends: What to Expect",
    excerpt:
      "An analysis of current market conditions and predictions for the real estate market in the coming year. What buyers and sellers should know.",
    image: "/placeholder.svg?height=600&width=800",
    date: "November 8, 2023",
    author: "Robert Garcia",
    readTime: "9 min read",
    category: "Market Analysis",
    tags: ["Market Trends", "Real Estate Market", "Housing Forecast"],
  },
]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Blog</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Stay informed with the latest insights, tips, and trends in real estate. Our experts share valuable
              information to help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute left-4 top-4">
                        <Badge className="bg-primary">{post.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold">
                      <Link href={`/blog/${post.id}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted">
                        <User className="h-8 w-8 p-1.5 text-muted-foreground" />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-muted/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="mb-6 text-muted-foreground">
              Get the latest real estate insights, market trends, and exclusive content delivered straight to your
              inbox.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:flex-1"
              />
              <Button className="w-full sm:w-auto">Subscribe</Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
