import React from 'react';
import { cn } from '../../utils/cn';

export default function Section({ children, id, className, ...props }) {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen w-full px-4 md:px-12 py-20 relative overflow-hidden flex flex-col justify-center",
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
