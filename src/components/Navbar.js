import React from'react';
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Logo from "@/images/Logo.png";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DialogContent,
  DialogTitle,
} from "@radix-ui/react-dialog";




export default function Component() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:bg-gray-800 shadow-md border-2 border-b-[#dadada]">
      <Link href="/" className="flex items-center gap-2"  >
        <Image src={Logo} alt='logo' height={10} width={60}  />
        <div className='flex flex-col'>
        <span className="text-base font-semibold text-blue-900">New Era IT Trainning &</span>
        <span className="text-base font-semibold text-blue-900">Education Consultancy</span>
        </div>
      </Link>
      <div className="hidden md:flex gap-4">
        <Link href={"/"} className="text-lg font-normal hover:underline underline-offset-4"  >
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <Link href="#" className="text-lg font-normal hover:underline underline-offset-4"  >
          Courses
          </Link>
          </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* later when you have to link use Link in dropdown menu item */}
                <Link href={"/computer-course"} passHref>
                <DropdownMenuItem>Computer Course</DropdownMenuItem>
                </Link>
                <Link href={"/bridge-course"} passHref>
                <DropdownMenuItem>Bridge Course</DropdownMenuItem>
                </Link>
                <Link href={"/tuition-class"} passHref>
                <DropdownMenuItem>Tuition Classes</DropdownMenuItem>
                </Link>
                <Link href={"/ielts-class"} passHref>
                <DropdownMenuItem>IELTS Classes</DropdownMenuItem>
                </Link>
                <Link href={"/japanese-class"} passHref>
                <DropdownMenuItem>Japanese Classes</DropdownMenuItem>
                </Link>
                <Link href={"/designing"} passHref>
                <DropdownMenuItem>Designing</DropdownMenuItem>
                </Link>
                <Link href={"/mobile-development"} passHref>
                <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                </Link>
                <Link href={"/web-development"} passHref>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        <Link href={"/blogs"} className="text-lg font-normal hover:underline underline-offset-4"  >
          Blogs
        </Link>
        <Link href={"/contact"} className="text-lg font-normal hover:underline underline-offset-4"  >
          Contact
        </Link>
        <Link href={"/form"}>
        <Button className="text-lg bg-blue-800 hover:bg-blue-950 text-white font-medium rounded-none transition-colors"  >
          Enroll Now
        </Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col mb-3 border-b-black">
          <DialogTitle>Menu</DialogTitle> {/* Removed VisuallyHidden */}
          <Link href={"/"} className="text-lg font-normal hover:underline underline-offset-4">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link href="#" className="text-lg font-normal hover:underline underline-offset-4">
                Courses
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <Link href={"/computer-course"} passHref>
                <DropdownMenuItem>Computer Course</DropdownMenuItem>
                </Link>
                <Link href={"/bridge-course"} passHref>
                <DropdownMenuItem>Bridge Course</DropdownMenuItem>
                </Link>
                <Link href={"/tuition-class"} passHref>
                <DropdownMenuItem>Tuition Classes</DropdownMenuItem>
                </Link>
                <Link href={"/ielts-class"} passHref>
                <DropdownMenuItem>IELTS Classes</DropdownMenuItem>
                </Link>
                <Link href={"/japanese-class"} passHref>
                <DropdownMenuItem>Japanese Classes</DropdownMenuItem>
                </Link>
                <Link href={"/designing"} passHref>
                <DropdownMenuItem>Designing</DropdownMenuItem>
                </Link>
                <Link href={"/mobile-development"} passHref>
                <DropdownMenuItem>Mobile Development</DropdownMenuItem>
                </Link>
                <Link href={"/web-development"} passHref>
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                </Link>
              {/* Other course links */}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={"/blogs"} className="text-lg font-normal hover:underline underline-offset-4">
            Blogs
          </Link>
          <Link href={"/contact"} className="text-lg font-normal hover:underline underline-offset-4">
            Contact
          </Link>
          <Link href={"/form"}>
              Enroll Now
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
    
  )
} 