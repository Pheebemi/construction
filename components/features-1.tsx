"use client";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building2, Hammer, HardHat, Factory, ShieldCheck, Users } from "lucide-react";
import { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

export default function Features() {
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Why Choose Sapma International?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Excellence in Construction, Engineering, and Infrastructure Development
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"
        >
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Building2 className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Commercial Construction</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                State-of-the-art commercial buildings, offices, and retail spaces with modern amenities and sustainable designs.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Factory className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Industrial Projects</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Specialized industrial facilities, warehouses, and manufacturing plants built to precise specifications.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <HardHat className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Expert Team</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Highly skilled professionals with decades of combined experience in construction and engineering.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Hammer className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Renovation Services</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete renovation and modernization services for existing structures with minimal disruption.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Quality Assurance</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rigorous quality control standards and safety measures throughout every project phase.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Users className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Client Support</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Dedicated project managers and support teams ensuring clear communication and timely delivery.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
