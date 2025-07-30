"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState, useTransition } from "react"
import { submitContactForm } from "../actions"

interface FormState {
  message: string
  type: "success" | "error" | null
}

export default function ContactForm() {
  const [isPending, startTransition] = useTransition()
  const [state, setState] = useState<FormState>({ message: "", type: null })

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      try {
        const response = await submitContactForm(formData)
        setState({ message: response.message, type: "success" })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } catch (error) {
        setState({
          message: "Something went wrong. Please try again.",
          type: "error",
        })
      }
    })
  }

  return (
    <Card className="p-6 shadow-lg">
      <form id="contact-form" action={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your full name"
            className="transition-colors focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
            className="transition-colors focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell me about your project or just say hello!"
            className="min-h-[120px] transition-colors focus:ring-2 focus:ring-primary resize-none"
          />
        </div>
        <Button type="submit" className="w-full transition-all hover:scale-[1.02]" disabled={isPending}>
          {isPending ? "Sending..." : "Send Message"}
        </Button>
        {state.message && (
          <p
            className={`text-sm text-center mt-4 ${
              state.type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </Card>
  )
}
