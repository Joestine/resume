import { BackgroundGradient } from "@/components/ui/utils/background-gradient";
import Image, { StaticImageData } from "next/image";

interface PortraitImageProps {
	src: StaticImageData;
	width: number;
	alt: string;
}

export function PortraitImage({ src, width, alt }: PortraitImageProps) {
	return (
		<BackgroundGradient containerClassName="w-fit rounded-[22px] w-fit bg-zinc-900">
			<Image src={src} width={width} alt={alt} className="rounded-[22px]" />
		</BackgroundGradient>
	);
}
