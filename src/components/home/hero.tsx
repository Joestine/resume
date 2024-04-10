"use client";

import { fadeInOut } from "@/utils/fadeinout";
import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";
import { TypewriterEffectSmooth } from "../ui/home/typewriter-effect";

const ibm_plex_mono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

const words: { text: string; className?: string }[] = [
	"A",
	"Developer",
	"who",
	"knows",
	"his",
	"way",
	"between",
	"the",
	"<html>",
	"tags.",
].map((text) => ({ text }));

words[words.length - 2].className = ibm_plex_mono.className;

export function Hero() {
	return (
		<motion.div
			initial="initial"
			animate="animate"
			exit="exit"
			variants={fadeInOut}
			className={"flex flex-col items-center justify-center min-h-screen text-center"}>
			<header className="relative text-5xl md:text-8xl font-bold text-white text-center antialiased">
				Justin van der Laan
			</header>
			<h2 className="text-2xl md:text-3xl text-zinc-300 mt-2 antialiased">
				Software Engineering Student<br></br>Front-end Development
			</h2>
			<TypewriterEffectSmooth words={words} className="mt-32"></TypewriterEffectSmooth>
		</motion.div>
	);
}
