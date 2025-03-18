"use client"

import { useState } from "react"
import { CalendarDays, Clock, MapPin, Users, UtensilsCrossed } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingProcess() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [guests, setGuests] = useState("")
  const [time, setTime] = useState("")
  const [restaurant, setRestaurant] = useState("")
  const [table, setTable] = useState("")

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1)
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex w-full items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
          >
            <MapPin className="h-5 w-5" />
          </div>
          <div className={`h-1 w-full ${step > 1 ? "bg-primary" : "bg-muted-foreground/30"}`} />
        </div>
        <div className="flex w-full items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
          >
            <CalendarDays className="h-5 w-5" />
          </div>
          <div className={`h-1 w-full ${step > 2 ? "bg-primary" : "bg-muted-foreground/30"}`} />
        </div>
        <div className="flex w-full items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
          >
            <Users className="h-5 w-5" />
          </div>
          <div className={`h-1 w-full ${step > 3 ? "bg-primary" : "bg-muted-foreground/30"}`} />
        </div>
        <div className="flex w-full items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 4 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
          >
            <Clock className="h-5 w-5" />
          </div>
          <div className={`h-1 w-full ${step > 4 ? "bg-primary" : "bg-muted-foreground/30"}`} />
        </div>
        <div className="flex items-center">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-full ${step >= 5 ? "bg-primary text-primary-foreground" : "border bg-background"}`}
          >
            <UtensilsCrossed className="h-5 w-5" />
          </div>
        </div>
      </div>

      {/* Step labels */}
      <div className="mb-8 grid grid-cols-5 text-center text-sm">
        <div>Restaurant</div>
        <div>Date</div>
        <div>Guests</div>
        <div>Time</div>
        <div>Table</div>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>
            {step === 1 && "Select a Restaurant"}
            {step === 2 && "Choose a Date"}
            {step === 3 && "Number of Guests"}
            {step === 4 && "Select a Time"}
            {step === 5 && "Choose a Table"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Browse and select from our partner restaurants"}
            {step === 2 && "When would you like to dine?"}
            {step === 3 && "How many people will be dining?"}
            {step === 4 && "What time works best for you?"}
            {step === 5 && "Select your preferred table"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <div className="space-y-4">
              <Select value={restaurant} onValueChange={setRestaurant}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a restaurant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="italian-bistro">Italian Bistro</SelectItem>
                  <SelectItem value="sushi-express">Sushi Express</SelectItem>
                  <SelectItem value="steakhouse">Prime Steakhouse</SelectItem>
                  <SelectItem value="seafood">Ocean Delights</SelectItem>
                  <SelectItem value="mexican">La Cantina</SelectItem>
                </SelectContent>
              </Select>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border p-3">
                  <div className="font-medium">Italian Bistro</div>
                  <div className="text-sm text-muted-foreground">Italian • $$</div>
                  <div className="mt-2 text-sm">4.8 ★★★★★ (120 reviews)</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="font-medium">Sushi Express</div>
                  <div className="text-sm text-muted-foreground">Japanese • $$$</div>
                  <div className="mt-2 text-sm">4.6 ★★★★★ (85 reviews)</div>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex justify-center py-2">
              <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
            </div>
          )}

          {step === 3 && (
            <div className="py-4">
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger>
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 person</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5">5 people</SelectItem>
                  <SelectItem value="6">6 people</SelectItem>
                  <SelectItem value="7">7 people</SelectItem>
                  <SelectItem value="8">8 people</SelectItem>
                  <SelectItem value="large">9+ people (call restaurant)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {step === 4 && (
            <div className="grid grid-cols-3 gap-3 py-4 sm:grid-cols-4">
              <Button
                variant={time === "18:00" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("18:00")}
              >
                6:00 PM
              </Button>
              <Button
                variant={time === "18:30" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("18:30")}
              >
                6:30 PM
              </Button>
              <Button
                variant={time === "19:00" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("19:00")}
              >
                7:00 PM
              </Button>
              <Button
                variant={time === "19:30" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("19:30")}
              >
                7:30 PM
              </Button>
              <Button
                variant={time === "20:00" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("20:00")}
              >
                8:00 PM
              </Button>
              <Button
                variant={time === "20:30" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("20:30")}
              >
                8:30 PM
              </Button>
              <Button
                variant={time === "21:00" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("21:00")}
              >
                9:00 PM
              </Button>
              <Button
                variant={time === "21:30" ? "default" : "outline"}
                className="w-full"
                onClick={() => setTime("21:30")}
              >
                9:30 PM
              </Button>
            </div>
          )}

          {step === 5 && (
            <div className="py-4">
              <div className="mb-4 text-sm text-muted-foreground">
                Select your preferred table from the available options below:
              </div>
              <div className="relative h-[300px] w-full rounded-md border bg-muted/50 p-4">
                <div className="absolute left-[10%] top-[10%]">
                  <Button
                    variant={table === "A1" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("A1")}
                  >
                    A1
                  </Button>
                </div>
                <div className="absolute left-[10%] top-[40%]">
                  <Button
                    variant={table === "A2" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("A2")}
                  >
                    A2
                  </Button>
                </div>
                <div className="absolute left-[10%] top-[70%]">
                  <Button
                    variant={table === "A3" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("A3")}
                  >
                    A3
                  </Button>
                </div>
                <div className="absolute left-[40%] top-[20%]">
                  <Button
                    variant={table === "B1" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("B1")}
                  >
                    B1
                  </Button>
                </div>
                <div className="absolute left-[40%] top-[60%]">
                  <Button
                    variant={table === "B2" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("B2")}
                  >
                    B2
                  </Button>
                </div>
                <div className="absolute left-[70%] top-[15%]">
                  <Button
                    variant={table === "C1" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("C1")}
                  >
                    C1
                  </Button>
                </div>
                <div className="absolute left-[70%] top-[45%]">
                  <Button
                    variant={table === "C2" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("C2")}
                  >
                    C2
                  </Button>
                </div>
                <div className="absolute left-[70%] top-[75%]">
                  <Button
                    variant={table === "C3" ? "default" : "outline"}
                    className="h-12 w-12 rounded-full p-0"
                    onClick={() => setTable("C3")}
                  >
                    C3
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">Restaurant floor plan</div>
              </div>
              <div className="mt-4 rounded-md bg-muted p-3 text-sm">
                <div className="font-medium">{table ? `Table ${table}` : "No table selected"}</div>
                {table && (
                  <div className="text-muted-foreground">
                    {table.startsWith("A")
                      ? "Window area • Great view"
                      : table.startsWith("B")
                        ? "Center area • Near bar"
                        : "Quiet corner • More private"}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            Back
          </Button>
          <Button
            onClick={step === 5 ? () => alert("Booking completed!") : nextStep}
            disabled={
              (step === 1 && !restaurant) ||
              (step === 2 && !date) ||
              (step === 3 && !guests) ||
              (step === 4 && !time) ||
              (step === 5 && !table)
            }
          >
            {step === 5 ? "Complete Booking" : "Continue"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

