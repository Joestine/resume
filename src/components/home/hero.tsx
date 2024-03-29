import { motion } from "framer-motion";
import { IBM_Plex_Mono } from "next/font/google";

const ibm_plex_mono = IBM_Plex_Mono({ weight: ["700"], subsets: ["latin"] });

export function Hero() {
	return (
		<motion.div className={`flex-col text-center mt-64`}>
			<motion.header
				className="relative text-3xl md:text-8xl font-bold dark:text-white text-center"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}>
				Justin van der Laan
			</motion.header>
			<motion.h2
				className="text-1xl md:text-3xl dark:text-zinc-300 mt-2"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}>
				Software Engineering Student<br></br>Front-end Development
			</motion.h2>
			<motion.h1
				className="text-2xl md:text-4xl font-bold dark:text-white mt-32"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.9, ease: "easeInOut" }}>
				A Developer who knows his way<br></br> between the{" "}
				<span className={ibm_plex_mono.className}>&lt;html&gt;</span> tags.
			</motion.h1>
		</motion.div>
	);
}
