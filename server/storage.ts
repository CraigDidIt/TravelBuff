import { 
  type Consultation, 
  type InsertConsultation,
  type EmailLead,
  type InsertEmailLead,
  type Waitlist,
  type InsertWaitlist,
  type Booking,
  type InsertBooking,
  type Partner,
  type InsertPartner,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getAllConsultations(): Promise<Consultation[]>;
  getConsultation(id: string): Promise<Consultation | undefined>;
  createEmailLead(lead: InsertEmailLead): Promise<EmailLead>;
  getAllEmailLeads(): Promise<EmailLead[]>;
  createWaitlistEntry(entry: InsertWaitlist): Promise<Waitlist>;
  getAllWaitlist(): Promise<Waitlist[]>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  getAllBookings(): Promise<Booking[]>;
  getBookingsByDate(date: string): Promise<Booking[]>;
  createPartner(partner: InsertPartner): Promise<Partner>;
  getAllPartners(): Promise<Partner[]>;
  updatePartner(id: string, partner: Partial<InsertPartner>): Promise<Partner | undefined>;
  deletePartner(id: string): Promise<boolean>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getAllTestimonials(): Promise<Testimonial[]>;
  updateTestimonial(id: string, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private consultations: Map<string, Consultation>;
  private emailLeads: Map<string, EmailLead>;
  private waitlistEntries: Map<string, Waitlist>;
  private bookings: Map<string, Booking>;
  private partners: Map<string, Partner>;
  private testimonials: Map<string, Testimonial>;
  private bookingLocks: Set<string>;

  constructor() {
    this.consultations = new Map();
    this.emailLeads = new Map();
    this.waitlistEntries = new Map();
    this.bookings = new Map();
    this.partners = new Map();
    this.testimonials = new Map();
    this.bookingLocks = new Set();
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getAllConsultations(): Promise<Consultation[]> {
    return Array.from(this.consultations.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getConsultation(id: string): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }

  async createEmailLead(insertLead: InsertEmailLead): Promise<EmailLead> {
    const id = randomUUID();
    const lead: EmailLead = {
      ...insertLead,
      id,
      createdAt: new Date(),
    };
    this.emailLeads.set(id, lead);
    return lead;
  }

  async getAllEmailLeads(): Promise<EmailLead[]> {
    return Array.from(this.emailLeads.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createWaitlistEntry(insertEntry: InsertWaitlist): Promise<Waitlist> {
    const id = randomUUID();
    const entry: Waitlist = {
      ...insertEntry,
      id,
      createdAt: new Date(),
    };
    this.waitlistEntries.set(id, entry);
    return entry;
  }

  async getAllWaitlist(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const slotKey = `${insertBooking.date}:${insertBooking.time}`;
    
    if (this.bookingLocks.has(slotKey)) {
      throw new Error("Time slot already booked");
    }
    
    this.bookingLocks.add(slotKey);
    
    const existingBookings = await this.getBookingsByDate(insertBooking.date);
    const isTimeSlotTaken = existingBookings.some(b => b.time === insertBooking.time);
    
    if (isTimeSlotTaken) {
      this.bookingLocks.delete(slotKey);
      throw new Error("Time slot already booked");
    }
    
    const id = randomUUID();
    const booking: Booking = {
      ...insertBooking,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getBookingsByDate(date: string): Promise<Booking[]> {
    return Array.from(this.bookings.values())
      .filter((booking) => booking.date === date)
      .sort((a, b) => a.time.localeCompare(b.time));
  }

  async createPartner(insertPartner: InsertPartner): Promise<Partner> {
    const id = randomUUID();
    const partner: Partner = {
      ...insertPartner,
      id,
      createdAt: new Date(),
    };
    this.partners.set(id, partner);
    return partner;
  }

  async getAllPartners(): Promise<Partner[]> {
    return Array.from(this.partners.values()).sort(
      (a, b) => parseInt(a.order) - parseInt(b.order)
    );
  }

  async updatePartner(id: string, updates: Partial<InsertPartner>): Promise<Partner | undefined> {
    const partner = this.partners.get(id);
    if (!partner) return undefined;
    
    const updated: Partner = { ...partner, ...updates };
    this.partners.set(id, updated);
    return updated;
  }

  async deletePartner(id: string): Promise<boolean> {
    return this.partners.delete(id);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date(),
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async updateTestimonial(id: string, updates: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const testimonial = this.testimonials.get(id);
    if (!testimonial) return undefined;
    
    const updated: Testimonial = { ...testimonial, ...updates };
    this.testimonials.set(id, updated);
    return updated;
  }

  async deleteTestimonial(id: string): Promise<boolean> {
    return this.testimonials.delete(id);
  }
}

export const storage = new MemStorage();
