"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Dialog07() {
  const [open, setOpen] = useState(true);
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Show dialog</Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-lg gap-0">
        <DialogHeader className="border-b px-6 py-4 pt-5">
          <DialogTitle>Schedule a Meeting</DialogTitle>
        </DialogHeader>

        <form action="#" method="POST">
          <div className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="title">Meeting Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Project Kickoff"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attendees">Attendees</Label>
              <Input
                id="attendees"
                name="attendees"
                placeholder="user1@example.com, user2@example.com"
              />
              <p className="text-xs text-muted-foreground">
                Enter email addresses separated by commas.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="datetime">Date</Label>

              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-1 h-4 w-4" />{" "}
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location / Conference Link</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Conference Room B or https://meet.example.com/..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Optional: Add an agenda or notes..."
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-end border-t p-4 space-x-2">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" size="sm">
              Schedule
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
