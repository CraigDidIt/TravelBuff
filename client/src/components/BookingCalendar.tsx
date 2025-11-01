import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertBookingSchema, type InsertBooking } from "@shared/schema";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();
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

  const mutation = useMutation({
    mutationFn: async (data: InsertBooking) => {
      const { data: result, error } = await supabase
        .from('bookings')
        .insert([data])
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t.bookingCalendar.toastSuccessTitle,
        description: t.bookingCalendar.toastSuccessDescription,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t.bookingCalendar.toastErrorTitle,
        description: t.bookingCalendar.toastErrorDescription,
        variant: "destructive",
      });
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
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6" data-testid="dialog-booking">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-navy flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-gold" />
                {t.bookingCalendar.title}
              </DialogTitle>
              <DialogDescription className="text-navy/70">
                {t.bookingCalendar.description}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-4">
              {/* Calendar Section */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy mb-3 flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-gold" />
                    {t.bookingCalendar.selectDateLabel}
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
                      {t.bookingCalendar.selectTimeLabel}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time: string) => (
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
                          <FormLabel className="text-navy font-semibold">{t.bookingCalendar.nameLabel} *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder={t.bookingCalendar.namePlaceholder} 
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
                          <FormLabel className="text-navy font-semibold">{t.bookingCalendar.emailLabel} *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder={t.bookingCalendar.emailPlaceholder} 
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
                          <FormLabel className="text-navy font-semibold">{t.bookingCalendar.phoneLabel}</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder={t.bookingCalendar.phonePlaceholder} 
                              {...field}
                              value={field.value || ""}
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
                          <FormLabel className="text-navy font-semibold">{t.bookingCalendar.serviceLabel} *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-booking-service">
                                <SelectValue placeholder={t.bookingCalendar.servicePlaceholder} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="medical-tourism">{t.consultation.serviceOptions.medical}</SelectItem>
                              <SelectItem value="romantic-escapes">{t.consultation.serviceOptions.romantic}</SelectItem>
                              <SelectItem value="solo-adventures">{t.consultation.serviceOptions.solo}</SelectItem>
                              <SelectItem value="caribbean-immersion">{t.consultation.serviceOptions.caribbean}</SelectItem>
                              <SelectItem value="other">{t.consultation.serviceOptions.other}</SelectItem>
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
                          <FormLabel className="text-navy font-semibold">{t.bookingCalendar.messageLabel}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.bookingCalendar.messagePlaceholder}
                              className="min-h-[80px] border-navy/20 focus:border-gold resize-none"
                              {...field}
                              value={field.value || ""}
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
                      className="w-full bg-gold hover:bg-gold/90 text-white font-semibold min-h-[48px]"
                      data-testid="button-booking-submit"
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t.bookingCalendar.submitting}
                        </>
                      ) : (
                        t.bookingCalendar.submitButton
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
            <h3 className="font-serif text-3xl text-navy mb-3">{t.bookingCalendar.successTitle}</h3>
            <p className="text-navy/70 text-lg mb-6">
              {t.bookingCalendar.successMessage}
            </p>
            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white"
              data-testid="button-booking-close"
            >
              {t.bookingCalendar.closeButton}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
