import React from "react";
import {cva, type VariantProps} from "class-variance-authority";

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    rounded-md gap-2 text-gray-900 font-bold
    `, {
        variants: {
            variant: {
                primary: `bg-yellow 
                    hover:outline-2
                    hover:outline-yellow-light 
                    hover:outline-offset-2`
            },
            size: {
                md: "h-12 py-3 px-20"
            },
            disabled: {
                true: "opacity-30 pointer-events-none"
            }
        },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})


interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
 VariantProps<typeof buttonVariants> {}

export default function Button({
    variant,
    size, 
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return <button className={buttonVariants({variant, size, disabled, className})} 
    {...props}>
        {children}
    </button>
}