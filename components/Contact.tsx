"use client";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const locations = [
  {
    title: "Head Office",
    address: "49 Barde Way, Technology Incubation Centre",
    city: "Jalingo, Taraba State",
    phone: "+234 XXX XXX XXXX",
    email: "info@sapmaint.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM"
  },
  {
    title: "Lagos Branch",
    address: "Victoria Island",
    city: "Lagos State",
    phone: "+234 XXX XXX XXXX",
    email: "lagos@sapmaint.com",
    hours: "Mon-Fri: 8:00 AM - 6:00 PM"
  }
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="relative py-16 md:py-32" id="contact">
      <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/50" />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-6"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold">Get in Touch</h2>
              <p className="text-muted-foreground max-w-md">
                Ready to start your construction project? Contact us for expert consultation and competitive quotes.
              </p>
            </div>

            <div className="space-y-6">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="rounded-lg border bg-card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">{location.title}</h3>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div>
                        <p>{location.address}</p>
                        <p>{location.city}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <a href={`tel:${location.phone}`} className="hover:text-primary">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a href={`mailto:${location.email}`} className="hover:text-primary">
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <span>{location.hours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border bg-card p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <input 
                    type="text"
                    required 
                    className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input 
                  type="email"
                  required 
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Phone</label>
                <input 
                  type="tel"
                  required 
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Project Type</label>
                <select 
                  required
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a project type</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="residential">Residential Construction</option>
                  <option value="industrial">Industrial Construction</option>
                  <option value="renovation">Renovation</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea 
                  rows={4}
                  required 
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}