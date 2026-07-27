import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-10 w-auto", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Altiora Consults"
      width={320}
      height={90}
      priority={priority}
      className={className}
    />
  );
}
