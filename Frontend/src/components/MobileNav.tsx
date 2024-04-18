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
          <span>Welcome to EduWeb.com!</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col">
          <div className="container flex flex-col gap-4 ">
            <Link
              to="/"
              className="text-base flex gap-2 items-center  font-bold tracking-tight text-black"
            >
              <HomeIcon />
              Home
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black"
            >
              <InfoIcon />
              About
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black"
            >
              <Book />
              Course
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black"
            >
              <RssIcon />
              Blog
            </Link>
            <Link
              to="/"
              className="text-base flex gap-2 items-center font-bold tracking-tight text-black"
            >
              <Contact />
              Contact
            </Link>
          </div>
          <Button className="flex flex-1 font-bold text-green-700 ">
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}