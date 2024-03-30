import { BentoGrid, BentoGridItem } from "@/components/experience/bento-grid";

const Skeleton = () => (
	<div className="flex flex-1 w-full h-2/3 min-h-[6rem] rounded-xl bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-white/[0.2] bg-black"></div>
);

const items = [
	{
		title: "VWO - Winkler Prins Veendam",
		description: "September 2015 - July 2021 | Secondary Education, Finished with a 7,4.",
		header: <Skeleton />,
	},
	{
		title: "YammY Groningen - Freelance Graphic Designer",
		description: "July 2020 - Oktober 2020 | I made promotional material for the opening of the restaurant.",
		header: <Skeleton />,
	},
	{
		title: "Smulcentrum Veendam - Freelance Graphic Designer",
		description: "August 2020 - December 2020 | Here I made promotional material aswell!",
		header: <Skeleton />,
	},
	{
		title: "University of Twente - Technical Computer Science",
		description: "September 2021 - July 2022 | First year of higher education, unfinished.",
		header: <Skeleton />,
	},
	{
		title: "Saxion Hogeschool - HBO-ICT Software Engineering",
		description: "September 2022 - July 2026 | My Current education!",
		header: <Skeleton />,
	},
	{
		title: "S.V. Syntaxis - Secretary",
		description: "March 2023 - March 2024 | I did a board year for my study association during this time.",
		header: <Skeleton />,
	},
	{
		title: "Saxion Hogeschool - Student Amabassador",
		description: "March 2024 - Current | I am currently a student ambassador for my school.",
		header: <Skeleton />,
	},
	{
		title: "And more to come...",
	},
];

export default function Experience() {
	return (
		<BentoGrid className="px-12 pt-8">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={i === 4 || i === 5 || i === 6 || i === 7 ? "md:col-span-2" : ""}
				/>
			))}
			;
		</BentoGrid>
	);
}
