import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import RestaurantCard from "@/components/restaurant-card"
import BookingProcess from "@/components/booking-process"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col flex-grow">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Utensils className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TableGo</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#restaurants" className="text-sm font-medium transition-colors hover:text-primary">
              Restaurants
            </Link>
            <Link href="#booking" className="text-sm font-medium transition-colors hover:text-primary">
              Book a Table
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Sign up</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden">
              <Utensils className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Restaurant interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 py-24 text-center text-white md:py-32">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Find and Reserve Your Perfect Table</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Discover the best restaurants in your area and book your table in seconds with TableGo
          </p>
          <Link href="#booking">
            <Button size="lg" className="rounded-full px-8">
              Book Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Booking process explanation */}
      <section id="booking" className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          <BookingProcess />
        </div>
      </section>

      {/* Featured restaurants */}
      <section id="restaurants" className="py-16">
        <div className="container">
          <h2 className="mb-6 text-3xl font-bold">Featured Restaurants</h2>
          <p className="mb-10 text-muted-foreground">Discover top-rated restaurants available for booking</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <RestaurantCard key={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              View All Restaurants
            </Button>
          </div>
        </div>
      </section>

      {/* About us */}
      <section id="about" className="bg-muted py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2 className="mb-6 text-3xl font-bold">About TableGo</h2>
              <p className="mb-4 text-muted-foreground">
                TableGo was founded in 2023 with a simple mission: make restaurant reservations effortless for everyone.
              </p>
              <p className="mb-4 text-muted-foreground">
                Our platform connects diners with their favorite restaurants, allowing them to book tables instantly
                without phone calls or waiting.
              </p>
              <p className="text-muted-foreground">
                We partner with hundreds of restaurants to offer you the best dining options in your area, complete with
                reviews, photos, and menus.
              </p>
              <div className="mt-6">
                <Button>Learn More</Button>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=600&width=800" alt="About TableGo" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-b py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            <div className="p-4">
              <p className="mb-2 text-3xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Restaurants</p>
            </div>
            <div className="p-4">
              <p className="mb-2 text-3xl font-bold">25k+</p>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </div>
            <div className="p-4">
              <p className="mb-2 text-3xl font-bold">100k+</p>
              <p className="text-sm text-muted-foreground">Reservations</p>
            </div>
            <div className="p-4">
              <p className="mb-2 text-3xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground">Cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-4">
            <div className="flex items-center">
              <Utensils className="mr-2 h-6 w-6 text-primary" />
              <span className="text-xl font-bold">TableGo</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              © 2023 TableGo. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

