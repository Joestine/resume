"use client";

import { HoverEffect } from "@/components/contact/card-hover-effect";
import { fadeInOut } from "@/utils/fadeinout";
import { motion } from "framer-motion";

const channels = [
	{
		title: "LinkedIn",
		description: "The professional Social Media!",
		link: "https://www.linkedin.com/in/justin-van-der-laan-45679b262/",
	},
	{
		title: "E-mail",
		description: "Come in direct contact with me by mailing justin@vanderlaan.live!",
		link: "mailto:justin@vanderlaan.live",
	},
	{
		title: "Instagram",
		description: "This is where I post the fun stuff in my life!",
		link: "https://www.instagram.com/justin.laan?igsh=MW4zaHVxMG5idXdqMg==",
	},
	{
		title: "Github",
		description: "How else can I do version control?",
		link: "https://github.com/Joestine",
	},
];

export default function Contact() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeInOut}
			className="max-w-5xl mx-auto my-32 px-8">
			<HoverEffect items={channels}></HoverEffect>
		</motion.div>
	);
}
