import Image from "next/image"
import { Award, CheckCircle, Users } from "lucide-react"

export const metadata = {
  title: "About Us - EstateEase",
  description: "Learn about our company, mission, and the team behind EstateEase.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About EstateEase</h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Your trusted partner in finding the perfect property. We make real estate simple and accessible for
                everyone.
              </p>
              <p className="text-muted-foreground">
                Founded in 2010, EstateEase has grown to become one of the most trusted real estate agencies in the
                country. Our mission is to simplify the real estate process and help our clients find their dream homes
                with ease.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="EstateEase Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Mission</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              At EstateEase, we believe that finding a home should be an exciting journey, not a stressful process. Our
              mission is to provide exceptional service, expert guidance, and innovative solutions to make real estate
              accessible and enjoyable for everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Simplicity</h3>
              <p className="text-muted-foreground">
                We simplify the complex process of buying, selling, and renting properties, making it accessible to
                everyone.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Community</h3>
              <p className="text-muted-foreground">
                We build lasting relationships with our clients and communities, fostering trust and collaboration.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every aspect of our service, ensuring the highest standards of
                professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Meet the dedicated professionals who make EstateEase the trusted choice for real estate services. Our team
              combines years of experience with a passion for helping clients find their perfect property.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Sales",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Thompson",
                role: "Lead Property Consultant",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our History</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              From our humble beginnings to becoming a leading real estate agency, our journey has been defined by our
              commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2010",
                title: "The Beginning",
                description:
                  "EstateEase was founded with a vision to simplify the real estate process and make it accessible to everyone.",
              },
              {
                year: "2015",
                title: "Expansion",
                description:
                  "We expanded our services to multiple cities and introduced innovative digital solutions for property search and management.",
              },
              {
                year: "2018",
                title: "Award-Winning Service",
                description:
                  "EstateEase was recognized for its exceptional service and innovative approach to real estate, winning multiple industry awards.",
              },
              {
                year: "2023",
                title: "Today",
                description:
                  "Today, EstateEase continues to grow and innovate, helping thousands of clients find their dream homes every year.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-start md:gap-8">
                <div className="mb-4 flex-shrink-0 md:mb-0 md:w-32">
                  <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
