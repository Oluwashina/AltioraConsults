import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

export default function Logo({ className = "h-16 w-auto md:h-20", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo-white.png"
      alt="Altiora Consults"
      width={612}
      height={408}
      priority={priority}
      className={className}
    />
  );
}
