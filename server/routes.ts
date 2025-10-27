import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { emailService } from "./email";
import { insertConsultationSchema } from "@shared/schema";

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

  const httpServer = createServer(app);

  return httpServer;
}
