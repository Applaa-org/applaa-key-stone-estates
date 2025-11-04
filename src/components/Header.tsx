import { Link } from '@tanstack/react-router';
import { Building, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/about', label: 'About Us' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => (
  <Link
    to={href}
    className={cn(
      "font-medium transition-colors",
      isMobile 
        ? "block w-full p-4 text-lg text-primary hover:bg-secondary"
        : "text-primary-foreground hover:text-amber-300"
    )}
    activeProps={{ className: isMobile ? "bg-secondary font-bold" : "text-amber-300 font-bold" }}
  >
    {label}
  </Link>
);

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-amber-400 p-2 rounded-md">
              <Building className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-primary-foreground tracking-tight">
              Key Stone Estates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div className="hidden md:block">
             <Button asChild variant="secondary" className="bg-amber-400 hover:bg-amber-500 text-primary font-bold">
                <Link to="/contact">Request a Valuation</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-4 border-b">
                     <Link to="/" className="flex items-center gap-2">
                        <div className="bg-primary p-2 rounded-md">
                          <Building className="h-6 w-6 text-amber-400" />
                        </div>
                        <span className="text-xl font-bold text-primary tracking-tight">
                          Key Stone Estates
                        </span>
                      </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon">
                          <X className="h-6 w-6 text-primary" />
                        </Button>
                    </SheetClose>
                  </div>
                  <nav className="flex-grow mt-6">
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                        <NavLink href={link.href} label={link.label} isMobile />
                       </SheetClose>
                    ))}
                  </nav>
                   <div className="p-4 border-t">
                     <SheetClose asChild>
                        <Button asChild className="w-full bg-amber-400 hover:bg-amber-500 text-primary font-bold">
                            <Link to="/contact">Request a Valuation</Link>
                        </Button>
                     </SheetClose>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};