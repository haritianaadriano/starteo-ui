import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <header className="flex h-20 shrink-0 px-4 bg-slate-200">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              <Link to="/login">Signin</Link>
            </div>
            <div className="grid gap-2 py-6">
              <Link to="/">Home</Link>
            </div>
            <div className="grid gap-2 py-6">
              <Link to="/profil">Profil</Link>
            </div>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden w-full md:block md:w-auto">
          <NavigationMenuList className="font-medium p-4 md:space-x-8 rtl:space-x-reverse bg-slate-200">
            <NavigationMenuLink
              className="block py-2 px-3 text-gray-900 rounded md:hover:text-slate-500"
              asChild
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
            <div>
              <NavigationMenuLink
                className="block py-2 px-3 text-gray-900 rounded md:hover:text-slate-500"
                asChild
              >
                <Link to="/login">Signin</Link>
              </NavigationMenuLink>
            </div>
            <div>
              <NavigationMenuLink
                className="block py-2 px-3 text-gray-900 rounded md:hover:text-slate-500"
                asChild
              >
                <Link to="/profil">Profil</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      {children}
    </>
  );
}

function MenuIcon(props: any) {
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
  );
}
