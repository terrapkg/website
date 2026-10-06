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
import Heart from "~icons/bi/heart-fill";
import KoFi from "~icons/simple-icons/kofi";
import Liberapay from "~icons/simple-icons/liberapay";


const snippet =
  "sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release";

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
          <div className="flex flex-wrap items-center gap-2 md:gap-4 z-10 min-w-0">
            <a
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-gradient-to-br from-pink-500 to-pink-600 px-4 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-pink-600 relative group shrink-0"
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
                  right: "calc(var(--spacing) * -1)",
                  color: "var(--color-pink-300)",
                  transition: "transform 0.4s cubic-bezier(0,0,0.2,1)",
                  rotate: "30deg",
                  transformOrigin: "center",
                }}
              />
              <span>{t("github_sponsors")}</span>
            </a>
            <div className="h-8 w-px bg-gray-700 hidden sm:block" />
            <div className="flex flex-row items-center gap-3 sm:gap-4">
              <a
                className="hover:text-red-400 transition-colors"
                href="https://ko-fi.com/fyralabs"
                aria-label="Ko-fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <KoFi className="size-6" />
                <span className="sr-only">{t("community.kofi")}</span>
              </a>
              <a
                className="hover:text-[#f6c915] transition-colors"
                href="https://liberapay.com/fyra/"
                aria-label="Liberapay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Liberapay className="size-6" />
                <span className="sr-only">{t("community.liberapay")}</span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 ml-auto sm:ml-0">
            <a
              href="https://github.com/terrapkg/packages"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Star on GitHub"
              title="Star on GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-yellow-500/40 bg-yellow-400/10 text-yellow-400 transition-colors hover:bg-yellow-400/20 hover:text-yellow-300"
            >
              <Star className="size-4 fill-current" />
              <span className="sr-only">Star on GitHub</span>
            </a>
            <Button
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
