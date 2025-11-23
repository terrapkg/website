import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import Terra from "@/components/terra.svg?react";

export const Navbar = () => {
  return (
    <div className="flex justify-between p-8">
      <div className="flex gap-1 items-center grow basis-0">
        <Terra className="size-10" />
        <span className="text-lg font-semibold">Terra</span>
      </div>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Docs
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sources
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Community</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink>Discord</NavigationMenuLink>
                  <NavigationMenuLink>GitHub</NavigationMenuLink>
                  <NavigationMenuLink>Mastodon</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Sponsor</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink>GitHub Sponsors</NavigationMenuLink>
                  <NavigationMenuLink>Ko-fi</NavigationMenuLink>
                  <NavigationMenuLink>LiberaPay</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="gap-6 grow basis-0">
        <InputGroup className="max-w-2xs ml-auto">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>{/*<SearchIcon />*/}</InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};
