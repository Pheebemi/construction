"use client";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code2, Paintbrush, Database, FileCode2, Globe2, Cpu } from "lucide-react";
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

// const cardVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { 
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5
//     }
//   }
// };

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
            Why Choose AlGaddaf Digital Hub?
          </h2>
          <p className="mt-4">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>
        <motion.div 
          variants={containerVariants}
          className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16"
        >
          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Code2 className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Programming Services</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Custom software development, web applications, and mobile app
                solutions using cutting-edge technologies.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Paintbrush className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Graphic Design Services</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Professional branding, UI/UX design, and visual content creation
                that captivates your audience.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Database className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Digital Fundamentals</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Core digital infrastructure, cloud solutions, and technical
                consulting for your business growth.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <FileCode2 className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Software Contracting</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Dedicated development teams and project-based solutions for your
                software needs.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Globe2 className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">Digital Marketing</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                SEO optimization, social media management, and digital marketing
                strategies that drive results.
              </p>
            </CardContent>
          </Card>

          <Card className="group shadow-zinc-950/5">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Cpu className="size-6" aria-hidden />
              </CardDecorator>
              <h3 className="mt-6 font-medium">IT Consulting</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Expert guidance on digital transformation, technology stack
                selection, and IT strategy.
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
