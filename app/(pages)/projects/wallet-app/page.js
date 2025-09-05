"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export default function WalletAppPage() {
  return (
    <Dialog>
      <DialogTrigger className="btn flex-1 btn-primary capitalize">
        <Eye className="size-5" />
        see more
      </DialogTrigger>
      <DialogContent className="bg-base-100 border-base-content/50">
        <DialogHeader>
          <DialogTitle className="text-primary">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
