import Link from "next/link"
import {
  ArrowLeft,
  Shield,
  Eye,
  Lock,
  Database,
  Clock,
  FileCheck,
  Scale,
  AlertCircle,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Privacy Policy - EstateEase",
  description: "Learn about how we collect, use, and protect your personal information at EstateEase.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-primary/10 p-3">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-4 text-3xl font-bold md:text-4xl">Privacy Policy</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              At EstateEase, we're committed to protecting your privacy and ensuring your data is secure. This policy
              explains how we collect, use, and safeguard your information.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Last updated: April 12, 2023</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="mx-auto max-w-4xl">
            {/* Mobile Tabs - Scrollable horizontal list */}
            <div className="md:hidden overflow-x-auto pb-4">
              <TabsList className="inline-flex w-auto min-w-full">
                <TabsTrigger value="overview" className="px-4 py-2 whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>Overview</span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="collection" className="px-4 py-2 whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
                    <span>Collection</span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="usage" className="px-4 py-2 whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <FileCheck className="h-4 w-4" />
                    <span>Usage</span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="rights" className="px-4 py-2 whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <Scale className="h-4 w-4" />
                    <span>Rights</span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="contact" className="px-4 py-2 whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    <HelpCircle className="h-4 w-4" />
                    <span>Contact</span>
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Desktop Tabs */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="collection">Data Collection</TabsTrigger>
                <TabsTrigger value="usage">Data Usage</TabsTrigger>
                <TabsTrigger value="rights">Your Rights</TabsTrigger>
                <TabsTrigger value="contact">Contact Us</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="mt-8 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    Introduction
                  </CardTitle>
                  <CardDescription>Our approach to privacy and data protection</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="break-words hyphens-auto leading-relaxed">
                    At EstateEase, we respect your privacy and are committed to protecting your personal data. This
                    privacy policy will inform you about how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p className="break-words hyphens-auto leading-relaxed">
                    Our privacy policy is designed to provide clarity about the information we collect, and how we use
                    and protect it. We understand that your personal information is important, and we take our
                    responsibility to protect it seriously.
                  </p>
                  <p className="break-words hyphens-auto leading-relaxed">
                    This policy applies to all information collected through our website, mobile applications, and any
                    related services, sales, marketing, or events (collectively, our "Services").
                  </p>
                </CardContent>
              </Card>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      Security Commitment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="break-words hyphens-auto leading-relaxed">
                      We implement appropriate technical and organizational measures to ensure a level of security
                      appropriate to the risk, including encryption of personal data and regular security assessments of
                      all service providers.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-primary" />
                      Policy Updates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="break-words hyphens-auto leading-relaxed">
                      We may update this privacy policy from time to time. The updated version will be indicated by an
                      updated "Last updated" date and the updated version will be effective as soon as it is accessible.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="collection" className="mt-8 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    The Data We Collect About You
                  </CardTitle>
                  <CardDescription>Types of personal information we may collect and process</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="break-words hyphens-auto leading-relaxed">
                    Personal data, or personal information, means any information about an individual from which that
                    person can be identified. It does not include data where the identity has been removed (anonymous
                    data).
                  </p>

                  <div className="rounded-lg border p-5">
                    <h3 className="mb-4 text-lg font-medium">We may collect and process the following categories:</h3>
                    <ul className="ml-6 list-disc space-y-4">
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Identity Data</strong>: includes first name, last name, username or similar identifier,
                        title.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Contact Data</strong>: includes billing address, delivery address, email address and
                        telephone numbers.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Financial Data</strong>: includes bank account and payment card details.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Transaction Data</strong>: includes details about payments to and from you and other
                        details of products and services you have purchased from us.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Technical Data</strong>: includes internet protocol (IP) address, your login data,
                        browser type and version, time zone setting and location, browser plug-in types and versions,
                        operating system and platform, and other technology on the devices you use to access this
                        website.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Profile Data</strong>: includes your username and password, purchases or orders made by
                        you, your interests, preferences, feedback and survey responses.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Usage Data</strong>: includes information about how you use our website, products and
                        services.
                      </li>
                      <li className="break-words hyphens-auto leading-relaxed">
                        <strong>Marketing and Communications Data</strong>: includes your preferences in receiving
                        marketing from us and our third parties and your communication preferences.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage" className="mt-8 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    How We Use Your Personal Data
                  </CardTitle>
                  <CardDescription>Purposes for which we will use your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="break-words hyphens-auto leading-relaxed">
                    We will only use your personal data when the law allows us to. Most commonly, we will use your
                    personal data in the following circumstances:
                  </p>

                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-lg border p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <FileCheck className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Contract Performance</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Where we need to perform the contract we are about to enter into or have entered into with you.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Scale className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Legitimate Interests</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Where it is necessary for our legitimate interests (or those of a third party) and your
                        interests and fundamental rights do not override those interests.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Lock className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Legal Obligation</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Where we need to comply with a legal obligation or regulatory requirement.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg border p-5">
                    <h3 className="mb-4 text-lg font-medium">Marketing Communications</h3>
                    <p className="break-words hyphens-auto leading-relaxed">
                      We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we
                      think you may want or need, or what may be of interest to you. This is how we decide which
                      products, services and offers may be relevant for you.
                    </p>
                    <p className="mt-4 break-words hyphens-auto leading-relaxed">
                      You will receive marketing communications from us if you have requested information from us or
                      purchased services from us and you have not opted out of receiving that marketing.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rights" className="mt-8 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-primary" />
                    Your Legal Rights
                  </CardTitle>
                  <CardDescription>Understanding your data protection rights</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="break-words hyphens-auto leading-relaxed">
                    Under certain circumstances, you have rights under data protection laws in relation to your personal
                    data. You have the right to:
                  </p>

                  <div className="space-y-6">
                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Request access to your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This enables you to receive a copy of the personal data we hold about you and to check that we
                        are lawfully processing it.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Request correction of your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This enables you to have any incomplete or inaccurate data we hold about you corrected, though
                        we may need to verify the accuracy of the new data you provide to us.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Request erasure of your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This enables you to ask us to delete or remove personal data where there is no good reason for
                        us continuing to process it. You also have the right to ask us to delete or remove your personal
                        data where you have successfully exercised your right to object to processing.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Object to processing of your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This applies where we are relying on a legitimate interest and there is something about your
                        particular situation which makes you want to object to processing on this ground as you feel it
                        impacts on your fundamental rights and freedoms.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Request restriction of processing your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This enables you to ask us to suspend the processing of your personal data in specific
                        scenarios.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Request transfer of your personal data</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We will provide to you, or a third party you have chosen, your personal data in a structured,
                        commonly used, machine-readable format.
                      </p>
                    </div>

                    <div className="rounded-lg border p-5">
                      <h3 className="mb-3 font-medium">Right to withdraw consent</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This applies where we are relying on consent to process your personal data. However, this will
                        not affect the lawfulness of any processing carried out before you withdraw your consent.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="mt-8 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    Contact Us
                  </CardTitle>
                  <CardDescription>How to reach us with questions about this privacy policy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="break-words hyphens-auto leading-relaxed">
                    If you have any questions about this privacy policy or our privacy practices, please contact our
                    Data Privacy Manager using the details below:
                  </p>

                  <div className="rounded-lg border p-6">
                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h3 className="mb-4 text-lg font-medium">Contact Details</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="break-words">privacy@estateease.com</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>(123) 456-7890</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                            <span>
                              Data Privacy Manager
                              <br />
                              EstateEase
                              <br />
                              123 Real Estate Avenue
                              <br />
                              Property City, 12345
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="mb-4 text-lg font-medium">Response Time</h3>
                        <p className="mb-6 leading-relaxed">
                          We aim to respond to all legitimate requests within one month. Occasionally it may take us
                          longer if your request is particularly complex or you have made a number of requests.
                        </p>
                        <div className="flex items-center gap-3 rounded-lg bg-primary/10 p-4">
                          <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                          <p className="text-sm font-medium leading-relaxed">
                            We will notify you if this is the case and keep you updated.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
