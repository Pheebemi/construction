"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero8-header";
import { motion, AnimatePresence, Variants } from "framer-motion";

const carouselImages = [
  "/tech1.JPG",
  "/tech2.JPG",
  "/tech3.JPG",
];

// Define properly typed variants
const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 1.1,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <HeroHeader />
      <main className="relative min-h-screen">
        <section className="relative min-h-screen">
          {/* Background Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="absolute inset-0 z-10 bg-black/60" />
              <Image
                src={carouselImages[currentImage]}
                alt={`Slide ${currentImage + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="relative z-20 mx-auto max-w-6xl px-6 pt-32 min-h-screen flex items-center">
            <div className="max-w-2xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <span className="text-white inline-block mb-4 font-semibold ">
                  Welcome to AlGaddafDigitalHub
                </span>
              </motion.div>

              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              >
                Innovating the Future of Technology
              </motion.h1>

              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
              >
                Empowering businesses through digital transformation, cutting-edge
                solutions, and innovative technology services.
              </motion.p>

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white hover:bg-primary/90 text-black px-8"
                >
                  <Link href="#services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white dark:text-white  hover:bg-white hover:text-black"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2" />
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
