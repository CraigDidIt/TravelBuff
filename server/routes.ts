import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";
import { insertConsultationSchema, insertEmailLeadSchema, insertWaitlistSchema, insertBookingSchema, insertPartnerSchema, insertTestimonialSchema } from "@shared/schema";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "admin-secret-token-change-in-production";

function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (token !== ADMIN_TOKEN) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  next();
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      console.log("📧 New consultation request received:");
      console.log(`   Name: ${consultation.name}`);
      console.log(`   Email: ${consultation.email}`);
      console.log(`   Service: ${consultation.serviceInterest}`);
      console.log(`   Message: ${consultation.message.substring(0, 100)}...`);
      
      try {
        await emailService.sendConsultationNotification(consultation);
      } catch (emailError) {
        console.error("Email notification failed, but consultation was saved:", emailError);
      }
      
      res.status(201).json(consultation);
    } catch (error) {
      console.error("Error creating consultation:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid consultation data", details: error });
      } else {
        res.status(500).json({ error: "Failed to create consultation" });
      }
    }
  });

  app.get("/api/consultations", async (_req, res) => {
    try {
      const consultations = await storage.getAllConsultations();
      res.json(consultations);
    } catch (error) {
      console.error("Error fetching consultations:", error);
      res.status(500).json({ error: "Failed to fetch consultations" });
    }
  });

  app.get("/api/consultations/:id", async (req, res) => {
    try {
      const consultation = await storage.getConsultation(req.params.id);
      if (!consultation) {
        res.status(404).json({ error: "Consultation not found" });
        return;
      }
      res.json(consultation);
    } catch (error) {
      console.error("Error fetching consultation:", error);
      res.status(500).json({ error: "Failed to fetch consultation" });
    }
  });

  app.post("/api/email-leads", async (req, res) => {
    try {
      const validatedData = insertEmailLeadSchema.parse(req.body);
      const lead = await storage.createEmailLead(validatedData);
      
      console.log("📧 New email lead captured:");
      console.log(`   Email: ${lead.email}`);
      console.log(`   Name: ${lead.name || 'N/A'}`);
      console.log(`   Source: ${lead.source}`);
      
      res.status(201).json(lead);
    } catch (error) {
      console.error("Error creating email lead:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid email lead data", details: error });
      } else {
        res.status(500).json({ error: "Failed to create email lead" });
      }
    }
  });

  app.get("/api/email-leads", async (_req, res) => {
    try {
      const leads = await storage.getAllEmailLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching email leads:", error);
      res.status(500).json({ error: "Failed to fetch email leads" });
    }
  });

  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      
      console.log("📋 New waitlist entry:");
      console.log(`   Name: ${entry.name}`);
      console.log(`   Email: ${entry.email}`);
      console.log(`   Destination: ${entry.destination || 'N/A'}`);
      console.log(`   Travel Period: ${entry.travelPeriod || 'N/A'}`);
      
      res.status(201).json(entry);
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid waitlist data", details: error });
      } else {
        res.status(500).json({ error: "Failed to create waitlist entry" });
      }
    }
  });

  app.get("/api/waitlist", async (_req, res) => {
    try {
      const entries = await storage.getAllWaitlist();
      res.json(entries);
    } catch (error) {
      console.error("Error fetching waitlist:", error);
      res.status(500).json({ error: "Failed to fetch waitlist" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      console.log("📅 New booking created:");
      console.log(`   Name: ${booking.name}`);
      console.log(`   Email: ${booking.email}`);
      console.log(`   Date: ${booking.date}`);
      console.log(`   Time: ${booking.time}`);
      console.log(`   Service: ${booking.serviceInterest}`);
      
      res.status(201).json(booking);
    } catch (error) {
      console.error("Error creating booking:", error);
      if (error instanceof Error) {
        if (error.name === "ZodError") {
          res.status(400).json({ error: "Invalid booking data", details: error });
        } else if (error.message === "Time slot already booked") {
          res.status(409).json({ 
            error: "Time slot already booked", 
            message: "This time slot is no longer available. Please select a different time." 
          });
        } else {
          res.status(500).json({ error: "Failed to create booking" });
        }
      } else {
        res.status(500).json({ error: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", async (_req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  app.get("/api/bookings/availability/:date", async (req, res) => {
    try {
      const date = req.params.date;
      const bookings = await storage.getBookingsByDate(date);
      const bookedTimes = bookings.map(b => b.time);
      
      const allTimeSlots = [
        "09:00", "10:00", "11:00", "12:00",
        "13:00", "14:00", "15:00", "16:00", "17:00"
      ];
      
      const availableSlots = allTimeSlots.filter(slot => !bookedTimes.includes(slot));
      
      res.json({ availableSlots, bookedSlots: bookedTimes });
    } catch (error) {
      console.error("Error fetching availability:", error);
      res.status(500).json({ error: "Failed to fetch availability" });
    }
  });

  app.get("/api/partners", async (_req, res) => {
    try {
      const partners = await storage.getAllPartners();
      const activePartners = partners.filter(p => p.isActive === "true");
      res.json(activePartners);
    } catch (error) {
      console.error("Error fetching partners:", error);
      res.status(500).json({ error: "Failed to fetch partners" });
    }
  });

  app.post("/api/partners", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPartnerSchema.parse(req.body);
      const partner = await storage.createPartner(validatedData);
      console.log("🤝 New partner created:", partner.name);
      res.status(201).json(partner);
    } catch (error) {
      console.error("Error creating partner:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid partner data", details: error });
      } else {
        res.status(500).json({ error: "Failed to create partner" });
      }
    }
  });

  app.put("/api/partners/:id", requireAuth, async (req, res) => {
    try {
      const partner = await storage.updatePartner(req.params.id, req.body);
      if (!partner) {
        res.status(404).json({ error: "Partner not found" });
        return;
      }
      res.json(partner);
    } catch (error) {
      console.error("Error updating partner:", error);
      res.status(500).json({ error: "Failed to update partner" });
    }
  });

  app.delete("/api/partners/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deletePartner(req.params.id);
      if (!deleted) {
        res.status(404).json({ error: "Partner not found" });
        return;
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting partner:", error);
      res.status(500).json({ error: "Failed to delete partner" });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      const activeTestimonials = testimonials.filter(t => t.isActive === "true");
      res.json(activeTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", requireAuth, async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      console.log("💬 New testimonial created from:", testimonial.name);
      res.status(201).json(testimonial);
    } catch (error) {
      console.error("Error creating testimonial:", error);
      if (error instanceof Error && error.name === "ZodError") {
        res.status(400).json({ error: "Invalid testimonial data", details: error });
      } else {
        res.status(500).json({ error: "Failed to create testimonial" });
      }
    }
  });

  app.put("/api/testimonials/:id", requireAuth, async (req, res) => {
    try {
      const testimonial = await storage.updateTestimonial(req.params.id, req.body);
      if (!testimonial) {
        res.status(404).json({ error: "Testimonial not found" });
        return;
      }
      res.json(testimonial);
    } catch (error) {
      console.error("Error updating testimonial:", error);
      res.status(500).json({ error: "Failed to update testimonial" });
    }
  });

  app.delete("/api/testimonials/:id", requireAuth, async (req, res) => {
    try {
      const deleted = await storage.deleteTestimonial(req.params.id);
      if (!deleted) {
        res.status(404).json({ error: "Testimonial not found" });
        return;
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      res.status(500).json({ error: "Failed to delete testimonial" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
