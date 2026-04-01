import React from 'react';
import { cn } from '../../utils/cn';

export default function Button({ children, className, variant = 'primary', ...props }) {
    const variants = {
        primary: 'bg-electric-blue text-white border-2 border-white shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
        secondary: 'bg-transparent text-white border-2 border-white shadow-neo hover:bg-white hover:text-black hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]',
        ghost: 'hover:bg-white/10 text-white border-b-2 border-transparent hover:border-electric-blue rounded-none px-0 py-1'
    };

    return (
        <button
            className={cn(
                'px-6 py-3 font-display font-bold uppercase tracking-wider transition-all duration-200 active:scale-95',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
