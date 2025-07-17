"use client";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function ContactSection() {
  return (
    <section className="py-16 md:py-32">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-6xl px-6"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold">Get in Touch</h2>
              <p className="text-muted-foreground max-w-md">
                Have a question or project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-muted-foreground">49 Barde Way inside Technology Incubation centre Jalingo, Taraba State</p>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email Us</h3>
                  <a href="mailto:contact@algaddafdigitalhub.com" className="text-muted-foreground hover:text-primary">
                    contact
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Call Us</h3>
                  <a href="tel:+2341234567890" className="text-muted-foreground hover:text-primary">
                    +234 
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Working Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9AM - 5PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={itemVariants}
            className="bg-card rounded-2xl p-8 border shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">First Name</label>
                  <input 
                    type="text" 
                    className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Last Name</label>
                  <input 
                    type="text" 
                    className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Subject</label>
                <input 
                  type="text" 
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea 
                  rows={4} 
                  className="mt-2 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}