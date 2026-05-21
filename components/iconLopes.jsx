import Image from "next/image";
import iconLopesSvg from "@/public/iconLopes.svg";

export default function iconLopes() {
  return <Image src={iconLopesSvg} alt="Logo" />;
}
