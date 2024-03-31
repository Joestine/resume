"use client";

import { PortraitImage } from "@/components/about/portraitimage";
import { TextContent } from "@/components/about/textcontent";
import { fadeInOut } from "@/utils/fadeinout";
import { motion } from "framer-motion";
import portrait from "/public/portrait.jpeg";

export default function About() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeInOut}
			className="flex flex-col h md:flex-row md:justify-center p-12 mt-32 md:m-0 md:p-16 items-center gap-8 md:gap-32 md:h-screen">
			<PortraitImage src={portrait} width={520} alt="Portrait Image of Justin" />
			<TextContent />
		</motion.div>
	);
}
