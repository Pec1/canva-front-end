"use client";
import React, { ComponentProps, ForwardRefRenderFunction, forwardRef, useState } from 'react';

interface InputProps extends ComponentProps<'input'> {
    text: string
    name: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, text, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="relative input-container">
            <input
                name={name}
                placeholder={isFocused ? '' : text}
                className="w-[372px] h-[68px] bg-gray-300 text-base text-[#1c1c1c] border-[3px] border-gray-300 rounded-md pl-3 pr-3 focus:outline-none focus:border-black focus:bg-transparent focus:text-xl placeholder-black font-bold placeholder-opacity-75"
                ref={ref}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <span
                className={`absolute bg-white p-2 rounded-full top-0 left-3 transform translate-y-[-50%] text-black font-bold transition-all duration-300 pointer-events-none ${isFocused ? 'top-0 opacity-100' : 'top-1/2 opacity-0'}`}
            >
                {text}
            </span>
        </div>
    )
}

export const Input = forwardRef(InputBase);