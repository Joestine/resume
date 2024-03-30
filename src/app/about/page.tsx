"use client";

import { PortraitImage } from "@/components/about/portraitimage";
import { TextContent } from "@/components/about/textcontent";
import portrait from "/public/portrait.jpeg";

export default function About() {
	return (
		<div className="flex justify-center gap-32 mt-20 p-16">
			<PortraitImage src={portrait} width={640} alt="Portrait Image of Justin" />
			<TextContent />
		</div>
	);
}
