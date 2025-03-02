import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button";


function Navbar() {
    return (
        <header className="px-5 py-5 bg-secondary">
        <div className="container mx-auto w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold text-blue-500">MarketSight</h2>
          <NavigationMenu className="lg:gap-10">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <a href="/" className="text-base text-foreground font-semibold leading-relaxed transition-colors duration-300 ease-out hover:text-blue-500">home</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/#categories" className="text-base text-foreground font-semibold leading-relaxed transition-colors duration-300 ease-out hover:text-blue-500">categories</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/#articles" className="text-base text-foreground font-semibold leading-relaxed transition-colors duration-300 ease-out hover:text-blue-500">article</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/" className="text-base text-foreground font-semibold leading-relaxed transition-colors duration-300 ease-out hover:text-blue-500">others</a>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="gap-2 hidden lg:flex">
              <NavigationMenuItem>
                <Button className="bg-blue-500 transition-all duration-300 hover:bg-blue-600">signup</Button>
              </NavigationMenuItem>
              <hr className="border border-black py-3"/>
              <NavigationMenuItem>
                <Button className="bg-transparent text-foreground ring-2 ring-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-secondary">signin</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    )
}

export default Navbar;