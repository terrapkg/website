import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";
import { Star } from "lucide-react";
import { makeT } from "@/i18n";
import { cn } from "@/lib/utils";
import Heart from "~icons/bi/heart-fill";
import KoFi from "~icons/simple-icons/kofi";
import Liberapay from "~icons/simple-icons/liberapay";
import GitHub from "~icons/simple-icons/github";


const snippet =
  "sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release";

const StarLink = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <a
    href="https://github.com/terrapkg/packages"
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "inline-flex h-9 shrink-0 items-center justify-center gap-2 border border-yellow-500/40 bg-yellow-400/10 px-3 text-sm font-medium text-yellow-400 transition-colors hover:bg-yellow-400/20 hover:text-yellow-300",
      className,
    )}
  >
    <Star className="size-4 fill-current" />
    <span className="sr-only sm:not-sr-only">{label}</span>
  </a>
);

export const InstallDialog = ({ lang }: { lang?: string }) => {
  const t = makeT(lang);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer">
          {t("install")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("install_terra")}</DialogTitle>
          <DialogDescription>{t("install_desc")}</DialogDescription>
          {/*<DialogDescription>
            Please select your distro. Don't see yours? Make a request here.
          </DialogDescription>*/}
        </DialogHeader>

        {/* For when we have installable release packages */}
        {/*<div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Distro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Fedora</SelectItem>
              <SelectItem value="dark">Enterprise Linux</SelectItem>
              <SelectItem value="um">Ultramarine</SelectItem>
              <SelectItem value="bazzite">Bazzite/Universial Blue</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Rawhide</SelectItem>
              <SelectItem value="dark">43 (latest)</SelectItem>
              <SelectItem value="um">42</SelectItem>
              <SelectItem value="bazzite">41</SelectItem>
            </SelectContent>
          </Select>
        </div>*/}

        <div className="no-scrollbar overflow-x-auto bg-card text-card-foreground p-2 rounded">
          <pre>
            <code>{snippet}</code>
          </pre>
        </div>

        <DialogFooter className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center justify-between sm:w-auto">
          <div className="z-10 flex items-center">
            <a
              className="group relative inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-l-md bg-gradient-to-br from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-pink-600"
              href="https://github.com/sponsors/FyraLabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart
                className="text-pink-300 group-hover:animate-[heartbeat_0.4s_cubic-bezier(0,0,0.2,1)_infinite_alternate]"
                style={{
                  width: "1.2em",
                  height: "1.2em",
                  display: "block",
                  position: "absolute",
                  top: "calc(var(--spacing) * -1)",
                  left: "calc(var(--spacing) * -1)",
                  color: "var(--color-pink-300)",
                  transition: "transform 0.4s cubic-bezier(0,0,0.2,1)",
                  rotate: "-30deg",
                  transformOrigin: "center",
                }}
              />
              <GitHub className="size-4" />
              <span>{t("sponsors")}</span>
            </a>
            <a
              className="inline-flex h-9 w-10 items-center justify-center border-y border-border bg-card text-card-foreground transition-colors hover:bg-accent hover:text-red-400"
              href="https://ko-fi.com/fyralabs"
              aria-label="Ko-fi"
              title="Ko-fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <KoFi className="size-5" />
              <span className="sr-only">{t("community.kofi")}</span>
            </a>
            <a
              className="inline-flex h-9 w-10 items-center justify-center rounded-r-md border border-border bg-card text-card-foreground transition-colors hover:bg-accent hover:text-[#f6c915]"
              href="https://liberapay.com/fyra/"
              aria-label="Liberapay"
              title="Liberapay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Liberapay className="size-5" />
              <span className="sr-only">{t("community.liberapay")}</span>
            </a>
          </div>
            <StarLink label={t("star_on_github")} className="w-9 rounded-md px-0 sm:hidden" />
          </div>

          <div className="order-first flex w-full items-center sm:order-none sm:w-auto">
            <StarLink label={t("star_on_github")} className="hidden rounded-l-md sm:inline-flex" />
            <Button
              className="flex-1 sm:flex-none sm:rounded-l-none"
              onClick={async () => {
                await navigator.clipboard.writeText(snippet);
                toast.success(t("copied"));
              }}
            >
              {t("copy")}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
