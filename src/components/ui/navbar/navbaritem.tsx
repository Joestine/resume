import Link from "next/link";

export function NavbarItem({ href, text }: { href: string; text: string }) {
	return (
		<Link href={href}>
			<div className="text-white hover:underline">{text}</div>
		</Link>
	);
}
