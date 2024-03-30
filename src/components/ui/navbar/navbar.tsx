"use client";
import { BackgroundGradient } from "../utils/background-gradient";
import { NavbarItem } from "./navbaritem";

export function Navbar() {
	return (
		<nav className="max-w-md md:max-w-3xl fixed bottom-[-20px] left-0 right-0 mx-auto">
			<BackgroundGradient className="flex gap-10 justify-center items-center rounded-[22px] h-24 max-w-md md:max-w-4xl p-2 sm:p-10 bg-zinc-900">
				<NavbarItem href="/" text="Home"></NavbarItem>
				<NavbarItem href="./about" text="About Me"></NavbarItem>
				<NavbarItem href="./experience" text="Experience"></NavbarItem>
				<NavbarItem href="./education" text="Education"></NavbarItem>
				<NavbarItem href="./contact" text="Contact"></NavbarItem>
			</BackgroundGradient>
		</nav>
	);
}
