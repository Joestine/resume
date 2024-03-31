"use client";
import { BackgroundGradient } from "../utils/background-gradient";
import { NavbarItem } from "./navbaritem";

export function Navbar() {
	return (
		<nav className="max-w-sm md:max-w-3xl fixed top-[-20px] md:top-auto md:bottom-[-20px] left-0 right-0 mx-auto">
			<BackgroundGradient className="flex gap-10 justify-center items-center rounded-[22px] h-24 max-w-md md:max-w-4xl p-2  bg-zinc-900">
				<NavbarItem href="/" text="Home"></NavbarItem>
				<NavbarItem href="./about" text="About Me"></NavbarItem>
				<NavbarItem href="./experience" text="Experience"></NavbarItem>
				<NavbarItem href="./contact" text="Contact"></NavbarItem>
			</BackgroundGradient>
		</nav>
	);
}
