"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const events = [
	{
		title: "Youth Tech Training 2024",
		description:
			"Join our intensive tech training program aimed at empowering 800 youth with practical job skills in programming, design, and digital marketing.",
		date: "March 15-30, 2024",
		location: "Jalingo Tech Hub",
		image: "/images/youth-tech.jpg",
		status: "Upcoming",
	},
	{
		title: "Digital Innovation Workshop",
		description:
			"A comprehensive workshop focusing on innovative ideas and digital entrepreneurship for 300 aspiring tech entrepreneurs.",
		date: "April 5-7, 2024",
		location: "Lake View Conference Center",
		image: "/images/innovation.jpg",
		status: "Registration Open",
	},
	{
		title: "Web Development Bootcamp",
		description:
			"Intensive 2-week bootcamp covering modern web development technologies and best practices.",
		date: "May 1-14, 2024",
		location: "AlGaddaf Digital Hub",
		image: "/images/webdev.jpg",
		status: "Coming Soon",
	},
	{
		title: "Design Thinking Masterclass",
		description:
			"Learn the principles of design thinking and how to apply them to solve real-world problems.",
		date: "June 2024",
		location: "Virtual Event",
		image: "/images/design.jpg",
		status: "Planning",
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.1,
		},
	},
};

const cardVariants: Variants = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
};

export default function EventsSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={containerVariants}
					className="text-center"
				>
					<h2 className="text-4xl font-semibold lg:text-5xl mb-4">
						Upcoming Events
					</h2>
					<p className="text-muted-foreground">
						Join us in shaping the future of technology
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid gap-8 md:grid-cols-2 lg:gap-12"
				>
					{events.map((event, index) => (
						<motion.div
							key={index}
							variants={cardVariants}
							whileHover={{ scale: 1.02 }}
							className="group rounded-xl border overflow-hidden hover:border-primary transition-all duration-300"
						>
							<div className="relative h-48 w-full">
								<Image
									src={event.image}
									alt={event.title}
									fill
									className="object-cover transition-transform group-hover:scale-105"
									priority={index < 2}
								/>
								<div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
									{event.status}
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{event.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{event.description}
								</p>
								<div className="flex flex-col gap-2 text-sm text-muted-foreground">
									<div className="flex items-center gap-2">
										<span>{event.date}</span>
									</div>
									<div className="flex items-center gap-2">
										<span>{event.location}</span>
									</div>
								</div>
								<div className="mt-6">
									<Button
										asChild
										variant="outline"
										className="w-full"
									>
										<Link
											href={`/events/${event.title
												.toLowerCase()
												.replace(/\s+/g, "-")}`}
										>
											Learn More
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
