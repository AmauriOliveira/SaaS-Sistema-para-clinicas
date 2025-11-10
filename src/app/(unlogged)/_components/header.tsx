import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import { Menu } from 'lucide-react';
import Link from 'next/link';


export function Header() {
  return (
    <header className='fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white shadow-md'>
      <div className=' container mx-auto flex items-center justify-between'>
        <Link className='text-3xl font-bold text-zinc-900' href='/'>
          Odonto<span className='text-emerald-500'>PRO</span>
        </Link>
        <nav className='hidden md:flex items-center'>
          <a href='#'>Profissionais</a>
        </nav>
        <Sheet>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' className='text-back hover:bg-transparent' size='icon'>
              <Menu className='w-6 h-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[200px] sm:w-[300px] z-9999'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Veja nossos links</SheetDescription>
            </SheetHeader>
            <nav>
              <a href='#'>Profissionais</a>
            </nav>
            <SheetFooter>
              <Button type='submit'>Save changes</Button>
              <SheetClose asChild>
                <Button variant='outline'>Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
