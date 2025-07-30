"use server"

import { z } from "zod"
import { Resend } from 'resend';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
})

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    const validatedData = contactFormSchema.parse(rawData)

    resend.emails.send({
    from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
    to: process.env.TO_EMAIL || 'oluwakorede.dayobabatunde@gmail.com',
    subject: 'Message from ' + validatedData.name,
    html: '<p>Name: ' + validatedData.name + '</p><p>Email: ' + validatedData.email + '</p><p>Message: ' + validatedData.message + '</p>'
    });

    console.log("Form submission:", validatedData)
    console.log("Email sent successfully")

    return {
      message: "Thanks for your message! I'll get back to you soon.",
      success: true,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        message: error.errors[0].message,
        success: false,
      }
    }

    throw new Error("Failed to submit form")
  }
}
