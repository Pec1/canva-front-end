import React, { ComponentProps, ElementType, useState } from 'react';
import { tv as tailwVa, VariantProps } from 'tailwind-variants'

const button = tailwVa ({
    base: 'flex justify-center items-center rounded-xl transform active:translate-y-05',
    variants: {
        size: {
            default: 'w-[72px] h-[45px]',
            sm: 'w-16 h-10',
            xs: 'w-8 h-8',
        },
        color: {
            primary: 'bg-[#FFFFFF] text-zinc-900',
            second: 'bg-emerald-600 text-zinc-900',
        },
        success: {
            true: '',
        },
    },
    defaultVariants: {
        size: 'default',
        color: 'primary',
        success: false,
    },
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button> & {
    icon?: ElementType,
    text?: string,
    iconSize?: string
}

export default function Button({ size, className, color, icon: Icon, text, iconSize,...props }: ButtonProps) {
    const [success, setSuccess] = useState<boolean>(false);

    const handleClick = () => {
        setSuccess(!success);
    }

    return (
        <button onClick={handleClick} data-success={success} className={button({ size, color, success, className })} {...props}>
            {text ? text : Icon ? <Icon className={iconSize} /> : null}
        </button>
    )
}