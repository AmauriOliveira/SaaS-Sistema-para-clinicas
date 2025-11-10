'use client';

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

import { LogIn, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const session = null;

  const navItens: Array<{ href: string; label: string }> = [{ href: '#profissionais', label: 'Profissionais' }];

  const NavLinks = () => (
    <>
      {navItens.map(item => (
        <Button
          key={item.href}
          asChild
          onClick={() => setIsOpen(false)}
          className='bg-transparent hover:bg-transparent text-black shadow-none'
        >
          <Link className='text-base' href={item.href}>
            {item.label}
          </Link>
        </Button>
      ))}

      {session ? (
        <Link className='flex items-center justify-center gap-2' href='/dashboard'>
          Painel da Clinica
        </Link>
      ) : (
        <Button className='mx-4'>
          <LogIn />
          Fazer Login
        </Button>
      )}
    </>
  );

  return (
    <header className='fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <Link className='text-3xl font-bold text-zinc-900' href='/'>
          Odonto<span className='text-emerald-500'>PRO</span>
        </Link>
        <nav className='hidden md:flex items-center space-x-4'>
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' className='text-back hover:bg-transparent' size='icon'>
              <Menu className='w-6 h-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[240px] sm:w-[300px] z-9999'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Veja nossos links</SheetDescription>
            </SheetHeader>
            <nav className='flex flex-col space-y-4 mt-6'>
              <NavLinks />
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
