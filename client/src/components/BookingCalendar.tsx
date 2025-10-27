import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CalendarIcon, Clock, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";

interface BookingCalendarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingCalendar({ isOpen, onClose }: BookingCalendarProps) {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const formattedDate = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";

  const { data: availability } = useQuery({
    queryKey: ["/api/bookings/availability", formattedDate],
    enabled: !!formattedDate,
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      return await apiRequest("POST", "/api/bookings", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Booking Confirmed!",
        description: "We've sent a confirmation email with all the details.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bookings/availability"] });
    },
    onError: (error: any) => {
      const isConflict = error?.response?.status === 409;
      toast({
        title: isConflict ? "Time Slot Unavailable" : "Something went wrong",
        description: isConflict 
          ? "This time slot was just booked. Please select a different time." 
          : "Please try again or contact us directly.",
        variant: "destructive",
      });
      
      if (isConflict) {
        setSelectedTime("");
        form.setValue("time", "");
        queryClient.invalidateQueries({ queryKey: ["/api/bookings/availability", formattedDate] });
      }
    },
  });

  const onSubmit = (data: InsertBooking) => {
    mutation.mutate(data);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime("");
    form.setValue("date", date ? format(date, "yyyy-MM-dd") : "");
    form.setValue("time", "");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    form.setValue("time", time);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setSelectedDate(undefined);
    setSelectedTime("");
    onClose();
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="dialog-booking">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-navy flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-gold" />
                Book Your Consultation
              </DialogTitle>
              <DialogDescription className="text-navy/70">
                Select a date and time for your free consultation. We'll reach out to confirm and prepare for our call.
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-8 mt-4">
              {/* Calendar Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-gold" />
                    Select a Date
                  </h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    disabled={(date) => date < today}
                    className="rounded-md border border-navy/20"
                    data-testid="calendar-picker"
                  />
                </div>

                {selectedDate && (
                  <div>
                    <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gold" />
                      Available Times
                    </h3>
                    {availability?.availableSlots?.length > 0 ? (
                      <div className="grid grid-cols-3 gap-2">
                        {availability.availableSlots.map((time: string) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelect(time)}
                            className={`py-2 px-3 text-sm rounded-md border transition-all ${
                              selectedTime === time
                                ? "bg-gold text-white border-gold font-semibold"
                                : "border-navy/20 text-navy hover:border-gold hover:bg-gold/5"
                            }`}
                            data-testid={`time-slot-${time}`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-navy/60 text-sm">No available slots for this date. Please select another date.</p>
                    )}
                  </div>
                )}
              </div>

              {/* Form Section */}
              <div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              {...field} 
                              className="border-navy/20 focus:border-gold"
                              data-testid="input-booking-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Email Address *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="john@example.com" 
                              {...field} 
                              className="border-navy/20 focus:border-gold"
                              data-testid="input-booking-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="+1 (555) 000-0000" 
                              {...field} 
                              className="border-navy/20 focus:border-gold"
                              data-testid="input-booking-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Service Interest *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-booking-service">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="medical-tourism">Medical Tourism</SelectItem>
                              <SelectItem value="romantic-escapes">Romantic Escapes</SelectItem>
                              <SelectItem value="solo-adventures">Solo Adventures</SelectItem>
                              <SelectItem value="caribbean-immersion">Caribbean Cultural Immersion</SelectItem>
                              <SelectItem value="other">Other / Not Sure</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy font-semibold">Message (Optional)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Any specific questions or requests..."
                              className="min-h-[80px] border-navy/20 focus:border-gold resize-none"
                              {...field}
                              data-testid="input-booking-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={mutation.isPending || !selectedDate || !selectedTime}
                      className="w-full bg-gold hover:bg-gold/90 text-white font-semibold"
                      data-testid="button-booking-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Confirming...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </Button>

                    <p className="text-navy/60 text-xs text-center">
                      * Required fields. A confirmation email will be sent to you.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12" data-testid="booking-success-message">
            <CheckCircle2 className="w-20 h-20 text-gold mx-auto mb-6" />
            <h3 className="font-serif text-3xl text-navy mb-3">Booking Confirmed!</h3>
            <p className="text-navy/70 text-lg mb-6">
              We've sent a confirmation email with all the details. We look forward to speaking with you!
            </p>
            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white"
              data-testid="button-booking-close"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
