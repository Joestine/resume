import { Navbar } from "@/components/ui/navbar/navbar";
import { AuroraBackground } from "@/components/ui/utils/aurora-background";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Justin van der Laan",
	description: "Frontend Development",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuroraBackground>
					{children}
					<Navbar />{" "}
				</AuroraBackground>
			</body>
		</html>
	);
}
