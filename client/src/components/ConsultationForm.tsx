import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertConsultationSchema, type InsertConsultation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export function ConsultationForm() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertConsultation>({
    resolver: zodResolver(insertConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertConsultation) => {
      return await apiRequest("POST", "/api/consultations", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Consultation Request Received!",
        description: "We'll contact you within 24 hours to discuss your journey.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultation) => {
    mutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gold/10 rounded-full mb-6">
          <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-navy mb-4">{t.consultation.successTitle}</h3>
        <p className="text-navy/70 text-lg max-w-md mx-auto mb-8">
          {t.consultation.successMessage}
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-white"
          data-testid="button-submit-another"
        >
          {t.consultation.submitAnother}
        </Button>
      </div>
    );
  }

  return (
    <section id="contact" className="bg-navy py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold uppercase text-sm tracking-[0.15em] font-semibold mb-4" data-testid="text-eyebrow-consultation">
            {t.consultation.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6" data-testid="heading-consultation">
            {t.consultation.headline}
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto" data-testid="text-consultation-description">
            {t.consultation.subheadline}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy font-semibold">{t.consultation.nameLabel} *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t.consultation.namePlaceholder} 
                          {...field} 
                          className="border-navy/20 focus:border-gold"
                          data-testid="input-name"
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
                      <FormLabel className="text-navy font-semibold">{t.consultation.emailLabel} *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t.consultation.emailPlaceholder} 
                          {...field} 
                          className="border-navy/20 focus:border-gold"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy font-semibold">{t.consultation.phoneLabel}</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel" 
                          placeholder={t.consultation.phonePlaceholder} 
                          {...field}
                          value={field.value || ""}
                          className="border-navy/20 focus:border-gold"
                          data-testid="input-phone"
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
                      <FormLabel className="text-navy font-semibold">{t.consultation.serviceLabel} *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-service">
                            <SelectValue placeholder={t.consultation.servicePlaceholder} />
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
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy font-semibold">{t.consultation.messageLabel} *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t.consultation.messagePlaceholder}
                        className="min-h-[150px] border-navy/20 focus:border-gold resize-none"
                        {...field}
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="flex-1 bg-gold hover:bg-gold/90 text-white font-semibold text-base py-6 rounded-lg shadow-lg transition-all hover:scale-105 min-h-[48px]"
                  data-testid="button-submit"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t.consultation.submitting}
                    </>
                  ) : (
                    t.consultation.submitButton
                  )}
                </Button>
              </div>

              <p className="text-navy/60 text-sm text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
