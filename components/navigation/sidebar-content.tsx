import Image from "next/image";
import DayaTaniLogo from "../../public/dayatani.png";
import Link from "next/link";
import { Bot, Folders, ShieldPlus, Sprout, UserRound } from "lucide-react";

export const CustomHeader = () => {
  return (
    <Link className="flex w-full gap-4 justify-center items-center" href={"/"}>
      <div className="w-fit">
        <Image
          src={DayaTaniLogo}
          alt={"dayatani logo"}
          className="object-contain"
        />
      </div>
      <span className="text-2xl font-semibold text-green0">DayaTani</span>
    </Link>
  );
};

export const SidebarContent = () => {
  return (
    <div className="h-full">
      <CustomHeader />
      <div className="mt-10 flex flex-col gap-8">
        <Link href={"/"} className="flex gap-2">
          <UserRound />
          <p className="font-semibold">Farmers</p>
        </Link>
        <Link href={""} className="flex gap-2">
          <ShieldPlus />
          <p className="font-semibold">Crop Detection</p>
        </Link>
        <Link href={""} className="flex gap-2">
          <Sprout />
          <p className="font-semibold">Crop Images</p>
        </Link>
        <Link href={""} className="flex gap-2">
          <Bot />
          <p className="font-semibold">ChatBot</p>
        </Link>
        <Link href={""} className="flex gap-2">
          <Folders />
          <p className="font-semibold">Assets</p>
        </Link>
      </div>
    </div>
  );
};
