import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

export { default as Button } from "./Button.vue"

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-branding border rounded-full text-primary-foreground",
        default_pop:
          "bg-branding border rounded-full text-primary-foreground shadow-pop-shadow hover:shadow-pop-hover focus-visible:shadow-pop-focus",
          
        secondary:
          "bg-secondary border rounded-full text-secondary-foreground hover:bg-secondary-hover",
        secondary_pop:
          "bg-secondary border rounded-full text-secondary-foreground shadow-pop-shadow hover:shadow-pop-hover focus-visible:shadow-pop-focus",
        
        link: "rounded-full text-secondary-foreground border border-transparent hover:border-border",

        menu: "bg-none border border-transparent rounded text-secondary-foreground hover:border-border",

        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        ghost:
          "rounded-full text-secondary-foreground border border-transparent",
      },
      size: {
        "default": "leading-[120%] px-4 py-3 has-[>svg]:px-4",
        "sm": "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        "lg": "h-10 rounded-md px-6 has-[>svg]:px-4",
        "icon": "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
export type ButtonVariants = VariantProps<typeof buttonVariants>
