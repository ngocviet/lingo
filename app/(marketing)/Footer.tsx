import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/au.svg"
            alt="Australia"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Australia
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/de.svg"
            alt="Germany"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Germany
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/vn.svg"
            alt="VietNam"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Viet Nam
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/ru.svg"
            alt="Russia"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Russia
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japan"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japan
        </Button>
      </div>
    </footer>
  );
};
