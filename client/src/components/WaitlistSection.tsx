import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Bell } from "lucide-react";

export function WaitlistSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      email: "",
      name: "",
      destination: "",
      travelPeriod: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlist) => {
      const { data: result, error } = await supabase
        .from('waitlist')
        .insert([data])
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t.waitlist.toastSuccessTitle,
        description: t.waitlist.toastSuccessDescription,
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: () => {
      toast({
        title: t.waitlist.toastErrorTitle,
        description: t.waitlist.toastErrorDescription,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-gradient-to-br from-navy via-navy/95 to-navy/90 py-20 lg:py-32" id="waitlist">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-gold uppercase text-sm tracking-[0.15em] font-semibold mb-4" data-testid="text-waitlist-eyebrow">
              {t.waitlist.eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6" data-testid="heading-waitlist">
              {t.waitlist.headline}
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8" data-testid="text-waitlist-description">
              {t.waitlist.description}
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.waitlist.benefit1Title}</h3>
                  <p className="text-white/70">{t.waitlist.benefit1Description}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.waitlist.benefit2Title}</h3>
                  <p className="text-white/70">{t.waitlist.benefit2Description}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.waitlist.benefit3Title}</h3>
                  <p className="text-white/70">{t.waitlist.benefit3Description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            {!isSubmitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy font-semibold">{t.waitlist.nameLabel} *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder={t.waitlist.namePlaceholder} 
                            {...field} 
                            className="border-navy/20 focus:border-gold"
                            data-testid="input-waitlist-name"
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
                        <FormLabel className="text-navy font-semibold">{t.waitlist.emailLabel} *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder={t.waitlist.emailPlaceholder} 
                            {...field} 
                            className="border-navy/20 focus:border-gold"
                            data-testid="input-waitlist-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="destination"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy font-semibold">{t.waitlist.destinationLabel}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-destination">
                              <SelectValue placeholder={t.waitlist.destinationPlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="jamaica">{t.waitlist.destinations.jamaica}</SelectItem>
                            <SelectItem value="barbados">{t.waitlist.destinations.barbados}</SelectItem>
                            <SelectItem value="trinidad-tobago">{t.waitlist.destinations.trinidad}</SelectItem>
                            <SelectItem value="st-lucia">{t.waitlist.destinations.stLucia}</SelectItem>
                            <SelectItem value="dominica">{t.waitlist.destinations.dominica}</SelectItem>
                            <SelectItem value="grenada">{t.waitlist.destinations.grenada}</SelectItem>
                            <SelectItem value="any">{t.waitlist.destinations.any}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="travelPeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy font-semibold">{t.waitlist.travelPeriodLabel}</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-period">
                              <SelectValue placeholder={t.waitlist.travelPeriodPlaceholder} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-3-months">{t.waitlist.periods.oneToThree}</SelectItem>
                            <SelectItem value="3-6-months">{t.waitlist.periods.threeToSix}</SelectItem>
                            <SelectItem value="6-12-months">{t.waitlist.periods.sixToTwelve}</SelectItem>
                            <SelectItem value="12-plus-months">{t.waitlist.periods.twelvePlus}</SelectItem>
                            <SelectItem value="flexible">{t.waitlist.periods.flexible}</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-gold hover:bg-gold/90 text-white font-semibold text-base py-6 rounded-lg shadow-lg transition-all hover:scale-105"
                    data-testid="button-waitlist-submit"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t.waitlist.submitting}
                      </>
                    ) : (
                      t.waitlist.submitButton
                    )}
                  </Button>

                  <p className="text-navy/60 text-xs text-center">
                    {t.waitlist.privacyNote}
                  </p>
                </form>
              </Form>
            ) : (
              <div className="text-center py-12" data-testid="waitlist-success-message">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-navy mb-2">{t.waitlist.successTitle}</h3>
                <p className="text-navy/70">
                  {t.waitlist.successMessage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
