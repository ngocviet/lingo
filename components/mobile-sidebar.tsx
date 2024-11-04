import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <SheetTitle className="visually-hidden hidden">
          Sidebar Navigation
        </SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
