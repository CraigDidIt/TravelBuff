import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEmailLeadSchema, type InsertEmailLead } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download, CheckCircle2 } from "lucide-react";

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuideDownloadModal({ isOpen, onClose }: GuideDownloadModalProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertEmailLead>({
    resolver: zodResolver(insertEmailLeadSchema),
    defaultValues: {
      email: "",
      name: "",
      source: "caribbean-guide-download",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertEmailLead) => {
      return await apiRequest("POST", "/api/email-leads", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "Your guide is downloading now. Check your email for more travel tips!",
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

  const onSubmit = (data: InsertEmailLead) => {
    mutation.mutate(data);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-guide-download">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-navy flex items-center gap-2">
                <Download className="w-6 h-6 text-gold" />
                Download Free Caribbean Guide
              </DialogTitle>
              <DialogDescription className="text-navy/70">
                Get our exclusive cultural immersion guide with insider tips, hidden gems, and authentic experiences across the Caribbean.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy font-semibold">Name (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="border-navy/20 focus:border-gold"
                          data-testid="input-guide-name"
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
                          placeholder="your@email.com" 
                          {...field} 
                          className="border-navy/20 focus:border-gold"
                          data-testid="input-guide-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full bg-gold hover:bg-gold/90 text-white font-semibold"
                  data-testid="button-guide-submit"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Download Guide
                    </>
                  )}
                </Button>

                <p className="text-xs text-navy/60 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </Form>
          </>
        ) : (
          <div className="text-center py-8" data-testid="guide-success-message">
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-navy mb-2">Guide Downloaded!</h3>
            <p className="text-navy/70 mb-6">
              Check your email for the complete guide and exclusive travel tips.
            </p>
            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white"
              data-testid="button-guide-close"
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
