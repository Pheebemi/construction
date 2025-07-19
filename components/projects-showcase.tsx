"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const projects = [
	{
		title: "Lagos Business District Tower",
		description:
			"25-story modern office complex with sustainable design features",
		image: "/projects/business-tower.jpg",
		status: "Ongoing",
		location: "Lagos, Nigeria",
		completion: "2025",
		category: "Commercial",
	},
	{
		title: "Abuja Smart Industrial Park",
		description:
			"State-of-the-art manufacturing facility spanning 50 hectares",
		image: "/projects/industrial-park.jpg",
		status: "Completed",
		location: "Abuja, Nigeria",
		completion: "2023",
		category: "Industrial",
	},
	{
		title: "Port Harcourt Medical Center",
		description: "Modern healthcare facility with 200-bed capacity",
		image: "/projects/medical-center.jpg",
		status: "Ongoing",
		location: "Port Harcourt, Nigeria",
		completion: "2024",
		category: "Healthcare",
	},
	// Add more projects as needed
];

export default function ProjectsShowcase() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-6xl px-6">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl font-semibold lg:text-5xl mb-4"
					>
						Our Featured Projects
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						className="text-muted-foreground"
					>
						Delivering Excellence Across Nigeria
					</motion.p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="group overflow-hidden">
								<div className="relative h-64 overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-110"
									/>
									<div className="absolute top-4 right-4">
										<Badge
											variant={
												project.status === "Completed"
													? "default"
													: "secondary"
											}
										>
											{project.status}
										</Badge>
									</div>
								</div>
								<CardHeader>
									<h3 className="text-xl font-semibold">
										{project.title}
									</h3>
									<p className="text-muted-foreground text-sm">
										{project.description}
									</p>
								</CardHeader>
								<CardContent>
									<div className="flex items-center gap-4 text-sm text-muted-foreground">
										<div className="flex items-center gap-1">
											<MapPin className="h-4 w-4" />
											<span>{project.location}</span>
										</div>
										<div className="flex items-center gap-1">
											<Calendar className="h-4 w-4" />
											<span>{project.completion}</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
