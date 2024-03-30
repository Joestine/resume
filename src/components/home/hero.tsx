"use client";

import { IBM_Plex_Mono } from "next/font/google";
import { TypewriterEffectSmooth } from "../ui/home/typewriter-effect";

const ibm_plex_mono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

const words = [
	{
		text: "A",
	},
	{
		text: "Developer",
	},
	{
		text: "who",
	},
	{
		text: "knows",
	},
	{
		text: "his",
	},
	{
		text: "way",
	},
	{
		text: "between",
	},
	{
		text: "the",
	},
	{
		text: "<html>",
		className: ibm_plex_mono.className,
	},
	{
		text: "tags.",
	},
];

export function Hero() {
	return (
		<div className={"flex flex-col items-center justify-center min-h-screen text-center"}>
			<header className="relative text-5xl md:text-8xl font-bold text-white text-center antialiased">
				Justin van der Laan
			</header>
			<h2 className="text-2xl md:text-3xl text-zinc-300 mt-2 antialiased">
				Software Engineering Student<br></br>Front-end Development
			</h2>
			<TypewriterEffectSmooth words={words} className="mt-32"></TypewriterEffectSmooth>
		</div>
	);
}
