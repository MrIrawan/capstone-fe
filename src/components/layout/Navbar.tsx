import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem
} from "@/components/ui/navigation-menu"


function Navbar() {
    return (
        <header className="px-5 py-5 bg-secondary">
        <div className="container mx-auto w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-500">MarketSight</h2>
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem className="bg-blue-500 px-4 py-2 rounded-sm">
                <a href="/" className="text-base text-secondary font-semibold leading-relaxed">home</a>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 py-2 rounded-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-500">
                <a href="/#categories" className="text-base text-foreground font-semibold leading-relaxed">categories</a>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 py-2 rounded-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-500">
                <a href="/#articles" className="text-base text-foreground font-semibold leading-relaxed">article</a>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4 py-2 rounded-sm transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-500">
                <a href="/" className="text-base text-foreground font-semibold leading-relaxed">others</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    )
}

export default Navbar;