
import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'rounded-lg py-2 px-5 font-medium flex items-center gap-2',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
      danger: 'bg-red-300 text-red-950 hover:bg-red-400',
      link: 'bg-transparent text-zinc-300 hover:text-zinc-100'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

// aceita receber qualquer atributo de um button
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={buttonVariants({ variant: variant })}>
      {children}
    </button>
  )
}