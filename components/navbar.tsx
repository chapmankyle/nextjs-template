import Link from "next/link"

import {
  Menu03Icon as MenuIcon,
  Rocket01Icon as MainIcon,
} from "hugeicons-react"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <MainIcon className="h-6 w-6" />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Menu with website links
            </SheetDescription>
          </SheetHeader>
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MainIcon className="h-6 w-6" />
            <span className="sr-only">Next Starter</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
            >
              Home
            </Link>
            <div className="bottom-0">
              <ModeToggle />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <MainIcon className="h-6 w-6" />
        <span className="sr-only">Next Starter</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6">
        <Button variant="outline" asChild>
          <Link
            href="#"
            className="group inline-flex w-max items-center justify-center text-sm font-medium transition-colors focus:outline-none hover:text-primary hover:bg-primary-foreground"
            prefetch={false}
          >
            Home
          </Link>
        </Button>
        <ModeToggle />
      </nav>
    </header>
  )
}
