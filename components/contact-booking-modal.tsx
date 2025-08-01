"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface ContactBookingModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  initialTab?: "contact" | "book"
}

export function ContactBookingModal({ isOpen, onOpenChange, initialTab = "book" }: ContactBookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-[#1a002a] text-white border border-purple-800 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center mb-3">
            {initialTab === "book" ? "Discovery Call with Affidex Labs" : "Contact Us"}
          </DialogTitle>
          <DialogDescription className="text-center text-purple-200 text-sm md:text-base">
            {initialTab === "book"
              ? "30 min video conferencing details provided upon confirmation."
              : "Tell us about your project or inquiry."}
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue={initialTab} className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 bg-purple-900/30">
            <TabsTrigger
              value="book"
              className="data-[state=active]:bg-purple-700 data-[state=active]:text-white text-purple-200 text-sm md:text-base"
            >
              Book a call
            </TabsTrigger>
            <TabsTrigger
              value="contact"
              className="data-[state=active]:bg-purple-700 data-[state=active]:text-white text-purple-200 text-sm md:text-base"
            >
              Contact Us
            </TabsTrigger>
          </TabsList>
          <TabsContent value="book" className="p-4">
            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center">
                <Label htmlFor="date" className="text-purple-200 mb-2 text-sm">
                  Select a Day
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal bg-purple-900/50 border-purple-700 text-white hover:bg-purple-800 text-sm",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-[#1a002a] border border-purple-800 text-white">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="text-white"
                      classNames={{
                        day_selected:
                          "bg-purple-600 text-white hover:bg-purple-600 hover:text-white focus:bg-purple-600 focus:text-white",
                        day_today: "bg-purple-800 text-white",
                        day_range_middle: "bg-purple-900/50 text-white",
                        day_hidden: "invisible",
                        day_outside: "text-purple-400 opacity-50",
                        day_disabled: "text-purple-600 opacity-50",
                        day_range_end: "bg-purple-600 text-white",
                        day_range_start: "bg-purple-600 text-white",
                        day_range_between: "bg-purple-900/50 text-white",
                        day_weekend: "text-purple-300",
                        caption_label: "text-white",
                        nav_button_previous: "text-white hover:bg-purple-800",
                        nav_button_next: "text-white hover:bg-purple-800",
                        head_row: "text-purple-300",
                        row: "text-white",
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button className="w-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all text-base">
                Confirm Booking
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="contact" className="p-4">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-purple-200 text-sm">
                  Your name
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  className="bg-purple-900/50 border-purple-700 text-white placeholder:text-purple-300 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-purple-200 text-sm">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="bg-purple-900/50 border-purple-700 text-white placeholder:text-purple-300 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="timeframe" className="text-purple-200 text-sm">
                  Est. Timeframe
                </Label>
                <Input
                  id="timeframe"
                  placeholder="e.g., 3-6 months"
                  className="bg-purple-900/50 border-purple-700 text-white placeholder:text-purple-300 text-sm"
                />
              </div>
              <div>
                <Label className="text-purple-200 mb-2 block text-sm">What do you need help with?</Label>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="design"
                      className="border-purple-700 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                    />
                    <Label htmlFor="design" className="text-purple-200 text-sm">
                      Design
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="animation"
                      className="border-purple-700 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                    />
                    <Label htmlFor="animation" className="text-purple-200 text-sm">
                      Animation
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="development"
                      className="border-purple-700 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                    />
                    <Label htmlFor="development" className="text-purple-200 text-sm">
                      Development
                    </Label>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="project-details" className="text-purple-200 text-sm">
                  Tell us a bit about your project
                </Label>
                <Textarea
                  id="project-details"
                  placeholder="Describe your project here..."
                  className="bg-purple-900/50 border-purple-700 text-white placeholder:text-purple-300 min-h-[100px] text-sm"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#8a2be2] to-[#a020f0] hover:from-[#a020f0] hover:to-[#8a2be2] transition-all text-base"
              >
                Submit Inquiry
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
