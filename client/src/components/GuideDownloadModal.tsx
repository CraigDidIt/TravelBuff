import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertEmailLeadSchema, type InsertEmailLead } from "@shared/schema";
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
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download, CheckCircle2 } from "lucide-react";

interface GuideDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GuideDownloadModal({ isOpen, onClose }: GuideDownloadModalProps) {
  const { t } = useLanguage();
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
      const { data: result, error } = await supabase
        .from('email_leads')
        .insert([data])
        .select()
        .single();
      
      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t.guideDownload.toastSuccessTitle,
        description: t.guideDownload.toastSuccessDescription,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t.guideDownload.toastErrorTitle,
        description: t.guideDownload.toastErrorDescription,
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
      <DialogContent className="sm:max-w-md p-4 sm:p-6" data-testid="dialog-guide-download">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl text-navy flex items-center gap-2">
                <Download className="w-6 h-6 text-gold" />
                {t.guideDownload.title}
              </DialogTitle>
              <DialogDescription className="text-navy/70">
                {t.guideDownload.description}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy font-semibold">{t.guideDownload.nameLabel}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t.guideDownload.namePlaceholder} 
                          {...field}
                          value={field.value || ""}
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
                      <FormLabel className="text-navy font-semibold">{t.guideDownload.emailLabel} *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder={t.guideDownload.emailPlaceholder} 
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
                  className="w-full bg-gold hover:bg-gold/90 text-white font-semibold min-h-[48px]"
                  data-testid="button-guide-submit"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.guideDownload.submitting}
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      {t.guideDownload.submitButton}
                    </>
                  )}
                </Button>

                <p className="text-xs text-navy/60 text-center">
                  {t.guideDownload.privacyNote}
                </p>
              </form>
            </Form>
          </>
        ) : (
          <div className="text-center py-8" data-testid="guide-success-message">
            <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-navy mb-2">{t.guideDownload.successTitle}</h3>
            <p className="text-navy/70 mb-6">
              {t.guideDownload.successMessage}
            </p>
            <Button
              onClick={handleClose}
              className="bg-navy hover:bg-navy/90 text-white"
              data-testid="button-guide-close"
            >
              {t.guideDownload.closeButton}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
