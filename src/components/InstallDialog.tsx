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

const snippet =
  "dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release";

export const InstallDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="cursor-pointer">
          Install
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install Terra</DialogTitle>
          <DialogDescription>
            Copy the following command and paste it into your terminal to
            install Terra. Practice caution before running any commands on your
            system.
          </DialogDescription>
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
              Star on GitHub
            </a>
          </Button>
          <Button
            onClick={async () => {
              await navigator.clipboard.writeText(snippet);
              toast.success("Copied to clipboard!");
            }}
          >
            Copy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
