import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useMediaQuery } from "./hooks/use-media-query";
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
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import i18nya, { makeT } from "@/i18n";
import Terra from "@/components/terra.svg?react";
import Discord from "~icons/simple-icons/discord";
import GitHub from "~icons/simple-icons/github";
import Twitter from "~icons/simple-icons/twitter";
import Mastodon from "~icons/simple-icons/mastodon";
import Bluesky from "~icons/simple-icons/bluesky";
import GitHubSponsors from "~icons/simple-icons/githubsponsors";
import Kofi from "~icons/simple-icons/kofi";
import Liberapay from "~icons/simple-icons/liberapay";
import Menu from "~icons/lucide/menu";
import { LanguagePicker } from "./LanguagePicker";

export const Navbar = ({ lang }: { lang?: string }) => {
  const t = makeT(lang);
  const isMobile = useMediaQuery("not (width >= 48rem)");
  const nav = (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="not-md:flex-col not-md:items-start">
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <a
              href="https://docs.terrapkg.com"
              target="_blank"
              rel="noopener"
            >
              {t("docs")}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
            <a
              href="https://github.com/terrapkg/packages"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("sources")}
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("community")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://fyralabs.com/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Discord />
                    {t("discord")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://github.com/terrapkg/packages"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                    {t("github")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://bsky.app/profile/fyralabs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Bluesky />
                    {t("bluesky")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://fedi.fyralabs.com/@hq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mastodon />
                    {t("mastodon")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://twitter.com/teamfyralabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                    {t("twitter")}
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{t("sponsor")}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://github.com/sponsors/fyralabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubSponsors />
                    {t("github_sponsors")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://ko-fi.com/fyralabs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Kofi />
                    {t("kofi")}
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-row items-center gap-2"
                    href="https://liberapay.com/fyra"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Liberapay />
                    {t("liberapay")}
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <div className="flex justify-between p-8">
      <div className="flex gap-1 items-center grow basis-0">
        <Terra className="size-10" />
        <span className="text-lg font-semibold">Terra</span>
      </div>

      {isMobile
        ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>{t("navigation")}</SheetTitle>
                </SheetHeader>
              </VisuallyHidden>
              <div className="p-2">{nav}</div>
            </SheetContent>
          </Sheet>
        )
        : (
          <>
            {nav}
            <div className="grow basis-0" />
          </>
        )}

      <span className="px-2">
        <LanguagePicker currentLang={lang ?? i18nya.config.defaultLang} />
      </span>

      {/* <div className="gap-6 grow basis-0"> */}
      {
        /*<InputGroup className="max-w-2xs ml-auto">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon></InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </InputGroupAddon>
        </InputGroup>*/
      }
      {/*</div>*/}
    </div>
  );
};
