import Image from "next/image"
import { MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface RestaurantCardProps {
  id?: number
}

export default function RestaurantCard({ id = 1 }: RestaurantCardProps) {
  // Sample data - in a real app, this would come from a database
  const restaurants = [
    {
      id: 1,
      name: "Italian Bistro",
      image: "/placeholder.svg?height=400&width=600",
      cuisine: "Italian",
      price: "$$",
      rating: 4.8,
      reviews: 120,
      location: "Downtown",
      tags: ["Pasta", "Wine Selection", "Outdoor Seating"],
    },
    {
      id: 2,
      name: "Sushi Express",
      image: "/placeholder.svg?height=400&width=600",
      cuisine: "Japanese",
      price: "$$$",
      rating: 4.6,
      reviews: 85,
      location: "Midtown",
      tags: ["Sushi", "Sake", "Private Booths"],
    },
    {
      id: 3,
      name: "Prime Steakhouse",
      image: "/placeholder.svg?height=400&width=600",
      cuisine: "American",
      price: "$$$$",
      rating: 4.9,
      reviews: 210,
      location: "Financial District",
      tags: ["Steak", "Fine Dining", "Full Bar"],
    },
  ]

  const restaurant = restaurants.find((r) => r.id === id) || restaurants[0]

  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={restaurant.image || "/placeholder.svg"}
          alt={restaurant.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{restaurant.name}</CardTitle>
          <Badge variant="outline" className="ml-2">
            {restaurant.price}
          </Badge>
        </div>
        <CardDescription className="flex items-center text-muted-foreground">
          <MapPin className="mr-1 h-3 w-3" /> {restaurant.location} • {restaurant.cuisine}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="mb-3 flex items-center">
          <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
          <span className="mr-1 font-medium">{restaurant.rating}</span>
          <span className="text-sm text-muted-foreground">({restaurant.reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {restaurant.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Book a Table</Button>
      </CardFooter>
    </Card>
  )
}

