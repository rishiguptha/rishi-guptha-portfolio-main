// src/components/ui/dialog.tsx
import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    {/* 1) No <DialogOverlay> here at all. */}
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        // 2) Position the dialog in the center
        "fixed inset-0 z-50 flex items-center justify-center p-4",

        // 3) Optional Radix animations
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

        className
      )}
      {...props}
    >
      {/* 4) The actual dialog box */}
      <div
        className={cn(
          "relative w-full max-w-3xl",
          "bg-background text-foreground shadow-lg rounded-lg p-6 overflow-y-auto",
        )}
        style={{ maxHeight: "80vh" }}
      >
        {children}
        {/* 5) Close button in top-right corner */}
        <DialogPrimitive.Close className="absolute top-4 right-4 p-2">
          <X className="h-4 w-4" />
        </DialogPrimitive.Close>
      </div>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

// Optional headings, footers, etc.
const DialogHeader = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left" {...props} />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...props} />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>((props, ref) => (
  <DialogPrimitive.Title ref={ref} className="text-lg font-semibold" {...props} />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>((props, ref) => (
  <DialogPrimitive.Description ref={ref} className="text-sm text-muted-foreground" {...props} />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}