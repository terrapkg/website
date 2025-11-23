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

export const InstallDialog = ({ meos }) => {
  return (
    <Dialog>
      <DialogTrigger>{meow}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Install Terra</DialogTitle>
          <DialogDescription>
            Please select your distro. Don't see yours? Make a request here.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Distro" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Fedora</SelectItem>
              <SelectItem value="dark">Enterprise Linux</SelectItem>
              <SelectItem value="um">Ultramarine</SelectItem>
              <SelectItem value="bazzite">Bazzite/ublue</SelectItem>
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
        </div>

        <DialogFooter>
          <Button>Install</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
