"use client";

import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";
import { AuroraBackground } from "../ui/utils/aurora-background";

const ibm_plex_mono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

export function Hero() {
	return (
		<AuroraBackground>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				exit={{ opacity: 0 }}
				className={"flex flex-col items-center justify-center min-h-screen text-center"}>
				<header className="relative text-5xl md:text-8xl font-bold text-white text-center antialiased">
					Justin van der Laan
				</header>
				<h2 className="text-2xl md:text-3xl text-zinc-300 mt-2 antialiased">
					Software Engineering Student<br></br>Front-end Development
				</h2>
				<h1 className="text-3xl md:text-4xl font-bold text-white mt-32 antialiased">
					A Developer who knows his way<br></br> between the{" "}
					<span className={ibm_plex_mono.className}>&lt;html&gt;</span> tags.
				</h1>
			</motion.div>
		</AuroraBackground>
	);
}
