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
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link to="/login">Signin</Link>
            <div className="grid gap-2 py-6">
              <Link to="/">Home</Link>
            </div>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link to="/">Home</Link>
            </NavigationMenuLink>
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

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
