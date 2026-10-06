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

        <DialogFooter>
          <div
            class="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center z-10 mt-6"
          >
            <a
              className="flex flex-row gap-2 items-center justify-center px-3 md:px-6 py-2 from-pink-500 to-pink-600 bg-linear-to-br rounded-xl text-gray-50 hover:bg-pink-600 transition-colors w-full md:w-auto text-sm md:text-base relative group"
              href="https://github.com/sponsors/FyraLabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart
                className="heartbeat absolute -right-1 -top-1 text-pink-300 group-hover:animate-[heartbeat_0.4s_cubic-bezier(0,0,0.2,1)_infinite_alternate]"
              />
              <span>{t("github_sponsors")}</span>
            </a>
            <div className="w-0.5 h-full bg-gray-800"></div>
            <div className="flex flex-row gap-4">
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

          <Button variant="link">
            <a
              href="https://github.com/terrapkg/packages"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("star_on_github")}
            </a>
          </Button>
          <Button
            onClick={async () => {
              await navigator.clipboard.writeText(snippet);
              toast.success(t("copied"));
            }}
          >
            {t("copy")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
