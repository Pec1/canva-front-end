"use client";
import { FieldError } from "react-hook-form";
import React, { ComponentProps, ForwardRefRenderFunction, InputHTMLAttributes, forwardRef, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ placeholder, name, error = null, type, ...rest }, ref) => {
        const [isFocused, setIsFocused] = useState(false);

        return (
            <div className="relative input-container">
                <input
                    className={`w-[372px] h-[68px] bg-gray-300 text-xl text-[#1c1c1c] border-[3px] rounded-md pl-3 pr-3 focus:outline-none placeholder-black font-bold placeholder-opacity-75 ${
                        error ? 'border-red-500 bg-transparent' : 'focus:border-black focus:bg-transparent border-gray-300'
                    }`}
                    {...rest}
                    placeholder={isFocused ? '' : placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    type={type}
                    name={name}
                    ref={ref}
                />
                <span
                    className={`absolute bg-white p-2 rounded-full top-0 left-3 transform translate-y-[-50%] text-black font-bold transition-all duration-300 pointer-events-none
                        ${isFocused ? 'top-0 text-base opacity-100' : 'top-1/2 opacity-0'} ${error ? 'text-red-500' : ''}`}
                >
                    {placeholder}
                </span>
                {!!error && (
                    <p className="text-red-500">{error.message}!</p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'