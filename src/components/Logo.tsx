import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Viano — home" className={`inline-block ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Viano"
        width={240}
        height={120}
        preload
        className="h-auto w-full"
      />
    </Link>
  );
}
