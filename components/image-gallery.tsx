"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/construction-1.jpg",
    title: "Site Development Phase",
    category: "In Progress"
  },
  {
    src: "/gallery/construction-2.jpg",
    title: "Foundation Work",
    category: "Completed"
  },
  {
    src: "/gallery/construction-3.jpg",
    title: "Structural Engineering",
    category: "In Progress"
  },
  {
    src: "/gallery/construction-4.jpg",
    title: "Interior Finishing",
    category: "Completed"
  },
  {
    src: "/gallery/construction-5.jpg",
    title: "Exterior Design",
    category: "In Progress"
  },
  {
    src: "/gallery/construction-6.jpg",
    title: "Safety Inspection",
    category: "Completed"
  }
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-32 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl mb-4">
            Construction in Action
          </h2>
          <p className="text-muted-foreground">
            Witnessing the transformation from vision to reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              className="cursor-pointer group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative w-full max-w-5xl aspect-video">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
