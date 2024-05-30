import React from 'react'
import { Menu } from './Menu'
import { SheetTrigger, SheetContent, Sheet } from '../ui/sheet'
import { Separator } from "../ui/separator"
import Image from 'next/image'

export const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          Logo
          <Separator className="border border-gray-50" />
          <Menu />
        </SheetContent>
      </Sheet>
    </nav>
  )
}
