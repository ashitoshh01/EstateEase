import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Bath, Bed, ChevronLeft, Heart, Home, MapPin, Maximize2, Phone, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { allProperties } from "@/data/properties"
import PropertyGallery from "@/components/property-gallery"
import SimilarProperties from "@/components/similar-properties"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const property = allProperties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    return {
      title: "Property Not Found - EstateEase",
    }
  }

  return {
    title: `${property.title} - EstateEase`,
    description: property.description,
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = allProperties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    notFound()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/properties"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Properties
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PropertyGallery property={property} />

            <div className="mt-8">
              <h1 className="text-3xl font-bold">{property.title}</h1>
              <div className="mt-2 flex items-center text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>{property.address}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                  <Bed className="h-5 w-5 text-primary" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                  <Bath className="h-5 w-5 text-primary" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                  <Maximize2 className="h-5 w-5 text-primary" />
                  <span>{property.area} ft²</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
                  <Home className="h-5 w-5 text-primary" />
                  <span>{property.type}</span>
                </div>
              </div>

              <div className="mt-8">
                <Tabs defaultValue="overview">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="amenities">Amenities</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Property Description</h2>
                      <p className="text-muted-foreground">{property.description}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Property Features</h2>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {property.features?.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="mr-2 h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="amenities" className="mt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Property Amenities</h2>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {property.amenities?.map((amenity, index) => (
                          <li key={index} className="flex items-center">
                            <Star className="mr-2 h-4 w-4 text-primary" />
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="location" className="mt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Nearby Places</h2>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {property.nearbyPlaces?.map((place, index) => (
                          <li key={index} className="flex items-center">
                            <MapPin className="mr-2 h-4 w-4 text-primary" />
                            {place}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 aspect-video overflow-hidden rounded-lg bg-muted">
                        <div className="flex h-full items-center justify-center">
                          <p className="text-muted-foreground">Map view would be displayed here</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <div className="text-3xl font-bold text-primary">{formatPrice(property.price)}</div>
                  <div className="text-sm text-muted-foreground">
                    {formatPrice(Math.round(property.price / property.area))} per sq ft
                  </div>
                </div>

                {property.agent && (
                  <div className="mb-6">
                    <h3 className="mb-4 text-lg font-semibold">Listing Agent</h3>
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 overflow-hidden rounded-full">
                        <Image
                          src={property.agent.image || "/placeholder.svg"}
                          alt={property.agent.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{property.agent.name}</div>
                        <div className="text-sm text-muted-foreground">{property.agent.phone}</div>
                        <div className="text-sm text-muted-foreground">{property.agent.email}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <Button className="w-full">Schedule a Tour</Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Agent
                  </Button>
                  <div className="flex gap-4">
                    <Button variant="outline" className="flex-1">
                      <Heart className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Similar Properties</h2>
          <SimilarProperties currentPropertyId={property.id} propertyType={property.type} />
        </div>
      </div>
    </main>
  )
}
