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

const snippet =
  "dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release";

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
