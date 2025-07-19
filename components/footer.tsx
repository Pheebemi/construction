"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
	{ title: "About Us", href: "#about" },
	{ title: "Services", href: "#services" },
	{ title: "Projects", href: "#projects" },
	{ title: "Gallery", href: "#gallery" },
	{ title: "Contact", href: "#contact" },
];

const services = [
	"Commercial Construction",
	"Industrial Projects",
	"Residential Development",
	"Interior Design",
	"Renovation",
	"Project Management",
];

export default function FooterSection() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-zinc-50 dark:bg-zinc-900/50 border-t">
			<div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{/* Company Info */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<Logo />
							<span className="font-semibold text-lg">Sapma International</span>
						</Link>
						<p className="text-muted-foreground text-sm max-w-xs">
							Leading construction company in Nigeria, delivering excellence in
							building and infrastructure development since 2008.
						</p>
						<div className="flex gap-4">
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Facebook className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Twitter className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Instagram className="h-5 w-5" />
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-primary"
							>
								<Linkedin className="h-5 w-5" />
							</Link>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-muted-foreground hover:text-primary text-sm"
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h3 className="font-semibold mb-4">Our Services</h3>
						<ul className="space-y-2">
							{services.map((service, index) => (
								<li key={index} className="text-muted-foreground text-sm">
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h3 className="font-semibold mb-4">Contact Info</h3>
						<ul className="space-y-3">
							<li className="flex items-start gap-3 text-sm text-muted-foreground">
								<MapPin className="h-5 w-5 shrink-0" />
								<span>
									49 Barde Way, Technology Incubation Centre, Jalingo, Taraba
									State
								</span>
							</li>
							<li className="flex items-center gap-3 text-sm text-muted-foreground">
								<Phone className="h-5 w-5" />
								<Link
									href="tel:+234XXXXXXXX"
									className="hover:text-primary"
								>
									+234 XXX XXX XXXX
								</Link>
							</li>
							<li className="flex items-center gap-3 text-sm text-muted-foreground">
								<Mail className="h-5 w-5" />
								<Link
									href="mailto:info@sapmaint.com"
									className="hover:text-primary"
								>
									info@sapmaint.com
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
					<p>
						© {currentYear} Sapma International Nig. LTD. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
        