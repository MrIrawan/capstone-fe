import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <>
      <header className="bg-primary px-5 py-5 flex items-center justify-between lg:justify-around">
        <div>
          <h2 className="text-2xl text-secondary font-semibold">Capstone Navbar</h2>
        </div>

        <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <NavigationMenuTrigger icon={false} className="bg-transparent text-secondary data-[state=open]:bg-foreground data-[state=open]:text-secondary hover:bg-transparent hover:text-secondary">
                  <a href="#">home</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-secondary data-[state=open]:bg-foreground data-[state=open]:text-secondary hover:bg-transparent hover:text-secondary">
                  <a href="#">about</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-secondary data-[state=open]:bg-foreground data-[state=open]:text-secondary hover:bg-transparent hover:text-secondary">
                  <a href="#">contact</a>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
      </header>
    </>
  );
}
