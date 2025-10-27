import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
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
      return await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "You're on the list!",
        description: "We'll notify you about new destinations and exclusive offers.",
      });
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlist) => {
    mutation.mutate(data);
  };

  return (
    <section className="bg-gradient-to-br from-navy via-navy/95 to-navy/90 py-20 lg:py-32" id="waitlist">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-gold uppercase text-sm tracking-[0.15em] font-semibold mb-4" data-testid="text-waitlist-eyebrow">
              BE THE FIRST TO KNOW
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6" data-testid="heading-waitlist">
              Join Our Exclusive Travel Waitlist
            </h2>
            <p className="text-white/80 text-lg mb-8" data-testid="text-waitlist-description">
              Get early access to new Caribbean destinations, limited-time offers, and curated cultural experiences. 
              Plus, receive insider travel tips and destination guides delivered straight to your inbox.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Early Bird Pricing</h3>
                  <p className="text-white/70">Save up to 25% on new destination launches</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Exclusive Access</h3>
                  <p className="text-white/70">Private tours and limited-availability experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bell className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Monthly Insights</h3>
                  <p className="text-white/70">Travel guides, cultural tips, and destination spotlights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            {!isSubmitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                        <FormLabel className="text-navy font-semibold">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="john@example.com" 
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
                        <FormLabel className="text-navy font-semibold">Interested Destination</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-destination">
                              <SelectValue placeholder="Select a destination" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="jamaica">Jamaica</SelectItem>
                            <SelectItem value="barbados">Barbados</SelectItem>
                            <SelectItem value="trinidad-tobago">Trinidad & Tobago</SelectItem>
                            <SelectItem value="st-lucia">St. Lucia</SelectItem>
                            <SelectItem value="dominica">Dominica</SelectItem>
                            <SelectItem value="grenada">Grenada</SelectItem>
                            <SelectItem value="any">Open to any destination</SelectItem>
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
                        <FormLabel className="text-navy font-semibold">When are you planning to travel?</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value || undefined}>
                          <FormControl>
                            <SelectTrigger className="border-navy/20 focus:border-gold" data-testid="select-period">
                              <SelectValue placeholder="Select timeframe" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-3-months">Within 1-3 months</SelectItem>
                            <SelectItem value="3-6-months">3-6 months</SelectItem>
                            <SelectItem value="6-12-months">6-12 months</SelectItem>
                            <SelectItem value="12-plus-months">12+ months</SelectItem>
                            <SelectItem value="flexible">Flexible / Just exploring</SelectItem>
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
                        Joining...
                      </>
                    ) : (
                      "Join the Waitlist"
                    )}
                  </Button>

                  <p className="text-navy/60 text-xs text-center">
                    * Required fields. We respect your privacy and will never share your information.
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
                <h3 className="font-serif text-2xl text-navy mb-2">You're on the list!</h3>
                <p className="text-navy/70">
                  We'll keep you updated with the latest travel opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
