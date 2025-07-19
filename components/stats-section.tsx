"use client";
import { motion } from "framer-motion";
import { Building2, Users2, Trophy, Calendar } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    title: "Projects Completed",
    value: 200,
    icon: Building2,
    suffix: "+",
  },
  {
    title: "Professional Team",
    value: 150,
    icon: Users2,
    suffix: "+",
  },
  {
    title: "Awards Won",
    value: 25,
    icon: Trophy,
    suffix: "+",
  },
  {
    title: "Years Experience",
    value: 15,
    icon: Calendar,
    suffix: "+",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl font-bold md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-muted-foreground">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
