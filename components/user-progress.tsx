import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {
  activeCourse: { imageSrc: string; title: string };
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};
const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/course">
        <Button>
          <Image
            className="rounded-md"
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
          />
        </Button>
      </Link>
    </div>
  );
};

export default UserProgress;
