import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants, type ToggleVariants } from "@/components/ui/toggle-variants";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  { className?: string; variant?: ToggleVariants["variant"]; size?: ToggleVariants["size"]; children?: React.ReactNode } & Record<string, unknown>
>(({ className, variant, size, children, ...props }, ref) =>
  React.createElement(
    ToggleGroupPrimitive.Root as React.ElementType,
    {
      ref,
      className: cn("flex items-center justify-center gap-1", className as string),
      ...props,
    },
    React.createElement(
      ToggleGroupContext.Provider,
      { value: { variant: variant as ToggleVariants["variant"], size: size as ToggleVariants["size"] } },
      children as React.ReactNode
    )
  )
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  HTMLButtonElement,
  { className?: string; variant?: ToggleVariants["variant"]; size?: ToggleVariants["size"]; children?: React.ReactNode } & Record<string, unknown>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  const Element = ToggleGroupPrimitive.Item as React.ElementType;
  return (
    <Element
      ref={ref}
      className={cn(
        toggleVariants({
          variant: (context.variant || (variant as ToggleVariants["variant"])) as ToggleVariants["variant"],
          size: (context.size || (size as ToggleVariants["size"])) as ToggleVariants["size"],
        } as Parameters<typeof toggleVariants>[0]),
        className as string,
      )}
      {...props}
    >
      {children as React.ReactNode}
    </Element>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
