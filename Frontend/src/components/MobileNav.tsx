import { Book, Contact, HomeIcon, InfoIcon, Menu, RssIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-700" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>
          <span className="text-green-700">Welcome to EduWeb.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col py-4   ">
          <div className="container flex flex-col gap-4 ">
            <Link
              to="/"
              className="text-base flex gap-2 items-center  font-bold tracking-tight text-black hover:text-green-700"
            >
              <HomeIcon />
              Home
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black hover:text-green-700"
            >
              <InfoIcon />
              About
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black hover:text-green-700"
            >
              <Book />
              Course
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black hover:text-green-700"
            >
              <RssIcon />
              Blog
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black hover:text-green-700"
            >
              <Contact />
              Contact
            </Link>
          </div>
          <Button className="flex flex-1 font-bold bg-green-700 mt-4">
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
