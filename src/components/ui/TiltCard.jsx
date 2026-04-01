import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltCard({ children, options = {}, className, ...props }) {
    const tiltRef = useRef(null);

    useEffect(() => {
        const defaultOptions = {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.05,
            ...options
        };

        if (tiltRef.current) {
            VanillaTilt.init(tiltRef.current, defaultOptions);
        }

        return () => {
            if (tiltRef.current?.vanillaTilt) {
                tiltRef.current.vanillaTilt.destroy();
            }
        };
    }, [options]);

    return (
        <div ref={tiltRef} className={className} {...props}>
            {children}
        </div>
    );
}
