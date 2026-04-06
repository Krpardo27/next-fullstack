import Image from "next/image";

export default function Logo() {
  return <Image src="/logo.svg" alt="Logo" loading="eager" width={224} height={56} />;
}
