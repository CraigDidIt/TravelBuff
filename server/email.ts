import nodemailer from "nodemailer";
import type { Consultation } from "@shared/schema";

interface EmailConfig {
  host?: string;
  port?: number;
  secure?: boolean;
  user?: string;
  pass?: string;
  from?: string;
  to?: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private config: EmailConfig;
  private enabled: boolean = false;

  constructor() {
    this.config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === "true",
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
      from: process.env.SMTP_FROM || "concierge@travelbuff.com",
      to: process.env.NOTIFICATION_EMAIL || "concierge@travelbuff.com",
    };

    if (this.config.host && this.config.user && this.config.pass) {
      this.enabled = true;
      this.transporter = nodemailer.createTransport({
        host: this.config.host,
        port: this.config.port,
        secure: this.config.secure,
        auth: {
          user: this.config.user,
          pass: this.config.pass,
        },
      });
      console.log("✅ Email service enabled with SMTP configuration");
    } else {
      console.log("⚠️  Email service disabled - SMTP credentials not configured");
      console.log("   To enable email notifications, set environment variables:");
      console.log("   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFICATION_EMAIL");
    }
  }

  async sendConsultationNotification(consultation: Consultation): Promise<void> {
    const emailContent = this.formatConsultationEmail(consultation);

    if (this.enabled && this.transporter) {
      try {
        await this.transporter.sendMail({
          from: this.config.from,
          to: this.config.to,
          subject: `New Consultation Request: ${consultation.serviceInterest}`,
          html: emailContent,
        });
        console.log(`📧 Email notification sent for consultation ${consultation.id}`);
      } catch (error) {
        console.error("❌ Failed to send email notification:", error);
        throw error;
      }
    } else {
      console.log("📧 Email notification (simulated - SMTP not configured):");
      console.log(`   To: ${this.config.to}`);
      console.log(`   Subject: New Consultation Request: ${consultation.serviceInterest}`);
      console.log(`   Content Preview: ${emailContent.substring(0, 150)}...`);
    }
  }

  private formatConsultationEmail(consultation: Consultation): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #1F4788; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #1F4788; color: white; padding: 20px; text-align: center; }
            .content { background-color: #F8F6F0; padding: 30px; margin-top: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1F4788; }
            .value { color: #333; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Consultation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Service Interest:</div>
                <div class="value">${consultation.serviceInterest}</div>
              </div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${consultation.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${consultation.email}">${consultation.email}</a></div>
              </div>
              ${consultation.phone ? `
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value">${consultation.phone}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${consultation.message}</div>
              </div>
              <div class="field">
                <div class="label">Received:</div>
                <div class="value">${new Date(consultation.createdAt).toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>Travelbuff Concierge Services - Consultation Management System</p>
            </div>
          </div>
        </body>
      </html>
    `;
  }
}

export const emailService = new EmailService();
