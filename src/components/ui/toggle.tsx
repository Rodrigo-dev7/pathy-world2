import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";
import { toggleVariants, type ToggleVariants } from "./toggle-variants";

const Toggle = React.forwardRef<
  HTMLButtonElement,
  { className?: string; variant?: ToggleVariants["variant"]; size?: ToggleVariants["size"] } & Record<string, unknown>
>(({ className, variant, size, ...props }, ref) =>
  React.createElement(TogglePrimitive.Root as React.ElementType, {
    ref,
    className: cn(toggleVariants({ 
      variant: variant as ToggleVariants["variant"], 
      size: size as ToggleVariants["size"], 
      className: className as string 
    })),
    ...props,
  })
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
