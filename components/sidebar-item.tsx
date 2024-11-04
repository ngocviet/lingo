"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  label: string;
  inconSrc: string;
  href: string;
};

const SidebarItem = ({ label, inconSrc, href }: Props) => {
  const pathName = usePathname();
  const acctive = pathName === href;

  return (
    <Button
      variant={acctive ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={inconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
};

export default SidebarItem;
