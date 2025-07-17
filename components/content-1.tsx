import Image from "next/image";

const successStories = [
	{
		title: "Youth Training Initiative",
		description:
			"Successfully trained 800 youth in practical job skills, enhancing employability and technical expertise in the region.",
		impact: "800 Youth Trained",
		image: "/images/youth-training.jpg",
	},
	{
		title: "Ideas Project Initiative",
		description:
			"Empowered 300 youth through innovative ideas training program, fostering entrepreneurship and creativity.",
		impact: "300 Youth Trained",
		image: "/images/ideas-project.jpg",
	},
	{
		title: "Jalingo LG Official Website",
		description:
			"Developed and launched the official website for Jalingo Local Government, improving digital presence and citizen services.",
		impact: "Successfully Deployed",
		image: "/images/jalingo-lg.jpg",
	},
	{
		title: "Lake View College EMS",
		description:
			"Implemented comprehensive school management system for Lake View College of Education, streamlining administrative processes.",
		impact: "Education Management System",
		image: "/images/lakeview-college.jpg",
	},
];

export default function ContentSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
					Our Success Stories
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					{successStories.map((story, index) => (
						<div
							key={index}
							className="group rounded-xl border overflow-hidden hover:border-primary transition-colors"
						>
							<div className="relative h-48 w-full">
								<Image
									src={story.image}
									alt={story.title}
									fill
									className="object-cover transition-transform group-hover:scale-105"
									priority={index < 2}
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">
									{story.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{story.description}
								</p>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<span className="font-medium">Impact:</span> {story.impact}
								</div>
							</div>
						</div>
					))}

					<div className="md:col-span-2 text-center mt-8">
					</div>
				</div>
			</div>
		</section>
	);
}
